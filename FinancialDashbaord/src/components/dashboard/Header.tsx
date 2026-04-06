import { Search } from "lucide-react";

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">F</div>
        <span className="font-bold text-foreground text-lg">Fintech</span>
      </div>
      <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-full px-4 py-2 ml-6 w-72">
        <Search size={16} className="text-muted-foreground" />
        <input
          placeholder="Search payment"
          className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-full"
        />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-foreground font-semibold">Hi Stefan!</span>
      <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-primary-foreground font-bold">S</div>
    </div>
  </header>
);

export default Header;
