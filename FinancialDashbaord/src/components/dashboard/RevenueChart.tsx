import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Mar", value: 98000 },
  { name: "Apr", value: 148000 },
  { name: "May", value: 125000 },
  { name: "Jun", value: 166000 },
  { name: "Jul", value: 186000 },
  { name: "Aug", value: 158000 },
];

const RevenueChart = () => (
  <div className="bg-card rounded-2xl p-6 border border-border">
    <h3 className="text-foreground font-bold text-lg mb-6">Revenue Flow</h3>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} barCategoryGap="20%">
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(160,10%,55%)", fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(160,10%,55%)", fontSize: 12 }} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
        <Tooltip
          contentStyle={{ background: "hsl(160,25%,10%)", border: "1px solid hsl(160,15%,16%)", borderRadius: 12, color: "hsl(160,20%,95%)" }}
          formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, "Revenue"]}
        />
        <Bar dataKey="value" radius={[8, 8, 8, 8]}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === 4 ? "hsl(262,60%,60%)" : "hsl(160,60%,45%)"} fillOpacity={i === 4 ? 1 : 0.6} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;
