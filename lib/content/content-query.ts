import { concepts, languages, topics } from "./seed-data";
import { archiveOrder } from "./archive-order";

export function getAllConcepts() {
  return [...concepts].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getConceptBySlug(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}

export function getRelatedConcepts(slugs: string[]) {
  return slugs.map(getConceptBySlug).filter((concept): concept is NonNullable<typeof concept> => Boolean(concept));
}

export function getAllTopics() {
  return [...topics].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getTopicBySlug(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getAllLanguages() {
  return [...languages].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getLanguageBySlug(slug: string) {
  return languages.find((language) => language.slug === slug);
}

export function getConceptsByLanguage(languageSlug: string) {
  return getAllConcepts().filter((concept) => concept.languageSlug === languageSlug);
}

export function getConceptsByTopic(topicSlug: string) {
  return getAllConcepts().filter((concept) => concept.topicSlug === topicSlug);
}

export function getRecentArchivedConcepts(limit = 3) {
  validateArchiveOrder();

  const conceptsBySlug = new Map(concepts.map((concept) => [concept.slug, concept]));
  return archiveOrder.slice(0, limit).map((slug) => conceptsBySlug.get(slug)!);
}

function validateArchiveOrder() {
  const conceptSlugs = new Set(concepts.map((concept) => concept.slug));
  const archivedSlugs = new Set<string>();
  const duplicates = new Set<string>();
  const unknown: string[] = [];

  for (const slug of archiveOrder) {
    if (archivedSlugs.has(slug)) duplicates.add(slug);
    archivedSlugs.add(slug);
    if (!conceptSlugs.has(slug)) unknown.push(slug);
  }

  const missing = [...conceptSlugs].filter((slug) => !archivedSlugs.has(slug));
  const errors = [
    missing.length ? `missing: ${missing.join(", ")}` : "",
    duplicates.size ? `duplicate: ${[...duplicates].join(", ")}` : "",
    unknown.length ? `unknown: ${unknown.join(", ")}` : ""
  ].filter(Boolean);

  if (errors.length) {
    throw new Error(`Invalid archive order (${errors.join("; ")}). Update lib/content/archive-order.ts.`);
  }
}

export function getLibraryItems() {
  return getAllConcepts().map((concept) => {
    const topic = getTopicBySlug(concept.topicSlug);
    const language = concept.languageSlug ? getLanguageBySlug(concept.languageSlug) : undefined;

    return {
      ...concept,
      topicTitle: topic?.title ?? concept.topicSlug,
      languageTitle: language?.name
    };
  });
}
