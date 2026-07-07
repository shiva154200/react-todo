import React, { useState, useRef, useEffect } from 'react'
import { Check, Edit2, Trash2, X, CheckSquare } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  const handleStartEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = () => {
    const trimmed = editText.trim()
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed)
    } else {
      setEditText(todo.text)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  // Format created timestamp
  const formattedDate = todo.createdAt
    ? new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(todo.createdAt))
    : null

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        type="button"
        className="todo-checkbox-btn"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        <div className="checkbox-custom">
          {todo.completed && <Check size={14} strokeWidth={3} />}
        </div>
      </button>

      {isEditing ? (
        <div className="edit-form">
          <input
            ref={inputRef}
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
          />
          <button
            type="button"
            className="btn-icon-save"
            onClick={handleSave}
            title="Save changes (Enter)"
          >
            <Check size={16} />
          </button>
          <button
            type="button"
            className="btn-icon-cancel"
            onClick={handleCancel}
            title="Cancel (Esc)"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <>
          <div
            className="todo-content"
            onDoubleClick={handleStartEdit}
            title="Double-click to edit"
          >
            <span className="todo-text">{todo.text}</span>
            {formattedDate && <span className="todo-date">{formattedDate}</span>}
          </div>

          <div className="todo-actions">
            <button
              type="button"
              className="btn-action edit"
              onClick={handleStartEdit}
              title="Edit task"
              aria-label="Edit task"
            >
              <Edit2 size={16} />
            </button>
            <button
              type="button"
              className="btn-action delete"
              onClick={() => onDelete(todo.id)}
              title="Delete task"
              aria-label="Delete task"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </>
      )}
    </li>
  )
}
