import { useState } from 'react'

export default function TransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.category && formData.amount) {
      onAdd({
        ...formData,
        amount: parseFloat(formData.amount),
      })
      setFormData({
        category: '',
        description: '',
        amount: '',
        type: 'expense',
        date: new Date().toISOString().split('T')[0],
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="form-group">
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g., Groceries"
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0.00"
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-submit">
        Add Transaction
      </button>
    </form>
  )
}
