/**
 * One-off / repeatable image optimizer.
 *
 * The site is a static export (`output: 'export'`) with
 * `images: { unoptimized: true }`, so Next.js never optimizes anything —
 * raw source files are shipped to every visitor. Several source photos were
 * 6-23MB each (386MB in `public/Marketing content`), which is what tanked the
 * Lighthouse score (LCP ~19.7s, ~30MB payload).
 *
 * This resizes any image whose long edge exceeds MAX_EDGE and recompresses it
 * in place (same filename, so no code references change). Originals are
 * recoverable via git.
 *
 * Usage:  node scripts/optimize-images.mjs            (optimize)
 *         node scripts/optimize-images.mjs --dry-run  (report only)
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = new URL('../public', import.meta.url).pathname;
const MAX_EDGE = 1600; // plenty for full-bleed desktop sections
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;
const MIN_BYTES = 200 * 1024; // skip anything already small
const DRY_RUN = process.argv.includes('--dry-run');

const exts = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (exts.has(extname(entry.name).toLowerCase())) yield full;
  }
}

const fmtMB = (b) => (b / 1024 / 1024).toFixed(2) + 'MB';

let beforeTotal = 0;
let afterTotal = 0;
let processed = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const { size: beforeSize } = await stat(file);
  if (beforeSize < MIN_BYTES) {
    beforeTotal += beforeSize;
    afterTotal += beforeSize;
    skipped++;
    continue;
  }

  const ext = extname(file).toLowerCase();
  const image = sharp(file, { failOn: 'none' });
  const meta = await image.metadata();
  const needsResize = Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_EDGE;

  let pipeline = image.rotate(); // respect EXIF orientation
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });
  }

  if (DRY_RUN) {
    const buf = await pipeline.toBuffer();
    beforeTotal += beforeSize;
    afterTotal += buf.length;
    if (buf.length < beforeSize) processed++;
    console.log(
      `${file.replace(ROOT, '')}  ${fmtMB(beforeSize)} -> ${fmtMB(buf.length)}` +
        (needsResize ? `  (resized from ${meta.width}x${meta.height})` : '')
    );
    continue;
  }

  const tmp = file + '.tmp';
  await pipeline.toFile(tmp);
  const { size: afterSize } = await stat(tmp);

  // Only replace if we actually saved space.
  if (afterSize < beforeSize) {
    await rename(tmp, file);
    beforeTotal += beforeSize;
    afterTotal += afterSize;
    processed++;
    console.log(`${file.replace(ROOT, '')}  ${fmtMB(beforeSize)} -> ${fmtMB(afterSize)}`);
  } else {
    await unlink(tmp);
    beforeTotal += beforeSize;
    afterTotal += beforeSize;
    skipped++;
  }
}

console.log('\n----------------------------------------');
console.log(`${DRY_RUN ? '[dry run] ' : ''}optimized ${processed} files, skipped ${skipped}`);
console.log(`total: ${fmtMB(beforeTotal)} -> ${fmtMB(afterTotal)} (saved ${fmtMB(beforeTotal - afterTotal)})`);
