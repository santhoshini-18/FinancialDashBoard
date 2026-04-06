import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { IndianRupee, Wallet, TrendingUp, ShieldCheck } from "lucide-react";

const cards = [
  { label: "Income", amount: "₹1,86,240", icon: TrendingUp, color: "bg-primary/20 text-primary" },
  { label: "Balance", amount: "₹22,85,600", icon: Wallet, color: "bg-accent/20 text-accent" },
  { label: "Expenditure", amount: "₹1,45,750", icon: IndianRupee, color: "bg-destructive/20 text-destructive" },
  { label: "Available Balance", amount: "₹18,52,350", icon: ShieldCheck, color: "bg-primary/20 text-primary" },
];

const Deposit = () => (
  <div className="flex min-h-screen bg-background">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-8">
        <h1 className="text-foreground text-3xl font-extrabold mb-8">Deposit</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

export default Deposit;
