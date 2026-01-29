import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { X, Check, ArrowRight, Info, Loader2 } from 'lucide-react';

interface OnboardingProps {
  onComplete: (segment: 'quality' | 'efficiency', role: 'boss' | 'chef' | 'learner') => void;
}

// Initial Card
const INITIAL_CARD = {
    id: 1,
    question: "我的角色比較接近...",
    options: ["我是老闆，也親自掌廚", "我是餐廳的主廚 / 內場夥伴", "我想精進廚藝 / 尋找靈感"],
    image: "https://images.unsplash.com/photo-1741243412269-be61e7d2be0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWYlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "角色定位",
    type: "choice"
};

const QUESTIONS_BY_ROLE = {
  0: [ // Boss
    {
      id: 2,
      question: "當慣用的調味料漲價時，為了利潤，我會優先考慮更換便宜的替代品牌？",
      subtext: "成本控制",
      image: "https://images.unsplash.com/photo-1759873360996-3f165ebc8aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MXx8fHwxNzY5NTgwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "經營策略",
      scoreChange: -2,
      type: "swipe"
    },
    {
      id: 3,
      question: "生意太好人手不足，「備料佔用太多時間」是我最大的煩惱？",
      subtext: "效率優化",
      image: "https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGNoZWYlMjBidXN5JTIwcHJlcCUyMGZvb2R8ZW58MXx8fHwxNzY5NTkwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "人力挑戰",
      scoreChange: -2,
      type: "swipe"
    },
    {
      id: 4,
      question: "目前的經營狀態，我傾向「穩定守成」，暫時沒有擴大展店的計畫？",
      subtext: "經營目標",
      image: "https://images.unsplash.com/photo-1744421459678-9c74f10ba85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc2OTU4MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "未來展望",
      scoreChange: 2,
      type: "swipe"
    }
  ],
  1: [ // Chef
    {
      id: 2,
      question: "店裡不同師傅炒出來的味道不一樣，常被客人投訴，這讓你很頭痛？",
      subtext: "品質標準化",
      image: "https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBmaW5lJTIwZGluaW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2OTU1MjUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "品質管理",
      scoreChange: 2,
      type: "swipe"
    },
    {
      id: 3,
      question: "每個月都要想新菜單（換菜），常常讓你覺得靈感枯竭、壓力山大？",
      subtext: "研發需求",
      image: "https://images.unsplash.com/photo-1721372233127-10e81fc52f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29rYm9vayUyMHJlY2lwZSUyMGluZ3JlZGllbnRzJTIwdGFibGV8ZW58MXx8fHwxNzY5NTkwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "創新挑戰",
      scoreChange: 2,
      type: "swipe"
    },
    {
      id: 4,
      question: "廚房裡的調味料品牌，通常都是我試用滿意後，老闆就會買單？",
      subtext: "決策權",
      image: "https://images.unsplash.com/photo-1571838045421-4845dc4f5979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNwaWNlcyUyMGluZ3JlZGllbnRzJTIwc2ljaHVhbiUyMHBlcHBlcnxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "採購習慣",
      scoreChange: 1,
      type: "swipe"
    }
  ],
  2: [ // Learner
    {
      id: 2,
      question: "比起閱讀深奧的理論，我更想要「看圖就會做」的步驟圖解？",
      subtext: "學習偏好",
      image: "https://images.unsplash.com/photo-1721372233127-10e81fc52f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29rYm9vayUyMHJlY2lwZSUyMGluZ3JlZGllbnRzJTIwdGFibGV8ZW58MXx8fHwxNzY5NTkwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "學習方式",
      scoreChange: 2,
      type: "swipe"
    },
    {
      id: 3,
      question: "在料理風格上，我更專注於「中式熱炒 / 傳統台菜」的火候掌握？",
      subtext: "料理風格",
      image: "https://images.unsplash.com/photo-1765448856945-481569592cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHdvayUyMGZpcmUlMjBhc2lhbiUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY5NTkwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "專業技能",
      scoreChange: 1,
      type: "swipe"
    },
    {
      id: 4,
      question: "目前的目標是把「基本功（如刀工、熬湯）」練得更紮實？",
      subtext: "自我提升",
      image: "https://images.unsplash.com/photo-1741243412269-be61e7d2be0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNoZWYlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk1ODA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "職涯目標",
      scoreChange: 1,
      type: "swipe"
    }
  ]
};

const ROLES = {
  0: 'boss',
  1: 'chef',
  2: 'learner'
} as const;

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const [cards, setCards] = useState([INITIAL_CARD]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<0 | 1 | 2>(0);

  // Motion values
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  
  const overlayOpacityYes = useTransform(x, [0, 100], [0, 1]);
  const overlayOpacityNo = useTransform(x, [-100, 0], [1, 0]);
  
  const SWIPE_THRESHOLD = 120;

  const handleNext = (dir: 'left' | 'right' | 'choice', selectedOptionIndex?: number) => {
    if (isProcessing || isAnimating) return;
    
    setIsAnimating(true);
    setDirection(dir === 'choice' ? 'right' : dir);
    
    // Logic for choice card (First card)
    let newTotalCards = cards.length;
    if (dir === 'choice' && typeof selectedOptionIndex === 'number' && index === 0) {
        // Add relevant questions based on selection
        const newQuestions = QUESTIONS_BY_ROLE[selectedOptionIndex as keyof typeof QUESTIONS_BY_ROLE] || [];
        setCards(prev => [...prev, ...newQuestions]);
        newTotalCards += newQuestions.length;
        setSelectedRoleIndex(selectedOptionIndex as 0 | 1 | 2);
    }
    
    // Logic for swipe cards
    const currentCard = cards[index];
    if (currentCard && currentCard.type === 'swipe') {
        if (dir === 'right' && currentCard.scoreChange) {
            setScore(prev => prev + currentCard.scoreChange);
        }
    }

    setTimeout(() => {
      if (index >= newTotalCards - 1) {
        finishOnboarding();
      } else {
        setIndex(prev => prev + 1);
        setDirection(null);
        x.set(0);
        setTimeout(() => setIsAnimating(false), 200); 
      }
    }, 450);
  };

  const finishOnboarding = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onComplete(score >= 0 ? 'quality' : 'efficiency', ROLES[selectedRoleIndex]);
    }, 1500);
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-6"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 mx-auto">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">正在分析您的廚房需求...</h2>
          <p className="text-gray-500">為您配對最適合的食譜與方案</p>
        </motion.div>
      </div>
    );
  }

  const safeIndex = Math.min(index, cards.length - 1);
  const currentCard = cards[safeIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 overflow-hidden relative font-sans">
      
      {/* Header/Progress */}
      <div className="w-full pt-8 pb-4 px-2 z-20">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-gray-800">打造您的專屬後場</h2>
           <span className="text-xs font-bold text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
             {safeIndex + 1} / {cards.length}
           </span>
        </div>
        <div className="flex gap-1.5 h-1.5 w-full">
          {cards.map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-full transition-all duration-300 ${i <= safeIndex ? 'bg-green-600' : 'bg-gray-200'}`} 
            />
          ))}
        </div>
      </div>

      {/* Card Stack Area */}
      <div className="flex-grow flex items-center justify-center w-full max-w-sm relative z-10 mb-8">
        <div className="relative w-full aspect-[3/4]">
          <AnimatePresence>
            {cards.map((card, i) => {
              const activeIndex = Math.min(index, cards.length - 1);
              
              if (i < activeIndex) return null;
              const isFront = i === activeIndex;
              
              return (
                <motion.div
                  key={card.id}
                  style={{ 
                    x: isFront ? x : 0, 
                    rotate: isFront ? rotate : 0,
                    opacity: isFront ? opacity : 1 - (i - activeIndex) * 0.1,
                    scale: 1 - (i - activeIndex) * 0.05,
                    zIndex: cards.length - i,
                    y: (i - activeIndex) * 15
                  }}
                  drag={isFront && card.type === 'swipe' && !isAnimating ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(_, info) => {
                    if (isAnimating) return;
                    if (info.offset.x > SWIPE_THRESHOLD) handleNext('right');
                    else if (info.offset.x < -SWIPE_THRESHOLD) handleNext('left');
                  }}
                  animate={
                    isFront && direction === 'right' ? { x: 500, rotate: 20, opacity: 0 } :
                    isFront && direction === 'left' ? { x: -500, rotate: -20, opacity: 0 } :
                    { x: 0, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
                >
                  {/* Image Section */}
                  <div className="h-[55%] relative overflow-hidden bg-gray-200">
                     <img src={card.image} alt={card.tag} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                     
                     <div className="absolute top-4 right-4">
                       <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                         {card.tag}
                       </span>
                     </div>

                     {/* Swipe Overlays */}
                     {isFront && card.type === 'swipe' && (
                         <>
                          <motion.div style={{ opacity: overlayOpacityYes }} className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-[2px]">
                              <div className="border-4 border-green-500 text-green-500 font-bold text-4xl px-4 py-2 rounded-xl rotate-[-15deg] bg-white/80">
                                  YES
                              </div>
                          </motion.div>
                          <motion.div style={{ opacity: overlayOpacityNo }} className="absolute inset-0 flex items-center justify-center bg-red-500/20 backdrop-blur-[2px]">
                              <div className="border-4 border-red-500 text-red-500 font-bold text-4xl px-4 py-2 rounded-xl rotate-[15deg] bg-white/80">
                                  NO
                              </div>
                          </motion.div>
                         </>
                     )}
                  </div>

                  {/* Content Section */}
                  <div className="h-[45%] p-5 flex flex-col justify-between gap-2 bg-white relative">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800 leading-snug">
                          {card.question}
                      </h3>
                      {card.subtext && (
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded text-gray-500 text-xs">
                              <Info className="w-3 h-3" /> {card.subtext}
                          </div>
                      )}
                    </div>

                    <div className="pt-2">
                      {card.type === 'choice' ? (
                          <div className="space-y-2">
                              {card.options?.map((opt, idx) => (
                                  <button 
                                    key={idx}
                                    onClick={() => handleNext('choice', idx)}
                                    disabled={isAnimating}
                                    className="w-full py-2.5 px-4 bg-gray-50 active:bg-green-50 border border-gray-200 active:border-green-300 rounded-xl text-left font-medium text-gray-700 active:text-green-700 transition-all flex items-center justify-between group text-sm disabled:opacity-50"
                                  >
                                      {opt}
                                      <ArrowRight className="w-4 h-4 text-gray-300 group-active:text-green-600" />
                                  </button>
                              ))}
                          </div>
                      ) : (
                          <div className="flex items-center justify-between gap-4">
                            <button 
                                onClick={() => handleNext('left')}
                                disabled={isAnimating}
                                className="flex-1 py-3 rounded-xl border-2 border-gray-100 text-gray-500 font-bold text-sm hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <X className="w-5 h-5" />
                                不符合
                            </button>
                            <button 
                                onClick={() => handleNext('right')}
                                disabled={isAnimating}
                                className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold text-sm shadow-lg shadow-green-200 hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Check className="w-5 h-5" />
                                符合
                            </button>
                          </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      
      {currentCard?.type === 'swipe' && (
        <div className="text-center pb-8 opacity-40">
           <p className="text-xs text-gray-500">也可左右滑動卡片</p>
        </div>
      )}
    </div>
  );
};
