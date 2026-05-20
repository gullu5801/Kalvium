import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

function ExpenseChart() {

  const data = [
    { name: "Income", value: 5000 },
    { name: "Expense", value: 300 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

export default ExpenseChart;