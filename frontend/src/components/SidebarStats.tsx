import { useState, useEffect } from 'react';
import { Activity, Shield, Wifi, HardDrive } from 'lucide-react';

export const SidebarStats = () => {
  const [stats, setStats] = useState({
    cpu: 18,
    net: 42,
    threats: 0,
    uptime: '14d 03h 22m'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        cpu: Math.floor(Math.random() * 30) + 10,
        net: Math.floor(Math.random() * 100) + 20,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
      <div className="flex flex-col gap-6 p-4 glass-card border-cyber-cyan/20 bg-cyber-black/40">
        {[
          { icon: Activity, label: 'LOAD', value: `${stats.cpu}%`, color: 'text-cyber-cyan' },
          { icon: Wifi, label: 'TRAFFIC', value: `${stats.net}Mbps`, color: 'text-cyber-cyan' },
          { icon: Shield, label: 'THREATS', value: stats.threats, color: 'text-cyber-green' },
          { icon: HardDrive, label: 'STORAGE', value: '42.8GB', color: 'text-cyber-cyan' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1 group cursor-help">
            <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">{item.label}</span>
            <span className="text-[10px] font-mono text-white font-bold">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="h-24 w-px bg-gradient-to-b from-cyber-cyan/50 to-transparent mx-auto"></div>
    </div>
  );
};
