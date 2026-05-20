import { ArrowRight, BadgeCheck, Bot, Braces, Network, Rows3, Search } from "lucide-react";
import { AppShell } from "@/components/app-shell/AppShell";
import { TopicCard } from "@/components/content/TopicCard";
import { ButtonLink } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { getAllTopics, getConceptsByLanguage } from "@/lib/content/content-query";
import { routes } from "@/lib/routes";

export default function HomePage() {
  const topics = getAllTopics();
  const recent = getConceptsByLanguage("javascript").slice(0, 3);

  return (
    <AppShell>
      <section className="relative mb-12 overflow-hidden rounded-xl border border-outline-variant/30 bg-black p-8 md:p-12">
        <div className="absolute right-4 top-4 hidden font-mono text-[10px] uppercase leading-5 text-on-surface-variant/25 md:block">
          STATUS: SYST_OPERATIONAL
          <br />
          INDEX: CORE_DATA_HUB
          <br />
          MODE: STUDY_READY
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-2 font-mono text-sm text-primary-fixed">
            <span className="opacity-50">&gt;</span>
            Initialize_Guide v1.0
            <span className="h-5 w-2 animate-pulse bg-primary-container" />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-primary md:text-6xl">
            Navigate the digital architecture of modern software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
            Explore programming languages, engineering patterns, testing strategy, and
            agentic coding practices as connected concepts you can read, transform,
            quiz, and review.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={routes.explore}>
              <Search className="h-4 w-4" />
              Begin Query
            </ButtonLink>
            <ButtonLink href={routes.language("javascript")} variant="secondary">
              <Braces className="h-4 w-4" />
              JavaScript Index
            </ButtonLink>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary-fixed/5 blur-[120px]" />
      </section>

      <section className="mb-12">
        <div className="mb-6 border-l-4 border-primary-fixed pl-4">
          <h2 className="text-2xl font-semibold text-primary">CORE_DOMAINS</h2>
          <p className="nav-label text-on-surface-variant">Select Module To Load</p>
        </div>
        <div className="grid gap-gutter md:grid-cols-2 xl:grid-cols-4">
          {topics.map((topic) => (
            <TopicCard
              key={topic.slug}
              href={
                topic.slug === "javascript"
                  ? routes.language("javascript")
                  : topic.slug === "testing"
                    ? routes.testing
                    : topic.slug === "design-patterns"
                      ? routes.designPatterns
                      : routes.agenticCoding
              }
              title={topic.title}
              description={topic.description}
              eyebrow={`SN: ${topic.sortOrder.toString().padStart(3, "0")}`}
              icon={topic.icon}
              difficulty={topic.difficulty}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center gap-4">
          <Rows3 className="h-5 w-5 text-primary-fixed" />
          <h2 className="text-2xl font-semibold text-primary">RECENT_ARCHIVES</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/50 to-transparent" />
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {recent.map((concept) => (
            <GlassPanel key={concept.slug} className="group p-4">
              <a href={routes.concept(concept.slug)} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-primary-container/20 bg-primary-container/10">
                  <Braces className="h-7 w-7 text-primary-fixed" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary-fixed-dim">
                    Languages / JavaScript
                  </p>
                  <h3 className="truncate text-lg font-semibold text-primary group-hover:text-primary-fixed">
                    {concept.title}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 text-on-surface-variant/50" />
              </a>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-gutter md:grid-cols-3">
        <GlassPanel className="p-gutter">
          <BadgeCheck className="mb-4 h-8 w-8 text-tertiary-fixed-dim" />
          <h3 className="text-xl font-semibold text-primary">Testing Concepts</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Learn what to test, what to avoid over-testing, and how tool choices affect confidence.
          </p>
        </GlassPanel>
        <GlassPanel className="p-gutter">
          <Network className="mb-4 h-8 w-8 text-secondary" />
          <h3 className="text-xl font-semibold text-primary">Design Patterns</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Study reusable architecture moves without turning patterns into ceremony.
          </p>
        </GlassPanel>
        <GlassPanel className="p-gutter">
          <Bot className="mb-4 h-8 w-8 text-primary-fixed-dim" />
          <h3 className="text-xl font-semibold text-primary">Agentic Coding</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Use agents with planning, constraints, code review, and test-backed confidence.
          </p>
        </GlassPanel>
      </section>
    </AppShell>
  );
}
