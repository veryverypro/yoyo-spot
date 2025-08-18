"use client";

import { useState, useEffect } from "react";
import { Sparkles, Gamepad2, BookOpen, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Hi! 我是 Yoyo";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8 flex items-center justify-center text-white text-5xl font-bold shadow-xl"
        >
          曦
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="inline-block min-h-[1.2em]">
            {text}
            <span className="animate-pulse">✨</span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
        >
          徐子曦 (Vincent) · 7岁 · 一年级
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8"
        >
          北京西城区奋斗小学 小学生
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
            <Gamepad2 className="h-5 w-5" />
            <span className="text-sm font-medium">滑板达人</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">游泳健将</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium">旅游探索家</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-medium shadow-lg"
          >
            探索我的世界 🚀
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-gray-400" />
      </motion.div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}