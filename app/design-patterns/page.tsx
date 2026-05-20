import { Network } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";

const stagedPatterns = ["Strategy", "Observer", "Adapter", "Repository", "Dependency Injection"];

export default function DesignPatternsPage() {
  return (
    <AppShell>
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Domain / Design Patterns
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">DOMAIN: DESIGN_PATTERNS</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Study common software blueprints by intent, tradeoff, examples, and when not to use them.
        </p>
      </header>
      <GlassPanel className="mb-10 overflow-hidden p-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded border border-primary-container/30 bg-primary-container/10">
            <Network className="h-12 w-12 text-primary-fixed" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-fixed-dim">Pattern Of The Day</p>
            <h2 className="mt-2 text-3xl font-bold text-primary">Factory Pattern</h2>
            <p className="mt-2 text-on-surface-variant">
              Start with object creation boundaries before expanding into structural and behavioral patterns.
            </p>
          </div>
        </div>
      </GlassPanel>
      <TopicGrid concepts={getConceptsByTopic("design-patterns")} />
      <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        {stagedPatterns.map((pattern) => (
          <GlassPanel key={pattern} className="p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline">Staged Node</p>
            <h3 className="mt-1 font-semibold text-primary">{pattern}</h3>
          </GlassPanel>
        ))}
      </div>
    </AppShell>
  );
}
