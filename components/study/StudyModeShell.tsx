import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/lib/routes";

export function StudyModeShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-background bg-cyber-grid px-margin-mobile py-8 md:px-margin-desktop">
      <div className="mb-8 flex items-center justify-between border-b border-outline-variant/25 pb-4">
        <div>
          <h1 className="text-2xl font-semibold text-primary-fixed">{title}</h1>
          <p className="font-mono text-xs text-on-surface-variant">{subtitle}</p>
        </div>
        <Link href={routes.explore} className="font-mono text-xs uppercase tracking-widest text-error">
          Exit
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">{children}</div>
    </main>
  );
}
