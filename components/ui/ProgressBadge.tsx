export function ProgressBadge({
  status = "Not Started"
}: {
  status?: "Not Started" | "In Progress" | "Completed";
}) {
  const color =
    status === "Completed"
      ? "bg-tertiary-fixed-dim shadow-green"
      : status === "In Progress"
        ? "bg-primary-fixed-dim shadow-cyan"
        : "bg-outline-variant";

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {status}
    </span>
  );
}
