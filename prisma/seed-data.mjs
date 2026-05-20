export const languages = [
  {
    slug: "javascript",
    name: "JavaScript",
    description: "Core browser and Node.js language concepts.",
    icon: "Braces",
    sortOrder: 1
  }
];

export const topics = [
  {
    slug: "javascript",
    title: "JavaScript",
    description: "Language fundamentals, array/object methods, async flow, and browser APIs.",
    type: "LANGUAGE",
    difficulty: "BEGINNER",
    category: "Languages",
    icon: "Braces",
    sortOrder: 1
  },
  {
    slug: "testing",
    title: "Testing",
    description: "Testing principles and tooling.",
    type: "TESTING",
    difficulty: "INTERMEDIATE",
    category: "Engineering Practices",
    icon: "BadgeCheck",
    sortOrder: 2
  },
  {
    slug: "design-patterns",
    title: "Design Patterns",
    description: "Reusable software design blueprints.",
    type: "DESIGN_PATTERN",
    difficulty: "INTERMEDIATE",
    category: "Architecture",
    icon: "Network",
    sortOrder: 3
  },
  {
    slug: "agentic-coding",
    title: "Agentic Coding",
    description: "Strategies for using AI coding agents effectively.",
    type: "AGENTIC_CODING",
    difficulty: "INTERMEDIATE",
    category: "AI Engineering",
    icon: "Bot",
    sortOrder: 4
  }
];

export const concepts = [
  {
    slug: "javascript-map",
    title: "Array.prototype.map()",
    subtitle: "Transform every item into a new array",
    summary: "map creates a new array by calling a callback for every element and collecting each returned value.",
    difficulty: "BEGINNER",
    type: "METHOD",
    languageSlug: "javascript",
    topicSlug: "javascript",
    category: "Array Methods",
    sortOrder: 1,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body: "Think of map as a one-to-one transformation conveyor."
      },
      {
        type: "SYNTAX",
        title: "Syntax",
        body: "const result = array.map((element) => transformedElement);"
      }
    ],
    codeExamples: [
      {
        title: "Double Numbers",
        language: "ts",
        code: "const doubled = [1, 2, 3].map((number) => number * 2);",
        output: "[2, 4, 6]"
      }
    ],
    relatedConceptSlugs: ["javascript-filter", "javascript-reduce"],
    flashcards: [
      {
        front: "What does map return?",
        back: "A new array containing the callback return value for each source element.",
        difficulty: "BEGINNER"
      }
    ],
    quizQuestions: [
      {
        prompt: "Which statement best describes map?",
        type: "MULTIPLE_CHOICE",
        explanation: "map transforms every item and collects the returned values.",
        difficulty: "BEGINNER",
        answers: [
          { body: "It mutates the original array.", isCorrect: false },
          { body: "It creates a new array from callback return values.", isCorrect: true }
        ]
      }
    ]
  }
];
