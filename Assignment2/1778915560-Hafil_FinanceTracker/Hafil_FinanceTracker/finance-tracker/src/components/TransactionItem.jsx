import { useFinance } from '../context/FinanceContext';

const CATEGORY_ICONS = {
  Salary: '💼', Freelance: '💻', Investment: '📈', Business: '🏢', Other: '💡',
  Food: '🍔', Housing: '🏠', Transport: '🚗', Entertainment: '🎬', Health: '💊',
  Shopping: '🛍️', Education: '📚', Utilities: '💡',
};

export default function TransactionItem({ txn }) {
  const { deleteTransaction } = useFinance();

  const fmt = (n) => '₹' + n.toLocaleString('en-IN');
  const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

  return (
    <div className="txn-item">
      <div className={`txn-icon ${txn.type}`}>
        {CATEGORY_ICONS[txn.category] || (txn.type === 'income' ? '⬆️' : '⬇️')}
      </div>
      <div className="txn-info">
        <div className="txn-title">{txn.title}</div>
        <div className="txn-meta">
          <span className={`txn-badge ${txn.type}`}>{txn.category}</span>
          <span>{fmtDate(txn.date)}</span>
          {txn.note && <span>· {txn.note}</span>}
        </div>
      </div>
      <div className={`txn-amount ${txn.type}`}>
        {txn.type === 'income' ? '+' : '-'}{fmt(txn.amount)}
      </div>
      <button className="delete-btn" onClick={() => deleteTransaction(txn.id)} title="Delete">✕</button>
    </div>
  );
}
