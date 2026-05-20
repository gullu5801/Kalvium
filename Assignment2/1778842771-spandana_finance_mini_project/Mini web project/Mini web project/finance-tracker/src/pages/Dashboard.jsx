import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown, PieChart as PieIcon, Search, Download } from 'lucide-react';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Dashboard = ({ transactions, onDelete }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const exportTransactions = () => {
    if (transactions.length === 0) return;

    const headers = ['Title', 'Amount', 'Type', 'Category', 'Date'];
    const csvContent = [
      headers.join(','),
      ...transactions.map(t => [
        `"${t.title.replace(/"/g, '""')}"`,
        t.amount,
        t.type,
        `"${t.category || 'Other'}"`,
        new Date(t.date).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'finance-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const highestExpense = Math.max(...transactions.filter(t => t.type === 'expense').map(t => t.amount), 0);
    
    return {
      balance: income - expense,
      income,
      expense,
      totalCount: transactions.length,
      highestExpense
    };
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesFilter = filter === 'all' || t.type === filter;
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [transactions, filter, search]);

  // Chart Data
  const pieData = [
    { name: 'Income', value: stats.income, color: '#10b981' },
    { name: 'Expense', value: stats.expense, color: '#ef4444' }
  ].filter(d => d.value > 0);

  const categoryData = useMemo(() => {
    const data = [
      { name: 'Income', amount: stats.income, color: '#10B981' },
      { name: 'Expense', amount: stats.expense, color: '#EF4444' }
    ];
    return data.filter(d => d.amount > 0);
  }, [stats]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '8px' }}>Net Worth Summary</h1>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Welcome back! Here's your financial heartbeat.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={exportTransactions}
            className="filter-btn glass card-hover" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 24px',
              color: 'var(--text-main)',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              cursor: transactions.length === 0 ? 'not-allowed' : 'pointer',
              opacity: transactions.length === 0 ? 0.5 : 1
            }}
            disabled={transactions.length === 0}
          >
            <Download size={18} /> Export CSV
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <BalanceCard title="Current Balance" amount={stats.balance} type="total" icon={Wallet} />
        <BalanceCard title="Total Income" amount={stats.income} type="income" icon={TrendingUp} />
        <BalanceCard title="Total Expense" amount={stats.expense} type="expense" icon={TrendingDown} />
        <BalanceCard title="Highest Expense" amount={stats.highestExpense} type="expense" icon={PieIcon} />
      </div>

      <div className="charts-grid">
        <div className="glass card-hover" style={{ padding: '24px', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '3px', background: 'var(--primary)' }}></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Income vs Expenses</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                stroke="var(--text-muted)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="var(--text-muted)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                contentStyle={{ 
                  background: 'var(--card-bg)', 
                  backdropFilter: 'blur(10px)',
                  borderColor: 'var(--border)', 
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow)',
                  color: 'var(--text-main)'
                }}
                itemStyle={{ color: 'var(--text-main)', fontWeight: 600 }}
              />
              <Bar dataKey="amount" radius={[6, 6, 0, 0]} barSize={40}>
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass card-hover" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--income)' }}></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Cash Flow</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={95}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.name === 'Income' ? '#10B981' : '#EF4444'} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  background: 'var(--card-bg)', 
                  backdropFilter: 'blur(10px)',
                  borderColor: 'var(--border)', 
                  borderRadius: '12px' 
                }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="controls-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="search-input glass"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-group glass">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'income' ? 'active' : ''}`}
            onClick={() => setFilter('income')}
          >
            Income
          </button>
          <button 
            className={`filter-btn ${filter === 'expense' ? 'active' : ''}`}
            onClick={() => setFilter('expense')}
          >
            Expense
          </button>
        </div>
      </div>

      <TransactionList transactions={filteredTransactions} onDelete={onDelete} />
    </motion.div>
  );
};

export default Dashboard;
