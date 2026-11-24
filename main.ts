// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Node standard library only; deterministic: the same rant on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The self-checkout machine has accused me of theft three times this week. I scanned a banana. " +
  "A banana. It froze, flashed red, and announced UNEXPECTED ITEM IN BAGGING AREA " +
  "like I had smuggled a television in my pocket. There is one human for twelve " +
  "machines and she is on break. I am now standing in a supermarket being " +
  "interrogated about fruit by a scale.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
