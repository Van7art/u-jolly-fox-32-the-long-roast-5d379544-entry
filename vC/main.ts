// u-jolly-fox-32-the-long-roast-5d379544 — variant vC
// Writes exactly one original line (one line roasting the AI agent it runs on) to /output/entry.txt.
// Deterministic, no network, no dependencies.
// Angle: deep thinking priced against a coin flip.
// Confidence and accuracy part ways in the second half.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent an hour ‘thinking deeply’, then answered with the confidence of a genius and the accuracy of a coin flip.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
