import { useFinance } from '../context/FinanceContext';

export default function Toast() {
  const { toast } = useFinance();
  if (!toast) return null;
  return <div className="toast">{toast}</div>;
}
