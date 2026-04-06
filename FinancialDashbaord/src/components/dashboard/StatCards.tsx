import { MoreHorizontal } from "lucide-react";

const stats = [
  { label: "Income", amount: "₹1,86,240", sub: "This week's income", change: "+12%", positive: true },
  { label: "Expense", amount: "₹1,45,750", sub: "This week's expense", change: "+9%", positive: true },
];

const StatCards = () => (
  <div className="grid grid-cols-1 gap-4">
    {stats.map((s) => (
      <div key={s.label} className="bg-card rounded-2xl p-5 border border-border">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-muted-foreground font-semibold text-sm">{s.label}</h4>
          <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal size={16} /></button>
        </div>
        <p className="text-foreground text-2xl font-extrabold mb-1">{s.amount}</p>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">{s.sub}</span>
          <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">{s.change}</span>
        </div>
      </div>
    ))}
  </div>
);

export default StatCards;
