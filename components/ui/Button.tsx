import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-primary-container text-on-primary-fixed hover:bg-primary-fixed shadow-cyan",
  secondary:
    "border border-primary-container/40 bg-primary-container/5 text-primary-container hover:bg-primary-container/10",
  ghost: "text-on-surface-variant hover:bg-surface-variant/35 hover:text-primary-fixed"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition active:scale-[0.98]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonProps["variant"];
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition active:scale-[0.98]",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
