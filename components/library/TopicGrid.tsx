import { TopicCard } from "@/components/content/TopicCard";
import type { Concept } from "@/lib/content/content-types";
import { routes } from "@/lib/routes";

export function TopicGrid({ concepts }: { concepts: Concept[] }) {
  if (concepts.length === 0) {
    return (
      <div className="glass-panel rounded-lg p-8 text-center text-on-surface-variant">
        No concepts match the current filters.
      </div>
    );
  }

  return (
    <div className="grid gap-gutter md:grid-cols-2 xl:grid-cols-3">
      {concepts.map((concept) => (
        <TopicCard
          key={concept.slug}
          href={routes.concept(concept.slug)}
          title={concept.title}
          description={concept.summary}
          eyebrow={concept.category}
          difficulty={concept.difficulty}
          icon={concept.languageSlug ? "Braces" : concept.topicSlug === "testing" ? "BadgeCheck" : "Network"}
        />
      ))}
    </div>
  );
}
