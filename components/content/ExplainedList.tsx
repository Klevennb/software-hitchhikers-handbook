"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ExplainedListItem } from "@/lib/content/content-types";

export function ExplainedList({ items }: { items: ExplainedListItem[] }) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <div key={item.statement} className="rounded border border-outline-variant/25 bg-surface-container-low/45">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-start gap-3 px-4 py-3 text-left text-on-surface-variant transition hover:text-primary"
              aria-expanded={isOpen}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary-container" />
              <span className="flex-1">{item.statement}</span>
              <span className="flex shrink-0 items-center text-primary-fixed-dim">
                <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-outline-variant/20 px-4 py-3 pl-9 text-sm leading-6 text-on-surface-variant/85">
                {item.why}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
