This folder contains templates and guidance to complete Week 7: Deployment and DevOps Essentials.

What's included

- `.env.example` - environment variable names for frontend and backend
- `backend/Dockerfile` - production-ready Dockerfile for an Express app
- `backend/Procfile` - Heroku Procfile example
- `backend/healthcheck.js` - small Express middleware for health checks
- `backend/production-logger.js` - Winston logger setup for production
- `frontend/netlify.toml` - Netlify configuration with caching headers
- `.github/workflows/ci.yml` - CI workflow: lint, tests, build
- `.github/workflows/cd-backend.yml` - CD workflow template for deploying backend (Heroku/Render)
- `.github/workflows/cd-frontend.yml` - CD workflow template for deploying frontend (Vercel/Netlify)
- `sentry-setup.md` - notes and snippets to integrate Sentry

How to use

1. Copy templates into your project, adjust paths and commands (test/build scripts) to match your repository.
2. Add the required secrets to GitHub (e.g., `HEROKU_API_KEY`, `NETLIFY_AUTH_TOKEN`, `VERCEL_TOKEN`, `SENTRY_DSN`).
3. Update `Dockerfile` user/app names and ports if needed.
4. Deploy the backend first, then update frontend environment variables to point to the deployed API URL.

Provider choices

If you want, tell me which providers you'll use for backend (Heroku, Render, Railway) and frontend (Vercel, Netlify, GitHub Pages) and I will customize the workflows to match and wire secrets and steps.

Next steps I can take for you

- Customize workflows for chosen platforms and push them to your repo.
- Create a `.env.production` example and rewrite README with step-by-step deployment commands for a selected provider.
- Help you debug CI failures locally or in GitHub Actions.
