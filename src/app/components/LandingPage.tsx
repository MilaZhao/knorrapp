
import { ArrowRight, Star, ChefHat, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageProps {
  onStart: () => void;
  onGuest: () => void;
}

export const LandingPage = ({ onStart, onGuest }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1744421459678-9c74f10ba85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc2OTU4MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chef Plating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 pb-24 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              尋找你的<br />
              <span className="text-green-400">後場神隊友</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-md">
              左滑排除雷點，右滑配對靈感。
              <br />
              專為專業主廚打造的智能助手。
            </p>
            
            <button 
              onClick={onStart}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/30 text-lg"
            >
              開始配對我的專屬菜單
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={onGuest}
              className="mt-4 w-full md:w-auto text-gray-300 text-sm hover:text-white transition-colors"
            >
              先逛逛 (Guest Mode)
            </button>
          </motion.div>
        </div>
      </div>

      {/* Value Props */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          為什麼主廚都選擇康寶？
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <ChefHat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">大師靈感庫</h3>
            <p className="text-gray-600">米其林主廚親自傳授，為您的菜單注入全新靈魂。</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">省時高效率</h3>
            <p className="text-gray-600">標準化 SOP 與快手菜方案，讓後場出餐如流水般順暢。</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">利潤最大化</h3>
            <p className="text-gray-600">精準成本控制與高毛利菜單組合，讓每一盤都賺錢。</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-red-500" />
            同行都在關注什麼？
          </h2>
          
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x">
            {[
              { title: "川味酸菜魚", views: "12,503", img: "https://images.unsplash.com/photo-1571838045421-4845dc4f5979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNwaWNlcyUyMGluZ3JlZGllbnRzJTIwc2ljaHVhbiUyMHBlcHBlcnxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { title: "黃金流沙蝦球", views: "8,942", img: "https://images.unsplash.com/photo-1628711594843-e420787a3afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b2slMjBzdGlyJTIwZnJ5JTIwYWN0aW9ufGVufDF8fHx8MTc2OTU4MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { title: "慢燉牛三寶", views: "6,211", img: "https://images.unsplash.com/photo-1741243412269-be61e7d2be0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWYlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
            ].map((item, i) => (
              <div key={i} className="min-w-[280px] bg-white rounded-xl shadow-sm overflow-hidden snap-center border border-gray-100">
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{item.views} 位主廚已瀏覽</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
