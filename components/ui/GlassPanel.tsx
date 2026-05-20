import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type GlassPanelProps = ComponentPropsWithoutRef<"div">;

export function GlassPanel({ className, children, ...props }: GlassPanelProps) {
  return (
    <div className={clsx("glass-panel rounded-lg", className)} {...props}>
      {children}
    </div>
  );
}
