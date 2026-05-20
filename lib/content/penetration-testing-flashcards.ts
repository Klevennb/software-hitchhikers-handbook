import type { Flashcard } from "./content-types";

export const penetrationTestingFlashcards: Flashcard[] = [
  {
    front: "What is penetration testing?",
    back: "An authorized, scoped security assessment where testers look for exploitable weaknesses and report business impact with remediation guidance.",
    explanation: "The authorization and scope are what separate professional testing from unauthorized activity.",
    difficulty: "BEGINNER"
  },
  {
    front: "Why does a penetration test need written scope?",
    back: "Scope defines which systems, accounts, dates, techniques, and safety limits are allowed during the engagement.",
    difficulty: "BEGINNER"
  },
  {
    front: "What are rules of engagement?",
    back: "The operating constraints for a test, including communication contacts, testing windows, prohibited actions, data-handling rules, and escalation paths.",
    difficulty: "BEGINNER"
  },
  {
    front: "What is reconnaissance in a professional penetration test?",
    back: "The controlled discovery phase where testers map authorized assets, exposed services, application paths, technologies, and likely risk areas.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "What does attack surface mean?",
    back: "The set of reachable systems, interfaces, identities, dependencies, and workflows that could expose security risk.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "Name common web application vectors testers evaluate.",
    back: "Authentication, session handling, access control, injection, XSS, SSRF, IDOR, misconfiguration, exposed secrets, dependency risk, and rate limits.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "What makes penetration test evidence useful?",
    back: "Clear reproduction context, affected assets, test account details, timestamps, observed impact, screenshots or logs, and safe proof that avoids exposing real user data.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "How should a team respond after a credible issue is found?",
    back: "Preserve evidence, triage severity, notify owners, confirm impact safely, fix root cause, add regression coverage, rotate exposed secrets if needed, and retest.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "What is remediation retesting?",
    back: "A follow-up verification pass that confirms the fix closes the reported issue without creating a new regression.",
    difficulty: "BEGINNER"
  },
  {
    front: "How is vulnerability scanning different from penetration testing?",
    back: "Scanning identifies likely issues with automated checks; penetration testing validates exploitability, chains context, assesses impact, and reports prioritized fixes.",
    difficulty: "INTERMEDIATE"
  },
  {
    front: "What is a false positive?",
    back: "A reported finding that appears risky but does not actually represent a valid vulnerability in the tested context.",
    difficulty: "BEGINNER"
  },
  {
    front: "Why should proof of concept evidence avoid real customer data?",
    back: "Professional evidence should prove impact while minimizing harm, privacy exposure, and operational risk.",
    difficulty: "INTERMEDIATE"
  }
];
