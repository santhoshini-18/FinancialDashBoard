import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Wallet, TrendingDown, IndianRupee } from "lucide-react";

const cards = [
  { label: "Available Balance", amount: "₹18,52,350", icon: Wallet, color: "bg-primary/20 text-primary" },
  { label: "Income", amount: "₹1,86,240", icon: IndianRupee, color: "bg-accent/20 text-accent" },
  { label: "Money Withdrawn", amount: "₹4,35,000", icon: TrendingDown, color: "bg-destructive/20 text-destructive" },
];

const Withdrawal = () => (
  <div className="flex min-h-screen bg-background">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-8">
        <h1 className="text-foreground text-3xl font-extrabold mb-8">Withdrawal</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.label} className="bg-card rounded-2xl p-6 border border-border">
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-4`}>
                <c.icon size={24} />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{c.label}</p>
              <p className="text-foreground text-3xl font-extrabold">{c.amount}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default Withdrawal;
