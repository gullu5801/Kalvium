import { useState } from 'react'
import './TransactionList.css'

const CATEGORIES = {
  food: '🍔',
  transport: '🚌',
  shopping: '🛍️',
  health: '💊',
  salary: '💼',
  freelance: '💻',
  other: '📌',
}

function TransactionList({ transactions, deleteTransaction, showFilter = false }) {
  const [filter, setFilter] = useState('all')

  const filtered = transactions.filter(t =>
    filter === 'all' ? true : t.type === filter
  )

  const fmt = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const formatDate = (id) => {
    const d = new Date(Number(id))
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  }

  return (
    <div className="tlist-wrapper">
      {showFilter && (
        <div className="tlist-header">
          <h3 className="tlist-title">All Transactions</h3>
          <div className="filter-tabs">
            {['all', 'income', 'expense'].map(f => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''} ${f}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="tlist-empty">
          <span>No transactions yet</span>
        </div>
      ) : (
        <div className="tlist">
          {filtered.map((item, i) => (
            <div
              className="tlist-item fade-up"
              key={item.id}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="tlist-icon">
                {CATEGORIES[item.category] || (item.type === 'income' ? '💰' : '💸')}
              </div>
              <div className="tlist-info">
                <p className="tlist-name">{item.title}</p>
                <p className="tlist-meta">
                  {item.category && <span className="tlist-cat">{item.category}</span>}
                  <span>{formatDate(item.id)}</span>
                </p>
              </div>
              <div className="tlist-right">
                <span className={`tlist-amount ${item.type}`}>
                  {item.type === 'income' ? '+' : '-'}{fmt(item.amount)}
                </span>
                {deleteTransaction && (
                  <button className="tlist-delete" onClick={() => deleteTransaction(item.id)} title="Delete">
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionList
