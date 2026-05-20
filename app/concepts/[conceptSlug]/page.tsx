import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell/AppShell";
import { BeforeAfterTransform } from "@/components/content/BeforeAfterTransform";
import { CodeBlock } from "@/components/content/CodeBlock";
import { ConceptHeader } from "@/components/content/ConceptHeader";
import { ConceptSectionRenderer } from "@/components/content/ConceptSectionRenderer";
import { RelatedConcepts } from "@/components/content/RelatedConcepts";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getAllConcepts, getConceptBySlug } from "@/lib/content/content-query";

export function generateStaticParams() {
  return getAllConcepts().map((concept) => ({ conceptSlug: concept.slug }));
}

export default function ConceptPage({ params }: { params: { conceptSlug: string } }) {
  const concept = getConceptBySlug(params.conceptSlug);
  if (!concept) notFound();

  return (
    <AppShell>
      <ConceptHeader concept={concept} />
      <div className="grid gap-gutter lg:grid-cols-12">
        <div className="space-y-gutter lg:col-span-5">
          <GlassPanel className="p-gutter">
            <div className="mb-4 flex justify-between">
              <h2 className="text-2xl font-semibold text-primary-fixed">WHAT_IT_DOES</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-outline">ID: {concept.slug}</span>
            </div>
            <p className="leading-7 text-on-surface-variant">{concept.summary}</p>
          </GlassPanel>
          <ConceptSectionRenderer sections={concept.sections} />
        </div>
        <div className="space-y-gutter lg:col-span-7">
          {concept.visualTransform ? <BeforeAfterTransform transform={concept.visualTransform} /> : null}
          {concept.codeExamples.map((example) => (
            <CodeBlock
              key={example.title}
              title={example.title}
              code={example.code}
              language={example.language}
              output={example.output}
            />
          ))}
          <RelatedConcepts slugs={concept.relatedConceptSlugs} />
        </div>
      </div>
    </AppShell>
  );
}
