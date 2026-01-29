
import { Home, Compass, Gift, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav = ({ currentTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'dashboard', icon: Home, label: '首頁' },
    { id: 'inspiration', icon: Compass, label: '靈感庫' },
    { id: 'rewards', icon: Gift, label: '集點' },
    { id: 'shop', icon: ShoppingBag, label: '商城' },
    { id: 'profile', icon: User, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 pb-safe pt-2 px-2 flex justify-around items-end z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex flex-col items-center gap-1 p-2 min-w-[60px] transition-all duration-300 ${
              isActive ? 'text-green-600 -translate-y-1' : 'text-gray-400'
            }`}
          >
            <div className={`p-1 rounded-xl transition-all ${isActive ? 'bg-green-50' : 'bg-transparent'}`}>
                <tab.icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            </div>
            <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
