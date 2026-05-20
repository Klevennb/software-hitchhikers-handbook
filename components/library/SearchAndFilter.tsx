"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Concept } from "@/lib/content/content-types";
import { FilterChip } from "./FilterChip";
import { TopicGrid } from "./TopicGrid";

export function SearchAndFilter({ concepts }: { concepts: Concept[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const categories = ["All", ...Array.from(new Set(concepts.map((concept) => concept.category)))];
  const difficulties = ["All", "BEGINNER", "INTERMEDIATE", "ADVANCED"];

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();

    return concepts.filter((concept) => {
      const matchesQuery =
        !normalized ||
        `${concept.title} ${concept.summary} ${concept.category}`.toLowerCase().includes(normalized);
      const matchesCategory = category === "All" || concept.category === category;
      const matchesDifficulty = difficulty === "All" || concept.difficulty === difficulty;

      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [category, concepts, difficulty, query]);

  return (
    <div className="space-y-gutter">
      <div className="glass-panel rounded-lg p-4">
        <div className="flex items-center gap-3 border-b border-outline-variant/35 pb-3">
          <Search className="h-5 w-5 text-primary-fixed-dim" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="QUERY_TOPICS..."
            className="w-full bg-transparent font-mono text-sm uppercase tracking-widest text-on-surface outline-none placeholder:text-outline"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((item) => (
            <FilterChip key={item} label={item} active={category === item} onClick={() => setCategory(item)} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {difficulties.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={difficulty === item}
              onClick={() => setDifficulty(item)}
            />
          ))}
        </div>
      </div>
      <TopicGrid concepts={filtered} />
    </div>
  );
}
