
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                康
              </div>
              <h2 className="text-xl font-bold tracking-wide">康寶廚藝時代</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              致力於提供最美味、最方便的料理靈感，讓每個家庭都能輕鬆享受下廚的樂趣。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">關於我們</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">品牌故事</a></li>
              <li><a href="#" className="hover:text-white transition-colors">永續發展</a></li>
              <li><a href="#" className="hover:text-white transition-colors">聯絡我們</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">美味食譜</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">中式料理</a></li>
              <li><a href="#" className="hover:text-white transition-colors">西式料理</a></li>
              <li><a href="#" className="hover:text-white transition-colors">湯品系列</a></li>
              <li><a href="#" className="hover:text-white transition-colors">素食專區</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">追蹤我們</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Knorr Culinary Age. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隱私權政策</a>
            <a href="#" className="hover:text-white">使用條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
