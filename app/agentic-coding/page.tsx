import { Bot } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getConceptsByTopic } from "@/lib/content/content-query";

const strategies = [
  "Planning before coding",
  "Writing constraints",
  "Branches and checkpoints",
  "Reviewing generated code",
  "Testing agent-written code",
  "Security considerations"
];

export default function AgenticCodingPage() {
  return (
    <AppShell>
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Domain / Agentic Coding
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">AGENTIC_CODING_PROTOCOLS</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Use AI coding agents as constrained collaborators: plan the task, isolate risk, review output, and verify behavior.
        </p>
      </header>
      <div className="mb-10 grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
        {strategies.map((strategy, index) => (
          <GlassPanel key={strategy} className="p-gutter">
            <Bot className="mb-4 h-7 w-7 text-primary-fixed" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-outline">
              Protocol {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-primary">{strategy}</h2>
          </GlassPanel>
        ))}
      </div>
      <TopicGrid concepts={getConceptsByTopic("agentic-coding")} />
    </AppShell>
  );
}
