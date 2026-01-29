
export interface Recipe {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  time: string;
  servings: number;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "康寶濃湯 - 經典玉米濃湯",
    category: "湯品",
    description: "濃郁香甜的玉米口感，全家大小都愛喝的經典美味。",
    image: "https://images.unsplash.com/photo-1696824818288-a5cc5a93b6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwc291cCUyMGRlbGljaW91cyUyMGJvd2x8ZW58MXx8fHwxNzY5NTgwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "15 分鐘",
    servings: 4,
    ingredients: [
      "康寶玉米濃湯包 1包",
      "雞蛋 2顆",
      "水 800cc",
      "火腿丁 適量",
      "蔥花 少許"
    ],
    steps: [
      "將800cc的水煮沸。",
      "倒入康寶玉米濃湯包，攪拌均勻。",
      "轉小火煮3分鐘。",
      "打入蛋花，輕輕攪拌。",
      "撒上火腿丁與蔥花即可享用。"
    ]
  },
  {
    id: "2",
    title: "清炒時蔬",
    category: "熱炒",
    description: "使用鮮味炒手，帶出蔬菜最自然的鮮甜。",
    image: "https://images.unsplash.com/photo-1688084546323-fcd3f9d8389b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlyJTIwZnJ5JTIwdmVnZXRhYmxlcyUyMGFzaWFuJTIwc3R5bGV8ZW58MXx8fHwxNzY5NTgwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "10 分鐘",
    servings: 3,
    ingredients: [
      "高麗菜 半顆",
      "康寶鮮味炒手 1匙",
      "蒜頭 3瓣",
      "紅蘿蔔絲 少許",
      "油 適量"
    ],
    steps: [
      "蒜頭爆香，放入紅蘿蔔絲拌炒。",
      "加入高麗菜大火快炒。",
      "加入少許水燜煮1分鐘。",
      "起鍋前加入一匙康寶鮮味炒手調味即可。"
    ]
  },
  {
    id: "3",
    title: "家常紅燒肉",
    category: "主食",
    description: "醬香味濃，肥而不膩，下飯的最佳選擇。",
    image: "https://images.unsplash.com/photo-1759392773285-0f86affdf1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpc2VkJTIwcG9yayUyMGJlbGx5JTIwY2hpbmVzZSUyMGRpc2h8ZW58MXx8fHwxNzY5NTgwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "60 分鐘",
    servings: 4,
    ingredients: [
      "五花肉 600克",
      "蔥 2根",
      "薑 5片",
      "醬油 3大匙",
      "冰糖 1匙",
      "康寶鮮味炒手 少許"
    ],
    steps: [
      "五花肉切塊，滾水汆燙去血水。",
      "熱鍋下油，放入冰糖炒至焦糖色。",
      "放入五花肉煸炒上色。",
      "加入蔥、薑、醬油及水沒過肉塊。",
      "小火燉煮50分鐘，收汁即可。"
    ]
  },
  {
    id: "4",
    title: "黃金蝦仁炒飯",
    category: "主食",
    description: "粒粒分明的米飯，搭配鮮美蝦仁，簡單又滿足。",
    image: "https://images.unsplash.com/photo-1747228469026-7298b12d9963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHJpbXAlMjBmcmllZCUyMHJpY2UlMjB0YXN0eXxlbnwxfHx8fDE3Njk1ODAzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 分鐘",
    servings: 2,
    ingredients: [
      "白飯 2碗",
      "蝦仁 10隻",
      "雞蛋 2顆",
      "蔥花 適量",
      "康寶鮮味炒手 1匙"
    ],
    steps: [
      "熱鍋炒蛋至半熟盛起。",
      "原鍋炒香蝦仁。",
      "倒入白飯翻炒至鬆散。",
      "加入雞蛋、蔥花拌炒均勻。",
      "加入康寶鮮味炒手調味，大火快炒均勻即可。"
    ]
  },
  {
    id: "5",
    title: "鮮甜蒸魚",
    category: "蒸煮",
    description: "保留魚肉最原始的鮮甜，清淡健康。",
    image: "https://images.unsplash.com/photo-1710186012216-9b2cf2a800bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGVhdGluZyUyMGRpbm5lciUyMGFzaWFufGVufDF8fHx8MTc2OTU4MDMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "20 分鐘",
    servings: 3,
    ingredients: [
      "鱸魚 1條",
      "薑絲 適量",
      "蔥絲 適量",
      "米酒 1匙",
      "醬油 1匙",
      "香油 少許"
    ],
    steps: [
      "魚洗淨，身上劃刀。",
      "鋪上薑絲，淋上米酒。",
      "放入蒸鍋大火蒸10分鐘。",
      "倒掉多餘湯汁，淋上醬油、擺上蔥絲。",
      "淋上熱油激發香氣即可。"
    ]
  }
];
