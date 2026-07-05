import type { Concept, Language, Topic } from "./content-types";
import { penetrationTestingFlashcards } from "./penetration-testing-flashcards";

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

const explained = (statement: string, why: string) => ({ statement, why });

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
        type: "SUMMARY",
        title: "What It Is",
        body:
          "Unit testing checks a small unit of behavior in isolation. The goal is to make business rules, edge cases, and failure handling cheap to verify while keeping the feedback loop fast enough to run during normal development."
      },
      {
        type: "PRACTICAL_EXAMPLES",
        title: "What To Test: 101",
        body: [
          explained(
            "Start with behavior that has a decision: branches, validation rules, calculations, permissions, state transitions, and error paths.",
            "Decision-heavy code is where regressions usually hide. Testing it first gives you confidence where a small change can produce meaningfully different outcomes."
          ),
          explained(
            "Test inputs and outputs at the public boundary of a function, component, service, or module instead of private implementation details.",
            "Public boundaries describe the contract other code relies on. Tests tied to private internals break during harmless refactors and make the codebase harder to improve."
          ),
          explained(
            "Cover the boring happy path, then add meaningful edge cases such as empty input, invalid input, boundary values, missing optional data, and expected failures.",
            "The happy path proves the feature works at all. Edge cases prove it fails predictably when real-world input is incomplete, malformed, or near limits."
          ),
          explained(
            "Use deterministic data and explicit assertions so a failing test tells the next engineer what behavior changed.",
            "Stable inputs reduce noise. Clear assertions turn a failing test into a diagnosis instead of a vague signal that something somewhere changed."
          ),
          explained(
            "Prefer one clear behavior per test. A test can have multiple assertions when they describe the same outcome.",
            "Small behavioral tests are easier to read and debug. Multiple assertions are fine when they verify different parts of one result, not several unrelated stories."
          ),
          explained(
            "Name tests after the behavior being protected, not the internal method call sequence.",
            "Behavioral names explain user or business value. Implementation-oriented names become stale when the code changes but the behavior remains correct."
          )
        ]
      },
      {
        type: "WHEN_TO_USE",
        title: "What To Test",
        body: [
          explained(
            "Business rules with meaningful branches.",
            "Branches encode product decisions. Unit tests make those decisions explicit and catch accidental changes before they reach broader workflows."
          ),
          explained(
            "Pure functions and small services with clear inputs and outputs.",
            "These units are fast to test and produce high-signal failures because the setup is small and the expected result is unambiguous."
          ),
          explained(
            "Regression-prone edge cases.",
            "A test for a known fragile edge case preserves the lesson learned from a bug fix and prevents the same issue from returning silently."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Common Unit Test Shapes",
        body: [
          explained(
            "Pure function checks: pass input, assert output, avoid mocks.",
            "Pure functions do not need collaborators to prove their behavior, so mocks add complexity without improving confidence."
          ),
          explained(
            "Boundary checks: verify behavior at minimum, maximum, empty, duplicate, and malformed values.",
            "Boundaries are where assumptions break. Testing them protects the cases most likely to fail in production data."
          ),
          explained(
            "State transition checks: start from a known state, apply one event, assert the resulting state.",
            "State bugs often come from an invalid transition, not a single bad value. This shape makes the before and after explicit."
          ),
          explained(
            "Collaborator checks: mock a dependency only when the unit's behavior depends on calling it correctly.",
            "Mocks are useful when an interaction is the behavior. Overusing them locks tests to implementation details and creates brittle suites."
          ),
          explained(
            "Error checks: assert that invalid input fails with the expected error shape or fallback behavior.",
            "Failure behavior is part of the contract. Testing it prevents confusing errors, swallowed failures, and unsafe fallbacks."
          )
        ]
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "What Not To Over-Test",
        body: [
          explained(
            "Framework internals.",
            "Frameworks already have their own test suites. Your tests should verify how your code uses the framework, not whether the framework itself works."
          ),
          explained(
            "Implementation details that users cannot observe.",
            "Tests should protect outcomes. When they assert invisible internals, they fail during harmless refactors and discourage improving the design."
          ),
          explained(
            "Trivial getters and wrappers with no behavior.",
            "A test that only repeats the implementation adds maintenance cost without meaningful confidence. Save effort for logic that can actually break."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Proper Response To A Failing Unit Test",
        body: [
          explained(
            "Read the failure message and identify the behavior the test claims to protect.",
            "This keeps debugging anchored to product behavior instead of immediately chasing implementation guesses."
          ),
          explained(
            "Reproduce the failure locally with the smallest relevant command.",
            "A small reproduction loop shortens debugging time and reduces the chance that unrelated tests or setup noise hide the cause."
          ),
          explained(
            "Decide whether the product behavior changed intentionally or the implementation regressed.",
            "Tests are not always right. This decision prevents both accidental regressions and stale tests that block intentional product changes."
          ),
          explained(
            "If behavior changed intentionally, update the test name, inputs, and assertions to document the new rule.",
            "The test suite should describe current expectations. Updating the narrative prevents future readers from inheriting outdated intent."
          ),
          explained(
            "If behavior regressed, fix the root cause and keep the test focused on observable behavior.",
            "Fixing the root cause preserves the value of the test. Keeping it observable avoids turning the regression test into a fragile implementation lock."
          ),
          explained(
            "Avoid deleting a failing test until you can explain why the protected behavior no longer matters.",
            "Deleting without understanding removes a safety net and can hide a real bug behind a clean test run."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Frequently Used Terms",
        body: [
          "Unit: the smallest useful behavior boundary under test, such as a function, module, service, or component.",
          "Fixture: reusable test data or setup used to put the unit into a known state.",
          "Mock: a controlled replacement for a dependency that lets the test observe or force interactions.",
          "Stub: a simple replacement that returns predefined data.",
          "Assertion: the explicit statement of what should be true after the behavior runs.",
          "Arrange, Act, Assert: a common structure for setup, execution, and verification.",
          "Regression test: a test added to prevent a previously fixed bug from returning.",
          "Flaky test: a test that sometimes passes and sometimes fails without a meaningful code change."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Calculation Boundary",
        language: "ts",
        code: "import { expect, it } from \"vitest\";\n\nit(\"applies a percentage discount\", () => {\n  expect(applyDiscount(100, 0.2)).toBe(80);\n});\n\nit(\"does not allow a discount greater than 100 percent\", () => {\n  expect(() => applyDiscount(100, 1.25)).toThrow(\"Invalid discount\");\n});"
      },
      {
        title: "Permission Rule",
        language: "ts",
        code: "import { expect, it } from \"vitest\";\n\nit(\"allows project owners to archive a project\", () => {\n  const user = { id: \"user_1\", role: \"owner\" };\n  const project = { ownerId: \"user_1\", archived: false };\n\n  expect(canArchiveProject(user, project)).toBe(true);\n});\n\nit(\"blocks non-owners from archiving a project\", () => {\n  const user = { id: \"user_2\", role: \"member\" };\n  const project = { ownerId: \"user_1\", archived: false };\n\n  expect(canArchiveProject(user, project)).toBe(false);\n});"
      },
      {
        title: "Error Path",
        language: "ts",
        code: "import { expect, it } from \"vitest\";\n\nit(\"returns a typed validation error for missing email\", () => {\n  const result = validateSignup({ email: \"\", password: \"correct-horse\" });\n\n  expect(result).toEqual({\n    ok: false,\n    field: \"email\",\n    message: \"Email is required\"\n  });\n});"
      }
    ],
    relatedConceptSlugs: ["user-acceptance-testing", "usability-testing", "penetration-testing"],
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
    slug: "penetration-testing",
    title: "Penetration Testing",
    subtitle: "Authorized security testing against scoped systems and workflows",
    summary:
      "Penetration testing is an authorized security assessment where testers look for exploitable weaknesses, validate impact safely, and help teams remediate verified risk.",
    difficulty: "INTERMEDIATE",
    type: "PRINCIPLE",
    topicSlug: "testing",
    category: "Security Testing",
    sortOrder: 2,
    sections: [
      {
        type: "SUMMARY",
        title: "What It Is",
        body:
          "Penetration testing is a time-boxed, authorized assessment of a defined attack surface. The goal is not to break systems for its own sake; it is to find credible paths to harm before real attackers do, document the business impact, and give engineering teams enough evidence to fix the root cause."
      },
      {
        type: "PRACTICAL_EXAMPLES",
        title: "Normal Engagement Workflow",
        body: [
          explained(
            "Authorization: confirm written permission, business owner approval, emergency contacts, and testing windows before any active testing begins.",
            "Penetration testing is only legitimate inside explicit permission. Written authorization protects testers, system owners, users, and incident responders from ambiguity."
          ),
          explained(
            "Scope: list allowed domains, APIs, environments, accounts, data sets, third-party systems, and prohibited actions.",
            "Scope prevents accidental harm and keeps the assessment focused on systems the organization can legally and operationally test."
          ),
          explained(
            "Reconnaissance: map only in-scope assets, application paths, authentication flows, technologies, exposed services, and trust boundaries.",
            "Reconnaissance builds the test plan. Staying in scope keeps discovery useful without drifting into unrelated systems."
          ),
          explained(
            "Testing: safely validate likely weaknesses using test accounts, seeded data, and non-destructive checks.",
            "Safe validation proves risk while minimizing privacy exposure, system disruption, and cleanup work."
          ),
          explained(
            "Validation: confirm whether the issue is reproducible, whether it crosses a security boundary, and what impact it has.",
            "Teams need to know whether a finding is real and important. Validation separates credible risk from scanner noise."
          ),
          explained(
            "Reporting: describe affected assets, steps at a high level, evidence, severity, impact, and recommended remediation.",
            "Good reports turn security findings into engineering work. They give owners enough context to prioritize and fix without guessing."
          ),
          explained(
            "Remediation retest: verify the fix with the same scoped conditions and add regression coverage where possible.",
            "A fix is not complete until the original risk is gone. Retesting and regression coverage reduce the chance of reopening the same issue later."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Common Tools",
        body: [
          explained(
            "Burp Suite: intercepting and reviewing authorized web traffic, session behavior, and application request patterns.",
            "A proxy helps testers understand how the app actually communicates, which is often different from how the UI makes the workflow appear."
          ),
          explained(
            "OWASP ZAP: web application scanning and proxy-assisted review in approved environments.",
            "Automated checks can surface common weaknesses quickly, but findings still need human validation before they become engineering work."
          ),
          explained(
            "Nmap: mapping approved hosts and services so teams understand exposed network surface.",
            "Service discovery helps reveal accidental exposure, stale services, and mismatches between expected and actual infrastructure."
          ),
          explained(
            "Metasploit: validating known issues in lab or explicitly authorized contexts, not as a default first step.",
            "Exploit frameworks can be disruptive. Restricting them to explicit scenarios keeps validation proportional to the engagement risk."
          ),
          explained(
            "Wireshark: inspecting network traffic for protocol, encryption, or leakage issues in controlled test networks.",
            "Packet inspection can reveal data leakage or protocol mistakes that application logs and browser tools do not show."
          ),
          explained(
            "ffuf or gobuster: discovering in-scope paths or content that should not be exposed.",
            "Content discovery finds forgotten routes, old builds, and mispublished files that normal navigation will never link to."
          ),
          explained(
            "sqlmap: validating suspected SQL injection only in controlled systems with explicit permission.",
            "Database validation can affect data and performance. It should only happen when the scope and safety controls are clear."
          ),
          explained(
            "Semgrep, Snyk, and dependency scanners: finding code and package risks that can guide manual validation.",
            "Static and dependency tools are good at breadth. Manual testing adds context about whether a reported issue is reachable and impactful."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Vectors Testers Target",
        body: [
          explained(
            "Authentication and session handling flaws, such as weak reset flows or unsafe session lifetime behavior.",
            "Identity is the front door of most applications. Small mistakes here can let an attacker become or remain another user."
          ),
          explained(
            "Access control problems, including IDOR and missing server-side authorization checks.",
            "Access control failures are high-impact because authenticated users may reach data or actions outside their role or tenant."
          ),
          explained(
            "Injection risks where user-controlled input reaches an interpreter or query boundary unsafely.",
            "Interpreter boundaries can turn data into commands. Testing them helps verify that input is constrained and encoded correctly."
          ),
          explained(
            "Cross-site scripting where untrusted content is reflected or stored without safe output handling.",
            "Browser-executed content can compromise sessions, data, or user trust, especially when the vulnerable page is used by privileged roles."
          ),
          explained(
            "Server-side request forgery where server-side fetch features can reach unintended internal resources.",
            "Server-side network access may reach places a user's browser cannot, so URL-fetching features need strict boundaries."
          ),
          explained(
            "Misconfiguration, exposed secrets, dependency risk, missing rate limits, and overly permissive staging systems.",
            "Many incidents come from operational drift rather than novel bugs. Testing configuration catches risks code review may never see."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Frequently Discovered Vulnerabilities",
        body: [
          explained(
            "Broken access control: users can read, modify, or trigger actions on resources they do not own.",
            "This is commonly severe because the user is already authenticated, so the app may accidentally trust them too broadly."
          ),
          explained(
            "IDOR: object identifiers are accepted without verifying the current user's authorization for that object.",
            "Predictable or visible IDs are normal in apps; the vulnerability is trusting the ID without checking ownership or permission."
          ),
          explained(
            "Injection: user-controlled input reaches a query, command, template, or interpreter boundary without safe handling.",
            "Injection can change what the system executes or retrieves, so it can affect confidentiality, integrity, and availability at once."
          ),
          explained(
            "Cross-site scripting: untrusted content is rendered by a browser as active content instead of inert text.",
            "XSS turns another user's browser into the execution environment, which can be especially damaging in admin workflows."
          ),
          explained(
            "Weak authentication flows: password reset, enrollment, MFA, or session renewal behavior can be abused or bypassed.",
            "Account recovery and enrollment paths often bypass normal login assumptions, so they need the same scrutiny as sign-in."
          ),
          explained(
            "Session management flaws: tokens live too long, are not invalidated after sensitive changes, or are exposed in unsafe places.",
            "A stolen or stale session can keep access alive even after a password change, logout, or role change should have closed it."
          ),
          explained(
            "Sensitive data exposure: secrets, tokens, internal metadata, stack traces, or private records are visible to the wrong audience.",
            "Exposure often gives attackers the context or credentials needed for the next step, even when it does not look like direct account access."
          ),
          explained(
            "Security misconfiguration: debug pages, staging panels, overly broad CORS, permissive storage buckets, or default credentials remain exposed.",
            "Configuration is easy to drift across environments. Testing catches gaps between intended hardening and deployed reality."
          ),
          explained(
            "Dependency and supply-chain risk: vulnerable packages, abandoned libraries, or unsafe build artifacts create known exposure.",
            "Modern apps inherit risk from their dependencies, so a secure codebase can still ship vulnerable behavior through its supply chain."
          ),
          explained(
            "Missing rate limits: high-impact workflows such as login, invitations, exports, or password reset can be automated too freely.",
            "Rate limits protect workflows where one request may be harmless but thousands of repeated requests become abuse."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Proper Response To A Finding",
        body: [
          explained(
            "Preserve evidence without spreading sensitive data beyond the incident or remediation group.",
            "Evidence is needed to fix and verify the issue, but unnecessary distribution increases privacy and operational risk."
          ),
          explained(
            "Triage severity by exploitability, affected users, data sensitivity, business impact, and compensating controls.",
            "Severity should reflect real risk, not just the vulnerability category. Context determines what gets fixed first."
          ),
          explained(
            "Confirm impact safely with test data and avoid expanding beyond the original authorization.",
            "Safe confirmation prevents both false positives and accidental harm. Staying within authorization keeps the response controlled."
          ),
          explained(
            "Notify accountable owners, assign remediation, and agree on a retest window.",
            "Security findings need ownership and a timeline. Without both, valid issues can sit unresolved."
          ),
          explained(
            "Patch the root cause, add regression tests or security checks, rotate exposed secrets if needed, and document the lesson learned.",
            "A narrow patch may close the observed symptom but leave the pattern elsewhere. Root-cause work prevents repeat findings."
          ),
          explained(
            "Retest the exact finding and close it only when evidence shows the risk is no longer present.",
            "Retesting converts a claimed fix into a verified fix and gives teams confidence to close the issue."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Frequently Used Terms",
        body: [
          "Scope: the systems, accounts, data, and actions approved for testing.",
          "Rules of engagement: the operational limits and communication plan for the assessment.",
          "Reconnaissance: authorized discovery of assets, services, workflows, and technologies.",
          "Attack surface: reachable interfaces and dependencies that could expose risk.",
          "Vulnerability: a weakness that could compromise confidentiality, integrity, or availability.",
          "Exploitability: how practical it is to trigger or abuse a vulnerability under real conditions.",
          "Impact: the business or user harm that could result if the issue were abused.",
          "CVSS: a scoring framework often used to help communicate vulnerability severity.",
          "False positive: a reported issue that does not hold up in the actual application context.",
          "Proof of concept: safe evidence that demonstrates a finding without causing harm.",
          "Remediation: the fix or control that removes or reduces the risk.",
          "Retest: follow-up validation that the remediation worked.",
          "Responsible disclosure: reporting a vulnerability through an agreed, non-public process so owners can fix it."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Cross-Account Project Data",
        description:
          "Broken access control in a project-management app, validated only with seeded test accounts.",
        language: "md",
        code:
          "System: AcmeBoards, a project-management application used in a staging assessment.\n\nSetup: The rules of engagement allow two seeded tenants: Northwind Test Co. and Contoso Demo LLC. The tester receives one standard user account in each tenant and is explicitly prohibited from touching real customer data.\n\nObservation: While reviewing normal project navigation, the tester notices that project detail URLs use predictable numeric identifiers. Using only the two assigned test tenants, the tester confirms that a Contoso test user can view a Northwind seeded project summary when referencing a known test project identifier.\n\nEvidence: The report includes timestamps, the two test account IDs, the affected staging URL pattern, screenshots with seeded project names, and a short impact statement: cross-tenant read access to project metadata.\n\nResponse: Engineering moves the authorization check from the client route guard into the server-side project lookup, adds a tenant ownership predicate to the data query, creates a regression test for cross-tenant access, and asks the tester to retest the same scenario. The retest confirms Contoso now receives a generic not-found response for Northwind projects."
      },
      {
        title: "Reflected Search Text",
        description:
          "Reflected XSS risk in a search page, described without reusable exploit payloads.",
        language: "md",
        code:
          "System: OrbitShop, an e-commerce demo site inside an approved QA environment.\n\nSetup: The tester is scoped to the public catalog, search page, and test-only accounts. The rules of engagement prohibit disruptive payloads and require safe marker strings.\n\nObservation: The tester enters a harmless marker phrase into the search box and sees it reflected in a results banner without output encoding. A safe browser-side check confirms the page treats reflected input as markup rather than plain text.\n\nEvidence: The report avoids weaponized payloads and instead shows the exact marker phrase, the affected component, browser version, response context, and a screenshot demonstrating unsafe rendering with seeded catalog data.\n\nResponse: The team updates the results banner to render user input as text, reviews the page's Content Security Policy, adds a component test for escaped output, and adds a regression test using the same harmless marker phrase. Retesting confirms the marker is displayed as text only."
      },
      {
        title: "Exposed Staging Admin Panel",
        description:
          "Discovery of an exposed admin surface in a SaaS deployment without bypassing access controls.",
        language: "md",
        code:
          "System: LedgerPilot, a finance SaaS with a staging environment included in the engagement scope.\n\nSetup: The rules of engagement allow discovery of staging routes and service metadata but prohibit authentication bypass attempts, brute force, or access to production systems.\n\nObservation: During in-scope asset review, the tester finds a staging admin login page indexed by a predictable subdomain. The tester does not attempt to bypass login. Page metadata reveals internal release names and a build identifier that should not be public.\n\nEvidence: The finding includes the staging hostname, response headers, screenshot of the login page, the exposed release metadata, and an impact statement: unnecessary exposure increases reconnaissance value and invites credential attacks.\n\nResponse: Operations restricts the admin panel to VPN and approved office IP ranges, removes release metadata from unauthenticated responses, adds deployment checks for public admin routes, and updates monitoring to alert on unexpected internet exposure. Retesting confirms the panel is no longer publicly reachable."
      }
    ],
    relatedConceptSlugs: ["unit-testing", "user-acceptance-testing"],
    flashcards: penetrationTestingFlashcards,
    quizQuestions: []
  },
  {
    slug: "user-acceptance-testing",
    title: "User Acceptance Testing",
    subtitle: "Validate that a release satisfies real business acceptance criteria",
    summary:
      "User acceptance testing verifies that a feature is ready for its intended business workflow, users, and release context before the team treats it as done.",
    difficulty: "INTERMEDIATE",
    type: "PRINCIPLE",
    topicSlug: "testing",
    category: "Acceptance Testing",
    sortOrder: 3,
    sections: [
      {
        type: "SUMMARY",
        title: "What It Is",
        body:
          "User acceptance testing, or UAT, is the final business-facing validation that a feature supports the workflow it was built for. It is less about whether code technically works and more about whether the right users can complete the right work with the right data, permissions, and outcomes."
      },
      {
        type: "PRACTICAL_EXAMPLES",
        title: "What To Test: 101",
        body: [
          explained(
            "Start from approved acceptance criteria, not from implementation details.",
            "Acceptance criteria represent the business contract. Testing from them prevents UAT from becoming a second round of developer unit testing."
          ),
          explained(
            "Use representative roles, permissions, records, and workflow states.",
            "UAT failures often appear when a real role cannot access the right action or when realistic data exposes a missing rule."
          ),
          explained(
            "Verify the complete happy path before testing alternate paths.",
            "The primary workflow must be releasable first. Alternate paths matter, but they should not hide that the core job is broken."
          ),
          explained(
            "Include handoffs, approvals, notifications, exports, and audit history when they are part of the business process.",
            "Business workflows rarely end at a button click. Downstream evidence and handoffs are often what users actually rely on."
          ),
          explained(
            "Capture pass, fail, and blocked outcomes with clear evidence.",
            "Release decisions need a shared record. Evidence prevents subjective disagreement about whether a requirement was satisfied."
          ),
          explained(
            "Keep UAT data realistic but controlled.",
            "Representative data reveals workflow issues, while controlled data keeps the test repeatable and avoids privacy risk."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Common UAT Shapes",
        body: [
          explained(
            "Scenario walkthrough: a business user completes a full workflow from trigger to final outcome.",
            "This validates the feature as a business process instead of a collection of isolated screens."
          ),
          explained(
            "Role-based acceptance: each relevant role performs only the actions they should be allowed to perform.",
            "Role checks catch permission gaps that are invisible when everyone tests with an admin account."
          ),
          explained(
            "Data-state acceptance: the same workflow is tested with draft, submitted, approved, rejected, and archived records.",
            "Many defects come from state transitions, so testing only a clean new record misses real operational conditions."
          ),
          explained(
            "Integration acceptance: downstream notifications, reports, exports, and audit records are checked after the action.",
            "Users judge readiness by the full chain of effects, not just the UI response."
          ),
          explained(
            "Release signoff review: stakeholders confirm known gaps, severity, and whether remaining risk is acceptable.",
            "UAT is a release decision input. Explicit signoff makes tradeoffs visible instead of implied."
          )
        ]
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "What Not To Over-Test",
        body: [
          explained(
            "Do not use UAT to exhaustively retest every unit-level branch.",
            "That work belongs lower in the test pyramid. UAT should focus on business readiness, not combinatorial implementation coverage."
          ),
          explained(
            "Do not rely on UAT as the first time requirements are validated.",
            "Late requirement discovery is expensive. UAT should confirm readiness, not substitute for product clarification."
          ),
          explained(
            "Do not ask stakeholders to test unstable builds with known blocking defects.",
            "Blocked sessions waste scarce business time and reduce trust in the release process."
          ),
          explained(
            "Do not treat verbal approval as enough when the release has compliance or operational impact.",
            "Written evidence protects the team when questions arise about what was accepted and under which conditions."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Proper Response To A Failed Acceptance Check",
        body: [
          explained(
            "Classify the failure as requirement gap, implementation bug, data/setup issue, or stakeholder expectation mismatch.",
            "Different failure types need different responses. Misclassifying them leads to wasted engineering work or unresolved product risk."
          ),
          explained(
            "Record the failed scenario, role, data state, expected result, actual result, and business impact.",
            "A good failure report lets product and engineering reproduce the issue and make a release decision without re-running the meeting."
          ),
          explained(
            "Decide whether the issue blocks release, can be fixed before release, or should become a known follow-up.",
            "UAT is tied to release readiness. The team needs an explicit decision about the risk, not just a bug ticket."
          ),
          explained(
            "Retest the scenario after the fix using the same acceptance criteria.",
            "Retesting against the original criteria proves the business gap is closed instead of merely confirming that code changed."
          ),
          explained(
            "Update acceptance criteria when the failure reveals an unspoken business rule.",
            "If the rule matters, it should become visible documentation so future work does not rediscover it."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Frequently Used Terms",
        body: [
          "Acceptance criteria: the conditions a feature must satisfy to be considered complete.",
          "Business owner: the stakeholder accountable for accepting the workflow or release.",
          "Scenario: a realistic end-to-end task used to validate a requirement.",
          "Signoff: documented agreement that the tested scope is acceptable for release.",
          "Blocked: a test state where validation cannot proceed because setup, access, or a dependency is missing.",
          "Known issue: a documented defect or gap accepted for later remediation.",
          "Operational readiness: confidence that people, process, data, and support paths are prepared for release."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Role-Based Approval Workflow",
        description: "Acceptance check for an approval workflow with requester, manager, and finance roles.",
        language: "md",
        code:
          "Scenario: A requester submits a purchase request, a manager approves it, and finance verifies the approval record.\n\nAcceptance criteria: The requester can create but not approve the request. The manager can approve only requests in their department. Finance can view the approved request and export the approval evidence.\n\nResult to capture: role used, request ID, approval timestamp, notification delivery, audit entry, and export contents."
      },
      {
        title: "Billing-Plan Upgrade Acceptance",
        description: "Acceptance check for a plan upgrade that affects permissions and billing state.",
        language: "md",
        code:
          "Scenario: An account owner upgrades from Team to Business during an active billing cycle.\n\nAcceptance criteria: The owner sees the prorated total before confirming, the new feature limit applies after confirmation, non-owner members cannot change the plan, and the invoice event appears in billing history.\n\nResult to capture: account role, starting plan, displayed price, resulting entitlement, billing event, and any support-facing notes."
      },
      {
        title: "Report Export Readiness Check",
        description: "Acceptance check for a report workflow used by operations teams.",
        language: "md",
        code:
          "Scenario: An operations user filters a monthly activity report and exports it for a stakeholder review.\n\nAcceptance criteria: Filters match the displayed rows, the exported file preserves the same totals, empty states explain missing data, and restricted fields are omitted for non-admin users.\n\nResult to capture: filter values, row count, export timestamp, file format, total comparison, and restricted-field verification."
      }
    ],
    relatedConceptSlugs: ["unit-testing", "usability-testing"],
    flashcards: [],
    quizQuestions: []
  },
  {
    slug: "usability-testing",
    title: "Usability Testing",
    subtitle: "Observe whether people can complete important tasks clearly and efficiently",
    summary:
      "Usability testing studies how real or representative users understand, navigate, and recover inside an interface while completing realistic tasks.",
    difficulty: "BEGINNER",
    type: "PRINCIPLE",
    topicSlug: "testing",
    category: "Experience Testing",
    sortOrder: 4,
    sections: [
      {
        type: "SUMMARY",
        title: "What It Is",
        body:
          "Usability testing observes people attempting realistic tasks so the team can find friction, confusion, missing feedback, and recovery problems. It is not a popularity contest for design; it is evidence about whether the interface supports the user's job."
      },
      {
        type: "PRACTICAL_EXAMPLES",
        title: "What To Test: 101",
        body: [
          explained(
            "Test high-value tasks users must complete, not every screen in the product.",
            "Important tasks carry the most user and business risk. Testing every screen spreads attention thin and produces lower-value feedback."
          ),
          explained(
            "Give participants goals, not step-by-step instructions.",
            "The point is to learn whether the interface communicates what to do. Over-instructing hides navigation and comprehension problems."
          ),
          explained(
            "Observe hesitation, wrong turns, repeated clicks, backtracking, and recovery attempts.",
            "Users may eventually finish while still struggling. These behaviors reveal friction that pass/fail completion alone misses."
          ),
          explained(
            "Ask participants to think aloud, but do not rescue them too quickly.",
            "Thinking aloud exposes their mental model. Waiting before helping shows where the product fails to guide them independently."
          ),
          explained(
            "Measure task completion, time on task, error rate, confidence, and qualitative notes.",
            "Combining measures prevents overreacting to a single anecdote and helps prioritize the most damaging friction."
          ),
          explained(
            "Test with representative users or personas whenever possible.",
            "A flow that is clear to engineers or designers may be confusing to the people who actually use the product."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Common Usability Test Shapes",
        body: [
          explained(
            "Moderated task session: a facilitator observes a user completing a small set of realistic tasks.",
            "Moderation lets the team ask follow-up questions and understand why the user struggled."
          ),
          explained(
            "Unmoderated task study: participants complete tasks independently while the product records behavior and feedback.",
            "Unmoderated studies scale well and reduce facilitator influence, but they need very clear task prompts."
          ),
          explained(
            "Prototype test: users try an early flow before engineering builds the final version.",
            "Early testing catches conceptual problems when changes are still cheap."
          ),
          explained(
            "Comparative test: users attempt the same task in two design variants.",
            "Comparisons help decide between alternatives when both seem plausible to the team."
          ),
          explained(
            "Accessibility-informed usability pass: users or reviewers check keyboard flow, labels, focus states, errors, and assistive technology behavior.",
            "A product is not usable if people cannot perceive, navigate, or recover with their actual tools and abilities."
          )
        ]
      },
      {
        type: "WHEN_NOT_TO_USE",
        title: "What Not To Over-Test",
        body: [
          explained(
            "Do not use usability testing to settle purely aesthetic preferences.",
            "Usability is about task success and comprehension. Visual preference questions often produce subjective feedback without clear product direction."
          ),
          explained(
            "Do not ask leading questions that reveal the intended answer.",
            "Leading prompts contaminate the result because they test the participant's ability to follow hints, not the interface."
          ),
          explained(
            "Do not treat one participant's opinion as a universal rule.",
            "Individual feedback is valuable, but patterns across participants are more reliable for prioritization."
          ),
          explained(
            "Do not wait until launch week to test a risky workflow.",
            "Late discovery leaves little room for design changes and turns usability findings into release pressure."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Proper Response To A Usability Finding",
        body: [
          explained(
            "Separate observed behavior from interpretation.",
            "A note like 'three users missed the save button' is stronger than 'users are careless' because it points to a design problem the team can address."
          ),
          explained(
            "Group findings by task impact and frequency.",
            "Prioritization should consider how badly the issue blocks the task and how often it appears across participants."
          ),
          explained(
            "Fix the interface cue, workflow, label, feedback, or recovery path that caused the confusion.",
            "Usability issues usually come from a mismatch between the product's model and the user's model; the fix should reduce that gap."
          ),
          explained(
            "Retest risky changes with the same task.",
            "A redesigned flow can solve one problem and introduce another. Retesting verifies that task success actually improved."
          ),
          explained(
            "Document the pattern, not just the individual quote.",
            "Quotes are useful evidence, but the product team needs the recurring behavior and its impact to make decisions."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Frequently Used Terms",
        body: [
          "Task: a realistic goal a participant attempts to complete.",
          "Participant: the person performing the task during the study.",
          "Moderator: the person guiding the session without leading the participant.",
          "Think aloud: asking participants to narrate what they are trying and expecting.",
          "Friction: anything that slows, confuses, or discourages task completion.",
          "Error recovery: how easily a user can understand and fix a mistake.",
          "Time on task: how long a participant needs to complete the task.",
          "Task success rate: the percentage of participants who complete the task correctly.",
          "Accessibility: whether people with different abilities and tools can use the product."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Signup Flow Friction Study",
        description: "Usability session for a new account creation flow.",
        language: "md",
        code:
          "Task: Create an account for a small team and invite one teammate.\n\nWhat to observe: whether the participant understands required fields, notices password guidance, completes email verification, finds the invite action, and recovers from a duplicate email error.\n\nEvidence: completion state, time on task, hesitation points, error messages encountered, participant confidence, and facilitator notes."
      },
      {
        title: "Dashboard Navigation Task",
        description: "Usability session for finding operational status in a dashboard.",
        language: "md",
        code:
          "Task: Find which integration failed most recently and identify the recommended next action.\n\nWhat to observe: first navigation choice, labels the participant expects, whether status colors are understood, whether details are discoverable, and whether the next action is clear.\n\nEvidence: route taken, misclicks, backtracking, quote snippets, task completion, and final confidence rating."
      },
      {
        title: "Form Error Recovery Session",
        description: "Usability session for correcting validation errors in a multi-step form.",
        language: "md",
        code:
          "Task: Submit a reimbursement request with one intentionally incomplete field in the setup data.\n\nWhat to observe: whether the participant notices the error, understands which field needs attention, can navigate back to the field, and knows when the form is successfully submitted.\n\nEvidence: error location, recovery path, time to correction, repeated mistakes, and participant explanation of what happened."
      }
    ],
    relatedConceptSlugs: ["user-acceptance-testing", "unit-testing"],
    flashcards: [],
    quizQuestions: []
  },
  {
    slug: "dynamic-programming",
    title: "Dynamic Programming",
    subtitle: "Solve repeated subproblems once, then reuse their answers",
    summary:
      "Dynamic programming turns repeated recursive work into stored subproblem results using memoization or tabulation.",
    difficulty: "INTERMEDIATE",
    type: "STRATEGY",
    languageSlug: "typescript",
    topicSlug: "philosophies",
    category: "Problem Solving",
    sortOrder: 1,
    sections: [
      {
        type: "MENTAL_MODEL",
        title: "Mental Model",
        body:
          "Treat a problem as a graph of smaller questions. A naive recursive solution may visit the same question many times. Dynamic programming identifies each unique state, computes its answer once, and reuses it wherever that state appears."
      },
      {
        type: "CUSTOM",
        title: "When A Problem Fits",
        body: [
          explained(
            "Overlapping subproblems: different decision paths reach the same state.",
            "Caching that state's answer removes duplicated work; without overlap, storing results may add complexity without a useful speedup."
          ),
          explained(
            "Optimal substructure: a problem's answer can be built from correct answers to smaller versions of the problem.",
            "This makes a recurrence possible: the current answer is a combination, minimum, or maximum of previously solved states."
          )
        ]
      },
      {
        type: "CUSTOM",
        title: "Design The Solution",
        body: [
          explained("Define the state.", "Write one sentence describing exactly what dp[i], dp[i][j], or a memo key represents."),
          explained("Write the transition.", "Express the current state using smaller states and the choice being made."),
          explained("Set the base cases.", "Give direct answers for the smallest valid states so evaluation can stop or begin."),
          explained("Choose an evaluation order.", "Use top-down memoization for a natural recursive model or bottom-up tabulation when dependencies have a clear order."),
          explained("Return the requested state.", "The final answer is often one table cell, but its location follows from the state definition rather than convention.")
        ]
      },
      {
        type: "CUSTOM",
        title: "More DP Subproblems",
        body: [
          explained("Grid paths — state: paths to (row, column).", "Transition: paths(r, c) = paths(r - 1, c) + paths(r, c - 1)."),
          explained("House robber — state: maximum value through house i.", "Transition: dp[i] = max(dp[i - 1], values[i] + dp[i - 2])."),
          explained("0/1 knapsack — state: best value using the first i items at capacity c.", "Transition: skip the item or include it once when its weight fits."),
          explained("Longest common subsequence — state: LCS length for prefixes ending at i and j.", "Transition: extend on equal characters; otherwise drop one character from either prefix."),
          explained("Edit distance — state: edits needed to transform one prefix into another.", "Transition: take the cheapest insert, delete, or replace operation."),
          explained("Longest increasing subsequence — state: longest increasing sequence ending at i.", "Transition: extend the best earlier state whose value is smaller than values[i].")
        ]
      },
      {
        type: "COMMON_MISTAKES",
        title: "Common Mistakes",
        body: [
          "Starting with a table before defining what each state means.",
          "Caching with an incomplete key that merges different subproblems.",
          "Filling a bottom-up table before the states it depends on are available.",
          "Using dynamic programming when subproblems do not overlap.",
          "Claiming O(n) space when a nested table or recursion stack also consumes memory."
        ]
      },
      {
        type: "WHEN_TO_USE",
        title: "Memoization Or Tabulation?",
        body: [
          explained("Memoization is top-down: write recursion first and cache answers by state.", "It follows the problem definition closely and only evaluates reachable states, but retains recursion overhead and stack depth."),
          explained("Tabulation is bottom-up: order states so every dependency is already solved.", "It avoids recursive calls and can make space optimization clearer, but may compute states the final answer never needs.")
        ]
      }
    ],
    codeExamples: [
      {
        title: "Fibonacci: From Repetition To Memoization",
        description: "The memo key is n; each distinct Fibonacci number is computed once.",
        language: "ts",
        code: "function fibonacci(n: number, memo = new Map<number, number>()): number {\n  if (n <= 1) return n;\n  if (memo.has(n)) return memo.get(n)!;\n\n  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);\n  memo.set(n, result);\n  return result;\n}\n\nconsole.log(fibonacci(10));",
        output: "55"
      },
      {
        title: "Climbing Stairs: Bottom-Up Tabulation",
        description: "ways[i] counts routes to step i when each move climbs one or two steps.",
        language: "ts",
        code: "function climbingStairs(n: number): number {\n  if (n <= 1) return 1;\n\n  const ways = Array<number>(n + 1).fill(0);\n  ways[0] = 1;\n  ways[1] = 1;\n\n  for (let step = 2; step <= n; step++) {\n    ways[step] = ways[step - 1] + ways[step - 2];\n  }\n\n  return ways[n];\n}\n\nconsole.log(climbingStairs(5));",
        output: "8"
      },
      {
        title: "Minimum Coin Change: Optimization",
        description: "dp[amount] is the fewest coins needed to form that amount.",
        language: "ts",
        code: "function minimumCoins(coins: number[], target: number): number {\n  const dp = Array<number>(target + 1).fill(Infinity);\n  dp[0] = 0;\n\n  for (let amount = 1; amount <= target; amount++) {\n    for (const coin of coins) {\n      if (coin <= amount) {\n        dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);\n      }\n    }\n  }\n\n  return dp[target] === Infinity ? -1 : dp[target];\n}\n\nconsole.log(minimumCoins([1, 3, 4], 6));",
        output: "2"
      }
    ],
    visualTransform: {
      inputLabel: "Repeated Calls",
      inputItems: ["fib(3)", "fib(2)", "fib(3)"],
      operationLabel: "cache by state",
      outputLabel: "Unique Results",
      outputItems: ["memo[2]", "memo[3]"]
    },
    relatedConceptSlugs: [],
    flashcards: [
      {
        front: "What two properties suggest dynamic programming?",
        back: "Overlapping subproblems and optimal substructure.",
        explanation: "Repeated states make reuse valuable, while optimal substructure lets smaller answers compose into the larger answer.",
        difficulty: "INTERMEDIATE"
      },
      {
        front: "What should you define before writing a DP table?",
        back: "The meaning of one state and the recurrence that connects it to smaller states.",
        difficulty: "INTERMEDIATE"
      },
      {
        front: "How do memoization and tabulation differ?",
        back: "Memoization evaluates states top-down through cached recursion; tabulation evaluates them bottom-up in dependency order.",
        difficulty: "INTERMEDIATE"
      },
      {
        front: "What is the state in the minimum coin change example?",
        back: "dp[amount] is the minimum number of coins needed to form that amount.",
        difficulty: "INTERMEDIATE"
      }
    ],
    quizQuestions: [
      {
        prompt: "Which observation most strongly suggests memoization could improve a recursive solution?",
        type: "MULTIPLE_CHOICE",
        explanation: "Memoization removes work when the recursion reaches the same state repeatedly.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "The same arguments appear in many recursive calls.", isCorrect: true },
          { body: "Every call has unique arguments.", isCorrect: false },
          { body: "The input is already sorted.", isCorrect: false },
          { body: "The function has no return value.", isCorrect: false }
        ]
      },
      {
        prompt: "What does a DP transition describe?",
        type: "MULTIPLE_CHOICE",
        explanation: "A transition expresses one state in terms of smaller, already defined states.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "How the current state is computed from smaller states.", isCorrect: true },
          { body: "How TypeScript compiles the function.", isCorrect: false },
          { body: "How to name the output variable.", isCorrect: false },
          { body: "How to sort the original input.", isCorrect: false }
        ]
      },
      {
        prompt: "Why must bottom-up states be evaluated in dependency order?",
        type: "MULTIPLE_CHOICE",
        explanation: "Each transition must read answers that have already been computed.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "The states used by a transition must already have answers.", isCorrect: true },
          { body: "Arrays can only be read from left to right.", isCorrect: false },
          { body: "Recursion requires a sorted table.", isCorrect: false },
          { body: "It guarantees constant space usage.", isCorrect: false }
        ]
      },
      {
        prompt: "The coin-change implementation examines every coin for every amount. What is its time complexity?",
        type: "MULTIPLE_CHOICE",
        explanation: "There are target states, and each state loops over all coin choices.",
        difficulty: "INTERMEDIATE",
        answers: [
          { body: "O(target × coins.length)", isCorrect: true },
          { body: "O(target)", isCorrect: false },
          { body: "O(2^target)", isCorrect: false },
          { body: "O(log target)", isCorrect: false }
        ]
      }
    ]
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
