import React from 'react'
import TodoItem from './TodoItem.jsx'
import { Inbox, CheckCircle, Sparkles } from 'lucide-react'

export default function TodoList({ todos, currentFilter, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    let emptyIcon = <Inbox size={28} />
    let title = 'No tasks found'
    let subtitle = 'Add a new task above to get started!'

    if (currentFilter === 'active') {
      emptyIcon = <Sparkles size={28} />
      title = 'No active tasks'
      subtitle = 'You have tackled all your pending tasks! Enjoy your day.'
    } else if (currentFilter === 'completed') {
      emptyIcon = <CheckCircle size={28} />
      title = 'No completed tasks yet'
      subtitle = 'Mark items as complete when you finish them.'
    }

    return (
      <div className="todo-list-wrapper">
        <div className="empty-state">
          <div className="empty-icon-wrap">{emptyIcon}</div>
          <p className="empty-title">{title}</p>
          <p className="empty-subtitle">{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  )
}
