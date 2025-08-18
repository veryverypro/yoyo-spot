"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles, Star, Zap, Rocket, Heart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "滑板碗池挑战",
    description: "已经可以在碗池里面练习滑板了，这是我最骄傲的成就！",
    category: "体育成就",
    icon: "🛹",
    tags: ["滑板", "运动", "挑战"],
    highlight: true
  },
  {
    id: 2,
    title: "四川峨眉山之旅",
    description: "爬峨眉山、游都江堰，感受巴蜀文化和古代智慧",
    category: "旅游探索",
    icon: "🏔️",
    tags: ["峨眉山", "都江堰", "四川"],
    highlight: true
  },
  {
    id: 3,
    title: "内蒙古草原体验",
    description: "在内蒙古大草原骑马，还在沙漠里玩沙子，超级有趣！",
    category: "旅游探索",
    icon: "🐎",
    tags: ["内蒙古", "草原", "沙漠"],
    highlight: false
  },
  {
    id: 4,
    title: "香港迪士尼乐园",
    description: "在香港迪士尼见到了米老鼠，玩了好多刺激的游戏！",
    category: "旅游探索",
    icon: "🏰",
    tags: ["香港", "迪士尼", "游乐园"],
    highlight: true
  },
  {
    id: 5,
    title: "山西太行山探险",
    description: "爬太行山看黄河壶口瀑布，瀑布的声音好大好壮观！",
    category: "旅游探索",
    icon: "💦",
    tags: ["山西", "太行山", "黄河"],
    highlight: false
  },
  {
    id: 6,
    title: "江南水乡之旅",
    description: "去了杭州西湖、苏州虎丘、扬州汽渡，体验了江南的美景",
    category: "旅游探索",
    icon: "🛶",
    tags: ["杭州", "苏州", "扬州"],
    highlight: true
  },
  {
    id: 7,
    title: "山东青岛啤酒厂",
    description: "参观了青岛啤酒厂，了解了啤酒是怎么制作的",
    category: "旅游探索",
    icon: "🏭",
    tags: ["山东", "青岛", "啤酒厂"],
    highlight: false
  },
  {
    id: 8,
    title: "全班跑步第一",
    description: "在学校运动会上跑得最快，是全班的跑步冠军！",
    category: "体育成就",
    icon: "🏃",
    tags: ["跑步", "比赛", "第一名"],
    highlight: true
  }
];

const stats = [
  { label: "旅游地点", value: "8+", icon: Rocket },
  { label: "运动技能", value: "6+", icon: Trophy },
  { label: "探索城市", value: "10+", icon: Zap },
  { label: "快乐指数", value: "100%", icon: Heart }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">我的爱好世界 🌟</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            这里展示了我最喜欢的活动和成就，每一个都让我超级开心！
          </p>
        </motion.div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-6 text-center shadow-lg"
            >
              <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1 sm:mb-2 text-blue-500" />
              <div className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 作品展示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {project.highlight && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 animate-pulse" />
                </div>
              )}
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105">
                <div className="h-24 sm:h-32 bg-gradient-to-br from-blue-400 via-green-400 to-orange-400 flex items-center justify-center text-5xl sm:text-6xl">
                  {project.icon}
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 mt-3">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm sm:text-base font-medium shadow-lg">
            <Rocket className="h-5 w-5" />
            更多有趣的活动等我去探索...
          </div>
        </motion.div>
      </div>
    </section>
  );
}