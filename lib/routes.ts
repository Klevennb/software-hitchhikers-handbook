export const routes = {
  home: "/",
  explore: "/explore",
  languages: "/languages",
  testing: "/testing",
  designPatterns: "/design-patterns",
  agenticCoding: "/agentic-coding",
  flashcards: "/flashcards",
  quizzes: "/quizzes",
  saved: "/saved",
  progress: "/progress",
  concept: (slug: string) => `/concepts/${slug}`,
  conceptFlashcards: (slug: string) => `/concepts/${slug}/flashcards`,
  conceptQuiz: (slug: string) => `/concepts/${slug}/quiz`,
  language: (slug: string) => `/languages/${slug}`
};
