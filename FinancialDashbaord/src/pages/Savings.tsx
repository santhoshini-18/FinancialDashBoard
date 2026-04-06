import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", Income: 120000, Savings: 45000 },
  { month: "Feb", Income: 135000, Savings: 52000 },
  { month: "Mar", Income: 98000, Savings: 38000 },
  { month: "Apr", Income: 148000, Savings: 62000 },
  { month: "May", Income: 125000, Savings: 50000 },
  { month: "Jun", Income: 166000, Savings: 72000 },
  { month: "Jul", Income: 186000, Savings: 85000 },
  { month: "Aug", Income: 158000, Savings: 68000 },
];

const Savings = () => (
  <div className="flex min-h-screen bg-background">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-8">
        <h1 className="text-foreground text-3xl font-extrabold mb-8">Savings</h1>
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="text-foreground font-bold text-lg mb-6">Income vs Savings</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160,60%,45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160,60%,45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(262,60%,60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(262,60%,60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(160,10%,55%)", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(160,10%,55%)", fontSize: 12 }} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
              <Tooltip
                contentStyle={{ background: "hsl(160,25%,10%)", border: "1px solid hsl(160,15%,16%)", borderRadius: 12, color: "hsl(160,20%,95%)" }}
                formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, undefined]}
              />
              <Legend wrapperStyle={{ color: "hsl(160,20%,95%)" }} />
              <Area type="monotone" dataKey="Income" stroke="hsl(160,60%,45%)" fill="url(#incomeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="Savings" stroke="hsl(262,60%,60%)" fill="url(#savingsGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  </div>
);

export default Savings;
