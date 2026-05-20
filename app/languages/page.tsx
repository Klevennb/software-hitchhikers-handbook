import { AppShell } from "@/components/app-shell/AppShell";
import { TopicCard } from "@/components/content/TopicCard";
import { getAllLanguages } from "@/lib/content/content-query";
import { routes } from "@/lib/routes";

export default function LanguagesPage() {
  return (
    <AppShell>
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary-fixed-dim">
          System / Languages
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-primary md:text-5xl">LANGUAGE_INDEX</h1>
        <p className="mt-4 max-w-2xl text-on-surface-variant">
          Browse language-focused modules. JavaScript is seeded first; TypeScript, Python, and SQL are staged as expansion tracks.
        </p>
      </header>
      <div className="grid gap-gutter md:grid-cols-2 xl:grid-cols-4">
        {getAllLanguages().map((language) => (
          <TopicCard
            key={language.slug}
            href={routes.language(language.slug)}
            title={language.name}
            description={language.description}
            eyebrow={`LANG_${language.sortOrder.toString().padStart(3, "0")}`}
            icon={language.icon}
          />
        ))}
      </div>
    </AppShell>
  );
}
