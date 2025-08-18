"use client";

import { Heart, Star, Sparkles, Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              Yoyo 徐子曦
              <Sparkles className="h-6 w-6 text-yellow-400" />
            </h3>
            <p className="text-gray-300">7岁 · 小学生 · 快乐的运动达人</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span>滑板达人</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-400" />
              <span>游泳健将</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-400 fill-red-400" />
              <span>钢琴学习者</span>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-1">
            © {currentYear} Yoyo 的个人主页 · 和爸爸一起用
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            制作
          </p>
          <p className="text-gray-400 text-sm mt-2">
            北京西城区奋斗小学 · 一年级
          </p>
        </div>
      </div>
    </footer>
  );
}