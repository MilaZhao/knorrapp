import { useState } from 'react';
import { Search, Heart, Eye, Play, Clock, TrendingUp, Filter, Utensils, Zap, ChefHat } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';

const CATEGORIES = ["推薦", "當季", "快手菜", "外賣專區", "影片教學"];

interface InspirationItem {
  id: string;
  type: 'recipe' | 'report' | 'video';
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    views: number;
  };
  tags?: string[];
  meta?: {
    time?: string;
    feature?: string;
    trend?: string;
  };
}

const MOCK_ITEMS: InspirationItem[] = [
  {
    id: '1',
    type: 'report',
    title: '2026 酸菜魚爆品趨勢報告',
    image: 'https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWNodWFuJTIwc2F1ZXJrcmF1dCUyMGZpc2glMjBzdWFuY2FpeXUlMjBzcGljeSUyMHNvdXB8ZW58MXx8fHwxNzY5NTg2NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: {
      name: '康寶餐飲學院',
      avatar: 'https://ui-avatars.com/api/?name=Knorr&background=06C755&color=fff'
    },
    stats: { likes: 1240, views: 8500 },
    meta: { trend: '增長 +150%' }
  },
  {
    id: '2',
    type: 'recipe',
    title: '法式擺盤技巧：提升菜品價值的秘密',
    image: 'https://images.unsplash.com/photo-1750943079462-87bad58cf43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2hlZiUyMHBsYXRpbmclMjBmb29kJTIwZmluZSUyMGRpbmluZyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY5NTg2NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: {
      name: 'Chef Andre',
      avatar: 'https://ui-avatars.com/api/?name=Andre&background=random'
    },
    stats: { likes: 856, views: 5600 },
    tags: ['擺盤', '高端'],
    meta: { feature: '宴席首選' }
  },
  {
    id: '3',
    type: 'video',
    title: '3分鐘出餐：鑊氣炒麵標準化流程',
    image: 'https://images.unsplash.com/photo-1762418967948-a243e94dd789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b2slMjBzdGlyJTIwZnJ5JTIwbm9vZGxlcyUyMHN0ZWFtJTIwYXV0aGVudGljJTIwYXNpYW4lMjBraXRjaGVufGVufDF8fHx8MTc2OTU4NjYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: {
      name: '快手阿強',
      avatar: 'https://ui-avatars.com/api/?name=Strong&background=random'
    },
    stats: { likes: 2100, views: 12000 },
    meta: { time: '3 min' }
  },
  {
    id: '4',
    type: 'recipe',
    title: '批量備料攻略：自製萬用蔥油醬',
    image: 'https://images.unsplash.com/photo-1762330018258-2cf9b8f80618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWxrJTIwZm9vZCUyMHByZXBhcmF0aW9uJTIwaW5ncmVkaWVudHMlMjBjb3N0JTIwc2F2aW5nJTIwY29tbWVyY2lhbCUyMGtpdGNoZW58ZW58MXx8fHwxNzY5NTg2NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: {
      name: '省錢大師',
      avatar: 'https://ui-avatars.com/api/?name=Money&background=random'
    },
    stats: { likes: 543, views: 3200 },
    tags: ['SOP', '醬料'],
    meta: { feature: '耐存放' }
  },
  {
    id: '5',
    type: 'video',
    title: '大廚教學：如何拍出吸睛菜單照',
    image: 'https://images.unsplash.com/photo-1611727940880-e8cdf6c8ce95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwdGVhY2hpbmclMjBjb29raW5nJTIwdmlkZW8lMjByZWNvcmRpbmclMjBjYW1lcmElMjBzZXR1cHxlbnwxfHx8fDE3Njk1ODY2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: {
      name: '行銷部小編',
      avatar: 'https://ui-avatars.com/api/?name=Editor&background=random'
    },
    stats: { likes: 320, views: 1500 },
    meta: { time: '12 min' }
  },
];

export const Inspiration = () => {
  const [activeTab, setActiveTab] = useState("推薦");

  const formatViews = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="px-4 py-3 flex gap-3 items-center">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜尋靈感、食譜、趨勢..." 
              className="w-full bg-gray-100 rounded-full py-2 pl-9 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>
          <button className="text-gray-500 p-1">
            <Filter className="w-5 h-5" />
          </button>
        </div>
        
        {/* Capsule Tabs */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === cat 
                  ? 'bg-green-600 text-white shadow-md shadow-green-600/20' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Content */}
      <div className="p-2">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3}}>
          <Masonry gutter="8px">
            {MOCK_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                  
                  {/* Type Badge */}
                  {item.type === 'video' && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-black/40 backdrop-blur rounded-full flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}

                  {/* Magazine Overlay for Reports */}
                  {item.type === 'report' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                      <div className="flex items-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3 text-yellow-400" />
                        <span className="text-[10px] font-bold text-yellow-400 bg-yellow-400/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
                           TREND
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                  )}

                  {/* Floating Tags for Recipes */}
                  {item.type !== 'report' && item.meta && (
                     <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
                        {item.meta.time && (
                            <span className="bg-black/60 backdrop-blur text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Clock className="w-2.5 h-2.5" /> {item.meta.time}
                            </span>
                        )}
                        {item.meta.feature && (
                            <span className="bg-blue-600/90 backdrop-blur text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Utensils className="w-2.5 h-2.5" /> {item.meta.feature}
                            </span>
                        )}
                     </div>
                  )}
                </div>

                {/* Content Section */}
                {item.type !== 'report' && (
                   <div className="p-3">
                     <h3 className="font-bold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {item.title}
                     </h3>
                     
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <img src={item.author.avatar} className="w-4 h-4 rounded-full" />
                            <span className="text-[10px] text-gray-500 truncate max-w-[60px]">
                                {item.author.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                             <div className="flex items-center gap-0.5">
                                <Eye className="w-3 h-3" />
                                <span className="text-[10px]">{formatViews(item.stats.views)}</span>
                             </div>
                        </div>
                     </div>
                   </div>
                )}
                
                {/* Report Footer (Different style) */}
                {item.type === 'report' && (
                    <div className="px-3 py-2 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                        <div className="flex items-center gap-1">
                            <img src={item.author.avatar} className="w-4 h-4 rounded-full" />
                            <span className="text-[10px] text-gray-500 font-bold">Knorr Pro</span>
                        </div>
                         <div className="flex items-center gap-1 text-gray-400">
                            <Eye className="w-3 h-3" />
                            <span className="text-[10px]">{formatViews(item.stats.views)}</span>
                         </div>
                    </div>
                )}
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        
        {/* Loading Spinner */}
        <div className="py-8 text-center">
            <div className="w-6 h-6 border-2 border-gray-200 border-t-green-600 rounded-full animate-spin mx-auto mb-2" />
            <p className="text-xs text-gray-400">正在加載更多靈感...</p>
        </div>
      </div>
    </div>
  );
};
