import './StatCard.css';

const fmt = (n) => '₹' + Math.abs(n).toLocaleString('en-IN');

export default function StatCard({ label, amount, type, icon, sub }) {
  return (
    <div className={`stat-card stat-card--${type}`}>
      <div className="stat-top">
        <span className="stat-icon">{icon}</span>
        <span className="stat-label">{label}</span>
      </div>
      <div className="stat-amount">{fmt(amount)}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}
