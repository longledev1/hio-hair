import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);

  useEffect(() => {
    // Chỉ kích hoạt trên thiết bị có chuột
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      // 1. Kiểm tra nếu đang mở modal
      if (document.body.classList.contains('modal-open') || document.querySelector('[data-modal="lightbox"]')) {
        setIsVisible(false);
        setCursorText('');
        setIsPointer(false);
        return;
      }

      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
      setIsVisible(true);

      // Lấy phần tử chính xác dưới mũi chuột
      const target = e.target;
      if (!target) return;

      // 2. Chỉ hiện VIEW khi nằm bên trong .lookbook-card của #lookbook
      const lookbookCard = target.closest('#lookbook .lookbook-card');
      if (lookbookCard) {
        setIsPointer(true);
        setCursorText('VIEW');
      } else {
        setCursorText(''); // Tuyệt đối không giữ chữ VIEW ở bất kỳ section nào khác
        const interactiveEl = target.closest('a, button, [role="button"], input, select');
        setIsPointer(!!interactiveEl);
      }

      // 3. Nhận diện khu vực Nền Tối vs Nền Sáng
      const darkSection = target.closest('header, section.bg-\\[\\#1A1513\\], section.bg-\\[\\#241D1A\\], section.bg-\\[\\#302724\\], footer, [data-theme="dark"]');
      const isHeroArea = window.scrollY < (window.innerHeight - 80);
      
      if (darkSection || isHeroArea) {
        setIsDarkBg(true);
      } else {
        setIsDarkBg(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  const dotColor = isDarkBg ? '#FFFFFF' : '#302724';
  const ringBorderColor = isDarkBg ? 'rgba(255, 255, 255, 0.85)' : 'rgba(48, 39, 36, 0.85)';
  const ringHoverBg = isDarkBg ? 'rgba(255, 255, 255, 0.15)' : 'rgba(48, 39, 36, 0.1)';

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      {/* 1. VÒNG HÀO QUANG NGOÀI */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center text-center pointer-events-none shadow-xs"
        animate={{
          x: mousePos.x - (isPointer ? (cursorText ? 40 : 28) : 18),
          y: mousePos.y - (isPointer ? (cursorText ? 40 : 28) : 18),
          width: isPointer ? (cursorText ? 80 : 56) : 36,
          height: isPointer ? (cursorText ? 80 : 56) : 36,
          backgroundColor: cursorText
            ? (isDarkBg ? '#E5D8C8' : '#302724')
            : (isPointer ? ringHoverBg : 'transparent'),
          borderColor: cursorText ? 'transparent' : ringBorderColor,
          borderWidth: cursorText ? '0px' : '1.5px',
        }}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 300,
          mass: 0.4,
        }}
      >
        {/* Chữ VIEW chỉ hiện khi cursorText === 'VIEW' */}
        {cursorText && (
          <span
            className="text-[10px] uppercase tracking-[0.25em] font-semibold select-none"
            style={{ color: isDarkBg ? '#302724' : '#FFFEFC' }}
          >
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* 2. CHẤM TRUNG TÂM */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none shadow-sm"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          backgroundColor: dotColor,
          opacity: cursorText ? 0 : 1,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 500,
          mass: 0.1,
        }}
      />
    </div>
  );
};
