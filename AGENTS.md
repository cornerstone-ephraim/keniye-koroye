# Project engineering rules

These are lasting rules for the Keniye website. Read `CLAUDE.md` for the current
redesign scope, accepted decisions, checkout caveats, and remaining work.
Follow explicit user instructions and any applicable directory-specific rules.

## Stack and setup

- Use Next.js App Router, React, TypeScript, Tailwind CSS v4, and Bun.
- Inspect `package.json`, the lockfile, and installed versions before changing
  dependencies or writing version-dependent code.
- Preserve Bun and `bun.lock`; do not introduce another package manager.
- Inspect the actual checkout before working. The redesign handoff identifies
  an older worktree and a newer main checkout; do not overwrite newer work.

## Architecture

- Keep `app/` focused on routes, metadata, and page composition.
- Keep UI in `components/` and shared content/configuration in `lib/`.
- Preserve established feature folders and read `docs/frontend-foundation.md`
  when present before changing module organization.
- Keep modules focused. Extract components, hooks, utilities, and types when
  responsibilities become distinct. Around 300 lines is a review signal, not
  a reason to split cohesive code mechanically.
- Avoid monolithic pages and unnecessary client component boundaries.
- Use the existing metadata helpers and shared infrastructure.
- When available, use the `audit-react-architecture` skill for new modules or
  organizational changes. If unavailable, follow the concrete rules here.

## Shared UI and Tailwind

- Inspect `components/ui/` and `components.json` before creating common UI.
- Reuse existing components and compose them for the required design.
- When a suitable shadcn component is missing locally, add it through the
  project's configured shadcn workflow rather than building a duplicate.
- Preserve the project's configured primitive library and visual styling.
- Use canonical utilities supported by the installed Tailwind version, such
  as `aspect-3/4` in Tailwind v4. Do not replace valid modern utilities with
  equivalent arbitrary values. Use custom values when genuinely needed.

## Design and content

- Consume existing semantic color tokens, including `ink`, `paper`, `cream`,
  `accent`, `muted`, and `rule`, rather than scattering raw colors.
- Preserve the project's meaning of `muted` as muted text.
- Follow the established typography, neutral palette, and red accent. Use
  comfortable reading typography for paragraphs and mono for short metadata.
- If new brand colors are explicitly introduced, use `build-color-system`
  when available and establish ordered OKLCH scales and semantic tokens.
- Derive layouts from content, supplied references, and brand identity.
- Avoid decorative numbering, fake coordinates, meaningless technical labels,
  fabricated statistics/status indicators, and repetitive template ornamentation.
- Use numbering only for genuine sequences, rankings, quantities, chapters,
  supplied references, or an explicit user request.
- Avoid excessive em dashes and repeated tiny uppercase labels.
- Never invent credentials, awards, quotes, project results, prices, deadlines,
  availability, response times, or patent status. Preserve factual meaning.
- Distinguish patent-pending claims from registered designs. Require source
  evidence before changing legal-status wording or registration details.
- Use authentic assets and preserve important image details and proportions.

## Formatting

- Before substantial JavaScript/TypeScript work, inspect formatter configs,
  scripts, and conventions. Preserve the existing formatter.
- The latest redesign uses Prettier and `prettier-plugin-tailwindcss`, configured
  in `prettier.config.mjs` with `tailwindStylesheet: "./app/globals.css"`.
  Confirm that configuration exists in the checkout before using it.
- Format touched files with the configured formatter. Allow the Tailwind plugin
  to maintain class ordering; avoid unrelated formatting-only changes.
- Preserve ignore entries and existing scripts. Do not install a second formatter.
- If a project truly has no formatter, set up Prettier before substantial work
  using the established package manager. For Bun, pin Prettier with
  `bun add --dev --exact prettier`; add `prettier-plugin-tailwindcss` only if
  Tailwind is installed. Use semicolons, double quotes, two spaces, trailing
  commas, and an 80-character width. Configure the actual Tailwind stylesheet.
- Ensure equivalent `format` and `format:check` scripts exist without
  overwriting existing commands. Ignore only applicable generated artifacts.

## Navigation and motion

- Normal route navigation opens the destination at the top unless scroll
  restoration is explicitly required.
- Never visibly smooth-scroll a newly mounted route from an inherited position.
- Inspect and preserve the existing route-scroll-reset mechanism; avoid
  competing reset implementations or global smooth scrolling for route changes.
- Keep below-the-fold content in its initial animation state until the user
  meaningfully reaches it. Use meaningful intersection thresholds and
  conservative margins rather than aggressive pre-triggering.
- Route mounting, scroll restoration, layout shifts, and programmatic scrolling
  must not prematurely complete entrance animations.
- Verify animation timing by scrolling normally from top to bottom.
- Support reduced motion. Use purposeful, restrained animation and natural
  scrolling without scroll hijacking or forced snapping.
- Sticky sections must clear navigation, respect section boundaries, and work
  in stacked mobile layouts.

## Accessibility and responsive behavior

- Maintain semantic headings and landmarks; avoid nested or duplicate main
  landmarks when the root layout already supplies one.
- Use links for navigation and buttons for actions, with visible focus states.
- Ensure keyboard operation, accurate alt text, readable contrast, and suitable
  touch targets. Do not expose decorative images redundantly to screen readers.
- Check narrow phones, tablets, and desktop for overflow, crops, and readability.
- Provide responsive image sizes and stable dimensions/aspect ratios to avoid
  layout shifts. Reserve image priority for genuinely important initial content.

## Verification

- For implementation work, run the applicable lint, TypeScript, formatting, and
  production build checks using the current repository scripts:

  ```sh
  bun run lint
  bunx tsc --noEmit
  bun run format:check
  bun run build
  ```

- Format touched files first. For documentation-only changes, formatting and
  diff validation are sufficient; do not run unrelated application tests.
- Visually verify changed interfaces on desktop and mobile, including keyboard
  use, reduced motion, navigation, and scroll-triggered effects.
- Check relevant internal/external links, CTAs, image paths, and documents.
- Check for new browser-console errors, broken images, and horizontal overflow.
- Preserve published routes or provide deliberate compatibility behavior when
  renaming them. Keep metadata and existing sitemap/robots setup consistent.
- Distinguish pre-existing failures from regressions. Never claim checks passed
  without running them. Report blocked or unverified checks precisely.

## Git and collaboration

- Inspect status and existing diffs before editing. Preserve user changes.
- Do not reset, stash, delete, or revert unrelated work to obtain a clean tree.
- Make focused changes and avoid unrelated cleanup or dependency upgrades.
- Commit, push, and deploy only when requested. Do not include unrelated edits
  in a task commit unless explicitly authorized.
- For authorized commits, use Conventional Commits and the `commit-message`
  skill when available.
- Proceed with routine reversible implementation choices; ask only when
  essential information or a material product decision is missing.
- Report what changed, why, what was verified, and any remaining limitations.
