import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 7900, color: "hsl(262,60%,60%)" },
  { name: "Clothes", value: 3500, color: "hsl(160,60%,45%)" },
  { name: "Other", value: 4000, color: "hsl(70,70%,60%)" },
];

const ExpensesDonut = () => (
  <div className="bg-card rounded-2xl p-6 border border-border">
    <h3 className="text-foreground font-bold text-lg mb-4">Available</h3>
    <div className="flex items-center gap-6">
      <div className="relative w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={36} outerRadius={56} paddingAngle={4} dataKey="value" strokeWidth={0}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-foreground font-bold text-sm">₹15,400</span>
          <span className="text-muted-foreground text-[10px]">Total Expenses</span>
        </div>
      </div>
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
            <div>
              <p className="text-foreground text-sm font-medium">{d.name}</p>
              <p className="text-muted-foreground text-xs">₹{d.value.toLocaleString("en-IN")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExpensesDonut;
