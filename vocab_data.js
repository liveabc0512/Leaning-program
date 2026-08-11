// StackedVocab 核心單字資料庫 (按 5 大身分分類)

const VOCAB_DATABASE = {
  elementary: [
    {
      id: "e01",
      word: "apple",
      phonetic: "/ˈæp.əl/",
      pos: "n.",
      meaning: "蘋果",
      sentence: "An apple a day keeps the doctor away.",
      quote: "Mirror, mirror on the wall, who is the fairest of them all? - Snow White"
    },
    {
      id: "e02",
      word: "brave",
      phonetic: "/breɪv/",
      pos: "adj.",
      meaning: "勇敢的",
      sentence: "The young boy was brave enough to stand up.",
      quote: "Our fate lives within us. You only have to be brave enough to see it. - Brave"
    },
    {
      id: "e03",
      word: "dream",
      phonetic: "/driːm/",
      pos: "n. / v.",
      meaning: "夢想；做夢",
      sentence: "Never give up on your big dream.",
      quote: "If you can dream it, you can do it. - Walt Disney"
    },
    {
      id: "e04",
      word: "friend",
      phonetic: "/frend/",
      pos: "n.",
      meaning: "朋友",
      sentence: "A true friend is someone who is always there for you.",
      quote: "You've got a friend in me. - Toy Story"
    },
    {
      id: "e05",
      word: "happy",
      phonetic: "/ˈhæp.i/",
      pos: "adj.",
      meaning: "快樂的",
      sentence: "She felt very happy after hearing the good news.",
      quote: "Hakuna Matata! It means no worries for the rest of your days. - The Lion King"
    },
    {
      id: "e06",
      word: "family",
      phonetic: "/ˈfæm.əl.i/",
      pos: "n.",
      meaning: "家庭；家人",
      sentence: "Family always comes first in my life.",
      quote: "Ohana means family. Family means nobody gets left behind. - Lilo & Stitch"
    },
    {
      id: "e07",
      word: "magic",
      phonetic: "/ˈmædʒ.ɪk/",
      pos: "n. / adj.",
      meaning: "魔法；神奇的",
      sentence: "Believe in the magic inside your heart.",
      quote: "Do you believe in magic? - Cinderella"
    },
    {
      id: "e08",
      word: "smile",
      phonetic: "/smaɪl/",
      pos: "v. / n.",
      meaning: "微笑",
      sentence: "Your warm smile brightened up my whole morning.",
      quote: "A smile is a curve that sets everything straight. - Winnie the Pooh"
    },
    {
      id: "e09",
      word: "star",
      phonetic: "/stɑːr/",
      pos: "n.",
      meaning: "星星；明星",
      sentence: "Look up at the bright star in the night sky.",
      quote: "When you wish upon a star, your dreams come true. - Pinocchio"
    },
    {
      id: "e10",
      word: "wonder",
      phonetic: "/ˈwʌn.dər/",
      pos: "n. / v.",
      meaning: "奇蹟；想知道",
      sentence: "The world is full of wonder and discovery.",
      quote: "I wonder if the snow loves the trees. - Alice in Wonderland"
    },
    // Day 2 Words
    {
      id: "e11",
      word: "courage",
      phonetic: "/ˈkʌr.ɪdʒ/",
      pos: "n.",
      meaning: "勇氣",
      sentence: "It takes courage to grow up and become who you really are.",
      quote: "Courage is not the absence of fear, but the triumph over it. - The Wizard of Oz"
    },
    {
      id: "e12",
      word: "explore",
      phonetic: "/ɪkˈsplɔːr/",
      pos: "v.",
      meaning: "探索；冒險",
      sentence: "Let's explore the mystery of the deep blue ocean.",
      quote: "To infinity and beyond! - Toy Story"
    },
    {
      id: "e13",
      word: "spark",
      phonetic: "/spɑːrk/",
      pos: "n. / v.",
      meaning: "火花；引發",
      sentence: "A small spark can kindle a great fire.",
      quote: "Find your spark and light up the darkness. - Soul"
    },
    {
      id: "e14",
      word: "heart",
      phonetic: "/hɑːrt/",
      pos: "n.",
      meaning: "心臟；內心",
      sentence: "Follow your heart wherever it leads you.",
      quote: "Listen with your heart, you will understand. - Pocahontas"
    },
    {
      id: "e15",
      word: "shine",
      phonetic: "/ʃaɪn/",
      pos: "v.",
      meaning: "發光；閃耀",
      sentence: "You were born to shine bright in the world.",
      quote: "Let your light shine so bright that others can see their way. - Tangled"
    }
  ],

  junior: [
    {
      id: "j01",
      word: "challenge",
      phonetic: "/ˈtʃæl.ɪndʒ/",
      pos: "n. / v.",
      meaning: "挑戰",
      sentence: "Every challenge brings a new opportunity to learn.",
      quote: "Life is a challenge, meet it! - Karate Kid"
    },
    {
      id: "j02",
      word: "achieve",
      phonetic: "/əˈtʃiːv/",
      pos: "v.",
      meaning: "達成；實現",
      sentence: "With hard work, you can achieve any goal you set.",
      quote: "The only limit to our realization of tomorrow will be our doubts of today."
    },
    {
      id: "j03",
      word: "believe",
      phonetic: "/bɪˈliːv/",
      pos: "v.",
      meaning: "相信；信仰",
      sentence: "If you believe in yourself, anything is possible.",
      quote: "Believing is just the beginning. - The Polar Express"
    },
    {
      id: "j04",
      word: "create",
      phonetic: "/kriˈeɪt/",
      pos: "v.",
      meaning: "創造；創作",
      sentence: "Artists create beauty from everyday life.",
      quote: "Creativity is intelligence having fun. - Albert Einstein"
    },
    {
      id: "j05",
      word: "discover",
      phonetic: "/dɪˈskʌv.ər/",
      pos: "v.",
      meaning: "發現",
      sentence: "Scientists discover new species in the rainforest every year.",
      quote: "The voyage of discovery lies in having new eyes."
    },
    {
      id: "j06",
      word: "effort",
      phonetic: "/ˈef.ət/",
      pos: "n.",
      meaning: "努力；付出",
      sentence: "Continuous effort is the key to unlocking potential.",
      quote: "Great things come from hard work and perseverance."
    },
    {
      id: "j07",
      word: "focus",
      phonetic: "/ˈfəʊ.kəs/",
      pos: "v. / n.",
      meaning: "專注；焦點",
      sentence: "Focus your mind on the present moment.",
      quote: "Your focus determines your reality. - Star Wars"
    },
    {
      id: "j08",
      word: "growth",
      phonetic: "/ɡrəʊθ/",
      pos: "n.",
      meaning: "成長；發展",
      sentence: "Personal growth takes time and continuous patience.",
      quote: "Growth begins at the end of your comfort zone."
    },
    {
      id: "j09",
      word: "inspire",
      phonetic: "/ɪnˈspaɪər/",
      pos: "v.",
      meaning: "鼓舞；啟發",
      sentence: "Her passionate speech inspired thousands of young students.",
      quote: "To inspire people is the highest form of achievement."
    },
    {
      id: "j10",
      word: "journey",
      phonetic: "/ˈdʒɜː.ni/",
      pos: "n.",
      meaning: "旅程；歷程",
      sentence: "Life is a long journey full of surprises.",
      quote: "It's the journey, not the destination that matters. - Peacekeeper"
    },
    // Day 2 Words
    {
      id: "j11",
      word: "patience",
      phonetic: "/ˈpeɪ.ʃəns/",
      pos: "n.",
      meaning: "耐心",
      sentence: "Patience is a virtue that helps you overcome difficulties.",
      quote: "Patience you must have, my young Padawan. - Star Wars"
    },
    {
      id: "j12",
      word: "resolve",
      phonetic: "/rɪˈzɒlv/",
      pos: "v. / n.",
      meaning: "解決；決心",
      sentence: "They worked together to resolve the problem peacefully.",
      quote: "Firm resolve overcomes all obstacles."
    },
    {
      id: "j13",
      word: "support",
      phonetic: "/səˈpɔːt/",
      pos: "v. / n.",
      meaning: "支持；後盾",
      sentence: "My family always gives me unconditional support.",
      quote: "Lean on me when you're not strong. - Stand by Me"
    },
    {
      id: "j14",
      word: "triumph",
      phonetic: "/ˈtraɪ.ʌmf/",
      pos: "n. / v.",
      meaning: "勝利；大獲成功",
      sentence: "The team celebrated their grand triumph after months of training.",
      quote: "The triumph of the human spirit over adversity."
    },
    {
      id: "j15",
      word: "vision",
      phonetic: "/ˈvɪʒ.ən/",
      pos: "n.",
      meaning: "願景；眼光",
      sentence: "A clear vision helps guide your everyday choices.",
      quote: "Vision without execution is hallucination. - Steve Jobs"
    }
  ],

  senior: [
    {
      id: "s01",
      word: "persistence",
      phonetic: "/pərˈsɪs.təns/",
      pos: "n.",
      meaning: "堅持；毅力",
      sentence: "Success comes through persistence and hard work.",
      quote: "Persistence is the key to unlocking your true potential. - The Pursuit of Happyness"
    },
    {
      id: "s02",
      word: "resilience",
      phonetic: "/rɪˈzɪl.jəns/",
      pos: "n.",
      meaning: "韌性；復原力",
      sentence: "Building resilience helps you bounce back from failure quickly.",
      quote: "It's not about how hard you hit, it's about how hard you can get hit and keep moving forward. - Rocky"
    },
    {
      id: "s03",
      word: "ambition",
      phonetic: "/æmˈbɪʃ.ən/",
      pos: "n.",
      meaning: "雄心；抱負",
      sentence: "Her fierce ambition drove her to become the youngest CEO.",
      quote: "Intelligence without ambition is a bird without wings. - Salvador Dali"
    },
    {
      id: "s04",
      word: "clarity",
      phonetic: "/ˈklær.ə.ti/",
      pos: "n.",
      meaning: "清晰；明確",
      sentence: "Meditation brings clarity and peace to a confused mind.",
      quote: "Clarity comes from engagement, not thought."
    },
    {
      id: "s05",
      word: "dedication",
      phonetic: "/ˌded.ɪˈkeɪ.ʃən/",
      pos: "n.",
      meaning: "奉獻；專心致志",
      sentence: "The surgeon's dedication saved hundreds of lives.",
      quote: "Genius is one percent inspiration and ninety-nine percent perspiration."
    },
    {
      id: "s06",
      word: "empathy",
      phonetic: "/ˈem.pə.θi/",
      pos: "n.",
      meaning: "同理心；共鳴",
      sentence: "Showing empathy helps build deep relationships with others.",
      quote: "You never really understand a person until you consider things from his point of view. - To Kill a Mockingbird"
    },
    {
      id: "s07",
      word: "foundation",
      phonetic: "/faʊnˈdeɪ.ʃən/",
      pos: "n.",
      meaning: "基礎；地基",
      sentence: "Solid grammar is the foundation of effective writing.",
      quote: "No building stands tall without a strong foundation."
    },
    {
      id: "s08",
      word: "gratitude",
      phonetic: "/ˈɡræt.ɪ.tʃuːd/",
      pos: "n.",
      meaning: "感恩；感謝",
      sentence: "Expressing gratitude daily improves overall mental health.",
      quote: "Gratitude turns what we have into enough."
    },
    {
      id: "s09",
      word: "harmony",
      phonetic: "/ˈhɑː.mə.ni/",
      pos: "n.",
      meaning: "和諧；融洽",
      sentence: "Living in harmony with nature brings peace.",
      quote: "Happiness is when what you think, what you say, and what you do are in harmony. - Gandhi"
    },
    {
      id: "s10",
      word: "integrity",
      phonetic: "/ɪnˈteɡ.rə.ti/",
      pos: "n.",
      meaning: "正直；誠信",
      sentence: "A leader must act with honesty and integrity at all times.",
      quote: "Integrity is doing the right thing, even when no one is watching. - C.S. Lewis"
    },
    // Day 2 Words
    {
      id: "s11",
      word: "innovation",
      phonetic: "/ˌɪn.əˈveɪ.ʃən/",
      pos: "n.",
      meaning: "創新；革新",
      sentence: "Constant innovation keeps companies competitive in the modern market.",
      quote: "Innovation distinguishes between a leader and a follower. - Steve Jobs"
    },
    {
      id: "s12",
      word: "momentum",
      phonetic: "/məˈmen.təm/",
      pos: "n.",
      meaning: "動能；勢頭",
      sentence: "Once you build momentum, keeping going becomes much easier.",
      quote: "Momentum is a fragile thing. Protect your progress."
    },
    {
      id: "s13",
      word: "optimism",
      phonetic: "/ˈɒp.tɪ.mɪ.zəm/",
      pos: "n.",
      meaning: "樂觀主義",
      sentence: "His infectious optimism gave the whole team fresh hope.",
      quote: "Optimism is the faith that leads to achievement. - Helen Keller"
    },
    {
      id: "s14",
      word: "proactive",
      phonetic: "/prəʊˈæk.tɪv/",
      pos: "adj.",
      meaning: "積極主動的",
      sentence: "Be proactive in seeking solution rather than waiting for help.",
      quote: "The best way to predict your future is to create it."
    },
    {
      id: "s15",
      word: "wisdom",
      phonetic: "/ˈwɪz.dəm/",
      pos: "n.",
      meaning: "智慧",
      sentence: "Wisdom comes from experience and thoughtful reflection.",
      quote: "Knowing yourself is the beginning of all wisdom. - Aristotle"
    }
  ],

  college: [
    {
      id: "c01",
      word: "articulate",
      phonetic: "/ɑːˈtɪk.jə.leɪt/",
      pos: "v. / adj.",
      meaning: "清晰表述；善於表達的",
      sentence: "She was able to articulate her complex thesis defense perfectly.",
      quote: "Clear thinking leads to articulate communication. - Dead Poets Society"
    },
    {
      id: "c02",
      word: "benchmark",
      phonetic: "/ˈbentʃ.mɑːk/",
      pos: "n.",
      meaning: "基準；標竿",
      sentence: "This study sets a new benchmark for academic research.",
      quote: "Excellence is not an act, but a habit that sets the benchmark."
    },
    {
      id: "c03",
      word: "cognitive",
      phonetic: "/ˈkɒɡ.nə.tɪv/",
      pos: "adj.",
      meaning: "認知的；大腦思維的",
      sentence: "Puzzles and reading stimulate cognitive development.",
      quote: "The human mind is a cognitive miracle."
    },
    {
      id: "c04",
      word: "diverse",
      phonetic: "/daɪˈvɜːs/",
      pos: "adj.",
      meaning: "多元的；多樣化的",
      sentence: "The university boasts a rich and diverse student population.",
      quote: "Diversity is the art of thinking independently together."
    },
    {
      id: "c05",
      word: "empower",
      phonetic: "/ɪmˈpaʊ.ər/",
      pos: "v.",
      meaning: "賦能；授權",
      sentence: "Education empowers young minds to change society.",
      quote: "Knowledge gives you power, but character gives you respect. - Bruce Lee"
    },
    {
      id: "c06",
      word: "fluency",
      phonetic: "/ˈfluː.ən.si/",
      pos: "n.",
      meaning: "流利；流暢度",
      sentence: "Daily conversation practice improves spoken English fluency.",
      quote: "Fluency comes with consistent daily exposure."
    },
    {
      id: "c07",
      word: "hypothesis",
      phonetic: "/haɪˈpɒθ.ə.sɪs/",
      pos: "n.",
      meaning: "假設；假說",
      sentence: "The researcher designed an experiment to test his hypothesis.",
      quote: "An idea that is developed without evidence remains a hypothesis."
    },
    {
      id: "c08",
      word: "insight",
      phonetic: "/ˈɪn.saɪt/",
      pos: "n.",
      meaning: "洞察力；獨到見解",
      sentence: "Her analysis provided deep insights into global market trends.",
      quote: "Insight is the key to unlocking innovation."
    },
    {
      id: "c09",
      word: "methodology",
      phonetic: "/ˌmeθ.əˈdɒl.ə.dʒi/",
      pos: "n.",
      meaning: "研究方法論",
      sentence: "The scientific methodology ensures accurate research results.",
      quote: "Methodology guides the path from question to discovery."
    },
    {
      id: "c10",
      word: "perspective",
      phonetic: "/pəˈspek.tɪv/",
      pos: "n.",
      meaning: "視角；觀點",
      sentence: "Traveling opens your mind to different global perspectives.",
      quote: "It's all a matter of perspective. Change your lens, change your life."
    },
    // Day 2 Words
    {
      id: "c11",
      word: "paradigm",
      phonetic: "/ˈpær.ə.daɪm/",
      pos: "n.",
      meaning: "典範；模式",
      sentence: "Artificial Intelligence created a major paradigm shift in tech.",
      quote: "Shifting paradigms requires questioning old assumptions."
    },
    {
      id: "c12",
      word: "profound",
      phonetic: "/prəˈfaʊnd/",
      pos: "adj.",
      meaning: "深遠的；深刻的",
      sentence: "The professor had a profound impact on my career path.",
      quote: "Silence is often the most profound response."
    },
    {
      id: "c13",
      word: "synthesis",
      phonetic: "/ˈsɪn.θə.sɪs/",
      pos: "n.",
      meaning: "綜合；合成",
      sentence: "His essay was a brilliant synthesis of history and economics.",
      quote: "Great theories emerge from the synthesis of ideas."
    },
    {
      id: "c14",
      word: "versatile",
      phonetic: "/ˈvɜː.sə.taɪl/",
      pos: "adj.",
      meaning: "多才多藝的；萬用的",
      sentence: "Python is a versatile programming language used widely.",
      quote: "Adaptability makes a professional versatile."
    },
    {
      id: "c15",
      word: "yield",
      phonetic: "/jiːld/",
      pos: "v. / n.",
      meaning: "產出；收益；屈服",
      sentence: "Consistent daily effort will yield great results over time.",
      quote: "Patience and persistence yield sweet fruits."
    }
  ],

  adult: [
    {
      id: "a01",
      word: "synergy",
      phonetic: "/ˈsɪn.ə.dʒi/",
      pos: "n.",
      meaning: "協同效應；綜效",
      sentence: "The merger created strong synergy between both teams.",
      quote: "Synergy is the bonus that is achieved when things work together harmoniously."
    },
    {
      id: "a02",
      word: "negotiate",
      phonetic: "/nəˈɡəʊ.ʃi.eɪt/",
      pos: "v.",
      meaning: "協商；談判",
      sentence: "We negotiated a win-win contract with our key partner.",
      quote: "You don't get what you deserve in business, you get what you negotiate. - Chester Karrass"
    },
    {
      id: "a03",
      word: "agile",
      phonetic: "/ˈædʒ.aɪl/",
      pos: "adj.",
      meaning: "敏捷的；靈活的",
      sentence: "Modern companies must remain agile to adapt to fast market changes.",
      quote: "Agile mindset: Fail fast, learn faster, deliver value."
    },
    {
      id: "a04",
      word: "leverage",
      phonetic: "/ˈliː.vər.ɪdʒ/",
      pos: "v. / n.",
      meaning: "槓桿運用；借助",
      sentence: "We can leverage social media to reach millions of potential clients.",
      quote: "Give me a lever long enough and I shall move the world. - Archimedes"
    },
    {
      id: "a05",
      word: "sustainable",
      phonetic: "/səˈsteɪ.nə.bəl/",
      pos: "adj.",
      meaning: "永續的；可持續的",
      sentence: "Building a sustainable habit requires consistency rather than intensity.",
      quote: "Sustainability is no longer an option, it is a business imperative."
    },
    {
      id: "a06",
      word: "optimize",
      phonetic: "/ˈɒp.tɪ.maɪz/",
      pos: "v.",
      meaning: "優化；最佳化",
      sentence: "We optimized our daily workflow to save two hours every afternoon.",
      quote: "Optimize for long-term growth rather than short-term wins."
    },
    {
      id: "a07",
      word: "strategic",
      phonetic: "/strəˈtiː.dʒɪk/",
      pos: "adj.",
      meaning: "戰略性的；策略的",
      sentence: "Making strategic decisions requires foresight and quiet analysis.",
      quote: "Strategy without tactics is the slowest route to victory. - Sun Tzu"
    },
    {
      id: "a08",
      word: "network",
      phonetic: "/ˈnet.wɜːk/",
      pos: "n. / v.",
      meaning: "人脈網路；建立關係",
      sentence: "Attending conferences helps expand your professional network.",
      quote: "Your network is your net worth. - Porter Gale"
    },
    {
      id: "a09",
      word: "initiative",
      phonetic: "/ɪˈnɪʃ.ə.tɪv/",
      pos: "n.",
      meaning: "主動權；新企劃",
      sentence: "Taking the initiative at work earns trust from leadership.",
      quote: "Initiative is doing the right thing without being told."
    },
    {
      id: "a10",
      word: "efficiency",
      phonetic: "/ɪˈfɪʃ.ən.si/",
      pos: "n.",
      meaning: "效率；效能",
      sentence: "High efficiency allows you to enjoy more leisure time with family.",
      quote: "Efficiency is doing things right; effectiveness is doing the right things."
    },
    // Day 2 Words
    {
      id: "a11",
      word: "scalability",
      phonetic: "/ˌskeɪ.ləˈbɪl.ə.ti/",
      pos: "n.",
      meaning: "可擴展性；可規模化",
      sentence: "The cloud platform provides high scalability for high-traffic apps.",
      quote: "Build for scalability from day one."
    },
    {
      id: "a12",
      word: "benchmark",
      phonetic: "/ˈbentʃ.mɑːk/",
      pos: "n.",
      meaning: "業界標竿",
      sentence: "Our product quality is the benchmark of the entire industry.",
      quote: "Be a yardstick of quality. - Steve Jobs"
    },
    {
      id: "a13",
      word: "alignment",
      phonetic: "/əˈlaɪn.mənt/",
      pos: "n.",
      meaning: "對齊；目標一致",
      sentence: "Ensure team alignment before launching the marketing campaign.",
      quote: "Ensure team alignment before launching the marketing campaign."
    },
    {
      id: "a14",
      word: "compliance",
      phonetic: "/kəmˈplaɪ.əns/",
      pos: "n.",
      meaning: "合規；依從",
      sentence: "Strict compliance with data privacy regulations protects users.",
      quote: "Compliance is safety and trust guaranteed."
    },
    {
      id: "a15",
      word: "transform",
      phonetic: "/trænˈsfɔːm/",
      pos: "v.",
      meaning: "轉型；改變",
      sentence: "Digital tools transform how traditional businesses operate.",
      quote: "Transforming challenges into stepping stones."
    }
  ]
};

// 預設打卡圖樣
const SAMPLE_PHOTOS = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
];
