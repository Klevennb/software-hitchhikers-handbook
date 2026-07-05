import { ArrowRight, Brain } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { ButtonLink } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";
import { routes } from "@/lib/routes";

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
      <GlassPanel className="mb-10 p-gutter">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-fixed-dim">
              Problem-Solving Strategy
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary">Dynamic Programming</h2>
            <p className="mt-3 leading-7 text-on-surface-variant">
              Dynamic programming solves a large problem by defining smaller subproblems, solving each
              distinct subproblem once, and reusing those results. Look for overlapping subproblems and
              optimal substructure: repeated states whose answers can combine into the final answer.
            </p>
            <div className="mt-6">
              <ButtonLink href={routes.concept("dynamic-programming")}>
                Explore the complete lesson
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:max-w-xl">
            {[
              ["01", "Define the state", "Name exactly what one subproblem answers."],
              ["02", "Write the transition", "Express a state using smaller states."],
              ["03", "Set base cases", "Provide answers that need no smaller result."],
              ["04", "Choose an order", "Use memoization or fill a table bottom-up."]
            ].map(([number, title, description]) => (
              <li key={number} className="rounded border border-outline/15 bg-surface-container/30 p-4">
                <span className="font-mono text-xs text-primary-fixed-dim">{number}</span>
                <h3 className="mt-1 font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-on-surface-variant">{description}</p>
              </li>
            ))}
          </ol>
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
