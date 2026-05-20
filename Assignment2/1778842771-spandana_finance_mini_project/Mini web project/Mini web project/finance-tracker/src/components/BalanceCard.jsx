import React from 'react';
import { DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const BalanceCard = ({ title, amount, type, icon: Icon }) => {
  const getColors = () => {
    switch(type) {
      case 'income': return { bg: 'rgba(16, 185, 129, 0.1)', color: 'var(--income)' };
      case 'expense': return { bg: 'rgba(239, 68, 68, 0.1)', color: 'var(--expense)' };
      default: return { bg: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)' };
    }
  };

  const colors = getColors();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="stat-card glass card-hover"
    >
      <div className="stat-icon" style={{ 
        backgroundColor: colors.bg, 
        color: colors.color,
        boxShadow: `0 8px 16px -4px ${colors.bg}`
      }}>
        {Icon ? <Icon size={22} strokeWidth={2.5} /> : <DollarSign size={22} />}
      </div>
      <p className="stat-label">{title}</p>
      <h2 className="stat-value">
        <span style={{ fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '2px', opacity: 0.8 }}>$</span>
        {amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </h2>
      <div style={{ 
        background: `radial-gradient(circle, ${colors.color} 0%, transparent 70%)`,
        opacity: 0.03, 
        position: 'absolute', 
        right: -30, 
        top: -30, 
        width: 120, 
        height: 120, 
        borderRadius: '50%' 
      }}></div>
    </motion.div>
  );
};

export default BalanceCard;
