"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Users, School, Heart, Sparkles } from "lucide-react";
import Toast from "./toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      ...formData,
      access_key: "c5c977db-d251-491b-accc-c1c84eb98225",
      subject: `[Yoyo个人主页] ${formData.subject}`,
      from_name: `${formData.name} (通过Yoyo个人主页)`,
      website: "Yoyo徐子曦个人主页",
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      redirect: false,
      botcheck: "",
      h_captcha_response: "",
      message: `
📧 来自Yoyo个人主页的新留言

👤 留言人：${formData.name}
📧 邮箱：${formData.email}
📝 主题：${formData.subject}
🕐 时间：${new Date().toLocaleString('zh-CN')}

💬 留言内容：
${formData.message}

---
📍 网站来源：Yoyo徐子曦个人主页
🌐 页面链接：${window.location.href}
      `.trim()
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (result.success) {
        setToast({
          show: true,
          message: "谢谢您的留言！爸爸妈妈会尽快回复您的 💌",
          type: "success"
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToast({
          show: true,
          message: "发送失败，请稍后再试",
          type: "error"
        });
      }
    } catch (_error) {
      setToast({
        show: true,
        message: "发送失败，请检查网络连接",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">联系我们 💌</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            欢迎和 Yoyo 交朋友！有任何问题或想法，请联系爸爸妈妈
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                给我留言 <span className="text-2xl">✉️</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    您的称呼
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="叔叔/阿姨"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    联系邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    留言主题
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="想和 Yoyo 交朋友"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    留言内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="请留下您的留言..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="h-5 w-5" />
                  {isSubmitting ? "发送中..." : "发送留言"}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                家长联系方式 <span className="text-xl">👨‍👩‍👦</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">爸爸妈妈</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      如需联系 Yoyo 或有任何想法，请联系家长
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">邮箱</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">xuhao.pro@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">微信</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">请邮件联系获取</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <School className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">学校</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">北京西城区奋斗小学</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                交朋友啦！ <Heart className="h-6 w-6" />
              </h4>
              <p className="mb-4 text-white/90">
                Yoyo 很喜欢交新朋友！如果你也喜欢滑板、游泳、钢琴或者画画，
                欢迎来找我玩！我们可以一起运动，一起快乐成长！
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>期待认识新朋友</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-2">📢 小提示</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yoyo 还在上小学，所有的留言都会先经过爸爸妈妈查看。
                我们会保护孩子的隐私和安全，谢谢理解！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  );
}