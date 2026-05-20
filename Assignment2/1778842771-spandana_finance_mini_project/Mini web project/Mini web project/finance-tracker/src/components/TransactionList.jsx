import React from 'react';
import { Trash2, TrendingUp, TrendingDown, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TransactionList = ({ transactions, onDelete }) => {
  if (transactions.length === 0) {
    return (
      <div className="empty-state glass">
        <div className="stat-icon" style={{ margin: '0 auto 20px', background: 'var(--border)' }}>
          <Calendar size={32} />
        </div>
        <h3>No transactions found</h3>
        <p className="text-muted">Start by adding your first income or expense!</p>
      </div>
    );
  }

  return (
    <div className="transaction-list-card glass">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ margin: 0 }}>Recent Transactions</h3>
        <span className="text-muted" style={{ fontSize: '0.85rem', fontWeight: 500 }}>
          Showing {transactions.length} items
        </span>
      </div>
      <div className="transactions-container">
        <AnimatePresence>
          {transactions.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ x: 4 }}
              className="transaction-item"
              style={{ 
                borderLeft: `4px solid ${t.type === 'income' ? 'var(--income)' : 'var(--expense)'}`,
                backdropFilter: 'blur(5px)',
                background: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <div className="t-icon-box" style={{ 
                background: t.type === 'income' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.08)',
                color: t.type === 'income' ? 'var(--income)' : 'var(--expense)'
              }}>
                {t.type === 'income' ? <TrendingUp size={20} strokeWidth={2.5} /> : <TrendingDown size={20} strokeWidth={2.5} />}
              </div>
              
              <div className="t-info">
                <div className="t-title" style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>{t.title}</div>
                <div className="t-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', opacity: 0.8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} /> {t.category || 'Other'}
                  </span>
                  <span style={{ marginLeft: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', opacity: 0.7 }}>
                    <Calendar size={12} /> {new Date(t.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>

              <div className="t-amount-box">
                <div className="t-amount" style={{ 
                  color: t.type === 'income' ? 'var(--income)' : 'var(--expense)',
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}>
                  {t.type === 'income' ? '+' : '-'}${Math.abs(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>

              <div className="t-actions">
                <button 
                  onClick={() => onDelete(t.id)}
                  className="icon-btn delete"
                  title="Delete"
                  style={{ transition: 'all 0.2s' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TransactionList;
