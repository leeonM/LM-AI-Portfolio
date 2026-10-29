# CLAUDE.md

AI Solutions Portfolio — a single-page Next.js landing page linked from my CV. It is for recruiters and hiring managers hiring for AI Implementation, AI Enablement, AI Workflow Automation and AI Transformation roles.

**Core message:** I do more than use AI tools. I identify operational problems, build practical solutions, connect systems and support implementation.

The full original brief is in [prompt.md](prompt.md). The workflow infographics in [workflow-diagrams/](workflow-diagrams/) are the **source of truth** for each solution's architecture, steps and figures.

## Commands

```bash
npm run dev     # local dev server at http://localhost:3000
npm run build   # production build (must pass before committing)
npm run lint
```

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- `lucide-react` for icons. Keep dependencies minimal.
- No backend, database, API keys or analytics.

## Where things live

| Path | Purpose |
|---|---|
| `src/config/site.ts` | **Personal details:** name, initials, email, LinkedIn. Edit this first. |
| `src/data/solutions.ts` | All solution content: cards, workflows, modal detail sections |
| `src/data/approach.ts` | Hero capabilities + "How I approach AI implementation" stages |
| `src/components/` | `Nav`, `Hero`, `SolutionCard`, `WorkflowDiagram`, `TechTag`, `SolutionModal`, `Approach`, `Footer` |
| `public/workflows/` | Copies of the workflow infographics shown in the detail modals |

The content lives in `src/data`, not in the components. To change copy, edit the data files.

## Page structure (single page, no sub-pages)

1. Sticky nav: monogram, "AI SOLUTIONS PORTFOLIO", Solutions / Approach / About anchors (no Resume button)
2. Hero: eyebrow, headline, supporting text, four capability items
3. Four solution cards in a 2-column grid on desktop, stacked on mobile
4. "How I approach AI implementation": five compact stages
5. About / footer: closing statement, email, LinkedIn, WeOutside.ai

Each card: number + category, title, one-line description, impact metric, workflow diagram, My role, Risk & governance, Tech tags, "View full details". The details open an accessible modal (Esc closes it, focus is trapped, it works on mobile) with these sections: Business problem, Solution architecture, Implementation, Risk & governance, Adoption & improvement, Impact & lessons learned.

## Design rules

- Visual reference: `workflow-diagrams/AI Solutions Portfolio Dashboard.png`
- Light background, dark navy text, blue/purple accents, green for business impact
- Rounded cards, subtle borders, modern sans-serif, minimal motion
- Avoid robot/generic AI imagery, glow effects, heavy gradients, big text blocks and template look
- A recruiter should be able to scan the page in 60–120 seconds

## Accuracy and confidentiality (non-negotiable)

- **Never invent** metrics, adoption figures, approvals, security controls, integrations or responsibilities. Use only prompt.md and the workflow diagrams.
- Label estimates as estimates (e.g. "est.").
- Keep these distinct: what I **built**, what I **assessed**, what the wider team did, and what was **recommended**. Don't present an assessed control as an implemented one.
- Never name or show logos of the enterprise employers. Use the categories (Royalty Operations, Reporting & Insights, Research & Insights, Personal Project).
- Mark missing details with a visible `[Placeholder: …]` instead of filling them in.
- Contact details live only in `src/config/site.ts`. Don't add other profiles or links that the user hasn't supplied.
- Survey Coding: don't state a specific response count or production performance.
