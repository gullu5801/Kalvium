import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import TransactionItem from '../components/TransactionItem';
import './Transactions.css';

const CATEGORIES = ['All', 'Salary', 'Freelance', 'Investment', 'Food', 'Housing', 'Transport', 'Entertainment', 'Health', 'Education', 'Shopping', 'Utilities', 'Other'];

export default function Transactions() {
  const { transactions, deleteTransaction } = useFinance();
  const [filter, setFilter] = useState('all');
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');

  let filtered = transactions
    .filter(t => filter === 'all' || t.type === filter)
    .filter(t => category === 'All' || t.category === category)
    .filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.note?.toLowerCase().includes(search.toLowerCase())
    );

  if (sortBy === 'date-desc') filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (sortBy === 'date-asc') filtered = [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sortBy === 'amount-desc') filtered = [...filtered].sort((a, b) => b.amount - a.amount);
  else if (sortBy === 'amount-asc') filtered = [...filtered].sort((a, b) => a.amount - b.amount);

  return (
    <div className="tx-page">
      <div className="tx-page-header animate-in">
        <h1 className="page-title">Transactions</h1>
        <p className="page-sub">{filtered.length} of {transactions.length} entries</p>
      </div>

      {/* Controls */}
      <div className="tx-controls animate-in" style={{ animationDelay: '0.05s' }}>
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-tabs">
          {['all', 'income', 'expense'].map(f => (
            <button key={f} className={`filter-tab ${filter === f ? 'active' : ''} ${f}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ width: 'auto', minWidth: '160px' }}>
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="amount-desc">Highest Amount</option>
          <option value="amount-asc">Lowest Amount</option>
        </select>
      </div>

      {/* Category chips */}
      <div className="cat-chips animate-in" style={{ animationDelay: '0.08s' }}>
        {CATEGORIES.map(c => (
          <button key={c} className={`cat-chip ${category === c ? 'active' : ''}`} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>

      {/* List */}
      <div className="tx-list-full animate-in" style={{ animationDelay: '0.12s' }}>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">◎</div>
            <p>No transactions found</p>
            <span>Try adjusting your filters</span>
          </div>
        ) : (
          filtered.map(tx => <TransactionItem key={tx.id} tx={tx} onDelete={deleteTransaction} />)
        )}
      </div>
    </div>
  );
}
