import Link from "next/link";
import { getRelatedConcepts } from "@/lib/content/content-query";
import { routes } from "@/lib/routes";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function RelatedConcepts({ slugs }: { slugs: string[] }) {
  const related = getRelatedConcepts(slugs);

  if (related.length === 0) return null;

  return (
    <GlassPanel className="p-gutter">
      <h2 className="mb-4 text-2xl font-semibold text-primary-fixed">Related Concepts</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {related.map((concept) => (
          <Link
            key={concept.slug}
            href={routes.concept(concept.slug)}
            className="rounded border border-outline-variant/25 bg-surface-container-low/60 p-4 transition hover:border-primary-fixed/45"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary-fixed-dim">
              {concept.category}
            </p>
            <h3 className="mt-1 font-semibold text-primary">{concept.title}</h3>
            <p className="mt-2 text-sm text-on-surface-variant">{concept.summary}</p>
          </Link>
        ))}
      </div>
    </GlassPanel>
  );
}
