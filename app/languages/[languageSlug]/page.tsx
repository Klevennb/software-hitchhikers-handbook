import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicGrid } from "@/components/library/TopicGrid";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getAllLanguages, getConceptsByLanguage, getLanguageBySlug } from "@/lib/content/content-query";

export function generateStaticParams() {
  return getAllLanguages().map((language) => ({ languageSlug: language.slug }));
}

export default async function LanguagePage({ params }: { params: Promise<{ languageSlug: string }> }) {
  const { languageSlug } = await params;
  const language = getLanguageBySlug(languageSlug);
  if (!language) notFound();

  const concepts = getConceptsByLanguage(language.slug);
  const categories = Array.from(new Set(concepts.map((concept) => concept.category)));

  return (
    <AppShell>
      <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
            System / Language / {language.name}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">
            LANGUAGE_INDEX: {language.name.toUpperCase()}
          </h1>
          <p className="mt-4 max-w-2xl text-on-surface-variant">{language.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <GlassPanel className="px-6 py-4 text-center">
            <p className="font-mono text-2xl text-primary-fixed">{concepts.length}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Concepts</p>
          </GlassPanel>
          <GlassPanel className="px-6 py-4 text-center">
            <p className="font-mono text-2xl text-tertiary-fixed-dim">{categories.length}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Categories</p>
          </GlassPanel>
        </div>
      </header>
      {concepts.length ? (
        <div className="space-y-10">
          {categories.map((category) => (
            <section key={category}>
              <div className="mb-5 flex items-center gap-4 border-b border-outline-variant/20 pb-2">
                <h2 className="text-2xl font-semibold text-primary">{category.toUpperCase().replaceAll(" ", "_")}</h2>
                <span className="ml-auto font-mono text-xs text-on-surface-variant/50">
                  {concepts.filter((concept) => concept.category === category).length}_NODES
                </span>
              </div>
              <TopicGrid concepts={concepts.filter((concept) => concept.category === category)} />
            </section>
          ))}
        </div>
      ) : (
        <GlassPanel className="p-8 text-on-surface-variant">
          This language track is staged for future seed content.
        </GlassPanel>
      )}
    </AppShell>
  );
}
