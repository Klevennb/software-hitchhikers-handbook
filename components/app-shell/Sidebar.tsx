import {
  BadgeCheck,
  Bot,
  Braces,
  Home,
  Library,
  Network,
  Rows3,
  Save,
  Trophy
} from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/routes";

const navItems = [
  { href: routes.home, label: "The Nexus", icon: Home },
  { href: routes.explore, label: "Explore", icon: Library },
  { href: routes.languages, label: "Languages", icon: Braces },
  { href: routes.testing, label: "Testing", icon: BadgeCheck },
  { href: routes.designPatterns, label: "Patterns", icon: Network },
  { href: routes.agenticCoding, label: "Agents", icon: Bot },
  { href: routes.flashcards, label: "Flashcards", icon: Rows3 },
  { href: routes.quizzes, label: "Quizzes", icon: Trophy }
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-64px)] w-64 flex-col justify-between border-r border-outline-variant/20 bg-surface-container-lowest/80 py-gutter backdrop-blur-2xl md:flex">
      <div>
        <div className="mb-8 px-gutter">
          <p className="font-mono text-sm text-primary">NODE_734</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/60">
            Study Session Ready
          </p>
        </div>
        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-on-surface-variant transition hover:bg-surface-variant/30 hover:text-primary-fixed"
            >
              <item.icon className="h-5 w-5" />
              <span className="group-hover:before:content-['['] group-hover:after:content-[']']">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <Link
        href={routes.saved}
        className="mx-4 flex items-center gap-3 rounded border border-outline-variant/20 px-3 py-3 font-mono text-xs uppercase tracking-widest text-on-surface-variant transition hover:border-primary-fixed/40 hover:text-primary-fixed"
      >
        <Save className="h-5 w-5" />
        Saved Queue
      </Link>
    </aside>
  );
}
