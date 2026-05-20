import { useState } from 'react'

export default function ExpenseChart({ transactions }) {
  const categories = {}

  transactions.forEach((t) => {
    if (t.type === 'expense') {
      categories[t.category] = (categories[t.category] || 0) + t.amount
    }
  })

  return (
    <div className="chart-container">
      <h2>Expense Breakdown</h2>
      <div className="chart">
        {Object.entries(categories).map(([category, amount]) => (
          <div key={category} className="chart-bar">
            <span className="category">{category}</span>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${(amount / 1000) * 100}%` }}></div>
            </div>
            <span className="amount">${amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
