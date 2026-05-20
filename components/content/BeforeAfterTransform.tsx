import { ArrowRight, FunctionSquare } from "lucide-react";
import type { VisualTransform } from "@/lib/content/content-types";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function BeforeAfterTransform({ transform }: { transform: VisualTransform }) {
  return (
    <GlassPanel className="p-gutter">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-primary-fixed">VISUAL_TRANSFORMATION</h2>
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-primary-fixed-dim shadow-cyan" />
          <span className="h-2 w-2 rounded-full bg-outline-variant" />
          <span className="h-2 w-2 rounded-full bg-outline-variant" />
        </div>
      </div>
      <div className="grid items-center gap-6 rounded-lg border border-outline-variant/15 bg-surface-container-lowest/45 p-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <ArrayColumn label={transform.inputLabel} items={transform.inputItems} />
        <ArrowRight className="mx-auto hidden h-6 w-6 text-primary-fixed-dim md:block" />
        <div className="flex flex-col items-center gap-2 rounded-full border border-primary-fixed/30 bg-primary-container/10 p-5 text-center">
          <FunctionSquare className="h-6 w-6 text-primary-fixed" />
          <code className="font-mono text-xs text-primary-fixed">{transform.operationLabel}</code>
        </div>
        <ArrowRight className="mx-auto hidden h-6 w-6 text-primary-fixed-dim md:block" />
        <ArrayColumn label={transform.outputLabel} items={transform.outputItems} active />
      </div>
    </GlassPanel>
  );
}

function ArrayColumn({
  label,
  items,
  active
}: {
  label: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-outline">{label}</span>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`flex h-14 w-14 items-center justify-center rounded border font-mono text-xl ${
              active
                ? "border-primary-fixed/45 text-primary-fixed shadow-cyan"
                : "border-outline-variant/40 text-on-surface"
            } bg-surface-container/70`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
