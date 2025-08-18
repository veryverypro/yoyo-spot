"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Star, Lightbulb } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "我学会了Python的循环！",
    excerpt: "今天爸爸教我用for循环，我写了一个程序可以打印100个星星，太酷了！",
    date: "2024-03-15",
    category: "编程学习",
    emoji: "💻",
    mood: "兴奋"
  },
  {
    id: 2,
    title: "围棋升级赛心得",
    excerpt: "这次比赛虽然输了一局，但是我学到了新的定式，下次一定能赢回来！",
    date: "2024-03-10",
    category: "围棋",
    emoji: "♟️",
    mood: "努力"
  },
  {
    id: 3,
    title: "3D打印的小秘密",
    excerpt: "发现了一个技巧：打印前先预热10分钟，作品会更光滑！今天打印了一只小兔子。",
    date: "2024-03-05",
    category: "3D打印",
    emoji: "🎨",
    mood: "开心"
  },
  {
    id: 4,
    title: "哈利波特与密室读后感",
    excerpt: "哈利真勇敢！如果我有魔法，我也想要一个隐形斗篷，这样就能去图书馆看更多书了。",
    date: "2024-02-28",
    category: "阅读",
    emoji: "📖",
    mood: "梦幻"
  },
  {
    id: 5,
    title: "数学竞赛获奖啦！",
    excerpt: "今天数学竞赛得了第三名！最难的是图形题，但是我用爸爸教的方法解出来了！",
    date: "2024-02-20",
    category: "学校生活",
    emoji: "🏆",
    mood: "自豪"
  },
  {
    id: 6,
    title: "我的第一个网站",
    excerpt: "爸爸帮我做了这个网站，我可以在这里记录我的成长故事，太棒了！",
    date: "2024-02-15",
    category: "特别时刻",
    emoji: "🌟",
    mood: "激动"
  }
];

const moods = {
  "兴奋": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  "努力": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "开心": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "梦幻": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "自豪": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  "激动": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">我的成长日记 📝</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            记录每一个学习的瞬间，分享我的快乐和发现！
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{post.emoji}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${moods[post.mood as keyof typeof moods]}`}>
                    {post.mood}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">今日学习目标</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  继续学习Python函数，完成围棋练习题，读哈利波特第三章
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold">连续学习 30 天</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}