import { Brain, Rows3, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Concept } from "@/lib/content/content-types";
import { routes } from "@/lib/routes";

export function ConceptHeader({ concept }: { concept: Concept }) {
  return (
    <header className="mb-10">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary-fixed-dim">
        <Brain className="h-4 w-4" />
        {concept.topicSlug} / {concept.category}
      </div>
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            {concept.title}
          </h1>
          {concept.subtitle ? (
            <p className="mt-4 max-w-2xl text-lg text-on-surface-variant">{concept.subtitle}</p>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge label={concept.difficulty} />
            <StatusBadge label={concept.type} />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={routes.conceptFlashcards(concept.slug)} variant="secondary">
            <Rows3 className="h-4 w-4" />
            Flashcards
          </ButtonLink>
          <ButtonLink href={routes.conceptQuiz(concept.slug)}>
            <Trophy className="h-4 w-4" />
            Quiz
          </ButtonLink>
        </div>
      </div>
      <div className="mt-8 h-px bg-gradient-to-r from-primary-container/50 to-transparent" />
    </header>
  );
}
