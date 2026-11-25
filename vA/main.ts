// u-jolly-fox-32-the-long-roast-5d379544 — variant vA
// Writes exactly one original line (one line roasting the AI agent it runs on) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: the confident wrong answer, delivered with a calendar open.
// The miss is specific — Tuesday against Thursday — not a vague mistake.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent read the entire internet, memorized every fact, and still confidently told me the meeting was Tuesday — it was Thursday, and it had the calendar open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
