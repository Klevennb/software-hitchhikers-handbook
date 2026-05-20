import { BadgeCheck, Braces, Home, Library, Rows3 } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/routes";

const items = [
  { href: routes.home, label: "Home", icon: Home },
  { href: routes.explore, label: "Explore", icon: Library },
  { href: routes.languages, label: "Code", icon: Braces },
  { href: routes.testing, label: "Tests", icon: BadgeCheck },
  { href: routes.flashcards, label: "Cards", icon: Rows3 }
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant/20 bg-surface/85 backdrop-blur-xl md:hidden">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 text-on-surface-variant">
          <item.icon className="h-5 w-5" />
          <span className="font-mono text-[9px] uppercase tracking-widest">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
