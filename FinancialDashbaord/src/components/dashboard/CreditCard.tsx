import { Plus } from "lucide-react";

const CreditCardWidget = () => (
  <div className="space-y-4">
    <h3 className="text-foreground font-bold text-lg">My Card</h3>
    <div className="relative rounded-2xl p-6 overflow-hidden" style={{
      background: "linear-gradient(135deg, hsl(165,50%,25%) 0%, hsl(160,40%,15%) 100%)"
    }}>
      <div className="absolute top-3 right-3">
        <button className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary hover:bg-primary/40 transition-colors">
          <Plus size={16} />
        </button>
      </div>
      <p className="text-muted-foreground text-xs mb-1">Total Balance</p>
      <p className="text-foreground text-3xl font-extrabold mb-6">₹18,52,350.50</p>
      <p className="text-muted-foreground text-sm tracking-[0.2em] mb-1">4358 4445 0968 2323</p>
      <p className="text-muted-foreground text-xs">08/24</p>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
    </div>
  </div>
);

export default CreditCardWidget;
