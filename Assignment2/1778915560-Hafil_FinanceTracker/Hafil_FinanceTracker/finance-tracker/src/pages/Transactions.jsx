import { useState, useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import TransactionItem from '../components/TransactionItem';

const FILTERS = [
  { key: 'all', label: 'All', cls: '' },
  { key: 'income', label: '⬆ Income', cls: 'income-filter' },
  { key: 'expense', label: '⬇ Expense', cls: 'expense-filter' },
];

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc', label: 'Oldest First' },
  { value: 'amount-desc', label: 'Highest Amount' },
  { value: 'amount-asc', label: 'Lowest Amount' },
];

export default function Transactions() {
  const { transactions } = useFinance();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date-desc');

  const filtered = useMemo(() => {
    let list = [...transactions];
    if (filter !== 'all') list = list.filter(t => t.type === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.note.toLowerCase().includes(q)
      );
    }
    const [by, dir] = sort.split('-');
    list.sort((a, b) => {
      const va = by === 'date' ? new Date(a.date) : a.amount;
      const vb = by === 'date' ? new Date(b.date) : b.amount;
      return dir === 'desc' ? vb - va : va - vb;
    });
    return list;
  }, [transactions, filter, search, sort]);

  return (
    <>
      <div className="page-header">
        <h1>Transactions</h1>
        <p>{filtered.length} of {transactions.length} records</p>
      </div>
      <div className="page-body">
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${f.cls} ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
          <div className="search-input-wrap">
            <span>🔍</span>
            <input
              className="form-input"
              placeholder="Search…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            className="form-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{ width: 'auto', flexShrink: 0 }}
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔎</div>
            <p>No transactions match your filters.</p>
          </div>
        ) : (
          <div className="txn-list">
            {filtered.map(t => <TransactionItem key={t.id} txn={t} />)}
          </div>
        )}
      </div>
    </>
  );
}
