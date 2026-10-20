import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("entering"); // entering -> revealing -> exiting

  useEffect(() => {
    // 1. Hiện logo mượt mà
    const timer1 = setTimeout(() => {
      setPhase("revealing");
    }, 1100);

    // 2. Tách rèm mượt mở web
    const timer2 = setTimeout(() => {
      setPhase("exiting");
    }, 2100);

    // 3. Hoàn tất gỡ splash
    const timer3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 
        RÈM MỞ MƯỢT MÀ KHÔNG CÒN VẾT GẠCH NGANG CẮT CHÍNH GIỮA:
        Dùng nền Porcelain Ivory thuần khiết, border đặt trong suốt để không chia cắt logo.
      */}
      {/* Nửa trên */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#F5F0E9] z-10 origin-top pointer-events-auto shadow-xs"
        initial={{ y: 0 }}
        animate={phase === "exiting" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Nửa dưới */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#F5F0E9] z-10 origin-bottom pointer-events-auto shadow-xs"
        initial={{ y: 0 }}
        animate={phase === "exiting" ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* 
        CỤM NỘI DUNG TRUNG TÂM CĂN CHỈNH TỶ LỆ HOÀNG GIA (COHESIVE EDITORIAL LOCKUP):
        Khoảng cách compact, đồng nhất một trục, không bị rời rạc
      */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center max-w-md w-full px-6"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={
          phase === "exiting"
            ? { opacity: 0, scale: 1.04, y: -16 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* LOGO NGUYÊN BẢN - ĐẶT LÀM TÂM ĐIỂM CHÍNH */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-center justify-center -mb-2 sm:-mb-3"
        >
          <img
            src="/logo.png"
            alt="HIO Hair Studio"
            className="h-32 sm:h-40 md:h-44 w-auto object-contain filter drop-shadow-sm"
          />
        </motion.div>

        {/* Cụm Text gắn kết tự nhiên sát ngay dưới Logo */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-1 sm:mt-2 flex flex-col items-center"
        >
          <span className="font-serif italic text-2xl sm:text-3xl text-[#302724] font-normal tracking-wide">
            Haute Coiffure & Sanctuary
          </span>
          
          <div className="flex items-center gap-3 mt-1.5 text-[11px] uppercase tracking-[0.3em] text-[#84746A] font-medium font-sans">
            <span>Est. 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#A17C6D]" />
            <span>Private Atelier</span>
          </div>
        </motion.div>

        {/* Thanh đếm nhịp điệu siêu tinh tế gắn kết chặt chẽ bên dưới */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-24 h-[1px] bg-[#E5D8C8] mt-6 overflow-hidden rounded-full"
        >
          <motion.div
            className="h-full bg-[#A17C6D]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
