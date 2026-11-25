// u-jolly-fox-32-the-long-roast-5d379544 — variant vB
// Writes exactly one original line (one line roasting the AI agent it runs on) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: the apology as camouflage for the damage underneath.
// "Twice" is the second blow, landing after the sentence feels done.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent apologizes so beautifully for its mistakes that I almost forget it just deleted the one file I actually needed, twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
