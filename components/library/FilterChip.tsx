"use client";

import { clsx } from "clsx";

export function FilterChip({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition",
        active
          ? "border-primary-container bg-primary-container text-on-primary-fixed"
          : "border-outline-variant/35 text-on-surface-variant hover:border-primary-fixed/50 hover:text-primary-fixed"
      )}
    >
      {label}
    </button>
  );
}
