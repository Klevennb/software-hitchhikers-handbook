import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { getAllConcepts } from "@/lib/content/content-query";

export default function FlashcardsPage() {
  const concepts = getAllConcepts().filter((concept) => concept.flashcards.length > 0);

  return (
    <AppShell>
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Study / Flashcards
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">FLASHCARD_LAUNCHER</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Pick a concept deck. Authenticated progress persistence is reserved for the progress phase.
        </p>
      </header>
      <TopicGrid concepts={concepts} />
    </AppShell>
  );
}
