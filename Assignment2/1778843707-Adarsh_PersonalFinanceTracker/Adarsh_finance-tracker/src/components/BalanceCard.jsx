import { useState } from 'react'

export default function BalanceCard({ transactions }) {
  const balance = transactions.reduce((acc, t) => {
    return t.type === 'income' ? acc + t.amount : acc - t.amount
  }, 0)

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0)

  return (
    <div className="balance-container">
      <div className="balance-card">
        <h2>Total Balance</h2>
        <p className="amount">${balance.toFixed(2)}</p>
      </div>
      <div className="income-card">
        <h3>Income</h3>
        <p className="amount income">${income.toFixed(2)}</p>
      </div>
      <div className="expense-card">
        <h3>Expenses</h3>
        <p className="amount expense">${expenses.toFixed(2)}</p>
      </div>
    </div>
  )
}
