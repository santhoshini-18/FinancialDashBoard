import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "All", path: "/" },
  { label: "Withdrawal", path: "/withdrawal" },
  { label: "Savings", path: "/savings" },
  { label: "Deposit", path: "/deposit" },
];

const FilterTabs = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      {tabs.map((t) => (
        <button
          key={t.label}
          onClick={() => { setActive(t.label); navigate(t.path); }}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            active === t.label
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
