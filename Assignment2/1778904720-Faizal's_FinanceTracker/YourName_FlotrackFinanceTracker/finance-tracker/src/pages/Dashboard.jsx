import { useFinance } from '../context/FinanceContext';
import StatCard from '../components/StatCard';
import TransactionItem from '../components/TransactionItem';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const COLORS = ['#4ade80','#f87171','#6bb5ff','#f59e0b','#a78bfa','#fb7185','#34d399'];

export default function Dashboard() {
  const { transactions, totalIncome, totalExpense, balance, deleteTransaction } = useFinance();

  const recent = transactions.slice(0, 5);
  const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : 0;

  // Category breakdown for expenses
  const categoryMap = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });
  const pieData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

  const fmt = (n) => '₹' + Math.abs(n).toLocaleString('en-IN');

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dash-header animate-in">
        <div>
          <h1 className="dash-title">Financial Overview</h1>
          <p className="dash-sub">May 2025 · Personal budget tracker</p>
        </div>
        <Link to="/add" className="btn btn-primary">+ Add Transaction</Link>
      </div>

      {/* Stats */}
      <div className="stats-grid animate-in" style={{ animationDelay: '0.05s' }}>
        <StatCard label="Net Balance" amount={balance} type="balance" icon="◈" sub={`Savings rate: ${savingsRate}%`} />
        <StatCard label="Total Income" amount={totalIncome} type="income" icon="↑" sub={`${transactions.filter(t => t.type === 'income').length} transactions`} />
        <StatCard label="Total Expenses" amount={totalExpense} type="expense" icon="↓" sub={`${transactions.filter(t => t.type === 'expense').length} transactions`} />
      </div>

      {/* Main content */}
      <div className="dash-body">
        {/* Recent Transactions */}
        <div className="animate-in" style={{ animationDelay: '0.1s' }}>
          <div className="section-header">
            <h2 className="section-title">Recent Transactions</h2>
            <Link to="/transactions" className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }}>View all →</Link>
          </div>
          <div className="tx-list">
            {recent.map(tx => (
              <TransactionItem key={tx.id} tx={tx} onDelete={deleteTransaction} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="dash-sidebar animate-in" style={{ animationDelay: '0.15s' }}>
          {/* Expense Breakdown */}
          <div className="card">
            <h3 className="card-title">Expense Breakdown</h3>
            {pieData.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" strokeWidth={0}>
                      {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '13px' }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pie-legend">
                  {pieData.slice(0, 5).map((d, i) => (
                    <div key={d.name} className="legend-item">
                      <span className="legend-dot" style={{ background: COLORS[i % COLORS.length] }}></span>
                      <span className="legend-name">{d.name}</span>
                      <span className="legend-val">{fmt(d.value)}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No expenses yet.</p>}
          </div>

          {/* Quick Summary */}
          <div className="card">
            <h3 className="card-title">Quick Stats</h3>
            <div className="quick-stats">
              <div className="qs-item">
                <span className="qs-label">Avg. Daily Expense</span>
                <span className="qs-val">{fmt(Math.round(totalExpense / 30))}</span>
              </div>
              <div className="qs-item">
                <span className="qs-label">Largest Expense</span>
                <span className="qs-val">{fmt(Math.max(...transactions.filter(t=>t.type==='expense').map(t=>t.amount), 0))}</span>
              </div>
              <div className="qs-item">
                <span className="qs-label">Total Entries</span>
                <span className="qs-val">{transactions.length}</span>
              </div>
              <div className="qs-item">
                <span className="qs-label">Savings Rate</span>
                <span className="qs-val" style={{ color: parseFloat(savingsRate) > 0 ? 'var(--income)' : 'var(--expense)' }}>{savingsRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
