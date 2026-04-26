# FocusFlow

A lightweight task manager built with **React + Vite**. FocusFlow lets you organize tasks into lists, quickly filter/search, and edit task details (including **due dates** and **subtasks**) with changes persisted in **localStorage**.

## Features

- **Tasks**: add, complete, edit, and delete tasks
- **Task details panel**: edit title, description, list, and due date
- **Subtasks**: add and complete subtasks (up to **6** per task)
- **Lists**: create and use custom lists (up to **4** total); stored in localStorage
- **Preset views**: **All**, **Today**, and **Overdue** (based on due date)
- **Search**: filter tasks by title from the sidebar search box
- **Toasts**: success/warning feedback for common actions
- **Theme toggle**: light/dark mode in Settings
- **Sign out**: clears localStorage and reloads the app

## Tech stack

- **React 19**
- **Vite 6**
- **Tailwind CSS 4**
- **React Router 7**
- **lucide-react** (icons)

## Getting started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (ships with Node.js)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the URL printed in the terminal (Vite typically uses `http://localhost:5173`).

## Scripts

- **dev**: `npm run dev` — start the dev server (runs with `--host`)
- **build**: `npm run build` — build for production (outputs to `dist/`)
- **preview**: `npm run preview` — preview the production build locally
- **lint**: `npm run lint` — run ESLint

## Data persistence

FocusFlow stores data in your browser using `localStorage`:

- **Tasks**: stored under the `tasks` key
- **Lists**: stored under the `lists` key
- **Theme**: stored under the `theme` key

Use the **Sign Out** button in the sidebar to clear localStorage and reset the app.

## Deployment notes (GitHub Pages)

This repo includes `gh-pages`, but Vite builds to `dist/` by default. If you deploy to GitHub Pages, ensure your deploy command publishes `dist/` (for example: `gh-pages -d dist`) and set Vite `base` in `vite.config.js` when deploying under a subpath.
