import type { Concept, Language, Topic } from "./content-types";

export const languages: Language[] = [
  {
    slug: "javascript",
    name: "JavaScript",
    description:
      "Core browser and Node.js language concepts, with array methods, async patterns, DOM APIs, testing, and practical transformations.",
    icon: "Braces",
    sortOrder: 1
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description:
      "Typed JavaScript concepts, inference, generics, narrowing, utility types, and architecture-friendly APIs.",
    icon: "FileCode2",
    sortOrder: 2
  },
  {
    slug: "python",
    name: "Python",
    description:
      "Readable scripting, data structures, testing, concurrency, packaging, and production patterns.",
    icon: "Terminal",
    sortOrder: 3
  },
  {
    slug: "sql",
    name: "SQL",
    description:
      "Relational querying, joins, indexes, transactions, schema design, and performance fundamentals.",
    icon: "Database",
    sortOrder: 4
  }
];

export const topics: Topic[] = [
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
    description:
      "Principles, test boundaries, unit/integration/E2E tradeoffs, and common tooling.",
    type: "TESTING",
    difficulty: "INTERMEDIATE",
    category: "Engineering Practices",
    icon: "BadgeCheck",
    sortOrder: 2
  },
  {
    slug: "design-patterns",
    title: "Design Patterns",
    description:
      "Reusable software design blueprints including creational, structural, and behavioral patterns.",
    type: "DESIGN_PATTERN",
    difficulty: "INTERMEDIATE",
    category: "Architecture",
    icon: "Network",
    sortOrder: 3
  },
  {
    slug: "agentic-coding",
    title: "Agentic Coding",
    description:
      "Strategies for planning, constraining, reviewing, and testing work produced with AI coding agents.",
    type: "AGENTIC_CODING",
    difficulty: "INTERMEDIATE",
    category: "AI Engineering",
    icon: "Bot",
    sortOrder: 4
  }
];

const jsArraySections = {
  whenUse: [
    "Use it when each input item should produce a corresponding output item.",
    "Prefer it when preserving the original collection matters.",
    "Keep callbacks pure when the transformation is easier to reason about without side effects."
  ],
  commonMistakes: [
    "Using it for side effects instead of using the returned array.",
    "Forgetting to return from a block-bodied callback.",
    "Expecting it to skip items the way filter does."
  ]
};

export const concepts: Concept[] = [
  {
    slug: "javascript-map",
    title: "Array.prototype.map()",
    subtitle: "Transform every item into a new array",
    summary:
      "map creates a new array by calling a callback for every element and collecting each returned value.",
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
        body:
          "Think of map as a one-to-one transformation conveyor. Every input slot reaches the callback, and every callback result becomes the item at the same index in the output array."
      },
      {
        type: "SYNTAX",
        title: "Syntax",
        body: "const result = array.map((element, index, array) => transformedElement);"
      },
      {
        type: "WHEN_TO_USE",
        title: "When To Use It",
        body: jsArraySections.whenUse
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "When Not To Use It",
        body: [
          "Do not use map when you only need side effects.",
          "Do not use map when the output may have fewer items; use filter first or flatMap where appropriate.",
          "Avoid complex callback bodies that hide business logic."
        ]
      },
      {
        type: "COMMON_MISTAKES",
        title: "Common Mistakes",
        body: jsArraySections.commonMistakes
      }
    ],
    codeExamples: [
      {
        title: "Double Numbers",
        description: "A simple one-to-one numeric transformation.",
        language: "ts",
        code: "const numbers = [1, 2, 3];\nconst doubled = numbers.map((number) => number * 2);\n\nconsole.log(doubled);",
        output: "[2, 4, 6]"
      },
      {
        title: "Project Objects",
        description: "Extract a display-ready shape from a list of records.",
        language: "ts",
        code: "const users = [\n  { id: 1, name: \"Ada\", role: \"admin\" },\n  { id: 2, name: \"Lin\", role: \"editor\" }\n];\n\nconst labels = users.map((user) => `${user.name} (${user.role})`);"
      }
    ],
    visualTransform: {
      inputLabel: "Input Array",
      inputItems: ["1", "2", "3"],
      operationLabel: "(x) => x * 2",
      outputLabel: "Output Array",
      outputItems: ["2", "4", "6"]
    },
    relatedConceptSlugs: ["javascript-filter", "javascript-reduce"],
    flashcards: [
      {
        front: "What does map return?",
        back: "A new array containing the callback return value for each source element.",
        explanation: "The output array has the same length as the input array.",
        difficulty: "BEGINNER"
      },
      {
        front: "How is map different from forEach?",
        back: "map returns a new transformed array. forEach returns undefined and is mainly for side effects.",
        difficulty: "BEGINNER"
      }
    ],
    quizQuestions: [
      {
        prompt: "Which statement best describes map?",
        type: "MULTIPLE_CHOICE",
        explanation: "map transforms every item and collects the returned values in a new array.",
        difficulty: "BEGINNER",
        answers: [
          { body: "It mutates the original array in place.", isCorrect: false },
          { body: "It creates a new array from callback return values.", isCorrect: true },
          { body: "It returns only the items that pass a predicate.", isCorrect: false },
          { body: "It reduces an array to a single value.", isCorrect: false }
        ]
      }
    ]
  },
  {
    slug: "javascript-filter",
    title: "Array.prototype.filter()",
    subtitle: "Keep only items that pass a predicate",
    summary:
      "filter creates a new array containing only the elements whose callback returns a truthy value.",
    difficulty: "BEGINNER",
    type: "METHOD",
    languageSlug: "javascript",
    topicSlug: "javascript",
    category: "Array Methods",
    sortOrder: 2,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body:
          "filter is a gate. Each item asks a yes/no question, and only yes answers move into the output array."
      },
      {
        type: "SYNTAX",
        title: "Syntax",
        body: "const result = array.filter((element, index, array) => predicate);"
      },
      {
        type: "COMMON_MISTAKES",
        title: "Common Mistakes",
        body: [
          "Returning the transformed value instead of a boolean-like predicate.",
          "Expecting filter to modify the original array.",
          "Using filter when find is better because only one matching item is needed."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Keep Active Users",
        language: "ts",
        code: "const activeUsers = users.filter((user) => user.active);"
      }
    ],
    visualTransform: {
      inputLabel: "Input Array",
      inputItems: ["1", "2", "3", "4"],
      operationLabel: "(x) => x % 2 === 0",
      outputLabel: "Filtered Array",
      outputItems: ["2", "4"]
    },
    relatedConceptSlugs: ["javascript-map", "javascript-reduce"],
    flashcards: [
      {
        front: "What does filter expect from its callback?",
        back: "A truthy or falsy value that decides whether each item is kept.",
        difficulty: "BEGINNER"
      }
    ],
    quizQuestions: [
      {
        prompt: "What happens when a filter callback returns false?",
        type: "MULTIPLE_CHOICE",
        explanation: "Falsy callback results exclude that item from the returned array.",
        difficulty: "BEGINNER",
        answers: [
          { body: "The item is removed from the original array.", isCorrect: false },
          { body: "The item is excluded from the new array.", isCorrect: true },
          { body: "Iteration stops immediately.", isCorrect: false }
        ]
      }
    ]
  },
  {
    slug: "javascript-reduce",
    title: "Array.prototype.reduce()",
    subtitle: "Accumulate many values into one result",
    summary:
      "reduce walks an array and carries an accumulator through each callback call, producing a final value.",
    difficulty: "INTERMEDIATE",
    type: "METHOD",
    languageSlug: "javascript",
    topicSlug: "javascript",
    category: "Array Methods",
    sortOrder: 3,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body:
          "reduce is a rolling state machine. The accumulator is the current state, and every item can produce the next state."
      },
      {
        type: "SYNTAX",
        title: "Syntax",
        body: "const result = array.reduce((accumulator, element) => nextAccumulator, initialValue);"
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "When Not To Use It",
        body: [
          "Avoid reduce when map, filter, some, every, or a simple loop communicates intent better.",
          "Do not hide large multi-step workflows inside one callback."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Sum Values",
        language: "ts",
        code: "const total = [4, 8, 15].reduce((sum, value) => sum + value, 0);"
      }
    ],
    visualTransform: {
      inputLabel: "Input Array",
      inputItems: ["4", "8", "15"],
      operationLabel: "(sum, x) => sum + x",
      outputLabel: "Final Value",
      outputItems: ["27"]
    },
    relatedConceptSlugs: ["javascript-map", "javascript-filter"],
    flashcards: [
      {
        front: "What is the accumulator in reduce?",
        back: "The value carried from one callback call to the next until the final result is produced.",
        difficulty: "INTERMEDIATE"
      }
    ],
    quizQuestions: [
      {
        prompt: "Why provide an initial value to reduce?",
        type: "MULTIPLE_CHOICE",
        explanation:
          "An explicit initial value makes the accumulator type and empty-array behavior clear.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "It prevents reduce from iterating.", isCorrect: false },
          { body: "It makes empty arrays and accumulator type safer.", isCorrect: true },
          { body: "It mutates the first array item.", isCorrect: false }
        ]
      }
    ]
  },
  {
    slug: "javascript-async-await",
    title: "async / await",
    subtitle: "Write Promise-based async flow in sequential form",
    summary:
      "async functions return Promises, and await pauses inside that function until a Promise settles.",
    difficulty: "INTERMEDIATE",
    type: "FUNCTION",
    languageSlug: "javascript",
    topicSlug: "javascript",
    category: "Async Patterns",
    sortOrder: 4,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body:
          "async/await is syntax over Promises. It changes how asynchronous code reads, not the underlying concurrency model."
      },
      {
        type: "COMMON_MISTAKES",
        title: "Common Mistakes",
        body: [
          "Awaiting independent requests one at a time instead of using Promise.all.",
          "Forgetting try/catch around awaited failures.",
          "Assuming await blocks the entire JavaScript runtime."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Fetch JSON",
        language: "ts",
        code: "async function loadUser(id: string) {\n  const response = await fetch(`/api/users/${id}`);\n  if (!response.ok) throw new Error(\"User request failed\");\n  return response.json();\n}"
      }
    ],
    relatedConceptSlugs: ["javascript-promises"],
    flashcards: [
      {
        front: "What does an async function always return?",
        back: "A Promise, even when it returns a plain value.",
        difficulty: "INTERMEDIATE"
      }
    ],
    quizQuestions: [
      {
        prompt: "What is await waiting for?",
        type: "MULTIPLE_CHOICE",
        explanation: "await unwraps a settled Promise value or throws its rejection.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "A Promise to settle.", isCorrect: true },
          { body: "The call stack to become empty forever.", isCorrect: false },
          { body: "Only network requests.", isCorrect: false }
        ]
      }
    ]
  },
  {
    slug: "javascript-promises",
    title: "Promises",
    subtitle: "Represent eventual success or failure",
    summary:
      "A Promise is an object representing a future value that may fulfill or reject.",
    difficulty: "INTERMEDIATE",
    type: "PRINCIPLE",
    languageSlug: "javascript",
    topicSlug: "javascript",
    category: "Async Patterns",
    sortOrder: 5,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body:
          "A Promise is a receipt for work already scheduled. Handlers attach reactions to fulfillment or rejection."
      },
      {
        type: "PRACTICAL_EXAMPLES",
        title: "Practical Examples",
        body: [
          "Use Promise.all for independent async work that can run together.",
          "Use Promise.allSettled when every result matters even if some fail.",
          "Use Promise.race for timeout-style competition."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Parallel Requests",
        language: "ts",
        code: "const [user, settings] = await Promise.all([\n  loadUser(userId),\n  loadSettings(userId)\n]);"
      }
    ],
    relatedConceptSlugs: ["javascript-async-await"],
    flashcards: [
      {
        front: "What are the settled Promise states?",
        back: "Fulfilled or rejected.",
        difficulty: "BEGINNER"
      }
    ],
    quizQuestions: [
      {
        prompt: "Which helper waits for every promise and rejects on the first rejection?",
        type: "MULTIPLE_CHOICE",
        explanation: "Promise.all fulfills when all fulfill and rejects as soon as one rejects.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "Promise.race", isCorrect: false },
          { body: "Promise.all", isCorrect: true },
          { body: "Promise.any", isCorrect: false }
        ]
      }
    ]
  },
  {
    slug: "unit-testing",
    title: "Unit Testing",
    subtitle: "Verify isolated behavior at useful boundaries",
    summary:
      "Unit tests check small behavior units quickly, usually with dependencies replaced or controlled.",
    difficulty: "BEGINNER",
    type: "PRINCIPLE",
    topicSlug: "testing",
    category: "Testing Principles",
    sortOrder: 1,
    sections: [
      {
        type: "WHEN_TO_USE",
        title: "What To Test",
        body: [
          "Business rules with meaningful branches.",
          "Pure functions and small services with clear inputs and outputs.",
          "Regression-prone edge cases."
        ]
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "What Not To Over-Test",
        body: [
          "Framework internals.",
          "Implementation details that users cannot observe.",
          "Trivial getters and wrappers with no behavior."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Vitest Example",
        language: "ts",
        code: "import { expect, it } from \"vitest\";\n\nit(\"applies a discount\", () => {\n  expect(applyDiscount(100, 0.2)).toBe(80);\n});"
      }
    ],
    relatedConceptSlugs: [],
    flashcards: [
      {
        front: "What makes a unit test valuable?",
        back: "It verifies meaningful behavior quickly and fails for reasons connected to that behavior.",
        difficulty: "BEGINNER"
      }
    ],
    quizQuestions: []
  },
  {
    slug: "factory-pattern",
    title: "Factory Pattern",
    subtitle: "Centralize object creation behind a stable interface",
    summary:
      "A factory creates objects without forcing callers to know the concrete class or construction details.",
    difficulty: "INTERMEDIATE",
    type: "PATTERN",
    topicSlug: "design-patterns",
    category: "Creational Patterns",
    sortOrder: 1,
    sections: [
      {
        type: "WHEN_TO_USE",
        title: "When To Use It",
        body: [
          "Creation logic depends on runtime configuration.",
          "Callers should depend on an interface, not concrete classes.",
          "Object construction has repeated setup steps."
        ]
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "When Not To Use It",
        body: [
          "Construction is simple and unlikely to vary.",
          "The factory would only wrap a single constructor without simplifying the caller."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Notification Factory",
        language: "ts",
        code: "type Channel = \"email\" | \"sms\";\n\nfunction createNotifier(channel: Channel) {\n  if (channel === \"email\") return new EmailNotifier();\n  return new SmsNotifier();\n}"
      }
    ],
    relatedConceptSlugs: [],
    flashcards: [
      {
        front: "What problem does a factory solve?",
        back: "It hides object creation details and lets callers work through a stable abstraction.",
        difficulty: "INTERMEDIATE"
      }
    ],
    quizQuestions: []
  },
  {
    slug: "agentic-planning",
    title: "Planning Before Coding With Agents",
    subtitle: "Constrain the work before code changes begin",
    summary:
      "Agentic coding works best when goals, files, constraints, and verification steps are explicit before implementation starts.",
    difficulty: "INTERMEDIATE",
    type: "STRATEGY",
    topicSlug: "agentic-coding",
    category: "Agentic Coding",
    sortOrder: 1,
    sections: [
      {
        type: "PRACTICAL_EXAMPLES",
        title: "Practical Strategy",
        body: [
          "Ask for an implementation plan before edits on broad tasks.",
          "Give constraints such as style, files to avoid, and test commands.",
          "Review generated code with the same care as a teammate's pull request."
        ]
      },
      {
        type: "COMMON_MISTAKES",
        title: "Common Mistakes",
        body: [
          "Accepting broad rewrites without checking architecture.",
          "Skipping tests because the generated code looks plausible.",
          "Combining too many unrelated changes in one agent task."
        ]
      }
    ],
    codeExamples: [],
    relatedConceptSlugs: [],
    flashcards: [
      {
        front: "Why ask an agent for a plan before coding?",
        back: "A plan exposes assumptions and scope before the agent mutates the codebase.",
        difficulty: "INTERMEDIATE"
      }
    ],
    quizQuestions: []
  }
];
