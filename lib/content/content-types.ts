export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type TopicType =
  | "LANGUAGE"
  | "TESTING"
  | "DESIGN_PATTERN"
  | "AGENTIC_CODING"
  | "SYSTEM_DESIGN"
  | "GENERAL";
export type ConceptType =
  | "METHOD"
  | "FUNCTION"
  | "PATTERN"
  | "PRINCIPLE"
  | "TOOL"
  | "WORKFLOW"
  | "STRATEGY";
export type SectionType =
  | "SUMMARY"
  | "MENTAL_MODEL"
  | "SYNTAX"
  | "PRACTICAL_EXAMPLES"
  | "COMMON_MISTAKES"
  | "WHEN_TO_USE"
  | "WHEN_NOT_TO_USE"
  | "VISUAL_TRANSFORM"
  | "RELATED"
  | "CUSTOM";

export type ConceptSection = {
  type: SectionType;
  title: string;
  body: string | string[];
};

export type CodeExample = {
  title: string;
  description?: string;
  language: string;
  code: string;
  output?: string;
};

export type VisualTransform = {
  inputLabel: string;
  inputItems: string[];
  operationLabel: string;
  outputLabel: string;
  outputItems: string[];
};

export type Flashcard = {
  front: string;
  back: string;
  explanation?: string;
  difficulty: Difficulty;
};

export type QuizAnswer = {
  body: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  prompt: string;
  type: "MULTIPLE_CHOICE" | "SHORT_ANSWER";
  explanation: string;
  difficulty: Difficulty;
  answers: QuizAnswer[];
};

export type Language = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  sortOrder: number;
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
  type: TopicType;
  difficulty: Difficulty;
  category: string;
  icon: string;
  sortOrder: number;
};

export type Concept = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  difficulty: Difficulty;
  type: ConceptType;
  languageSlug?: string;
  topicSlug: string;
  category: string;
  sortOrder: number;
  sections: ConceptSection[];
  codeExamples: CodeExample[];
  visualTransform?: VisualTransform;
  relatedConceptSlugs: string[];
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
};
