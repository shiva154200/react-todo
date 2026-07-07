import React, { useState } from 'react'
import { PlusCircle, Edit3 } from 'lucide-react'

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAddTodo(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <Edit3 className="input-icon" size={18} />
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done? e.g., Review PR, Learn React..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </div>
      <button type="submit" className="btn-add" disabled={!text.trim()}>
        <PlusCircle size={18} />
        <span>Add Task</span>
      </button>
    </form>
  )
}
