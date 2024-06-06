# Registration-Form-Automation-Testing-Project

This is simple React+Vite application with implemented Cypress tests and GitHub workflow used. This template provides a minimal setup to download and run the application, run tests and GitHub Action Workflow. 

## Table of Contents
    - Installation
    - Running the Application
    - Running Tests
    - GitHub Actions Workflow

## Installation
To get started, clone the repository and install dependencies:

```bash
git clone https://github.com/ModJuska123/Registration-Form-Automation-Testing-Project/tree/main
cd your-repo-name
npm install
```
# Running the Application
Start the development server:

bash```
npm run dev
```

Navigate to http://localhost:3000 to see the application.

# Running Tests
This project uses Cypress for end-to-end testing.

Open Cypress Test Runner

bash```
npm run cy:open
```

# Run Cypress Tests in Headless Mode

bash```
npm run cy:run
```

GitHub Actions Workflow
GitHub Actions is used for CI/CD. The workflow is in .github/workflows.

# Workflow Configuration
.github/workflows/ci.yml:

bash```
yaml
Copy code
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm run test

      - name: Run Cypress tests
        run: npm run cy:run
```


