
import { Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Recipe } from '@/data/mockRecipes';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full"
      onClick={() => onClick(recipe)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          {recipe.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {recipe.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-gray-400 text-xs mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{recipe.servings} 人份</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
