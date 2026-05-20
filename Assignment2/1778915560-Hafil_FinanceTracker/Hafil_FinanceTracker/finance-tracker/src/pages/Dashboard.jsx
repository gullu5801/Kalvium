import { useFinance } from '../context/FinanceContext';
import TransactionItem from '../components/TransactionItem';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

function buildMonthlyData(transactions) {
  const map = {};
  transactions.forEach(t => {
    const key = new Date(t.date).toLocaleDateString('en-IN', { month: 'short' });
    if (!map[key]) map[key] = { month: key, income: 0, expense: 0 };
    map[key][t.type] += t.amount;
  });
  return Object.values(map);
}

function buildCategoryData(transactions) {
  const map = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
}

const PIE_COLORS = ['#818cf8', '#f87171', '#4ade80', '#fbbf24', '#c084fc', '#34d399', '#fb923c'];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px', fontSize: 13 }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: 4 }}>{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name === 'income' ? '⬆' : '⬇'} {fmt(p.value)}
        </p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const { transactions, totalIncome, totalExpense, balance } = useFinance();
  const monthly = buildMonthlyData(transactions);
  const categories = buildCategoryData(transactions);
  const recent = transactions.slice(0, 5);
  const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;

  return (
    <>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Your financial overview at a glance</p>
      </div>
      <div className="page-body">
        <div className="stat-grid">
          <div className="stat-card balance">
            <div className="stat-label">💳 Net Balance</div>
            <div className="stat-amount" style={{ color: balance >= 0 ? 'var(--text)' : 'var(--expense)' }}>{fmt(Math.abs(balance))}</div>
            <div className="stat-sub">Savings rate: {savingsRate}%</div>
          </div>
          <div className="stat-card income">
            <div className="stat-label">⬆️ Total Income</div>
            <div className="stat-amount">{fmt(totalIncome)}</div>
            <div className="stat-sub">{transactions.filter(t => t.type === 'income').length} transactions</div>
          </div>
          <div className="stat-card expense">
            <div className="stat-label">⬇️ Total Expenses</div>
            <div className="stat-amount">{fmt(totalExpense)}</div>
            <div className="stat-sub">{transactions.filter(t => t.type === 'expense').length} transactions</div>
          </div>
        </div>

        <div className="chart-row">
          <div className="card">
            <div className="section-title">Income vs Expenses <span>Monthly</span></div>
            {monthly.length === 0 ? (
              <div className="empty-state"><div className="empty-icon">📉</div><p>No data yet</p></div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={monthly} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
                  <defs>
                    <linearGradient id="inc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f87171" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: 'rgba(240,240,248,0.45)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'rgba(240,240,248,0.45)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => '₹' + (v >= 1000 ? (v/1000)+'k' : v)} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="income" stroke="#4ade80" strokeWidth={2} fill="url(#inc)" />
                  <Area type="monotone" dataKey="expense" stroke="#f87171" strokeWidth={2} fill="url(#exp)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="card">
            <div className="section-title">Spending by Category</div>
            {categories.length === 0 ? (
              <div className="empty-state"><div className="empty-icon">🥧</div><p>No expense data</p></div>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={categories} cx="50%" cy="45%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                    {categories.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: 'rgba(240,240,248,0.6)' }} />
                  <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="card">
          <div className="section-title">Recent Transactions <span>{recent.length} of {transactions.length}</span></div>
          {recent.length === 0 ? (
            <div className="empty-state"><div className="empty-icon">📭</div><p>No transactions yet. Add one!</p></div>
          ) : (
            <div className="txn-list">
              {recent.map(t => <TransactionItem key={t.id} txn={t} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
