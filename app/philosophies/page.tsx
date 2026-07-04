import { Brain } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";

const focusAreas = ["Correctness", "Simplicity", "State", "Boundaries"];

export default function PhilosophiesPage() {
  const concepts = getConceptsByTopic("philosophies");

  return (
    <AppShell>
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Domain / Philosophies
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">DOMAIN: PHILOSOPHIES</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Engineering philosophies are thinking frameworks. They shape how you reason about systems before you choose a language feature, testing approach, or design pattern.
        </p>
      </header>
      <GlassPanel className="mb-10 overflow-hidden p-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded border border-primary-container/30 bg-primary-container/10">
            <Brain className="h-12 w-12 text-primary-fixed" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-fixed-dim">Mindset Layer</p>
            <h2 className="mt-2 text-3xl font-bold text-primary">How You Think Before You Build</h2>
            <p className="mt-2 text-on-surface-variant">
              Philosophies align with patterns, testing, and languages, but they sit one level earlier: they define the reasoning style you bring to the work.
            </p>
          </div>
        </div>
      </GlassPanel>
      <TopicGrid concepts={concepts} />
      <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => (
          <GlassPanel key={area} className="p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline">Reasoning Axis</p>
            <h3 className="mt-1 font-semibold text-primary">{area}</h3>
          </GlassPanel>
        ))}
      </div>
    </AppShell>
  );
}
