import { AppShell } from "@/components/app-shell/AppShell";
import { SearchAndFilter } from "@/components/library/SearchAndFilter";
import { getAllConcepts } from "@/lib/content/content-query";

export default function ExplorePage() {
  return (
    <AppShell>
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          Library / Search Index
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">EXPLORE_LIBRARY</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Search and filter concepts by category, difficulty, and topic type. Every concept is designed to be readable and studyable.
        </p>
      </header>
      <SearchAndFilter concepts={getAllConcepts()} />
    </AppShell>
  );
}
