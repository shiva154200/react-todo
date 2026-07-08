import React from 'react'
import { ListFilter } from 'lucide-react'

export default function TodoFilter({ currentFilter, onFilterChange, counts }) {
  const filters = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'active', label: 'Active', count: counts.active },
    { id: 'completed', label: 'Completed', count: counts.completed },
  ]

  return (
    <div className="controls-bar">
      <div className="filter-group">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-btn ${currentFilter === f.id ? 'active' : ''}`}
            onClick={() => onFilterChange(f.id)}
          >
            <span>{f.label}</span>
            <span className="badge">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="quick-stats">
        {counts.active === 0 ? (
          <span>🎉 All caught up!</span>
        ) : (
          <span>{counts.active} {counts.active === 1 ? 'task' : 'tasks'} remaining</span>
        )}
      </div>
    </div>
  )
}
