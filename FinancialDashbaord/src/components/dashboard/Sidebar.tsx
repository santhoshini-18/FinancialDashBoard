import { Home, Settings, Wallet, PiggyBank, Landmark } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, path: "/" },
  { icon: Wallet, path: "/withdrawal" },
  { icon: PiggyBank, path: "/savings" },
  { icon: Landmark, path: "/deposit" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col items-center py-8 px-3 gap-6 border-r border-border min-h-screen w-16">
      {navItems.map(({ icon: Icon, path }, i) => (
        <button
          key={i}
          onClick={() => navigate(path)}
          className={`p-2.5 rounded-xl transition-colors ${
            location.pathname === path
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
      <div className="mt-auto">
        <button
          onClick={() => navigate("/settings")}
          className={`p-2.5 rounded-xl transition-colors ${
            location.pathname === "/settings"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          <Settings size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
