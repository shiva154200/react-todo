import React from 'react'
import { Trash2 } from 'lucide-react'

export default function TodoFooter({ totalCount, completedCount, onClearCompleted }) {
  return (
    <footer className="app-footer">
      <div className="footer-info">
        Total: <strong>{totalCount}</strong> {totalCount === 1 ? 'task' : 'tasks'}
        {completedCount > 0 && ` (${completedCount} completed)`}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          className="btn-clear"
          onClick={onClearCompleted}
          title="Remove all completed tasks"
        >
          <Trash2 size={14} />
          <span>Clear Completed</span>
        </button>
      )}
    </footer>
  )
}
