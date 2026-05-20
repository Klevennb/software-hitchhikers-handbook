import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { getAllConcepts } from "@/lib/content/content-query";

export default function QuizzesPage() {
  const concepts = getAllConcepts().filter((concept) => concept.quizQuestions.length > 0);

  return (
    <AppShell>
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Study / Quizzes
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">QUIZ_LAUNCHER</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Run multiple-choice checks by concept. Short-answer grading is intentionally deferred until the quiz engine expands.
        </p>
      </header>
      <TopicGrid concepts={concepts} />
    </AppShell>
  );
}
