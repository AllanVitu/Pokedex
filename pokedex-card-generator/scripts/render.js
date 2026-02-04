import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import puppeteer from "puppeteer";
import archiver from "archiver";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "data", "pokemon151.json");

const args = process.argv.slice(2);
const presetArgIndex = args.indexOf("--preset");
const preset = presetArgIndex >= 0 ? (args[presetArgIndex+1] || "mobile") : "mobile";

const PRESETS = {
  mobile: { width: 1170, height: 2532, scale: 1, outDir: "out/mobile" },   // iPhone-ish
  desktop: { width: 900, height: 1600, scale: 1, outDir: "out/desktop" },  // desktop card
};

const conf = PRESETS[preset] ?? PRESETS.mobile;

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

const pokemon = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const outDir = path.join(root, conf.outDir);
ensureDir(outDir);

const pageUrl = "file://" + path.join(root, "web", "template.html");

const browser = await puppeteer.launch({
  headless: "new",
  defaultViewport: { width: conf.width, height: conf.height, deviceScaleFactor: conf.scale },
  args: ["--font-render-hinting=medium"]
});

const page = await browser.newPage();
await page.goto(pageUrl, { waitUntil: "networkidle0" });

for (const p of pokemon) {
  await page.evaluate((poke) => window.__setPokemon(poke), p);
  await page.waitForTimeout(40);

  const filenameSafe = String(p.name)
    .toLowerCase()
    .replaceAll("♀","f")
    .replaceAll("♂","m")
    .replaceAll(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g,"");

  const outPath = path.join(outDir, `${String(p.id).padStart(3,"0")}_${filenameSafe}.jpg`);
  const card = await page.$("#card");
  await card.screenshot({
    path: outPath,
    type: "jpeg",
    quality: 92,
    omitBackground: false,
  });
  process.stdout.write(`Rendered ${p.num} ${p.name}\n`);
}

await browser.close();

// Zip
const zipPath = path.join(root, `pokedex_cards_gen1_${preset}.zip`);
await new Promise((resolve, reject) => {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", resolve);
  archive.on("error", reject);

  archive.pipe(output);
  archive.directory(outDir, "pokedex_cards_gen1");
  archive.finalize();
});

console.log(`\n✅ ZIP created: ${zipPath}\n`);
