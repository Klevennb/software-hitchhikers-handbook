import { clsx } from "clsx";

const styles = {
  BEGINNER: "border-tertiary-fixed-dim/30 text-tertiary-fixed-dim bg-tertiary-fixed-dim/5",
  INTERMEDIATE: "border-primary-fixed-dim/30 text-primary-fixed-dim bg-primary-fixed-dim/5",
  ADVANCED: "border-secondary/30 text-secondary bg-secondary/5",
  METHOD: "border-primary-container/30 text-primary-container bg-primary-container/5",
  FUNCTION: "border-primary-container/30 text-primary-container bg-primary-container/5",
  PATTERN: "border-secondary/30 text-secondary bg-secondary/5",
  PRINCIPLE: "border-tertiary-fixed-dim/30 text-tertiary-fixed-dim bg-tertiary-fixed-dim/5",
  TOOL: "border-outline-variant text-on-surface-variant bg-surface-container-high/40",
  WORKFLOW: "border-primary-fixed-dim/30 text-primary-fixed-dim bg-primary-fixed-dim/5",
  STRATEGY: "border-secondary/30 text-secondary bg-secondary/5"
};

export function StatusBadge({ label }: { label: keyof typeof styles | string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded border px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-widest",
        styles[label as keyof typeof styles] ?? styles.TOOL
      )}
    >
      {label.replace("_", " ")}
    </span>
  );
}
