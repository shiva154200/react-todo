import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoFilter from './components/TodoFilter.jsx'
import TodoList from './components/TodoList.jsx'
import TodoFooter from './components/TodoFooter.jsx'

const LOCAL_STORAGE_KEY = 'react_todo_master_tasks'

// Default sample tasks for first-time visitors
const DEFAULT_TASKS = [
  {
    id: '1',
    text: 'Welcome to TaskMaster! Try adding a new task 🚀',
    completed: false,
    createdAt: Date.now() - 3600000 * 3,
  },
  {
    id: '2',
    text: 'Double-click or click the pencil icon to edit this task ✏️',
    completed: false,
    createdAt: Date.now() - 3600000 * 2,
  },
  {
    id: '3',
    text: 'Click the checkmark circle to mark a task completed ✅',
    completed: true,
    createdAt: Date.now() - 3600000,
  },
]

export default function App() {
  // 1. State: Load todos from localStorage with fallback
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (err) {
      console.error('Failed to parse todos from localStorage:', err)
    }
    return DEFAULT_TASKS
  })

  // 2. State: Current active filter ('all' | 'active' | 'completed')
  const [filter, setFilter] = useState('all')

  // 3. Effect: Synchronize todos to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    } catch (err) {
      console.error('Failed to save todos to localStorage:', err)
    }
  }, [todos])

  // --- Handlers / State Modifiers ---

  // Add new task
  const handleAddTodo = (text) => {
    const newTodo = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  // Toggle completion status
  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Delete task
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Edit task text
  const handleEditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  // Clear all completed tasks
  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  // --- Derived Computations ---
  const totalCount = todos.length
  const completedCount = todos.filter((t) => t.completed).length
  const activeCount = totalCount - completedCount

  const counts = {
    all: totalCount,
    active: activeCount,
    completed: completedCount,
  }

  // Filtered tasks based on active filter tab
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="todo-app">
      <Header
        totalCount={totalCount}
        completedCount={completedCount}
      />

      <TodoForm onAddTodo={handleAddTodo} />

      <TodoFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />

      <TodoList
        todos={filteredTodos}
        currentFilter={filter}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />

      <TodoFooter
        totalCount={totalCount}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}
