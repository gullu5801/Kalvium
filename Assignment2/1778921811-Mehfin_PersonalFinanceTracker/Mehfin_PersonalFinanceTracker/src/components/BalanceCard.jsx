import './BalanceCard.css'

function BalanceCard({ transactions }) {
  const income = transactions
    .filter(item => item.type === 'income')
    .reduce((acc, item) => acc + Number(item.amount), 0)

  const expense = transactions
    .filter(item => item.type === 'expense')
    .reduce((acc, item) => acc + Number(item.amount), 0)

  const balance = income - expense

  const fmt = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <div className="balance-grid">
      <div className="balance-card balance-main fade-up">
        <p className="balance-label">Net Balance</p>
        <h1 className={`balance-amount ${balance < 0 ? 'negative' : ''}`}>{fmt(balance)}</h1>
        <p className="balance-sub">{transactions.length} transaction{transactions.length !== 1 ? 's' : ''} total</p>
      </div>
      <div className="balance-card balance-income fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="stat-icon income-icon">↑</div>
        <p className="balance-label">Total Income</p>
        <h2 className="stat-amount income-text">{fmt(income)}</h2>
      </div>
      <div className="balance-card balance-expense fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="stat-icon expense-icon">↓</div>
        <p className="balance-label">Total Expenses</p>
        <h2 className="stat-amount expense-text">{fmt(expense)}</h2>
      </div>
    </div>
  )
}

export default BalanceCard
