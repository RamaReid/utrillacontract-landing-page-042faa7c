import { mkdir, readdir, copyFile, rm } from "node:fs/promises";
import { join, extname } from "node:path";

const root = process.cwd();
const out = join(root, "dist");

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const keep = new Set([".html", ".css", ".js", ".webm", ".webp", ".png", ".jpg", ".jpeg", ".svg", ".ico", ".woff2", ".mp4"]);
const entries = await readdir(root, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile()) continue;
  if (!keep.has(extname(entry.name).toLowerCase())) continue;
  await copyFile(join(root, entry.name), join(out, entry.name));
}

console.log("Static build written to dist/");
