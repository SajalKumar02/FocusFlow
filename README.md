# FocusFlow

FocusFlow is a sleek, lightweight task manager built with React and Vite. Organize your tasks into lists, manage subtasks, add due dates, filter with search, and stay focused—your changes persist automatically in your browser.

---

## 🌍 Live Demo

Access the deployed app here: [https://focusflow34.netlify.app/](https://focusflow34.netlify.app/)

---

## ✨ Features

- **Task Management:** Add, complete, edit, and delete tasks.
- **Details Page:** Modify task titles, descriptions, lists, and due dates.
- **Subtasks:** Add and manage up to 6 subtasks per task.
- **Custom Lists:** Create up to 4 custom lists, all stored locally.
- **Preset Views:** Instantly switch between All, Today, and Overdue views.
- **Search & Filter:** Quickly filter tasks by title from the sidebar.
- **Toast Notifications:** Instant feedback for actions—success/error/warning.
- **Theme Switcher:** Toggle between light and dark mode in Settings.
- **Sign Out:** One-click reset—clears all local data and reloads the app.

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router 7](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/) (icons)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Run the App Locally

Start the dev server:

```bash
npm run dev
```

Open the printed URL (e.g., [`http://localhost:5173`](http://localhost:5173)) in your browser.

---

## 📦 Scripts

- `dev` — Start the dev server
- `build` — Build for production (`dist/` folder)
- `preview` — Preview your production build locally
- `lint` — Run ESLint checks

---

## 💾 Data Persistence

All data is saved privately in your browser using `localStorage`:

- Tasks: under the `tasks` key
- Lists: under the `lists` key
- Theme: under the `theme` key

To delete all app data, go to **Settings** and click the button to delete all data.

---

Happy organizing with FocusFlow! 🚀
