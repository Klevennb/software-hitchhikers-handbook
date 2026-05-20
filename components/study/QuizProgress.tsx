export function QuizProgress({
  current,
  total,
  score
}: {
  current: number;
  total: number;
  score: number;
}) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-on-surface-variant">
      <span>
        Question {Math.min(current + 1, total)} of {total}
      </span>
      <span className="text-primary-fixed">Score {score}</span>
      <span className="h-2 w-24 overflow-hidden rounded bg-surface-container-high">
        <span className="block h-full bg-primary-container" style={{ width: `${percent}%` }} />
      </span>
    </div>
  );
}
