import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Switch } from "@/components/ui/switch";
import { Bell, Moon, Sun } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-6 pb-8">
          <h1 className="text-foreground text-3xl font-extrabold mb-8">Settings</h1>
          <div className="max-w-lg space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Bell size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Notifications</p>
                  <p className="text-muted-foreground text-sm">Receive push notifications</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  {darkMode ? <Moon size={20} className="text-accent" /> : <Sun size={20} className="text-accent" />}
                </div>
                <div>
                  <p className="text-foreground font-semibold">Dark Mode</p>
                  <p className="text-muted-foreground text-sm">Switch between light and dark themes</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
