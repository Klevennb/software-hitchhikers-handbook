"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import type { QuizQuestion } from "@/lib/content/content-types";
import { Button } from "@/components/ui/Button";
import { QuizProgress } from "./QuizProgress";

export function QuizCard({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const question = questions[index];

  if (!question) {
    return <div className="glass-panel rounded-lg p-8">No quiz questions are available for this concept.</div>;
  }

  const finished = index >= questions.length;

  if (finished) {
    return (
      <div className="glass-panel w-full max-w-3xl rounded-xl p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary-fixed-dim">Simulation Complete</p>
        <h2 className="mt-3 text-4xl font-bold text-primary">
          {score} / {questions.length}
        </h2>
        <Button
          className="mt-8"
          onClick={() => {
            setIndex(0);
            setSelected(null);
            setAnswered(false);
            setScore(0);
          }}
        >
          <RotateCcw className="h-4 w-4" />
          Restart Quiz
        </Button>
      </div>
    );
  }

  function submit() {
    if (selected === null) return;
    const isCorrect = question.answers[selected]?.isCorrect;
    if (isCorrect) setScore((value) => value + 1);
    setAnswered(true);
  }

  function advance() {
    setIndex((value) => value + 1);
    setSelected(null);
    setAnswered(false);
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-5 flex justify-end">
        <QuizProgress current={index} total={questions.length} score={score} />
      </div>
      <div className="glass-panel rounded-xl p-8 md:p-12">
        <div className="mb-8 flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary-container/60">
            QUESTION_{String(index + 1).padStart(3, "0")}
          </span>
          <span className="rounded-full border border-primary-fixed-dim/30 px-3 py-1 font-mono text-[10px] text-primary-fixed-dim">
            {question.difficulty}
          </span>
        </div>
        <h2 className="text-2xl font-semibold leading-snug text-on-surface md:text-3xl">
          {question.prompt}
        </h2>
        <div className="mt-8 grid gap-3">
          {question.answers.map((answer, answerIndex) => {
            const isSelected = selected === answerIndex;
            const showCorrect = answered && answer.isCorrect;
            const showWrong = answered && isSelected && !answer.isCorrect;

            return (
              <button
                key={answer.body}
                type="button"
                disabled={answered}
                onClick={() => setSelected(answerIndex)}
                className={`rounded border p-4 text-left transition ${
                  showCorrect
                    ? "border-tertiary-fixed-dim bg-tertiary-fixed-dim/10 text-tertiary-fixed"
                    : showWrong
                      ? "border-error bg-error/10 text-error"
                      : isSelected
                        ? "border-primary-container bg-primary-container/10 text-primary"
                        : "border-outline-variant/30 text-on-surface-variant hover:border-primary-fixed/50"
                }`}
              >
                {answer.body}
              </button>
            );
          })}
        </div>
        {answered ? (
          <p className="mt-6 rounded border border-outline-variant/25 bg-black/40 p-4 text-sm text-on-surface-variant">
            {question.explanation}
          </p>
        ) : null}
        <div className="mt-8 flex justify-end">
          {answered ? (
            <Button onClick={advance}>{index === questions.length - 1 ? "Finish" : "Next"}</Button>
          ) : (
            <Button onClick={submit} disabled={selected === null}>
              Submit Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
