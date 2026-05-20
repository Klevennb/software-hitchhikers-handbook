import { notFound } from "next/navigation";
import { QuizCard } from "@/components/study/QuizCard";
import { StudyModeShell } from "@/components/study/StudyModeShell";
import { getAllConcepts, getConceptBySlug } from "@/lib/content/content-query";

export function generateStaticParams() {
  return getAllConcepts().map((concept) => ({ conceptSlug: concept.slug }));
}

export default async function ConceptQuizPage({ params }: { params: Promise<{ conceptSlug: string }> }) {
  const { conceptSlug } = await params;
  const concept = getConceptBySlug(conceptSlug);
  if (!concept) notFound();

  return (
    <StudyModeShell title={`TERMINAL_QUIZ: ${concept.title}`} subtitle="// scoring_active: explanations show after answering">
      <QuizCard questions={concept.quizQuestions} />
    </StudyModeShell>
  );
}
