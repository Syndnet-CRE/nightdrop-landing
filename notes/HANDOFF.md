HANDOFF
Date: 2026-05-09
Repo: nightdrop-landing (deal-feed-landing/landing_page_audit)
Session objective: Redesign Nightdrop landing page — hero stretch, bento card overhaul, cursor-tracking hover effects
Status: COMPLETE

What was done:

Hero section (components/hero-section.tsx, app/page.tsx, components/header.tsx, components/dashboard-preview.tsx)
- Hero stretches edge-to-edge with 10px gap top/left/right
- Logo flush left, How It Works/Pricing/FAQ centered, Sign In/Sign Up Free flush right
- Removed `md:w-[1220px]` fixed width, removed `max-w-7xl mx-auto` from header inner
- 4 hero SVG gradients (3 linear + 1 radial) updated: middle stop now `--primary` (was `--primary-light` mint), outer stop now `--primary-dark` (was `--primary`). Eliminates pale mint wash, on-brand falloff.
- Dashboard preview rendered at 960x525 with `object-top` crop, pulled down 580px on desktop (was overlapping headline + button), z-index dropped to z-0 so headline + CTA sit on top

Bento section (components/bento-section.tsx + 6 bento/*.tsx)
- 6 cards with unique visuals (not skeleton clones):
  1. ai-code-reviews.tsx (Submit your buy box.) — buy-box card stack with Active/1 badge, day toggles MTWTFSS, stats grid (176/92%/0.84/30d), Pause + orange Edit, Last brief 5:59 AM
  2. real-time-previews.tsx (We run every night.) — dual panel: criteria yaml left, matched property card right (1402 Bouldin Ave, 0.91), green vertical connector (140px height, was 200)
  3. one-click-integrations-illustration.tsx (AI scores every match.) — 4×7 grid of 60×60 squares, 12px gap, alternating row offset (rows 2,4 shift left 36px), 9 active fills (84%/91%/0.78/67%/92% percentages, ChartBars/TrendUp/Target/Activity icons, 2 orange Alert borderline), overflow:visible so green glow bleeds upward
  4. mcp-connectivity-illustration.tsx (Distress signals surfaced.) — search panel + 7 signal rows (Tax delinquent/Lis Pendens/Absentee/Inactive entity/Lien filed Active + Long hold/Vacancy dim), centered (removed +12px offset)
  5. parallel-agents.tsx (Owner contact attached.) — 3 stacked task-style cards (phone 94%, email 88% orange, address 100%) with Patterson Holdings LLC meta
  6. easy-deployment.tsx (In your inbox by 6am.) — Nightdrop pipeline log (20 lines, 02:00 → 05:59:50) + Read your digest CTA with mail icon
- BentoCard typography: title text-2xl md:text-3xl font-bold, description text-white text-base
- Cursor-tracking edge glow: requestAnimationFrame mousemove on grid, per-card CSS vars --glow-x/y/opacity, box-shadow 18px offset × 28px blur × rgba(91,204,72, opacity*0.5), quadratic falloff (cardSize * 0.9), default opacity 0
- Per-card centered radial glow REMOVED — fully replaced by edge-tracking effect
- Card 3 grid bleeds horizontally past bento edges, no vertical clipping (276px in 288px container)

Cleanup
- All 13 em dashes removed across 7 files (replaced with commas/periods/rewrites)
- Vercel CLI references purged (log lines, aria-label, Deploy on Vercel button)
- Trailing 'streamline your operations.' fragment removed from bento-section subtitle
- Package name: deal-feed-landing → nightdrop-landing
- Card 2 title: 'We search every night.' → 'We run every night.'
- Timestamps unified to 5:59 AM across cards (matches "by 6am" marketing claim)
- Card 4 signal: 'No permits' → 'Lis Pendens · 8 months'

Build / deploy
- npm run build: PASS (174 kB First Load JS, static prerendered)
- All edits hot-reloaded clean in dev (port 3456)
- Committed: a6fb042 — pushed to origin/main
- GitHub remote updated: deal-feed-landing → nightdrop-landing (Syndnet-CRE org)
- Netlify deploys from main on push

What was NOT done:
- No CLAUDE.md in this repo yet
- nightdrop-web consolidation NOT executed (audit + plan exists in conversation history; landing kept separate for now)
- Card 5 (parallel-agents.tsx) is the simplest of the 6 cards; could be richened to match the others' density

Next session:
Resume polish on Nightdrop landing OR pivot to nightdrop-web consolidation
cd ~/deal-feed-landing/landing_page_audit && claude --dangerously-skip-permissions

Blockers for Brady (carried from earlier):
1. ANTHROPIC_API_KEY in ~/parcyl/parcyl-mcp-server/.env needs valid key with credits
2. Ask Adam: apply ETL enrichment on Render Neon branch (resolved_asset_type null in prod)
3. parcyl-mcp-server needs GitHub repo created and remote configured
4. Test deal-feed-dashboard Admin "Run Now" button on deployed Netlify
5. Decide: expose 9 scout views (v_scout_*) via chat?
