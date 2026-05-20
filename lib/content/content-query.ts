import { concepts, languages, topics } from "./seed-data";

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
