import { BadgeCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";

export default function TestingPage() {
  const concepts = getConceptsByTopic("testing");

  return (
    <AppShell>
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          System Segment / Testing
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">TESTING_DOMAIN: INDEX</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Learn where tests create confidence, where they create drag, and how tools like Vitest, Jest, Playwright, Cypress, and Testing Library fit together.
        </p>
      </header>
      <div className="mb-10 grid gap-gutter md:grid-cols-3">
        {["Reliability", "Maintainability", "Regression"].map((tenet, index) => (
          <GlassPanel key={tenet} className="p-gutter">
            <BadgeCheck className="mb-4 h-7 w-7 text-primary-container" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline">SRN-00{index + 1}</p>
            <h2 className="mt-2 text-xl font-semibold text-primary">{tenet}</h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              {tenet === "Reliability"
                ? "Catch behavior drift under known conditions."
                : tenet === "Maintainability"
                  ? "Let engineers change code without guessing what broke."
                  : "Protect working behavior from accidental regressions."}
            </p>
          </GlassPanel>
        ))}
      </div>
      <TopicGrid concepts={concepts} />
    </AppShell>
  );
}
