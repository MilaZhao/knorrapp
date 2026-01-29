
import { Play, TrendingUp, Bell, Search, Award, DollarSign, ChevronRight, Heart, X, Clock, Sparkles, Check, Flame, Utensils, ThumbsUp, ArrowUpRight, Zap, Users, BookOpen } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { RecipeModal } from './RecipeModal';
import { recipes, Recipe } from '@/data/mockRecipes';
import { useState } from 'react';

interface DashboardProps {
  userSegment: 'quality' | 'efficiency';
  userRole: 'boss' | 'chef' | 'learner';
  isGuest?: boolean;
}

export const Dashboard = ({ userSegment, userRole, isGuest = false }: DashboardProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isDailyMatchSaved, setIsDailyMatchSaved] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // --- Content Configuration ---

  const getGreeting = () => {
    switch (userRole) {
      case 'boss': return "老闆，今日營運建議";
      case 'chef': return "主廚，準備好大展身手了嗎？";
      case 'learner': return "早安，今天的料理靈感";
      default: return "歡迎來到康寶廚藝時代";
    }
  };

  const getSubGreeting = () => {
    switch (userRole) {
      case 'boss': return "為您準備了降本增���的專屬方案";
      case 'chef': return "看看同行都在關注什麼";
      case 'learner': return "每天進步一點點，成為廚藝大師";
      default: return "探索您的專屬內容";
    }
  };

  // --- Components ---

  const DailyMatch = () => (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          今日真命天菜
        </h2>
      </div>

      <AnimatePresence mode="wait">
        {!isDailyMatchSaved ? (
          <motion.div 
            key="card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: 200, rotate: 10 }}
            className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1752654976426-f0de0cbf8bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcG91cmluZyUyMHNhdWNlJTIwb24lMjBkaXNoJTIwc3RlYW1pbmclMjBob3QlMjBjbG9zZSUyMHVwJTIwY2luZW1hdGljfGVufDF8fHx8MTc2OTU4NTc5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
            </div>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  <path className="text-green-500" strokeDasharray="96, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <span className="text-sm font-bold text-green-700">96% 速配</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-medium border border-white/20 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-yellow-400" /> 備料 -20 mins
                </span>
                <span className="px-2 py-1 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-medium border border-white/20 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-red-400" /> 同類型熱銷
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-1 leading-tight text-shadow-sm">
                {userSegment === 'efficiency' ? '極速出餐・宮保雞丁' : '經典重現・慢燉牛頰'}
              </h3>
              <p className="text-gray-200 text-sm mb-6 font-medium opacity-90">
                {userRole === 'boss' ? '老闆，這道菜利潤高且出餐快！' : userRole === 'chef' ? '主廚，這道菜符合您的創新風格。' : '這道菜能幫您練習火候控制！'}
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={() => toast.info('沒關係，下一道會更好！')}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" /> 沒感覺
                </button>
                <button 
                  onClick={() => {
                    setIsDailyMatchSaved(true);
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 2000);
                    toast.success('太棒了！已將食譜與採購清單存入。', { icon: '🎉' });
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 hover:scale-[1.02] transition-transform"
                >
                  <Heart className="w-5 h-5 fill-current" /> 加入菜單
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="saved"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[420px] w-full bg-green-50 rounded-3xl flex flex-col items-center justify-center text-center p-8 border border-green-100 relative overflow-hidden"
          >
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                    animate={{ 
                      y: -200 - Math.random() * 200, 
                      x: (Math.random() - 0.5) * 300,
                      opacity: 0,
                      scale: [0, 1, 0.5],
                      rotate: Math.random() * 360
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute bottom-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B'][i % 4] }}
                  />
                ))}
              </div>
            )}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <Check className="w-12 h-12 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">已成功收錄！</h3>
            <p className="text-gray-500 text-sm mb-8">食譜已加入您的靈感庫<br/>採購清單也準備好了。</p>
            <button onClick={() => setIsDailyMatchSaved(false)} className="text-green-600 font-bold text-sm flex items-center gap-1 hover:underline">
              再看一次 <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );

  const MasterClass = () => (
    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <div className="w-1 h-5 bg-yellow-500 rounded-full" />
          大師名人堂
        </h2>
        <button className="text-xs text-green-600 font-medium">查看全部</button>
      </div>
      <div className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1741243412269-be61e7d2be0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWYlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Chef" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 text-white w-full">
          <div className="flex justify-between items-end">
            <div>
                <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded mb-2 inline-block">Exclusive</span>
                <h3 className="text-xl font-bold mb-1">江主廚的極致高湯學</h3>
                <p className="text-gray-300 text-xs">探索鮮味的黃金比例</p>
            </div>
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                <Play className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const QuickDishes = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-500 fill-blue-500" />
          10分鐘快手菜
        </h2>
        <button className="text-xs text-green-600 font-medium">查看全部</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {recipes.filter(r => r.category === '熱炒' || r.category === '炸物').slice(0, 2).map((recipe) => (
          <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer active:scale-95 transition-transform">
            <div className="h-28 relative bg-gray-100">
              <img src={recipe.image} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                10 min
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-sm line-clamp-1 mb-1">{recipe.title}</h3>
              <div className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">熱炒</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const HotIngredients = () => (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Flame className="w-5 h-5 text-red-500 fill-red-500" />
          本月熱搜食材
        </h2>
         <button className="text-xs text-green-600 flex items-center font-medium">
          查看全部 <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      
      <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide">
        {[
            { name: "藤椒風味油", score: 98, img: "https://images.unsplash.com/photo-1571838045421-4845dc4f5979?auto=format&fit=crop&w=300&q=80" },
            { name: "熟成牛頰", score: 95, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=300&q=80" },
            { name: "鹹蛋黃醬", score: 92, img: "https://images.unsplash.com/photo-1628711594843-e420787a3afa?auto=format&fit=crop&w=300&q=80" },
        ].map((item, i) => (
          <div key={i} className="min-w-[140px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
            <div className="h-24 bg-gray-200 relative">
               <img src={item.img} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h4 className="font-bold text-gray-800 text-sm mb-0.5">{item.name}</h4>
              <p className="text-[10px] text-gray-400">熱搜指數 {item.score}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const TrendRadar = ({ type }: { type: 'social' | 'tech' }) => (
    <div className="mb-8 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-50 -mr-6 -mt-6"></div>
        
        <div className="flex items-center gap-2 mb-3 relative z-10">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                {type === 'social' ? <Users className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
            </div>
            <h2 className="text-lg font-bold text-indigo-900">流行雷達</h2>
        </div>

        {type === 'social' ? (
            <>
                <p className="text-sm text-indigo-800 font-medium mb-3">
                    本週有 <span className="font-bold text-indigo-600 text-lg">2,000+</span> 位專業主廚收藏了這道菜...
                </p>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 flex gap-3 items-center">
                    <img src="https://images.unsplash.com/photo-1726160185608-09cca9162b6c?w=150" className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">藤椒酸菜魚</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">川菜創新</span>
                            <span className="text-xs text-red-500 font-bold flex items-center gap-0.5"><TrendingUp className="w-3 h-3"/> +15%</span>
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <>
                <p className="text-sm text-indigo-800 font-medium mb-3">
                    熱搜技法：<span className="font-bold text-indigo-600">梅納反應 (Maillard)</span>
                </p>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 flex gap-3 items-center">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=150" className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">完美煎牛排教學</h4>
                        <p className="text-xs text-gray-500 mt-1">這禮拜大家都在學這個知識點</p>
                    </div>
                </div>
            </>
        )}
    </div>
  );

  const KitchenRepairRoom = () => {
    const cards = userRole === 'boss' ? [
        { title: "換季採購讓人頭痛？", subtitle: "穩健菜單術", icon: <DollarSign className="w-4 h-4"/>, color: "bg-blue-50 text-blue-600" },
        { title: "人手不足不敢接單？", subtitle: "高效動線與備料", icon: <Users className="w-4 h-4"/>, color: "bg-orange-50 text-orange-600" },
        { title: "庫存醬料放到過期？", subtitle: "���醬三用食譜", icon: <Utensils className="w-4 h-4"/>, color: "bg-green-50 text-green-600" },
    ] : [
        { title: "味道忽遠忽近？", subtitle: "標準化醬汁比例", icon: <Award className="w-4 h-4"/>, color: "bg-purple-50 text-purple-600" },
        { title: "老闆又要換菜單？", subtitle: "10大熱搜懶人包", icon: <Zap className="w-4 h-4"/>, color: "bg-yellow-50 text-yellow-600" },
        { title: "想買好醬料老闆不肯？", subtitle: "用「省工時」說服", icon: <ThumbsUp className="w-4 h-4"/>, color: "bg-pink-50 text-pink-600" },
    ];

    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-gray-700" />
                廚房關係修復室
                </h2>
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">痛點解決</span>
            </div>
            
            <div className="grid gap-3">
                {cards.map((card, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.color}`}>
                                {card.icon}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">{card.title}</p>
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                    解鎖：{card.subtitle}
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                ))}
            </div>
        </section>
    );
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Mobile Header (App Bar) */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">K</div>
           <span className="font-bold text-lg text-gray-800">Knorr Pro</span>
        </div>
        <div className="flex items-center gap-3">
           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
             <Search className="w-5 h-5" />
           </button>
           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
             <Bell className="w-5 h-5" />
             <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
           </button>
        </div>
      </div>
      
      <main className="px-4 py-4">
        {/* Guest Banner */}
        {isGuest && (
          <div className="bg-gray-900 text-white p-4 rounded-xl mb-6 shadow-lg flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">歡迎體驗康寶廚藝時代</p>
              <p className="text-xs text-gray-400">註冊會員解鎖完整功能</p>
            </div>
            <button className="bg-green-600 text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap">
              立即註冊
            </button>
          </div>
        )}

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800 mb-1">{getGreeting()}</h1>
          <p className="text-gray-500 text-xs">{getSubGreeting()}</p>
        </div>

        {/* Content Modules Based on Role */}
        
        {userRole === 'boss' && (
            <>
                <DailyMatch />
                <HotIngredients />
                <MasterClass />
                <KitchenRepairRoom />
            </>
        )}

        {userRole === 'chef' && (
            <>
                <DailyMatch />
                <HotIngredients />
                <TrendRadar type="social" />
                <QuickDishes />
            </>
        )}

        {userRole === 'learner' && (
            <>
                <DailyMatch />
                <TrendRadar type="tech" />
                <HotIngredients />
            </>
        )}

      </main>
      
      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
};
