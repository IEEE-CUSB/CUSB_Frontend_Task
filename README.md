# IEEE CUSB: Frontend Developer Task

Thanks for applying to the frontend team! This task is a small version of the real work we will do this season: our website already exists, and we are going to **split it into separate apps (Main site, Admin portal, HR portal) that share a common package**, add role protection, and build dashboards.

## The project

A tiny website built with React, TypeScript, Redux Toolkit + RTK Query, React Router and Tailwind CSS.

- `/` , `/events`, `/events/:id`: public pages.
- `/login`: demo login (Member / HR / Admin, no password).
- `/admin`: Admin portal (manage events).
- `/hr` and `/hr/applications`: HR portal (recruitment).

There is no real backend. `src/api/fakeBaseQuery.ts` and `src/api/mockData.ts` **are the backend**. Do not edit those two files. The fake backend checks roles on every request (like our real one), so some requests will fail with `403`, `404` or `409` and your UI must deal with that.

## Setup

```bash
npm install
npm run dev              # start the app
npm test                 # run tests
npm run build            # type-check + build
npm run check:boundaries # architecture rules (see below)
```

Log in with the buttons on `/login`, and click around as each role before you start coding.

## Your tasks

### Part 1: Read the codebase

Fill in `SUBMISSION.md` sections 1 and 2 in your own words: folder structure, routing, state management, the API layer, and which components are generic vs app-specific.

### Part 2: Extract a generic `DataTable`

`ApplicationsTable` (HR) and `EventsTable` (Admin) are two copies of the same idea. Create a generic `DataTable` in `src/shared` and export it from `src/shared/index.ts`.

- It must be generic over the row type (no `any`).
- It must know nothing about applications, events, Redux, routing or the API.
- It must support custom cell rendering, and an empty state message.
- **You** design its props. Explain your choices in `SUBMISSION.md` section 3.

Then replace the duplicated table markup in **both** `ApplicationsTable` and `EventsTable` with your `DataTable` (they can stay as thin wrappers, or be removed, your call). Add tests for `DataTable` (see `StatusBadge.test.tsx` for the setup).

### Part 3: Protect the portals

Create a role guard and use it in `App.tsx`:

- `/admin` is only for `admin`. `/hr/*` is only for `hr`.
- Logged out: send the user to `/login`, and after logging in bring them back to the page they wanted.
- Logged in with the wrong role: send them to `/`.
- Remember: the guard is **UX only**. The backend is the real protection. If a request still returns `403`, the page must show a clear message and not crash.

### Part 4: Fix the HR review flow

On `/hr/applications`:

- After Accept or Reject, the table must update **without reloading the page**.
- An accepted application cannot be changed back (the server returns `409`). Show the user a clear message when an action fails.
- Prevent double clicks while a request is running.

### Part 5: HR dashboard (`/hr`)

Build the dashboard from the applications data:

- Total applications, and counts per status.
- Applications per committee as a horizontal bar chart (**no chart library**, Tailwind only).
- Acceptance rate.
- Loading and error states.
- It must stay correct after accepting or rejecting applications.

## Architecture rules

We will later move `admin/` and `hr/` into separate repositories. So:

- Admin code must not import HR code, and HR code must not import Admin code.
- `src/shared` must not import from outside `src/shared`.

`npm run check:boundaries` checks this and must pass.

## Bonus (optional, pick any)

- Lazy-load the admin and HR routes with `React.lazy` and `<Suspense>`.
- Add a `Seo` component (e.g. with `react-helmet-async`): unique title and description per page, a self-referencing canonical, and `noindex` on login/admin/HR pages.
- Sorting or searching in `DataTable`.

## Rules

- Commit as you work, with small commits and clear messages. We read your history.
- `npm run build`, `npm test` and `npm run check:boundaries` must all pass.
- You may use AI tools or any documentation. **But you will be asked to walk us through your code in the interview.**
- Do not share your solution with other applicants.
- A partial submission is fine, but be ready to explain what you built.

## How to submit

1. Click **Use this template**, then **Create a new repository**, and make it **Private**.
2. Invite `mariamramadan0306 , AnneOmer05 and Mohamed-Kamal0` as a collaborators.
3. Fill in `SUBMISSION.md`.
4. Send the repository link to `https://forms.gle/z1Kt1PM6Vxohwo7s5` before `Sun, 1 Nov, 11:59 PM`.
