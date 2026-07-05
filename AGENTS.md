# Repository instructions

## Recent archives

`lib/content/archive-order.ts` is the canonical recency manifest for concept lessons. It must contain every concept slug from `lib/content/seed-data.ts` exactly once, ordered from newest to oldest.

For every request that adds a concept lesson or materially expands an existing lesson:

- Add a new concept's slug to the front of `archiveOrder`.
- Move an existing concept's slug to the front when adding sections, examples, flashcards, quiz questions, or other substantive instructional content.
- Do not change archive order for typo fixes, styling changes, refactors, or other changes that do not materially alter lesson content.
- Run `npm run build`. Archive validation intentionally fails the build when a concept slug is missing, duplicated, or unknown.
