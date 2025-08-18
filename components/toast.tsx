"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="pointer-events-auto"
          >
            <div className={`
              flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md
              border border-white/20 min-w-[300px] max-w-[500px]
              ${type === "success" 
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                : "bg-gradient-to-r from-red-500 to-pink-500 text-white"}
            `}>
              {type === "success" ? (
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 flex-shrink-0" />
              )}
              <p className="font-medium pr-2">{message}</p>
              <button
                onClick={onClose}
                className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="关闭"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}