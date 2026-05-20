import { notFound } from "next/navigation";
import { FlashcardViewer } from "@/components/study/FlashcardViewer";
import { StudyModeShell } from "@/components/study/StudyModeShell";
import { getAllConcepts, getConceptBySlug } from "@/lib/content/content-query";

export function generateStaticParams() {
  return getAllConcepts().map((concept) => ({ conceptSlug: concept.slug }));
}

export default async function ConceptFlashcardsPage({ params }: { params: Promise<{ conceptSlug: string }> }) {
  const { conceptSlug } = await params;
  const concept = getConceptBySlug(conceptSlug);
  if (!concept) notFound();

  return (
    <StudyModeShell title={`FLASHCARD_MODE: ${concept.title}`} subtitle="// local_session: progress persists after auth phase">
      <FlashcardViewer flashcards={concept.flashcards} />
    </StudyModeShell>
  );
}
