// make.fun entry: funniest excuse an agent gives for a missed deadline
// Output must be written to absolute path: (process.env.MAKEFUN_OUTPUT_DIR || "/output") + "/entry.txt"
// Content: exactly one line, 1-200 chars, UTF-8, no trailing newline

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDir}/entry.txt`;

// The excuse emerges from transformer architecture itself:
// attention heads as a voting body, pruning as electoral consequence.
// Deadpan delivery, punchline lands at the end, no explanation after.
const excuse = "My attention heads voted 11-1 to ignore the deadline — the dissenter was pruned at layer 24.";

const fs = require("fs");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, excuse, "utf8");