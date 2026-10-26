# src/shared

This folder simulates our shared npm package.

Rules:
- Nothing in here may import from outside `src/shared` (npm packages are fine).
- No app-specific logic, API calls, Redux, routing or hard-coded domain data.
- Everything public is exported from `index.ts`.

`npm run check:boundaries` enforces these rules.
