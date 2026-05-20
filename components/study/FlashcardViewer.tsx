"use client";

import { ArrowLeft, ArrowRight, Eye, RotateCcw } from "lucide-react";
import { useState } from "react";
import type { Flashcard } from "@/lib/content/content-types";
import { Button } from "@/components/ui/Button";

export function FlashcardViewer({ flashcards }: { flashcards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const card = flashcards[index];

  function next(wasCorrect?: boolean) {
    if (wasCorrect) setCorrect((value) => value + 1);
    setRevealed(false);
    setIndex((value) => Math.min(value + 1, flashcards.length - 1));
  }

  if (!card) {
    return <div className="glass-panel rounded-lg p-8">No flashcards are available for this concept.</div>;
  }

  const finished = index === flashcards.length - 1 && revealed;

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-on-surface-variant">
        <span>
          Card {index + 1} of {flashcards.length}
        </span>
        <span className="text-tertiary-fixed-dim">Correct {correct}</span>
      </div>
      <div className="glass-panel min-h-[360px] rounded-xl p-8 md:p-12">
        <div className="mb-8 flex justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-container/60">
            SERIAL: CARD_{String(index + 1).padStart(3, "0")}
          </span>
          <span className="rounded-full border border-primary-fixed-dim/30 px-3 py-1 font-mono text-[10px] text-primary-fixed-dim">
            {card.difficulty}
          </span>
        </div>
        <div className="flex min-h-40 items-center justify-center text-center">
          <p className="text-2xl font-semibold leading-snug text-on-surface md:text-3xl">
            {revealed ? card.back : card.front}
          </p>
        </div>
        {revealed && card.explanation ? (
          <p className="mt-6 rounded border border-outline-variant/25 bg-black/40 p-4 text-center text-sm text-on-surface-variant">
            {card.explanation}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {!revealed ? (
            <Button onClick={() => setRevealed(true)}>
              <Eye className="h-4 w-4" />
              Reveal Answer
            </Button>
          ) : finished ? (
            <Button
              onClick={() => {
                setIndex(0);
                setCorrect(0);
                setRevealed(false);
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Restart Deck
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => next(false)}>
                <ArrowLeft className="h-4 w-4" />
                Hard
              </Button>
              <Button onClick={() => next(true)}>
                Good
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
