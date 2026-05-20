import type { ConceptSection } from "@/lib/content/content-types";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ExplainedList } from "./ExplainedList";

export function ConceptSectionRenderer({ sections }: { sections: ConceptSection[] }) {
  return (
    <div className="grid gap-gutter">
      {sections.map((section, index) => (
        <GlassPanel key={`${section.title}-${index}`} className="p-gutter">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 className="text-2xl font-semibold text-primary-fixed">{section.title}</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
              {String(index + 1).padStart(2, "0")} // {section.type}
            </span>
          </div>
          {Array.isArray(section.body) && section.body.every(isExplainedListItem) ? (
            <ExplainedList items={section.body} />
          ) : Array.isArray(section.body) ? (
            <ul className="space-y-3 text-on-surface-variant">
              {section.body.map((item) => (
                <li key={String(item)} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                  <span>{String(item)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-on-surface-variant">{section.body}</p>
          )}
        </GlassPanel>
      ))}
    </div>
  );
}

function isExplainedListItem(item: unknown): item is { statement: string; why: string } {
  return (
    typeof item === "object" &&
    item !== null &&
    "statement" in item &&
    "why" in item &&
    typeof (item as { statement?: unknown }).statement === "string" &&
    typeof (item as { why?: unknown }).why === "string"
  );
}
