import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Header({ totalCount, completedCount }) {
  const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  // Format today's date nicely
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(new Date())

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand">
          <div className="brand-icon">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h1>TaskMaster</h1>
            <p className="today-date">{today}</p>
          </div>
        </div>
      </div>

      <div className="progress-card">
        <div className="progress-header">
          <span>Task Progress</span>
          <span>{percentage}% completed ({completedCount}/{totalCount})</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </header>
  )
}
