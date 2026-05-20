import { useNavigate } from 'react-router-dom'
import TransactionForm from '../components/TransactionForm'

export default function AddTransaction({ onAdd }) {
  const navigate = useNavigate()

  const handleAdd = (transaction) => {
    onAdd(transaction)
    navigate('/')
  }

  return (
    <div className="add-transaction-page">
      <h1>Add New Transaction</h1>
      <TransactionForm onAdd={handleAdd} />
    </div>
  )
}
