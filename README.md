# Pravita Hub App

React + TypeScript frontend for Pravita Hub, built with Vite.

This app runs against the local backend in the sibling repo:

- `/Users/guevarra/workspace/pravita-hub-api`

Additional implementation notes live in:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## How the app is built

`pravita-hub-app` is a Vite + React + TypeScript application.

Build and runtime flow:

- Vite handles local development and production bundling
- TypeScript handles type-checking
- the app generates a TypeScript Axios client from the checked-in OpenAPI spec before `dev`, `build`, and `typecheck`
- the browser app talks to `pravita-hub-api` using that generated client plus a shared Axios wrapper
- the full app is wrapped in `DSProvider` from `pravita-react-ds` so Mantine components inherit the Pravita theme

Important scripts:

```bash
pnpm dev
pnpm build
pnpm preview
pnpm typecheck
pnpm test
pnpm lint
```

OpenAPI generation script:

```bash
pnpm openapi:generate
```

## How `pravita-hub-app` consumes `pravita-react-ds`

The app consumes the design system in these ways:

- `pravita-react-ds` is installed as a GitHub package dependency
- `DSProvider` wraps the full app in `src/main.tsx`
- Mantine components used directly in the app inherit DS theme values through that provider
- the app is ready to consume shared DS components, but today it mainly uses the DS as a theming layer

Current important detail:

- the app does not use the sibling `pravita-react-ds` folder directly as a workspace link
- it consumes the GitHub dependency version declared in `package.json`

## Setup flow

Recommended local setup order:

1. Install required tools.
2. Install frontend dependencies in `pravita-hub-app`.
3. Create `.env.local` for the app.
4. Start PostgreSQL for `pravita-hub-api`.
5. Start the backend API.
6. Start the frontend app with `pnpm dev`.

Short version:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm install
```

Create `.env.local`:

```env
VITE_ENVIRONMENT=development
VITE_PRAVITA_ADMIN_API_BASE_URL=http://localhost:9001
```

Start backend database:

```bash
cd /Users/guevarra/workspace/pravita-hub-api
docker compose -f docker-compose.db.yml up -d
```

Start backend API:

```bash
cd /Users/guevarra/workspace/pravita-hub-api
mvn spring-boot:run
```

Start frontend:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm dev
```

## Build flow

Local production build:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm build
```

What `pnpm build` does:

1. regenerates the OpenAPI client
2. runs TypeScript project build checks
3. creates the Vite production bundle

Preview the production build locally:

```bash
pnpm preview
```

## GitHub Actions build and deploy flow

This repo uses GitHub Actions for CI, OpenAPI validation, and GitHub Pages deployment.

### `pravita-hub-app` workflows

Current workflows in this repo:

- `.github/workflows/ci.yml`
- `.github/workflows/gh-pages.yml`
- `.github/workflows/validate-openapi.yml`

### CI workflow

`ci.yml` runs on:

- pushes to `main`
- pull requests targeting `main`

What it does:

1. checks out the repo
2. installs `pnpm` 9
3. sets up Node 20
4. installs dependencies with `pnpm install`
5. runs `pnpm lint`
6. runs `pnpm build`

Important detail:

- `pnpm build` already includes OpenAPI client generation before the TypeScript and Vite build steps

### OpenAPI validation workflow

`validate-openapi.yml` runs on:

- pushes to `main`
- pushes to `develop`
- pull requests targeting `main`
- pull requests targeting `develop`
- manual workflow dispatch

What it does:

1. checks out the repo
2. sets up Node 20
3. installs `swagger-cli`
4. finds YAML files under `openapi/`
5. validates each OpenAPI file with `swagger-cli validate`

Purpose:

- catch broken OpenAPI YAML before frontend generation or deployment

### GitHub Pages deployment workflow

`gh-pages.yml` runs on:

- pushes to `main`

What it does:

1. checks out the repo
2. installs `pnpm` 9
3. sets up Node 20
4. installs dependencies
5. runs `pnpm build`
6. copies `dist/index.html` to `dist/404.html` for SPA routing fallback
7. uploads the `dist/` folder as the Pages artifact
8. deploys that artifact to GitHub Pages

Purpose:

- publish the built Vite app to GitHub Pages after changes land on `main`

## Related GitHub Actions in `pravita-react-ds`

The design system repo has its own separate workflows:

- `.github/workflows/ci.yml`
- `.github/workflows/storybook-pages.yml`
- `.github/workflows/tag-release.yml`

### DS CI

The DS `ci.yml` runs lint and build on:

- pushes to `main`
- pull requests targeting `main`

### DS Storybook deploy

The DS `storybook-pages.yml` builds Storybook and deploys it to GitHub Pages on:

- pushes to `main`

### DS tag release

The DS `tag-release.yml` is manually triggered and can:

- bump the DS package version if no version is provided
- commit the version bump
- create a `v<version>` git tag
- push the tag to origin

Why this matters for `pravita-hub-app`:

- `pravita-hub-app` consumes `pravita-react-ds` from GitHub
- when the DS version changes, the app needs its dependency reference updated before it will consume the new DS version

## Consumption guidelines

Use these rules when deciding whether code belongs in `pravita-hub-app` or `pravita-react-ds`.

### Put code in `pravita-react-ds` when:

- the UI primitive should be reused across multiple Pravita apps
- you are changing design tokens, theme defaults, spacing, radius, or typography
- you are creating a reusable presentational component

### Put code in `pravita-hub-app` when:

- the component is tied to routing, auth, API calls, page workflows, or backend DTOs
- the UI is page-specific
- the styling is specific to Hub layouts or screens

### Prefer DS-first for reusable UI

If a component pattern is likely to repeat, promote it into the DS instead of copying it inside the app.

### Keep backend-aware logic out of the DS

Do not move these concerns into `pravita-react-ds`:

- auth/session logic
- Axios clients
- OpenAPI DTOs
- route guards
- feature stores
- page-specific workflows

## Working on both repos

When changing the design system and the app together, remember:

- `pravita-hub-app` currently points to a GitHub version of `pravita-react-ds`
- local edits in the sibling DS repo are not automatically consumed by the app

Typical workflow:

1. make the DS change in `pravita-react-ds`
2. verify the DS locally
3. publish or tag the DS version to consume
4. update the DS dependency in `pravita-hub-app`
5. run `pnpm install`
6. verify the app

## Local prerequisites

You need these tools installed:

- Node.js 20+
- `pnpm` 9+
- Git
- Java 21+ and Maven 3.8+ if you want to run the backend locally
- Docker Desktop if you want to start the backend database with Docker Compose

## How to install the tools

### macOS with Homebrew

Install Homebrew if you do not already have it:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install the required tools:

```bash
brew install git node pnpm openjdk@21 maven
brew install --cask docker
```

After installing Java, add it to your shell profile if needed:

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk@21/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Start Docker Desktop once after installation so `docker compose` is available.

### Verify tool installation

Run:

```bash
git --version
node -v
pnpm -v
java -version
mvn -v
docker version
docker compose version
```

## Project setup

### 1. Install frontend dependencies

From the app directory:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm install
```

Notes:

- This project depends on `pravita-react-ds`, which is installed from GitHub during `pnpm install`.
- Network access is required unless the package is already cached locally.

### 2. Configure frontend environment variables

Create `/Users/guevarra/workspace/pravita-hub-app/.env.local` with:

```env
VITE_ENVIRONMENT=development
VITE_PRAVITA_ADMIN_API_BASE_URL=http://localhost:9001
```

The app reads these values from `src/env.ts`.

## Running the backend locally

The frontend expects the backend API at `http://localhost:9001`.

### 1. Start the database

```bash
cd /Users/guevarra/workspace/pravita-hub-api
docker compose -f docker-compose.db.yml up -d
```

### 2. Run the API

If the backend repo does not already have its own `.env`, create one in `/Users/guevarra/workspace/pravita-hub-api` with at least:

```env
POSTGRES_DB=pravitadb
POSTGRES_USER=pravitauser
POSTGRES_PASSWORD=pravitapass
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5433/pravitadb
SPRING_DATASOURCE_USERNAME=pravitauser
SPRING_DATASOURCE_PASSWORD=pravitapass
JWT_SECRET=replace-with-a-real-secret
```

Then start the API:

```bash
cd /Users/guevarra/workspace/pravita-hub-api
mvn spring-boot:run
```

Backend URLs:

- API: `http://localhost:9001`
- Swagger UI: `http://localhost:9001/swagger-ui.html`

## Running the frontend locally

Start the app:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm dev
```

Open the URL printed by Vite, usually:

- `http://localhost:5173`

## Local admin login

The backend seed data includes a default local admin account:

```text
Email: admin@pravita.com
Password: Pravita123$$
```

Notes:

- The seeded admin email is defined in the backend Liquibase changelog.
- If this login does not work, your local database may contain older data. Recreate the local database and rerun the backend migrations.

## Important local behavior

- `pnpm dev` runs `pnpm openapi:generate` before starting Vite.
- The OpenAPI client is generated from the checked-in file at `openapi/hub-api-docs.yaml`.
- The frontend can start without the backend running, but login and API-backed pages will not work until the backend is available.

## Useful commands

From `/Users/guevarra/workspace/pravita-hub-app`:

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm test
pnpm typecheck
```

## Troubleshooting

### `pnpm install` fails

Check:

- you have internet access
- Git is installed
- Node and `pnpm` versions meet the requirements

### `pnpm dev` fails during OpenAPI generation

Make sure dependencies installed correctly:

```bash
cd /Users/guevarra/workspace/pravita-hub-app
pnpm install
```

Then retry:

```bash
pnpm dev
```

### The app loads but API requests fail

Check:

- the backend is running on `http://localhost:9001`
- `.env.local` contains the correct `VITE_PRAVITA_ADMIN_API_BASE_URL`
- the database container is up

### `docker compose` is not found

Open Docker Desktop and wait for it to finish starting, then rerun:

```bash
docker compose version
```
