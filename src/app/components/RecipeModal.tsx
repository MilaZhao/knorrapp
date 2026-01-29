import { X, Clock, Users, ChefHat, ArrowLeft, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Recipe } from '@/data/mockRecipes';
import { useEffect } from 'react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (recipe) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [recipe]);

  if (!recipe) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-50 bg-white overflow-y-auto no-scrollbar"
      >
        {/* Sticky Header Actions */}
        <div className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 pointer-events-none">
          <button 
            onClick={onClose}
            className="pointer-events-auto bg-white/80 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-sm text-gray-800 transition-all border border-gray-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3 pointer-events-auto">
             <button className="bg-white/80 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-sm text-gray-800 transition-all border border-gray-100">
                <Share2 className="w-6 h-6" />
             </button>
             <button className="bg-white/80 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-sm text-red-500 transition-all border border-gray-100">
                <Heart className="w-6 h-6" />
             </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 md:h-[50vh] w-full">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-lg">
              {recipe.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight text-shadow-sm">{recipe.title}</h1>
            <p className="text-white/90 text-sm line-clamp-2">{recipe.description}</p>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative bg-white -mt-6 rounded-t-3xl px-6 py-8 min-h-screen">
            {/* Meta Stats */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div className="flex flex-col items-center gap-1 flex-1 border-r border-gray-100 last:border-0">
                <Clock className="w-6 h-6 text-green-600 mb-1" />
                <span className="text-xs text-gray-400">烹飪時間</span>
                <span className="font-bold text-gray-800">{recipe.time}</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1 border-r border-gray-100 last:border-0">
                <Users className="w-6 h-6 text-green-600 mb-1" />
                <span className="text-xs text-gray-400">份量</span>
                <span className="font-bold text-gray-800">{recipe.servings} 人份</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1">
                <ChefHat className="w-6 h-6 text-green-600 mb-1" />
                <span className="text-xs text-gray-400">難度</span>
                <span className="font-bold text-gray-800">中等</span>
            </div>
            </div>

            {/* Ingredients */}
            <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-green-500 rounded-full" />
                食材準備
            </h3>
            <ul className="grid grid-cols-1 gap-3">
                {recipe.ingredients.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="font-medium">{item}</span>
                    <div className="w-5 h-5 rounded-full border-2 border-green-200 flex items-center justify-center">
                         {/* Checkbox placeholder */}
                    </div>
                </li>
                ))}
            </ul>
            </div>

            {/* Steps */}
            <div className="mb-24">
            <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-yellow-400 rounded-full" />
                料理步驟
            </h3>
            <div className="space-y-8">
                {recipe.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                    {/* Step Line */}
                    {idx !== recipe.steps.length - 1 && (
                        <div className="absolute left-[15px] top-10 bottom-[-20px] w-0.5 bg-gray-100" />
                    )}
                    
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">
                        {idx + 1}
                    </div>
                    <div className="pt-0.5">
                        <p className="text-gray-600 leading-relaxed text-lg">{step}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Floating Action Button (Start Cooking) */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
            <button className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                <ChefHat className="w-5 h-5" />
                開始跟著做
            </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
