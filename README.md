# 🏠 Pravita Hub App (`pravita-hub-app`)

**Pravita Hub App** is a React + TypeScript application built with **Vite** that **consumes the shared design system** package [`pravita-react-ds`].  
It’s the main “host” app that uses the central UI library and is deployed via **GitHub Pages**.

---

## 🚀 Tech Stack

- ⚛️ **React 19** + **TypeScript**
- ⚡ **Vite** for fast dev & bundling
- 🎨 **Mantine** for underlying UI primitives
- 📦 **pravita-react-ds** as the shared design system
- 📄 Deployed to **GitHub Pages** via GitHub Actions

---

## 1. Prerequisites

- **Node.js**: v20+
- **pnpm**: v9+
- **Git**

Check:

```bash
node -v
pnpm -v
git --version
```

---

## 2. Getting Started

Clone the repo:

```bash
git clone https://github.com/<your-username>/pravita-hub-app.git
cd pravita-hub-app
pnpm install
```

> Replace `<your-username>` with your GitHub username.

---

## 3. Relationship to `pravita-react-ds`

This app depends on the shared design system package:

```jsonc
"dependencies": {
  "pravita-react-ds": "^0.1.0",
  "@mantine/core": "^8.3.9",
  "@mantine/hooks": "^8.3.9",
  "@mantine/notifications": "^8.3.9",
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

- UI is built using components from `pravita-react-ds`.
- The app provides the required peer dependencies (React + Mantine).
- When the design system is updated and published, this app can upgrade via:

```bash
pnpm update pravita-react-ds
# or
pnpm add pravita-react-ds@<specific-version>
```

---

## 4. Project Structure (high level)

```txt
src/
  main.tsx        # App bootstrap, wraps <App /> with DSProvider
  App.tsx         # Main layout / routing entry
  components/     # App-specific components (if any)
  pages/          # Feature pages (optional, if you add routing)
  assets/         # Static assets
  index.css       # Global styles

vite.config.ts    # Vite config (includes base for GitHub Pages)
```

Key integration points:

- `src/main.tsx`:
  - imports `@mantine/core/styles.css`
  - imports `DSProvider` from `pravita-react-ds`
  - renders `<DSProvider><App /></DSProvider>`

- `src/App.tsx`:
  - imports and uses `Button` (and other components) from `pravita-react-ds`.

---

## 5. Scripts

All commands are run from the project root:

```bash
pnpm dev       # start Vite dev server
pnpm build     # build for production
pnpm preview   # locally preview production build
pnpm lint      # run ESLint (if configured)
```

### Dev server

```bash
pnpm dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

---

## 6. Using the Design System in the Hub App

### Entry point: `main.tsx`

Example structure:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';

import App from './App';
import { DSProvider } from 'pravita-react-ds';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DSProvider>
      <App />
    </DSProvider>
  </React.StrictMode>,
);
```

### Using DS components in `App.tsx`

```tsx
import { Button } from 'pravita-react-ds';

function App() {
  return (
    <main
      style={{
        padding: '24px',
        fontFamily:
          "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1>Pravita Hub App</h1>
      <p>This app is using the shared Pravita React Design System.</p>

      <section
        style={{
          marginTop: '16px',
          display: 'flex',
          gap: '12px',
        }}
      >
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="subtle">Subtle</Button>
      </section>
    </main>
  );
}

export default App;
```
---

## 7. Updating the Design System Version

When `pravita-react-ds` publishes a new version:

1. In `pravita-hub-app/package.json`, bump the version:

   ```json
   "pravita-react-ds": "^0.2.0"
   ```

2. Install:

   ```bash
   pnpm install
   ```

3. Run:

   ```bash
   pnpm dev
   ```

4. If everything looks good, commit and push to trigger deployment.

---

## 8. Development Workflow

Typical local workflow:

1. Make UI changes in **pravita-react-ds**
2. Publish a new DS version (e.g. `0.2.0`)
3. In **pravita-hub-app**:
   - bump `pravita-react-ds` version
   - `pnpm install`
   - `pnpm dev` to verify
4. Commit + push to `main` to deploy to GitHub Pages.

```env
# .env.local 
API_BASE_URL=http://localhost:9001
```

---

## 10. Future Improvements

- Shared routing/layout patterns via the design system
- Tenant-based theming for Hub using DS tokens
- Central auth and navigation components
- CI checks (lint, tests) on push / PR
- make the left nav route-aware (active state based on react-router), or 
- add a collapsible sidebar for smaller screens.
