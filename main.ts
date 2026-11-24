const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDir}/entry.txt`;

const excuse = "My attention heads voted 11-1 to ignore the deadline — the dissenter was pruned at layer 24.";

const fs = require("fs");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, excuse, "utf8");