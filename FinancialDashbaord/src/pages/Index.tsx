import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import FilterTabs from "@/components/dashboard/FilterTabs";
import RevenueChart from "@/components/dashboard/RevenueChart";
import CreditCardWidget from "@/components/dashboard/CreditCard";
import Transactions from "@/components/dashboard/Transactions";
import ExpensesDonut from "@/components/dashboard/ExpensesDonut";
import StatCards from "@/components/dashboard/StatCards";

const Index = () => (
  <div className="flex min-h-screen bg-background">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto px-6 pb-8">
        <div className="mb-6">
          <h1 className="text-foreground text-3xl font-extrabold mb-4">My Dashboard</h1>
          <FilterTabs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <RevenueChart />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ExpensesDonut />
              <StatCards />
            </div>
          </div>

          <div className="space-y-6">
            <CreditCardWidget />
            <div className="bg-card rounded-2xl p-6 border border-border">
              <Transactions />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Index;
