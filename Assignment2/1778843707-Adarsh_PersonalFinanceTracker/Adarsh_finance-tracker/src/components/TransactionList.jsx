import { useState } from 'react'
import FilterButtons from './FilterButtons'

export default function TransactionList({ transactions }) {
  const [filterType, setFilterType] = useState('all')

  const filtered =
    filterType === 'all'
      ? transactions
      : transactions.filter((t) => t.type === filterType)

  return (
    <div className="transaction-list-container">
      <h2>Recent Transactions</h2>
      <FilterButtons selectedType={filterType} onFilter={setFilterType} />
      <div className="transaction-list">
        {filtered.length === 0 ? (
          <p className="empty-message">No transactions yet</p>
        ) : (
          filtered.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <h4>{transaction.category}</h4>
                <p>{transaction.description}</p>
              </div>
              <div className="transaction-amount">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </span>
                <span className="date">{transaction.date}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
