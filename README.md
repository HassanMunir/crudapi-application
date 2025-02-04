# Node.js CI Application

This repository is set up with GitHub Actions for Continuous Integration (CI) using the following tools:

- **Node.js** for backend development
- **PostgreSQL** as the database
- **Docker** for containerization
- **Jest** for testing
- **Prettier** for code formatting
- **Supertest** for API testing
- **ESLint(SAST)**: Analyzes the codebase for linting errors and enforces coding standards.
- **Audit(SAST)**: Scans the project dependencies for known vulnerabilities.

The CI workflow automatically runs tests, builds Docker images, checks code formatting, and uploads the coverage report to GitHub Actions for every push to the `main` branch and for every pull request.

## Workflow Overview

### Jobs

The pipeline contains the following jobs:

#### **Test**

- Runs on `ubuntu-latest`.
- Starts a PostgreSQL service container.
- Installs Node.js and dependencies.
- Builds a Docker image for the app.
- Runs tests with Jest and generates a coverage report.
- Verifies code formatting with Prettier.
- Uploads the coverage report as an artifact.
