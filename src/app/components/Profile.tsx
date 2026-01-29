import { User, Settings, FileText, Phone, LogOut, ChevronRight, Package, Heart, QrCode, CreditCard } from 'lucide-react';

interface ProfileProps {
  onLogout?: () => void;
}

export const Profile = ({ onLogout }: ProfileProps) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header / Member Card */}
      <div className="bg-white pb-6 pt-10 px-4 rounded-b-[2.5rem] shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-md overflow-hidden">
             <img src="https://images.unsplash.com/photo-1695185381786-548b877edfa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwaG9sZGluZyUyMHNtYXJ0cGhvbmUlMjBoYXBweXxlbnwxfHx8fDE3Njk1ODEyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Chef Michael</h1>
            <p className="text-gray-500 text-sm">金牌主廚會員</p>
          </div>
        </div>

        {/* Member Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-gray-400 text-xs mb-1">現有點數</p>
              <p className="text-3xl font-bold text-yellow-400">2,450 <span className="text-sm text-gray-400 font-normal">pts</span></p>
            </div>
            <QrCode className="w-8 h-8 text-white/80" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-400 mb-1">會員條碼</p>
              <p className="font-mono text-lg tracking-wider">8801 2345 6789</p>
            </div>
            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
               <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="px-4 py-6 space-y-4">
        
        {/* Order & Favorites */}
        <div className="bg-white rounded-xl p-4 flex justify-around shadow-sm">
            <button className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-600">歷史訂單</span>
            </button>
            <button className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-600">收藏清單</span>
            </button>
            <button className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-xs text-gray-600">優惠券</span>
            </button>
        </div>

        {/* Settings List */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <MenuItem icon={<User />} label="帳號設定" />
          <MenuItem icon={<FileText />} label="地址管理" />
          <MenuItem icon={<Settings />} label="App 設定" />
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <MenuItem icon={<Phone />} label="聯繫客服" />
          <MenuItem icon={<LogOut />} label="登出" danger onClick={onLogout} />
        </div>
      </div>
      
      <p className="text-center text-gray-400 text-xs mt-4">Version 2.0.1</p>
    </div>
  );
};

const MenuItem = ({ icon, label, danger = false, onClick }: { icon: any, label: string, danger?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
  >
    <div className={`flex items-center gap-3 ${danger ? 'text-red-500' : 'text-gray-700'}`}>
      <span className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-300" />
  </button>
);
