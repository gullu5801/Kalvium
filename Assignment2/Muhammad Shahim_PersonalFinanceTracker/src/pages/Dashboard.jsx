import { Link } from 'react-router-dom'
import BalanceCard from '../components/BalanceCard'
import SpendingChart from '../components/SpendingChart'
import TransactionList from '../components/TransactionList'
import './Dashboard.css'

function Dashboard({ transactions }) {
  const recent = transactions.slice(0, 5)

  return (
    <div className="page-container">
      <div className="page-header fade-up">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-sub">Your financial overview</p>
        </div>
        <Link to="/add" className="btn-primary">+ Add Transaction</Link>
      </div>

      <BalanceCard transactions={transactions} />
      <SpendingChart transactions={transactions} />

      <div className="section-header">
        <h3 className="section-title">Recent Transactions</h3>
        <Link to="/transactions" className="section-link">View all →</Link>
      </div>
      <TransactionList transactions={recent} showFilter={false} />
    </div>
  )
}

export default Dashboard
