import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import './SpendingChart.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>
            ₹{Number(p.value).toLocaleString('en-IN')}
          </p>
        ))}
      </div>
    )
  }
  return null
}

function SpendingChart({ transactions }) {
  // Group by month
  const monthMap = {}
  transactions.forEach(t => {
    const d = new Date(t.date || t.id)
    const key = d.toLocaleString('en-IN', { month: 'short', year: '2-digit' })
    if (!monthMap[key]) monthMap[key] = { month: key, income: 0, expense: 0 }
    if (t.type === 'income') monthMap[key].income += Number(t.amount)
    else monthMap[key].expense += Number(t.amount)
  })

  const data = Object.values(monthMap).slice(-6)

  if (data.length === 0) {
    return (
      <div className="chart-card fade-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="chart-title">Monthly Overview</h3>
        <div className="chart-empty">Add transactions to see your chart</div>
      </div>
    )
  }

  return (
    <div className="chart-card fade-up" style={{ animationDelay: '0.3s' }}>
      <div className="chart-header">
        <h3 className="chart-title">Monthly Overview</h3>
        <div className="chart-legend">
          <span><span className="dot income-dot" />Income</span>
          <span><span className="dot expense-dot" />Expense</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4} barCategoryGap="30%">
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#7a7a9a', fontSize: 12, fontFamily: 'DM Sans' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#7a7a9a', fontSize: 11, fontFamily: 'DM Sans' }}
            tickFormatter={v => `₹${v >= 1000 ? (v/1000).toFixed(0)+'k' : v}`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124,111,255,0.06)' }} />
          <Bar dataKey="income" radius={[6,6,0,0]} fill="#00e5a0" />
          <Bar dataKey="expense" radius={[6,6,0,0]} fill="#ff5c7a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
