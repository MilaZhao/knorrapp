
import { MessageCircle, Phone, ArrowRight, Brain, Sparkles, ChefHat, Database, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  onLogin: () => void;
  onGuest: () => void;
}

export const Login = ({ onLogin, onGuest }: LoginProps) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden text-white font-sans">
      
      {/* AI Illustration Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[80%] h-[60%] bg-green-500/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] bg-emerald-900/40 rounded-full blur-[80px]"
        />

        {/* Floating AI Icons Grid */}
        <div className="absolute inset-0 opacity-20">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Central Illustration Elements */}
        <div className="absolute top-[15%] left-0 right-0 flex justify-center items-center pointer-events-none">
            <div className="relative w-64 h-64">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border border-green-500/20 rounded-full border-dashed"
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-4 border border-white/10 rounded-full"
                />
                
                {/* Floating Icons */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-700 p-6 rounded-2xl shadow-2xl shadow-green-500/20 z-10">
                        <ChefHat className="w-16 h-16 text-white" />
                        <motion.div 
                           className="absolute -top-2 -right-2 bg-white text-green-600 rounded-full p-1.5 shadow-lg"
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 fill-current" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div 
                   className="absolute top-0 left-1/2 -ml-3 -mt-3 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl"
                   animate={{ 
                       x: [60, 80, 60],
                       y: [20, -10, 20],
                   }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Brain className="w-5 h-5 text-purple-400" />
                </motion.div>
                
                <motion.div 
                   className="absolute bottom-10 right-0 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl"
                   animate={{ 
                       y: [0, 15, 0],
                   }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Database className="w-5 h-5 text-blue-400" />
                </motion.div>

                <motion.div 
                   className="absolute top-1/2 left-0 -ml-10 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-xl"
                   animate={{ 
                       x: [0, -10, 0],
                   }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <Zap className="w-5 h-5 text-yellow-400" />
                </motion.div>
            </div>
        </div>
      </div>

      {/* Bottom Content Card */}
      <div className="relative z-10 flex-grow flex flex-col justify-end">
        {/* Gradient Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-none" />

        <div className="relative p-6 pb-12 w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">智慧廚房夥伴</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-[280px] mx-auto leading-relaxed">
              透過大數據分析，為您精準配對食譜靈感。
            </p>
          </motion.div>

          {/* Login Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3"
          >
            <button 
              onClick={onLogin}
              className="w-full bg-[#06C755] hover:bg-[#05b04b] active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-900/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              使用 LINE 帳號登入
            </button>
            
            <button 
              onClick={onLogin}
              className="w-full bg-white hover:bg-gray-100 active:scale-[0.98] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
                 <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
              </svg>
              使用 Apple 帳號登入
            </button>

            <button 
              onClick={onLogin}
              className="w-full bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800 active:scale-[0.98] text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all border border-slate-700/50"
            >
              <Phone className="w-5 h-5 text-slate-400" />
              手機號碼登入
            </button>

            <div className="pt-4 flex justify-center">
              <button 
                onClick={onGuest}
                className="text-slate-500 text-xs font-medium hover:text-white flex items-center gap-1 transition-colors px-4 py-2"
              >
                先隨便逛逛 (Guest Mode) <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
          
          <p className="text-center text-slate-600 text-[10px] mt-8 px-8">
            登入即代表您同意康寶廚藝時代的 <a href="#" className="underline hover:text-slate-400">服務條款</a> 與 <a href="#" className="underline hover:text-slate-400">隱私權政策</a>
          </p>
        </div>
      </div>
    </div>
  );
};
