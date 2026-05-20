import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, AlertCircle } from 'lucide-react';

const AddTransaction = ({ addTransaction }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'income',
    category: 'Other',
    date: new Date().toISOString().split('T')[0]
  });
  const [error, setError] = useState('');

  const categories = {
    income: ['Salary', 'Freelance', 'Gift', 'Investment', 'Other'],
    expense: ['Food', 'Travel', 'Shopping', 'Bills', 'Rent', 'Health', 'Other']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.amount || !formData.date) {
      setError('Please fill in all required fields.');
      return;
    }

    if (parseFloat(formData.amount) <= 0) {
      setError('Amount must be greater than zero.');
      return;
    }

    const newTransaction = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };

    addTransaction(newTransaction);
    navigate('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="container"
      style={{ maxWidth: '800px' }}
    >
      <button 
        onClick={() => navigate('/')} 
        className="nav-link" 
        style={{ 
          border: 'none', 
          background: 'var(--card-bg)', 
          cursor: 'pointer', 
          marginBottom: '32px', 
          padding: '10px 20px',
          borderRadius: '12px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-main)'
        }}
      >
        <ArrowLeft size={18} strokeWidth={2.5} /> 
        <span style={{ fontWeight: 600 }}>Back to Dashboard</span>
      </button>

      <div className="form-card glass" style={{ padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'var(--primary)', 
            borderRadius: '16px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'white',
            boxShadow: '0 10px 20px -5px var(--primary-glow)'
          }}>
            <Save size={28} />
          </div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Add Transaction</h2>
          <p className="text-muted">Keep your financial records precise and organized.</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              backgroundColor: 'rgba(244, 63, 94, 0.1)', 
              color: 'var(--expense)', 
              padding: '14px 16px', 
              borderRadius: '12px', 
              marginBottom: '28px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '0.95rem', 
              fontWeight: 600,
              border: '1px solid rgba(244, 63, 94, 0.2)'
            }}
          >
            <AlertCircle size={20} /> {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Description</label>
            <input 
              type="text" 
              name="title"
              placeholder="e.g. Monthly Rent" 
              className="form-field"
              value={formData.title}
              onChange={handleChange}
              style={{ padding: '14px 18px', borderRadius: '12px' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label className="form-label">Amount ($)</label>
              <input 
                type="number" 
                name="amount"
                placeholder="0.00" 
                className="form-field"
                value={formData.amount}
                onChange={handleChange}
                style={{ padding: '14px 18px', borderRadius: '12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input 
                type="date" 
                name="date"
                className="form-field"
                value={formData.date}
                onChange={handleChange}
                style={{ padding: '14px 18px', borderRadius: '12px' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '16px' }}>
            <div className="form-group">
              <label className="form-label">Type</label>
              <select 
                name="type"
                className="form-field"
                value={formData.type}
                onChange={(e) => {
                  handleChange(e);
                  setFormData(prev => ({ ...prev, category: categories[e.target.value][0] }));
                }}
                style={{ padding: '14px 18px', borderRadius: '12px', cursor: 'pointer' }}
              >
                <option value="income">Income ↗</option>
                <option value="expense">Expense ↘</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select 
                name="category"
                className="form-field"
                value={formData.category}
                onChange={handleChange}
                style={{ padding: '14px 18px', borderRadius: '12px', cursor: 'pointer' }}
              >
                {categories[formData.type].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '24px', padding: '16px' }}>
            <Save size={20} /> <span style={{ fontSize: '1.05rem' }}>Save Transaction</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddTransaction;
