import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Khóa scroll khi mở menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy', number: '01', desc: 'The Quiet Luxury Vision' },
    { label: 'Services', href: '#services', number: '02', desc: 'Bespoke Rituals & Color Artistry' },
    { label: 'Lookbook', href: '#lookbook', number: '03', desc: 'Visual Hair Anthology' },
    { label: 'The Studio', href: '#studio', number: '04', desc: 'Sanctuary & Master Craftsmen' },
    { label: 'Testimonials', href: '#testimonials', number: '05', desc: 'Reflections from Our Guests' },
    { label: 'Contact', href: '#contact', number: '06', desc: 'Atelier Location & Hours' },
  ];

  return (
    <>
      {/* 
        HEADER HOÀN TOÀN TRONG SUỐT (SEAMLESS TRANSPARENT) NHƯ ẢNH MẪU:
        - Không background màu che, đè trực tiếp lên ảnh / video bên dưới
        - Phía trái: Menu icon 3 thanh mảnh màu trắng sáng
        - Ở giữa: Logo to màu trắng nổi bật
        - Phía phải: Chữ "MAKE AN APPOINTMENT" màu trắng thanh lịch
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/25 backdrop-blur-md py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="relative w-full px-4 sm:px-8 md:px-14 flex items-center justify-between">
          
          {/* CỘT TRÁI: HAMBURGER MENU ICON */}
          <div className="z-10 flex items-center justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-3 text-white hover:opacity-75 transition-opacity focus:outline-none cursor-pointer py-2"
              aria-label="Open Navigation Menu"
            >
              <div className="w-6 sm:w-7 flex flex-col items-start gap-[4.5px] sm:gap-[5px]">
                <span className="w-6 sm:w-7 h-[1.5px] bg-white transition-all" />
                <span className="w-6 sm:w-7 h-[1.5px] bg-white transition-all" />
                <span className="w-6 sm:w-7 h-[1.5px] bg-white transition-all" />
              </div>
            </button>
          </div>

          {/* CỘT GIỮA: CĂN GIỮA TUYỆT ĐỐI MÀN HÌNH (ABSOLUTE 50%) & PHÓNG TO LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
            <a href="#" className="flex items-center justify-center group py-1">
              <img
                src="/logo.png"
                alt="HIO Hair Studio"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          {/* CỘT PHẢI: CHỮ "MAKE AN APPOINTMENT" */}
          <div className="z-10 flex items-center justify-end">
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.14em] sm:tracking-[0.2em] md:tracking-[0.22em] font-light text-white hover:text-[#E5D8C8] transition-colors relative group py-2"
            >
              <span className="drop-shadow-sm font-sans font-normal">MAKE AN APPOINTMENT</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

        </div>
      </header>

      {/* OVERLAY & EDITORIAL DRAWER MENU */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop Blur tối nhẹ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#302724]/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Menu Panel trượt ra từ bên trái */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl sm:max-w-2xl bg-[#F5F0E9] h-full shadow-2xl flex flex-col justify-between p-8 sm:p-12 md:p-16 z-10 border-r border-[#E5D8C8] overflow-y-auto"
            >
              {/* Header bên trong Drawer */}
              <div className="flex items-center justify-between pb-8 border-b border-[#E5D8C8]">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Hio" className="h-10 w-auto object-contain" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#A17C6D] font-medium hidden sm:inline">
                    Quiet Luxury Studio
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#84746A] hover:text-[#302724] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <span>Close</span>
                  <div className="w-8 h-8 rounded-full border border-[#E5D8C8] flex items-center justify-center group-hover:border-[#302724] transition-colors">
                    <span className="font-sans text-base leading-none">✕</span>
                  </div>
                </button>
              </div>

              {/* Danh sách Nav Links phong cách Tạp chí cao cấp */}
              <nav className="py-10 flex flex-col space-y-5 sm:space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.4 }}
                    className="group flex items-baseline justify-between border-b border-[#E5D8C8]/50 pb-4 transition-all duration-300 hover:pl-2"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs font-mono text-[#A17C6D] uppercase tracking-wider">
                        {link.number}
                      </span>
                      <div>
                        <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#302724] group-hover:text-[#A17C6D] transition-colors block">
                          {link.label}
                        </span>
                        <span className="text-xs text-[#84746A] tracking-wider font-light mt-0.5 hidden sm:block">
                          {link.desc}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-[#84746A] opacity-0 group-hover:opacity-100 group-hover:text-[#A17C6D] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer bên trong Drawer */}
              <div className="pt-8 border-t border-[#E5D8C8] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A17C6D] font-medium mb-1">
                    Concierge & Atelier
                  </p>
                  <p className="text-xs text-[#84746A] font-light">
                    {BRAND.address.street}, {BRAND.address.city}
                  </p>
                  <p className="text-xs text-[#302724] font-medium mt-1">
                    {BRAND.phone}
                  </p>
                </div>

                <a
                  href={BRAND.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#302724] text-[#FFFEFC] text-xs uppercase tracking-[0.2em] hover:bg-[#A17C6D] transition-colors text-center"
                >
                  Make an Appointment
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
