import { PrismaClient } from "@prisma/client";
import { concepts, languages, topics } from "./seed-data.mjs";

const prisma = new PrismaClient();

async function main() {
  for (const language of languages) {
    await prisma.language.upsert({
      where: { slug: language.slug },
      update: language,
      create: language
    });
  }

  for (const topic of topics) {
    await prisma.topic.upsert({
      where: { slug: topic.slug },
      update: topic,
      create: topic
    });
  }

  for (const concept of concepts) {
    const language = concept.languageSlug
      ? await prisma.language.findUnique({ where: { slug: concept.languageSlug } })
      : null;
    const topic = await prisma.topic.findUniqueOrThrow({ where: { slug: concept.topicSlug } });

    await prisma.concept.upsert({
      where: { slug: concept.slug },
      update: {
        title: concept.title,
        subtitle: concept.subtitle,
        summary: concept.summary,
        difficulty: concept.difficulty,
        type: concept.type,
        sortOrder: concept.sortOrder,
        languageId: language?.id,
        topicId: topic.id
      },
      create: {
        slug: concept.slug,
        title: concept.title,
        subtitle: concept.subtitle,
        summary: concept.summary,
        difficulty: concept.difficulty,
        type: concept.type,
        sortOrder: concept.sortOrder,
        languageId: language?.id,
        topicId: topic.id
      }
    });

    const savedConcept = await prisma.concept.findUniqueOrThrow({ where: { slug: concept.slug } });

    await prisma.conceptSection.deleteMany({ where: { conceptId: savedConcept.id } });
    await prisma.codeExample.deleteMany({ where: { conceptId: savedConcept.id } });
    await prisma.flashcard.deleteMany({ where: { conceptId: savedConcept.id } });
    await prisma.quizQuestion.deleteMany({ where: { conceptId: savedConcept.id } });

    await prisma.conceptSection.createMany({
      data: concept.sections.map((section, index) => ({
        conceptId: savedConcept.id,
        type: section.type,
        title: section.title,
        body: section.body,
        sortOrder: index
      }))
    });

    await prisma.codeExample.createMany({
      data: concept.codeExamples.map((example, index) => ({
        conceptId: savedConcept.id,
        title: example.title,
        description: example.description,
        language: example.language,
        code: example.code,
        output: example.output,
        sortOrder: index
      }))
    });

    await prisma.flashcard.createMany({
      data: concept.flashcards.map((flashcard, index) => ({
        conceptId: savedConcept.id,
        front: flashcard.front,
        back: flashcard.back,
        explanation: flashcard.explanation,
        difficulty: flashcard.difficulty,
        sortOrder: index
      }))
    });

    for (const [questionIndex, question] of concept.quizQuestions.entries()) {
      const createdQuestion = await prisma.quizQuestion.create({
        data: {
          conceptId: savedConcept.id,
          prompt: question.prompt,
          type: question.type,
          explanation: question.explanation,
          difficulty: question.difficulty,
          sortOrder: questionIndex
        }
      });

      await prisma.quizAnswer.createMany({
        data: question.answers.map((answer, answerIndex) => ({
          questionId: createdQuestion.id,
          body: answer.body,
          isCorrect: answer.isCorrect,
          sortOrder: answerIndex
        }))
      });
    }
  }

  await prisma.conceptRelation.deleteMany();

  for (const concept of concepts) {
    const fromConcept = await prisma.concept.findUniqueOrThrow({ where: { slug: concept.slug } });
    for (const relatedSlug of concept.relatedConceptSlugs) {
      const toConcept = await prisma.concept.findUnique({ where: { slug: relatedSlug } });
      if (!toConcept) continue;

      await prisma.conceptRelation.upsert({
        where: {
          fromConceptId_toConceptId: {
            fromConceptId: fromConcept.id,
            toConceptId: toConcept.id
          }
        },
        update: {},
        create: {
          fromConceptId: fromConcept.id,
          toConceptId: toConcept.id,
          label: "Related"
        }
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
