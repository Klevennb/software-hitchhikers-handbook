import { BadgeCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";
import { routes } from "@/lib/routes";

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
      <GlassPanel className="mb-10 overflow-hidden p-gutter">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-primary-container/30 bg-primary-container/10">
              <ShieldCheck className="h-8 w-8 text-primary-fixed" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-fixed-dim">
                PEN_TESTING_PROTOCOL
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-primary">Authorized Security Testing</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-on-surface-variant">
                Learn how scoped penetration tests are planned, which vectors testers commonly evaluate,
                what tools they use professionally, and how teams should respond when a credible issue is found.
              </p>
            </div>
          </div>
          <Link
            href={routes.concept("penetration-testing")}
            className="inline-flex shrink-0 items-center justify-center rounded border border-primary-container/40 bg-primary-container/5 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-container transition hover:bg-primary-container/10"
          >
            Open Section
          </Link>
        </div>
      </GlassPanel>
      <TopicGrid concepts={concepts} />
    </AppShell>
  );
}
