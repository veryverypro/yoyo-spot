"use client";

import { motion } from "framer-motion";
import { Gamepad2, Waves, Music, Palette, MapPin } from "lucide-react";

const interests = [
  {
    icon: Gamepad2,
    title: "滑板运动",
    description: "已经可以在碗池里练习，超级喜欢滑板",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Waves,
    title: "游泳健将",
    description: "从小喜欢水，喜欢大海、游泳和温泉",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Music,
    title: "钢琴学习",
    description: "正在学习钢琴，对音乐很有兴趣",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Palette,
    title: "绘画创作",
    description: "喜欢画画，用色彩表达内心的想法",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: MapPin,
    title: "旅游探索",
    description: "喜欢和爸爸妈妈一起旅游，去过很多有趣的地方",
    color: "from-red-400 to-pink-500"
  }
];

const skills = [
  { name: "跑步", level: 95, emoji: "🏃" },
  { name: "滑板", level: 75, emoji: "🛹" },
  { name: "游泳", level: 85, emoji: "🏊" },
  { name: "跳绳", level: 90, emoji: "🪢" },
  { name: "乒乓球", level: 65, emoji: "🏓" },
  { name: "英语", level: 80, emoji: "🔤" },
  { name: "钢琴", level: 60, emoji: "🎹" },
  { name: "书法", level: 70, emoji: "🖌️" },
  { name: "旅游探索", level: 85, emoji: "🗺️" },
];

const achievements = [
  "🏃 全班跑得最快的学生",
  "🛹 能在碗池里滑板练习",
  "🪢 跳绳比赛班级第一",
  "🏊 游泳技能优秀",
  "🔤 英语口语流利",
  "🎨 绘画作品多次获奖",
  "🖌️ 书法练习认真",
  "🗺️ 游历祖国8个省市",
  "🏔️ 登过峨眉山和太行山",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">关于我 👦</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            大家好！我是徐子曦（Vincent/Yoyo），今年7岁，是北京西城区奋斗小学一年级的学生。
            我性格开朗，每天都很开心，喜欢运动、旅游和各种有趣的活动！
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  backgroundImage: `linear-gradient(to right, ${interest.color.split(' ')[1]}, ${interest.color.split(' ')[3]})`
                }}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:transform hover:scale-105 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${interest.color} flex items-center justify-center mb-4`}>
                  <interest.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              我的技能 <span className="text-3xl">💪</span>
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center gap-2">
                      <span className="text-xl">{skill.emoji}</span>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              我的成就 <span className="text-3xl">🌟</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-4 border-l-4 border-yellow-500"
                >
                  <p className="font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">我的梦想 ✨</h3>
          <p className="max-w-3xl mx-auto text-lg">
            我想成为一个运动健将和旅游探险家！希望能在滑板上做出酷炫的动作，
            在大海里自由游泳，弹出美妙的钢琴曲，画出美丽的图画，
            还要去更多有趣的地方旅游，继续保持全班跑得最快的记录！
          </p>
        </motion.div>
      </div>
    </section>
  );
}