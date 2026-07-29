# Repository instructions

## Formatting

- Do not run `pnpm exec prettier`; it makes the Git diff less readable.

## Tailwind CSS

- Use Tailwind CSS 4.1 or newer and prefer the latest stable release.
- Before upgrading Tailwind, read the official upgrade guide and v4 announcement, start from a clean worktree, run the official upgrade tool, review its changes, and test the application.
- Do not use `@apply`. Keep utilities in JSX, extract repeated patterns into components, and use CSS variables or `--spacing()` in custom CSS.
- Remove redundant utilities and breakpoint variants. Group related elements so responsive changes stay local.
- In flex and grid layouts, use `gap-*` instead of child margins or `space-x-*`/`space-y-*`.
- Prefer parent padding over trailing child margins, and prefer top/left margins unless conditional rendering makes bottom/right margins clearer.
- Use `min-h-dvh` instead of `min-h-screen`, `size-*` when width and height match, and named design-scale values instead of arbitrary values.
- Express line height as a fixed spacing modifier on the font size, such as `text-sm/6`; do not use `leading-*` or named line heights.
- Use opacity modifiers such as `bg-black/50`; never use the removed `*-opacity-*` utilities.
- Use the Tailwind v4 names: `shrink-*`, `grow-*`, `text-ellipsis`, `box-decoration-*`, `bg-linear-*`, `shadow-xs`, `drop-shadow-xs`, `blur-xs`, `backdrop-blur-xs`, `rounded-xs`, `outline-hidden`, and `ring-3` where they replace older utilities.
- Put light-mode utilities first. Use plain `dark:` variants before interactive variants, such as `dark:hover:*`.
- Prefer Tailwind theme variables, `@theme`, container queries, and the v4 gradient, text-shadow, and mask utilities over custom equivalents.
- Use nesting only when the parent itself has styles; avoid empty parent selectors.
- Use data attributes for complex state styling.

