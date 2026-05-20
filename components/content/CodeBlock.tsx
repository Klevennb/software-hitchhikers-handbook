"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({
  title,
  code,
  language = "ts",
  output
}: {
  title: string;
  code: string;
  language?: string;
  output?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-outline-variant/25 bg-black">
      <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-highest px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-error/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary-fixed-dim/60" />
          <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
            {title}.{language}
          </span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-primary-container"
        >
          {copied ? <Check className="h-4 w-4 text-tertiary-fixed-dim" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-6 text-primary-fixed-dim">
        <code>{code}</code>
      </pre>
      {output ? (
        <div className="border-t border-outline-variant/20 px-5 py-3 font-mono text-xs text-tertiary-fixed-dim">
          &gt; {output}
        </div>
      ) : null}
    </div>
  );
}
