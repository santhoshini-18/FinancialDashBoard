const transactions = [
  { name: "Figma", icon: "🎨", amount: -1250 },
  { name: "Grammarly", icon: "✍️", amount: -830 },
  { name: "Blender", icon: "🔶", amount: -1250 },
];

const Transactions = () => (
  <div className="space-y-4">
    <h3 className="text-foreground font-bold text-lg">Transactions</h3>
    <div className="space-y-3">
      {transactions.map((t) => (
        <div key={t.name} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">{t.icon}</div>
            <span className="text-foreground font-medium">{t.name}</span>
          </div>
          <span className="text-destructive font-semibold">-₹{Math.abs(t.amount).toLocaleString("en-IN")}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Transactions;
