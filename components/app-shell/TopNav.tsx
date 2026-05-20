import { GitBranch, Search, Settings, UserCircle } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function TopNav() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant/20 bg-surface-container/70 px-margin-mobile backdrop-blur-xl md:px-margin-desktop">
      <Link href={routes.home} className="font-mono text-xs font-bold tracking-[0.22em] text-primary-container">
        CYBERSPACE_GUIDE
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link className="nav-label text-on-surface-variant hover:text-primary-fixed" href={routes.explore}>
          Explore
        </Link>
        <Link className="nav-label text-on-surface-variant hover:text-primary-fixed" href={routes.languages}>
          Languages
        </Link>
        <Link className="nav-label text-on-surface-variant hover:text-primary-fixed" href={routes.flashcards}>
          Study
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden items-center border-b border-outline-variant/40 bg-surface-container-highest/30 px-3 py-1.5 lg:flex">
          <Search className="mr-2 h-4 w-4 text-on-surface-variant" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-outline">Query Library</span>
        </div>
        <Settings className="h-5 w-5 text-on-surface-variant" />
        <GitBranch className="h-5 w-5 text-on-surface-variant" />
        <UserCircle className="h-7 w-7 text-primary-fixed" />
      </div>
    </header>
  );
}
