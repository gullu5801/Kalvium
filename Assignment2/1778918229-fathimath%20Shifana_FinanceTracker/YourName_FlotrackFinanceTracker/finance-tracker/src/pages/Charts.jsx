import { useFinance } from '../context/FinanceContext';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import './Charts.css';

const COLORS = ['#c8f04c','#4ade80','#6bb5ff','#f59e0b','#a78bfa','#fb7185','#34d399','#f87171'];
const fmt = (n) => '₹' + Math.abs(n).toLocaleString('en-IN');

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip">
      {label && <div className="tt-label">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="tt-row">
          <span style={{ color: p.color }}>{p.name}</span>
          <span>{fmt(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

export default function Charts() {
  const { transactions } = useFinance();

  // By-category expense
  const catMap = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    catMap[t.category] = (catMap[t.category] || 0) + t.amount;
  });
  const catData = Object.entries(catMap).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);

  // Income vs Expense by day (last 10 entries)
  const dateMap = {};
  transactions.forEach(t => {
    const d = t.date;
    if (!dateMap[d]) dateMap[d] = { date: d, income: 0, expense: 0 };
    dateMap[d][t.type] += t.amount;
  });
  const daily = Object.values(dateMap)
    .sort((a,b) => new Date(a.date) - new Date(b.date))
    .slice(-10)
    .map(d => ({ ...d, date: new Date(d.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) }));

  // Running balance
  const sorted = [...transactions].sort((a,b) => new Date(a.date) - new Date(b.date));
  let running = 0;
  const balanceLine = sorted.map(t => {
    running += t.type === 'income' ? t.amount : -t.amount;
    return { date: new Date(t.date).toLocaleDateString('en-IN', { day:'numeric', month:'short' }), balance: running };
  });

  // Income sources
  const incMap = {};
  transactions.filter(t => t.type === 'income').forEach(t => {
    incMap[t.category] = (incMap[t.category] || 0) + t.amount;
  });
  const incData = Object.entries(incMap).map(([name, value]) => ({ name, value }));

  return (
    <div className="charts-page">
      <div className="charts-header animate-in">
        <h1 className="page-title">Analytics</h1>
        <p className="page-sub">Visual breakdown of your finances</p>
      </div>

      <div className="charts-grid">
        {/* Balance trend */}
        <div className="chart-card animate-in full-width" style={{ animationDelay: '0.05s' }}>
          <h3 className="chart-title">Net Balance Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={balanceLine}>
              <defs>
                <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c8f04c" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#c8f04c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3045" />
              <XAxis dataKey="date" tick={{ fill: '#7a8299', fontSize: 12 }} />
              <YAxis tickFormatter={(v) => '₹' + (v/1000).toFixed(0) + 'k'} tick={{ fill: '#7a8299', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="balance" name="Balance" stroke="#c8f04c" fill="url(#balGrad)" strokeWidth={2} dot={{ fill: '#c8f04c', r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Income vs Expense bar */}
        <div className="chart-card animate-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="chart-title">Income vs Expense (by Date)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={daily} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3045" />
              <XAxis dataKey="date" tick={{ fill: '#7a8299', fontSize: 11 }} />
              <YAxis tickFormatter={(v) => '₹' + (v/1000).toFixed(0) + 'k'} tick={{ fill: '#7a8299', fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#7a8299', fontSize: 12 }} />
              <Bar dataKey="income" name="Income" fill="#4ade80" radius={[4,4,0,0]} />
              <Bar dataKey="expense" name="Expense" fill="#f87171" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expense by category */}
        <div className="chart-card animate-in" style={{ animationDelay: '0.12s' }}>
          <h3 className="chart-title">Expense by Category</h3>
          {catData.length > 0 ? (
            <div className="pie-layout">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={catData} cx="50%" cy="50%" outerRadius={85} innerRadius={50} dataKey="value" strokeWidth={0}>
                    {catData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '13px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="chart-legend">
                {catData.map((d, i) => (
                  <div key={d.name} className="cl-item">
                    <span className="cl-dot" style={{ background: COLORS[i % COLORS.length] }}></span>
                    <span className="cl-name">{d.name}</span>
                    <span className="cl-val">{fmt(d.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : <p style={{ color: 'var(--text-muted)', padding: '40px 0' }}>No expense data</p>}
        </div>

        {/* Income sources */}
        <div className="chart-card animate-in" style={{ animationDelay: '0.15s' }}>
          <h3 className="chart-title">Income Sources</h3>
          {incData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={incData} layout="vertical" barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3045" horizontal={false} />
                <XAxis type="number" tickFormatter={(v) => '₹' + (v/1000).toFixed(0) + 'k'} tick={{ fill: '#7a8299', fontSize: 11 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: '#7a8299', fontSize: 12 }} width={80} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Income" radius={[0,4,4,0]}>
                  {incData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : <p style={{ color: 'var(--text-muted)', padding: '40px 0' }}>No income data</p>}
        </div>
      </div>
    </div>
  );
}
