import TransactionList from '../components/TransactionList'
import './Dashboard.css'

function TransactionListPage({ transactions, deleteTransaction }) {
  return (
    <div className="page-container">
      <div className="page-header fade-up">
        <div>
          <h1 className="page-title">Transactions</h1>
          <p className="page-sub">Filter and manage all entries</p>
        </div>
      </div>
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        showFilter={true}
      />
    </div>
  )
}

export default TransactionListPage
