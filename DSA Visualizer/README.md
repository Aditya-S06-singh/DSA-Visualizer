# DSA Visualizer

This repository is now organized into a frontend and backend structure for the DSA Visualizer application.

## Project structure

- frontend/: React + Vite application
  - src/components/: UI panels such as Navbar, Editor, Console, Variables, Controls, and Sidebar
  - src/animations/: visualization engines and animation components
  - src/context/, src/hooks/, src/services/, src/utils/, src/styles/: supporting app modules
- backend/: Spring Boot service scaffold for parser and animation APIs

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
```
