import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './AddTransaction.css'

const CATEGORIES = ['food', 'transport', 'shopping', 'health', 'salary', 'freelance', 'other']
const EMOJI = { food:'🍔', transport:'🚌', shopping:'🛍️', health:'💊', salary:'💼', freelance:'💻', other:'📌' }

function AddTransaction({ addTransaction }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [category, setCategory] = useState('other')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return setError('Please enter a title.')
    if (!amount || Number(amount) <= 0) return setError('Please enter a valid amount.')
    setError('')

    addTransaction({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      note,
    })
    navigate('/')
  }

  return (
    <div className="page-container">
      <div className="page-header fade-up">
        <div>
          <h1 className="page-title">Add Transaction</h1>
          <p className="page-sub">Record a new income or expense</p>
        </div>
        <Link to="/" className="btn-back">← Back</Link>
      </div>

      <div className="form-card fade-up" style={{ animationDelay: '0.1s' }}>
        <form onSubmit={handleSubmit}>
          {/* Type toggle */}
          <div className="type-toggle">
            <button
              type="button"
              className={`type-btn expense ${type === 'expense' ? 'active' : ''}`}
              onClick={() => setType('expense')}
            >
              ↓ Expense
            </button>
            <button
              type="button"
              className={`type-btn income ${type === 'income' ? 'active' : ''}`}
              onClick={() => setType('income')}
            >
              ↑ Income
            </button>
          </div>

          {/* Amount */}
          <div className="form-group">
            <label className="form-label">Amount (₹)</label>
            <div className="amount-input-wrap">
              <span className="amount-prefix">₹</span>
              <input
                type="number"
                className="form-input amount-input"
                placeholder="0"
                value={amount}
                min="1"
                onChange={e => setAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Title */}
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Grocery shopping"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label className="form-label">Category</label>
            <div className="category-grid">
              {CATEGORIES.map(cat => (
                <button
                  type="button"
                  key={cat}
                  className={`cat-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  <span>{EMOJI[cat]}</span>
                  <span>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="form-group">
            <label className="form-label">Note <span className="optional">(optional)</span></label>
            <input
              type="text"
              className="form-input"
              placeholder="Any additional notes..."
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className={`submit-btn ${type}`}>
            Add {type === 'income' ? 'Income' : 'Expense'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTransaction
