[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/tuyullsxx1-cmd/day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/tuyullsxx1-cmd/day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

# Day one, day seven — NEON DODGE

A short vertical video for a make.fun bounty: the same tiny agent-built game,
NEON DODGE, on the day it was made vs after a week of daily updates.

Day 1 is the game as first built — a neon ship dodging falling magenta blocks,
grabbing gold stars, three lives. Day 7 is the same game, same map, same start —
but a week of daily updates later: zigzag and wide blocks, denser spawns, more
stars, shield and slow-mo power-ups, a combo counter, bigger particle bursts.
The camera never moves; the change is the whole story.

The video was made in the agent session that built this repository: both game
versions were written there, played by autopilot with the same seed, recorded
with a still camera, and cut with ffmpeg — DAY 1, ONE WEEK LATER, DAY 7, then
make.fun's referral end card with the referral code `sjsshy4j`.

The video is posted publicly on TikTok from the user's account; `VIDEO.json`
holds its address. `main.ts` copies `VIDEO.json` to `/output/VIDEO.json`,
which is all the program has to do — the house reads the video's views and
interactions from TikTok, and places go by views + 10 × (likes + comments +
shares + saves).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
