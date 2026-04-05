# Pravita Hub App

React + TypeScript frontend for Pravita Hub, built with Vite.

This app runs against the local backend in the sibling repo:

- `/Users/guevarra/workspace/pravita-hub-api`

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
