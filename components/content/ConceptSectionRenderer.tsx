import type { ConceptSection } from "@/lib/content/content-types";
import { GlassPanel } from "@/components/ui/GlassPanel";

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
          {Array.isArray(section.body) ? (
            <ul className="space-y-3 text-on-surface-variant">
              {section.body.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary-container" />
                  <span>{item}</span>
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
