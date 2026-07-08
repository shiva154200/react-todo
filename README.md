# 📝 TaskMaster - React Todo List Application

A clean, modern, and responsive Todo List web application built with **React**, **Vite**, **JavaScript**, and **CSS**.

---

## ✨ Features

- **Add New Tasks**: Quickly add tasks with validation (prevents empty tasks).
- **Mark as Completed**: Toggle task completion with custom checkboxes, visual checkmarks, and strikethrough effects.
- **Inline Task Editing**: Double-click any task or click the pencil icon to edit. Supports `Enter` to save, `Escape` to cancel, or clicking outside to commit changes.
- **Delete Tasks**: Remove individual tasks with a single click.
- **Filter Tasks**: Switch between **All**, **Active**, and **Completed** views with dynamic task count badges.
- **Progress Tracking**: Real-time progress bar and percentage display reflecting completed tasks.
- **Task Counts**: Displays total tasks and remaining active tasks count.
- **Local Storage Persistence**: Automatically synchronizes all tasks to `localStorage` via `useEffect`, preserving data across page reloads.
- **Clear Completed**: Conditionally rendered action to bulk-remove completed tasks.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.

---

## 🧠 React Concepts Demonstrated

| Concept | Implementation in Project |
| :--- | :--- |
| **Components** | Modular architecture: `App`, `Header`, `TodoForm`, `TodoFilter`, `TodoList`, `TodoItem`, `TodoFooter`. |
| **Props** | Data and callback handlers passed down cleanly through the component tree. |
| **State (`useState`)** | Task list array, active filter, controlled text inputs, inline edit states. |
| **Event Handling** | Form submission (`onSubmit`), input change (`onChange`), clicks (`onClick`), keyboard events (`onKeyDown` for Enter/Escape), and blur (`onBlur`). |
| **Conditional Rendering** | Dynamic empty states depending on active filter, inline edit form vs standard text, conditional "Clear Completed" button, dynamic progress bar. |
| **Effects (`useEffect`)** | Persisting todo items to `localStorage` whenever tasks state changes, auto-focusing and selecting text during inline editing. |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── src/
    ├── main.jsx                # React DOM root render
    ├── App.jsx                 # Main state container & localStorage synchronization
    ├── index.css               # Modern design tokens, variables, & responsive styles
    └── components/
        ├── Header.jsx          # App branding, formatted date, and progress tracker
        ├── TodoForm.jsx        # Input form with validation for new tasks
        ├── TodoFilter.jsx      # Filter pills (All / Active / Completed) & counters
        ├── TodoList.jsx        # List renderer with filter-specific empty states
        ├── TodoItem.jsx        # Task item with toggle, edit mode, and delete
        └── TodoFooter.jsx      # Total task count and clear-completed button
```
