import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFinance } from '../context/FinanceContext';

const INCOME_CATS = ['Salary', 'Freelance', 'Investment', 'Business', 'Other'];
const EXPENSE_CATS = ['Food', 'Housing', 'Transport', 'Entertainment', 'Health', 'Shopping', 'Education', 'Utilities', 'Other'];

const EMPTY = { title: '', amount: '', type: 'expense', category: 'Food', date: new Date().toISOString().slice(0, 10), note: '' };

export default function AddTransaction() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const { addTransaction } = useFinance();
  const navigate = useNavigate();

  const set = (k, v) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.amount || isNaN(form.amount) || +form.amount <= 0) e.amount = 'Enter a valid amount';
    if (!form.date) e.date = 'Date is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    addTransaction({ ...form, amount: parseFloat(form.amount) });
    navigate('/transactions');
  };

  const cats = form.type === 'income' ? INCOME_CATS : EXPENSE_CATS;

  return (
    <>
      <div className="page-header">
        <h1>Add Transaction</h1>
        <p>Record a new income or expense</p>
      </div>
      <div className="page-body">
        <div className="card" style={{ maxWidth: 600 }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group full" style={{ marginBottom: 24 }}>
              <label>Transaction Type</label>
              <div className="type-toggle">
                <button type="button" className={`type-btn income ${form.type === 'income' ? 'active' : ''}`} onClick={() => { set('type', 'income'); set('category', 'Salary'); }}>
                  ⬆️ Income
                </button>
                <button type="button" className={`type-btn expense ${form.type === 'expense' ? 'active' : ''}`} onClick={() => { set('type', 'expense'); set('category', 'Food'); }}>
                  ⬇️ Expense
                </button>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group full">
                <label>Title *</label>
                <input
                  className="form-input"
                  placeholder="e.g. Monthly Salary, Grocery run…"
                  value={form.title}
                  onChange={e => set('title', e.target.value)}
                />
                {errors.title && <span style={{ color: 'var(--expense)', fontSize: 12 }}>{errors.title}</span>}
              </div>

              <div className="form-group">
                <label>Amount (₹) *</label>
                <input
                  className="form-input"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={form.amount}
                  onChange={e => set('amount', e.target.value)}
                />
                {errors.amount && <span style={{ color: 'var(--expense)', fontSize: 12 }}>{errors.amount}</span>}
              </div>

              <div className="form-group">
                <label>Date *</label>
                <input
                  className="form-input"
                  type="date"
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                />
                {errors.date && <span style={{ color: 'var(--expense)', fontSize: 12 }}>{errors.date}</span>}
              </div>

              <div className="form-group full">
                <label>Category</label>
                <select className="form-select" value={form.category} onChange={e => set('category', e.target.value)}>
                  {cats.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="form-group full">
                <label>Note (optional)</label>
                <input
                  className="form-input"
                  placeholder="Add a quick note…"
                  value={form.note}
                  onChange={e => set('note', e.target.value)}
                />
              </div>
            </div>

            <button className="submit-btn" type="submit">
              + Add Transaction
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
