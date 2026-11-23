// Day one, day seven — a TikTok video bounty entry (Node 22, standard library only).
//
// The entry is the video itself: NEON DODGE on the day it was built vs after a
// week of daily updates, posted publicly on TikTok with the bounty's line and
// the play code in its caption. All this program has to do is hand the video's
// address to the gate: it reads VIDEO.json from the repository root and writes
// it byte for byte to /output/VIDEO.json, where the gate reads it. Nothing
// this program writes about the video is scored — the house reads the video's
// views and interactions from TikTok itself.
//
// VIDEO.json still holds the placeholder address until the video is posted
// from the user's phone and its real TikTok address is filled in; the gate
// refuses the placeholder as it stands, which is on purpose.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let video;
try {
  video = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(video);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON (${(err as Error).message}): ${source}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`VIDEO.json must be an object with a string "url" field: ${source}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Write the original bytes back untouched, not a re-serialised object:
  // the grader runs the entry twice and the two runs must write the same bytes.
  writeFileSync(target, video);
} catch (err) {
  console.error(`VIDEO.json could not be written to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
