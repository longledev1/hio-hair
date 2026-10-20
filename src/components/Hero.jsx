import React, { useState, useEffect, useRef } from "react";
import { BRAND } from "../data/content";

export const Hero = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // Bắt chuyển động chuột trong khu vực Hero
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#1A1513] cursor-default"
    >
      {/* 
        LỚP 1 (BASE LAYER):
        - Trên Mobile (< md): Căn lề object-[right_center] hoặc object-[78%_center] để người mẫu và mái tóc nằm trọn vẹn trong khung hình, không bị cắt xén nửa mặt
        - Trên Desktop (md:): Hiển thị ảnh đen trắng nghệ thuật (Grayscale)
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Hio Hair Studio Editorial"
          className="w-full h-full object-cover object-[78%_center] sm:object-center filter md:grayscale md:contrast-110 md:brightness-90 md:scale-105 saturate-105 brightness-90"
        />
        {/* Lớp gradient điện ảnh: phủ tối nhẹ để chữ nổi bật mà gương mặt/tóc vẫn thấy rõ nét */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      {/* 
        LỚP 2 (SPOTLIGHT COLOR REVEAL LAYER): CHỈ DÀNH CHO DESKTOP (hidden md:block)
        Chỉ lộ ra ở vị trí con trỏ chuột khi dùng máy tính
      */}
      <div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: `radial-gradient(circle 240px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.8) 45%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 240px at ${mousePos.x}px ${mousePos.y}px, black 0%, rgba(0,0,0,0.8) 45%, transparent 100%)`,
        }}
      >
        <img
          src="/hero.jpg"
          alt="Hio Hair Studio Editorial Vivid Color"
          className="w-full h-full object-cover object-center scale-105 filter saturate-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />
      </div>

      {/* VÒNG ÁNH SÁNG METALLIC ROSE-BRONZE TINH TẾ THEO CON TRỎ CHUỘT */}
      {isHovered && (
        <div
          className="absolute z-[1] w-[480px] h-[480px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: "radial-gradient(circle, rgba(229,216,200,0.35) 0%, rgba(161,124,109,0.15) 50%, transparent 70%)",
          }}
        />
      )}

      {/* Nội dung trung tâm: Căn chỉnh tỷ lệ typography và padding hoàn hảo cho mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 text-center pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 flex flex-col items-center justify-center pointer-events-none">
        
        {/* Tiêu đề chính */}
        <h1 className="font-serif text-[2.75rem] leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-normal tracking-tight mb-5 sm:mb-8 drop-shadow-lg select-none">
          The Art of <br />
          <span className="italic font-light text-[#E5D8C8]">
            Effortless
          </span>{" "}
          Grace.
        </h1>

        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 tracking-wide drop-shadow-md select-none">
          A serene sanctuary where bespoke couture coloring, architectural
          cutting, and holistic Japanese head spa rituals converge in quiet
          elegance.
        </p>

        {/* Nút hành động (bật pointer-events để bấm được) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto px-4 sm:px-0 pointer-events-auto">
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-7 sm:px-9 py-3.5 sm:py-4 bg-[#E5D8C8] text-[#302724] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium hover:bg-white transition-all duration-300 shadow-2xl bronze-glow active:scale-[0.98]"
          >
            Reserve an Experience
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto text-center px-7 sm:px-9 py-3.5 sm:py-4 border border-white/40 text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-xs active:scale-[0.98]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};
