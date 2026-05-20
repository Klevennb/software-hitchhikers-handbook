import {
  BadgeCheck,
  Bot,
  Braces,
  Database,
  FileCode2,
  Network,
  Terminal,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { StatusBadge } from "@/components/ui/StatusBadge";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Bot,
  Braces,
  Database,
  FileCode2,
  Network,
  Terminal
};

export function TopicCard({
  href,
  title,
  description,
  eyebrow,
  icon = "Braces",
  difficulty
}: {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  icon?: string;
  difficulty?: string;
}) {
  const Icon = icons[icon] ?? Braces;

  return (
    <Link href={href} className="group block h-full">
      <GlassPanel className="flex h-full flex-col p-gutter transition duration-300 group-hover:-translate-y-1 group-hover:border-primary-fixed/50 group-hover:shadow-cyan">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded border border-primary-container/25 bg-primary-container/10 text-primary-fixed">
            <Icon className="h-6 w-6" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary/35">{eyebrow}</span>
        </div>
        <h3 className="text-2xl font-semibold text-primary transition group-hover:text-primary-fixed">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-on-surface-variant">{description}</p>
        {difficulty ? (
          <div className="mt-5">
            <StatusBadge label={difficulty} />
          </div>
        ) : null}
      </GlassPanel>
    </Link>
  );
}
