
import { Menu, Search, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            康
          </div>
          <h1 className="text-xl font-bold text-green-800 tracking-wide">
            康寶廚藝時代
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-green-600 transition-colors">首頁</a>
          <a href="#" className="hover:text-green-600 transition-colors">食譜大全</a>
          <a href="#" className="hover:text-green-600 transition-colors">當季特選</a>
          <a href="#" className="hover:text-green-600 transition-colors">關於康寶</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-green-50 rounded-full text-gray-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-green-50 rounded-full text-gray-600 transition-colors hidden md:block">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-green-50 rounded-full text-gray-600 transition-colors md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
