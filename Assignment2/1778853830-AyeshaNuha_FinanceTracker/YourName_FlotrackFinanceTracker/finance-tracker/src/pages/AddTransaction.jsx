import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFinance } from '../context/FinanceContext';
import './AddTransaction.css';

const INCOME_CATS = ['Salary', 'Freelance', 'Investment', 'Business', 'Gift', 'Other'];
const EXPENSE_CATS = ['Food', 'Housing', 'Transport', 'Entertainment', 'Health', 'Education', 'Shopping', 'Utilities', 'Other'];

const today = new Date().toISOString().split('T')[0];

export default function AddTransaction() {
  const { addTransaction } = useFinance();
  const navigate = useNavigate();
  const [type, setType] = useState('expense');
  const [form, setForm] = useState({ title: '', amount: '', category: '', date: today, note: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = type === 'income' ? INCOME_CATS : EXPENSE_CATS;

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.amount || isNaN(form.amount) || +form.amount <= 0) e.amount = 'Enter a valid amount';
    if (!form.category) e.category = 'Select a category';
    if (!form.date) e.date = 'Date is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    addTransaction({ ...form, amount: parseFloat(form.amount), type });
    setSubmitted(true);
    setTimeout(() => navigate('/transactions'), 1200);
  };

  const set = (key) => (ev) => {
    setForm(f => ({ ...f, [key]: ev.target.value }));
    setErrors(e => ({ ...e, [key]: '' }));
    if (key === 'category' && form.category === '') {
      setErrors(e => ({ ...e, category: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="add-page">
        <div className="success-state animate-in">
          <div className="success-icon">✓</div>
          <h2>Transaction Added!</h2>
          <p>Redirecting to your transactions…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="add-page">
      <div className="add-header animate-in">
        <h1 className="page-title">Add Transaction</h1>
        <p className="page-sub">Record a new income or expense</p>
      </div>

      <div className="add-container animate-in" style={{ animationDelay: '0.05s' }}>
        {/* Type Selector */}
        <div className="type-selector">
          <button
            className={`type-btn income ${type === 'income' ? 'active' : ''}`}
            onClick={() => { setType('income'); setForm(f => ({ ...f, category: '' })); }}
            type="button"
          >
            <span>↑</span> Income
          </button>
          <button
            className={`type-btn expense ${type === 'expense' ? 'active' : ''}`}
            onClick={() => { setType('expense'); setForm(f => ({ ...f, category: '' })); }}
            type="button"
          >
            <span>↓</span> Expense
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-form">
          <div className="form-grid">
            {/* Title */}
            <div className="form-group">
              <label>Transaction Title</label>
              <input type="text" placeholder="e.g. Monthly Salary, Grocery run…" value={form.title} onChange={set('title')} />
              {errors.title && <span className="err">{errors.title}</span>}
            </div>

            {/* Amount */}
            <div className="form-group">
              <label>Amount (₹)</label>
              <div className="amount-wrap">
                <span className="rupee-sign">₹</span>
                <input type="number" placeholder="0.00" min="0" step="0.01" value={form.amount} onChange={set('amount')} style={{ paddingLeft: '36px' }} />
              </div>
              {errors.amount && <span className="err">{errors.amount}</span>}
            </div>

            {/* Category */}
            <div className="form-group">
              <label>Category</label>
              <select value={form.category} onChange={set('category')}>
                <option value="">Select category…</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <span className="err">{errors.category}</span>}
            </div>

            {/* Date */}
            <div className="form-group">
              <label>Date</label>
              <input type="date" value={form.date} onChange={set('date')} />
              {errors.date && <span className="err">{errors.date}</span>}
            </div>

            {/* Note */}
            <div className="form-group full">
              <label>Note (optional)</label>
              <textarea placeholder="Add any details…" rows={3} value={form.note} onChange={set('note')} />
            </div>
          </div>

          {/* Preview */}
          {form.title && form.amount && (
            <div className={`preview-card ${type}`}>
              <div className="preview-left">
                <span className="preview-type">{type}</span>
                <span className="preview-title">{form.title}</span>
                {form.category && <span className="preview-cat">{form.category}</span>}
              </div>
              <div className="preview-amount">
                {type === 'income' ? '+' : '-'}₹{parseFloat(form.amount || 0).toLocaleString('en-IN')}
              </div>
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn btn-ghost" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add Transaction →</button>
          </div>
        </form>
      </div>
    </div>
  );
}
