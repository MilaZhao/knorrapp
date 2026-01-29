
import { ShoppingCart, Star, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// Mock Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "康寶濃湯 - 雞蓉玉米濃湯",
    price: 320,
    unit: "1kg/包",
    image: "https://images.unsplash.com/photo-1635091217983-9c1ac31651a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYm91aWxsb24lMjBwb3dkZXIlMjBjb250YWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NTgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "湯粉系列"
  },
  {
    id: 2,
    name: "康寶鮮味炒手",
    price: 280,
    unit: "1kg/罐",
    image: "https://images.unsplash.com/photo-1635091217983-9c1ac31651a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYm91aWxsb24lMjBwb3dkZXIlMjBjb250YWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NTgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "調味粉"
  },
  {
    id: 3,
    name: "醇濃雞湯",
    price: 450,
    unit: "1L/瓶",
    image: "https://images.unsplash.com/photo-1635091217983-9c1ac31651a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYm91aWxsb24lMjBwb3dkZXIlMjBjb250YWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NTgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "液態高湯"
  },
  {
    id: 4,
    name: "西式濃湯粉",
    price: 380,
    unit: "800g/罐",
    image: "https://images.unsplash.com/photo-1635091217983-9c1ac31651a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYm91aWxsb24lMjBwb3dkZXIlMjBjb250YWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NTgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "西式系列"
  }
];

const CATEGORIES = ["全部", "調味粉", "湯粉系列", "液態高湯", "西式系列", "醬汁"];

export const Shop = () => {
  const [activeCat, setActiveCat] = useState("全部");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = activeCat === "全部" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCat);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-30 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800">康寶專業商城</h1>
        <button className="relative p-2 text-gray-600">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Categories */}
      <div className="sticky top-14 bg-white z-20 border-b border-gray-100 overflow-x-auto">
        <div className="flex px-4 py-3 gap-3 whitespace-nowrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCat === cat 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <div className="aspect-square relative bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <div className="mb-2">
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{product.category}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1">{product.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{product.unit}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-green-600 font-bold">NT$ {product.price}</span>
                <button 
                  onClick={() => setCartCount(p => p + 1)}
                  className="w-8 h-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
