import BalanceCard from '../components/BalanceCard'
import ExpenseChart from '../components/ExpenseChart'
import TransactionList from '../components/TransactionList'
import { mockData } from '../data/mockData'

export default function Dashboard({ transactions }) {
  const allTransactions = [...mockData, ...transactions]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <BalanceCard transactions={allTransactions} />
      <ExpenseChart transactions={allTransactions} />
      <TransactionList transactions={allTransactions} />
    </div>
  )
}
