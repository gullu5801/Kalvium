import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import AddTransaction from './pages/AddTransaction'
import TransactionListPage from './pages/TransactionListPage'
import Navbar from './components/Navbar'

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('ft_transactions')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Persist to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('ft_transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    setTransactions(prev => [transaction, ...prev])
  }

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(item => item.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard transactions={transactions} />}
        />
        <Route
          path="/transactions"
          element={
            <TransactionListPage
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          }
        />
        <Route
          path="/add"
          element={<AddTransaction addTransaction={addTransaction} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
