import './TransactionItem.css';

const CATEGORY_ICONS = {
  Salary: '💼', Freelance: '💻', Investment: '📈', Other: '📦',
  Food: '🍔', Housing: '🏠', Transport: '🚗', Entertainment: '🎬',
  Health: '🏥', Education: '📚', Shopping: '🛍️', Utilities: '⚡',
};

const fmt = (n) => '₹' + n.toLocaleString('en-IN');
const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function TransactionItem({ tx, onDelete }) {
  return (
    <div className="tx-item animate-in">
      <div className="tx-left">
        <div className="tx-icon">{CATEGORY_ICONS[tx.category] || '💰'}</div>
        <div className="tx-info">
          <div className="tx-title">{tx.title}</div>
          <div className="tx-meta">
            <span className="tx-date">{fmtDate(tx.date)}</span>
            <span className="tx-dot">·</span>
            <span className="tx-cat">{tx.category}</span>
            {tx.note && <><span className="tx-dot">·</span><span className="tx-note">{tx.note}</span></>}
          </div>
        </div>
      </div>
      <div className="tx-right">
        <div className={`tx-amount ${tx.type}`}>
          {tx.type === 'income' ? '+' : '-'}{fmt(tx.amount)}
        </div>
        <span className={`badge badge-${tx.type}`}>{tx.type}</span>
        {onDelete && (
          <button className="tx-delete" onClick={() => onDelete(tx.id)} title="Delete">✕</button>
        )}
      </div>
    </div>
  );
}
