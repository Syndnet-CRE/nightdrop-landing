HANDOFF
Date: 2026-05-17
Repo: nightdrop-landing
Session objective: CLAUDE.md expansion + dev environment setup
Status: COMPLETE

Branch: claude/init-project-JbPIf (pushed to origin)
NOT merged to main.

What was done:

1. CLAUDE.md rewrite (commit 78414be)
   - Replaced the sparse previous CLAUDE.md with full architectural docs
   - Added: commands table, page section order, AnimatedSection pattern, WaitlistContext global state, waitlist API dual-POST architecture, required env vars table, brand color tokens, lib/config.ts startup-throw behavior
   - Removed: stale feat/landing-redesign-v2 branch notes and session rules from prior session
   - Added confirmed production URLs: landing=nightdropai.netlify.app, dashboard=nightdropaidashboard.netlify.app

2. Dev environment setup
   - Ran npm install (next binary was missing in container)
   - Created .env.local with NEXT_PUBLIC_APP_URL=https://nightdropaidashboard.netlify.app
   - Dev server started on port 3456 (npm run dev)
   - package-lock.json libc normalization committed (commit 067e4df) — harmless OS artifact

3. .env.local
   - Created but gitignored (.env* in .gitignore)
   - Must be recreated each new session with: NEXT_PUBLIC_APP_URL=https://nightdropaidashboard.netlify.app

Current state:
- Dev server running on http://localhost:3456
- All commits pushed to origin/claude/init-project-JbPIf
- Working tree clean
- NOT on main — needs PR + Brady review before merge

What was NOT done:
- PR not opened (brady to review locally first)
- Footer placeholders still unswapped: [contact@placeholder] and [CALENDLY_URL_PLACEHOLDER]
- Trial mechanics still landing copy only — not wired in backend
- No visual QA performed this session

Carried blockers for Brady (from prior session):
1. Real contact email + Calendly URL for footer-section.tsx
2. Confirm Operator 3-night trial deal-volume math (5 boxes × 5 deals × 3 nights = 75)
3. Trial mechanic wiring (card capture, billing webhook, 24h reminder email, dashboard tooltip)
4. ANTHROPIC_API_KEY in ~/parcyl/parcyl-mcp-server/.env needs valid key with credits
5. Ask Adam: apply ETL enrichment on Render Neon branch (resolved_asset_type null in prod)
6. Test deal-feed-dashboard Admin "Run Now" button on deployed Netlify

Next session:
1. Create .env.local with NEXT_PUBLIC_APP_URL=https://nightdropaidashboard.netlify.app
2. npm run dev → visual QA at port 3456
3. Open PR from claude/init-project-JbPIf → main
4. Swap footer contact + Calendly placeholders for real values
5. Wire trial mechanic on signup side

Start command:
cd ~/nightdrop-landing && claude --dangerously-skip-permissions
