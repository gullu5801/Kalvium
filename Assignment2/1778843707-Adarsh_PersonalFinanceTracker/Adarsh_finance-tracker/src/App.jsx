import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import AddTransaction from './pages/AddTransaction'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }])
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard transactions={transactions} />} />
            <Route path="/add" element={<AddTransaction onAdd={addTransaction} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
