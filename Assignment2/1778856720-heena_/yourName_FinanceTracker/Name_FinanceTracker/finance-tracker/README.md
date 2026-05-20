# 💰 Flotrack — Personal Finance Tracker

A modern, feature-rich personal finance tracker built with React + Vite. Track income and expenses, visualize spending patterns, and manage your finances with an intuitive interface.

## 🎯 Overview

Flotrack is a comprehensive financial management tool that helps you:
- **Monitor** your income and expenses with real-time balance tracking
- **Analyze** spending patterns through interactive charts and visualizations
- **Manage** transactions with powerful search, filter, and categorization
- **Track** financial goals with detailed statistics and insights

---

## ✨ Features

### 📊 Dashboard
- **Financial Overview** – Net balance, total income, and total expenses at a glance
- **Summary Cards** – Color-coded cards showing balance trends and savings rate
- **Recent Transactions** – Quick view of your latest 5 transactions
- **Expense Breakdown** – Interactive pie chart showing expense distribution by category
- **Quick Stats** – Average daily expense, largest expense, and total entries

### 💳 Transaction Management
- **Full Transaction List** – Complete history of all income and expense entries
- **Smart Search** – Find transactions by title, category, or note
- **Multi-Filter System**:
  - Filter by type (Income / Expense / All)
  - Filter by category (Food, Housing, Entertainment, etc.)
  - Sort by date, amount, or category
- **Responsive Badges** – Visual indicators for transaction type and status

### ➕ Add Transaction
- **Income/Expense Toggle** – Easy switching between transaction types
- **Live Preview** – See transaction details before submitting
- **Form Validation** – Real-time error checking with helpful messages
- **Category Selection** – Pre-defined categories or custom entries
- **Notes Support** – Add context and details to transactions
- **Success Confirmation** – Visual feedback when transaction is saved

### 📈 Analytics & Charts
- **Balance Trend Chart** – Area chart showing balance over time
- **Income vs Expense** – Bar chart comparing income and spending
- **Expense Breakdown** – Donut chart visualizing category-wise expenses
- **Income Sources** – Horizontal bar chart showing income by category
- **Interactive Tooltips** – Hover for detailed transaction information

### 🎨 Theme Support
- **Dark Mode** – Easy on the eyes with elegant dark theme
- **Light Mode** – Bright and clean light theme
- **Theme Toggle** – One-click switching in the navbar
- **Persistent Preference** – Your theme choice is saved automatically

### ⚡ Smooth Animations
- **Page Transitions** – Elegant slide-in animations when navigating
- **Hover Effects** – Cards and buttons respond smoothly to interaction
- **Loading States** – Smooth fade-in effects for content
- **Interactive Elements** – Buttons scale and transform on hover
- **List Animations** – Staggered animations for transaction lists

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library with hooks (useState, useEffect) |
| **Vite** | Fast build tool and dev server |
| **React Router v6** | Client-side routing and navigation |
| **Recharts** | Interactive data visualization |
| **Context API** | Global state management |
| **localStorage** | Client-side data persistence |
| **CSS3** | Styling with custom properties and animations |
| **Google Fonts** | Typography (DM Serif Display, DM Mono, Outfit) |

---

## 📁 Project Structure

```
finance-tracker/
├── src/
│   ├── App.jsx                      # Main app component with routes
│   ├── main.jsx                     # Entry point
│   ├── index.css                    # Global styles & animations
│   ├── context/
│   │   └── FinanceContext.jsx       # Global state & theme management
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation bar with theme toggle
│   │   ├── Navbar.css
│   │   ├── StatCard.jsx             # Summary stat card component
│   │   ├── StatCard.css
│   │   ├── TransactionItem.jsx      # Individual transaction row
│   │   └── TransactionItem.css
│   └── pages/
│       ├── Dashboard.jsx            # Main dashboard view
│       ├── Dashboard.css
│       ├── Transactions.jsx         # Full transaction list
│       ├── Transactions.css
│       ├── AddTransaction.jsx       # Add/edit transaction form
│       ├── AddTransaction.css
│       ├── Charts.jsx               # Analytics dashboard
│       └── Charts.css
├── public/                          # Static assets
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v8 or higher

### Installation

1. **Clone or download the project**
   ```bash
   cd finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will open with sample data pre-loaded

### Build for Production
```bash
npm run build
```

---

## 💡 How to Use

### Dashboard
- View your financial summary at a glance
- See recent transactions and expense breakdown
- Check quick statistics like average daily spending

### Adding Transactions
1. Click the **"+ Add"** button in the navbar or use the **Add Transaction** page
2. Select transaction type (Income/Expense)
3. Fill in the details (title, amount, category, date, note)
4. Review the live preview
5. Click **Save** and see the success confirmation

### Viewing Transactions
1. Go to **Transactions** page
2. Use search to find specific transactions
3. Filter by type and category
4. Sort by date or amount
5. Delete transactions with the trash icon

### Analyzing Data
1. Visit the **Charts** page
2. View balance trends over time
3. Compare income vs expenses
4. Analyze spending by category
5. Track income sources

### Switching Themes
- Click the **☀️ / 🌙** button in the top-right navbar
- Theme preference is automatically saved

---

## 🎨 Design Features

### Color Scheme
- **Dark Mode**: Sophisticated dark theme with lime accent
- **Light Mode**: Clean, bright interface with good contrast
- **Accent Colors**: Lime (#c8f04c), Red (#f87171), Blue (#6bb5ff)
- **Status Colors**: Green for income, Red for expenses

### Typography
- **Serif Display**: DM Serif Display for headings
- **Monospace**: DM Mono for numbers and data
- **Sans Serif**: Outfit for body text

### Animations
- Smooth fade-in/slide-in transitions
- Hover effects with scaling and elevation
- Staggered list animations
- Cubic-bezier timing for natural motion

---

## 📊 Sample Data

The app comes pre-loaded with 10 sample transactions:
- Monthly salary income
- Rent payment
- Freelance income
- Grocery shopping
- Entertainment subscriptions
- Utility bills
- Investment dividend
- Gym membership
- Online course purchase
- Dinner with friends

**Note**: Sample data is only loaded on first visit. To reset, clear browser cache or localStorage.

---

## 💾 Data Storage

All data is stored locally in your browser using **localStorage**:
- Transactions: `ft_transactions` key
- Theme preference: `ft_theme` key

**Privacy**: No data is sent to external servers. Everything stays on your device.

---

## 🌍 Internationalization

- **Currency**: Indian Rupees (₹)
- **Locale**: en-IN for number formatting
- **Dates**: Standard format (YYYY-MM-DD)

---

## ✅ Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Key Highlights

✨ **Modern UI** – Clean, professional design with smooth animations
🎨 **Theme Toggle** – Dark and light modes with persistent preferences
📱 **Responsive** – Works seamlessly on desktop, tablet, and mobile
⚡ **Performance** – Built with Vite for instant HMR and fast load times
🔍 **Search & Filter** – Powerful transaction discovery tools
📊 **Data Visualization** – Beautiful charts powered by Recharts
💾 **Offline First** – All data stored locally, works without internet
🎭 **Smooth Animations** – Delightful interactions and transitions

---

## 📝 Notes

1. **No Backend Required** – This is a client-side only application
2. **Google Fonts** – Requires internet connection for optimal font display
3. **LocalStorage Limit** – Typically 5-10MB per domain (plenty for transactions)
4. **Currency** – Configured for INR but easily customizable
5. **Export Feature** – Consider adding JSON export for backup purposes

---

## 🚀 Future Enhancements

Potential features for future versions:
- 📤 Export data as CSV/PDF
- 🔄 Recurring transactions
- 💰 Budget planning and alerts
- 📧 Monthly summary emails
- ☁️ Cloud sync with authentication
- 📲 Mobile app version
- 🔐 Data encryption and backups

---

## 📄 License

This project is created for educational purposes.

---

## 👨‍💻 Author

Built with ❤️ using React + Vite

Happy tracking! 💰
