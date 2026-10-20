import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';
import { LazyImage } from './LazyImage';

export const Services = () => {
  const sectionRef = useRef(null);

  // Kích hoạt animation khi người dùng cuộn tới phần Services
  // Trên mobile section rất dài nên dùng amount nhỏ (0.05 hoặc margin) để kích hoạt ngay khi mép trên chạm vào
  const isInView = useInView(sectionRef, {
    amount: 0.05,
    margin: "100px 0px 0px 0px",
    once: true,
  });

  const galleryItems = [
    // HÀNG 1: (Từ trái qua phải: haircut_0 -> haircut_1 -> haircut_2)
    {
      id: 'haircut-lead',
      src: '/services/haircut_0.png',
      isLead: true,
      title: 'Haircut & Styling',
      delay: 0.2, // Lead hàng 1 hiện đầu tiên
    },
    {
      id: 'haircut-1',
      src: '/services/haircut_1.jpg',
      isLead: false,
      delay: 0.7,
    },
    {
      id: 'haircut-2',
      src: '/services/haircut_2.jpg',
      isLead: false,
      delay: 1.0,
    },

    // HÀNG 2: (Từ phải qua trái: haircolor_0 -> haircolor_2 -> haircolor_1)
    {
      id: 'haircolor-1',
      src: '/services/haircolor_1.jpg',
      isLead: false,
      delay: 2.4, // Hiện cuối cùng của hàng 2 (ảnh bên trái ngoài cùng)
    },
    {
      id: 'haircolor-2',
      src: '/services/haircolor_2.jpg',
      isLead: false,
      delay: 2.0, // Hiện thứ nhì của hàng 2 (ảnh kế bên ảnh đại diện)
    },
    {
      id: 'haircolor-lead',
      src: '/services/haircolor_0.png',
      isLead: true,
      title: 'Hair Coloring',
      delay: 1.5, // Hiện đầu tiên của hàng 2 (ảnh đại diện bên phải)
    },

    // HÀNG 3: (Từ trái qua phải: hairtreament_0 -> hairtreament_1 -> hairtreament_2)
    {
      id: 'hairtreatment-lead',
      src: '/services/hairtreament_0.jpg',
      isLead: true,
      title: 'Hair Treatment',
      delay: 2.8, // Lead hàng 3 hiện trước
    },
    {
      id: 'hairtreatment-1',
      src: '/services/hairtreament_1.jpg',
      isLead: false,
      delay: 3.3,
    },
    {
      id: 'hairtreatment-2',
      src: '/services/hairtreament_2.jpg',
      isLead: false,
      delay: 3.6,
    },
  ];

  // Sắp xếp lại thứ tự khi hiển thị trên Mobile (1 cột dọc) để luôn theo nhịp: Lead -> Phụ -> Phụ
  // Hàng 2 trên Desktop là [haircolor-1, haircolor-2, haircolor-lead] để lead nằm góc phải.
  // Nhưng trên mobile màn hình hẹp, ta cho lead lên trước để người xem nắm ngay tên dịch vụ.
  const mobileOrderedItems = [
    // Nhóm 1: Haircut
    galleryItems[0], // haircut-lead
    galleryItems[1], // haircut-1
    galleryItems[2], // haircut-2

    // Nhóm 2: Hair Coloring (Đưa lead lên trước trên mobile)
    galleryItems[5], // haircolor-lead
    galleryItems[4], // haircolor-2
    galleryItems[3], // haircolor-1

    // Nhóm 3: Hair Treatment
    galleryItems[6], // hairtreatment-lead
    galleryItems[7], // hairtreatment-1
    galleryItems[8], // hairtreatment-2
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-36 bg-[#F5F0E9] text-[#302724] border-t border-[#E5D8C8]/60 relative overflow-hidden"
    >
      {/* Container mở rộng tối đa để các ảnh to, rộng và choáng ngợp */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Header giới thiệu tinh tế trên nền sáng Porcelain Ivory */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-2 sm:mb-3">
              Curation of Services
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#302724] font-normal tracking-tight">
              Signature Menu
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-[#84746A] max-w-lg text-xs sm:text-sm md:text-base font-light leading-relaxed">
            A bespoke repertoire of architectural cutting, couture color transitions, and restorative hair spa rituals tailored exclusively to you.
          </p>
        </div>

        {/* 
          1. LƯỚI TRÊN MOBILE (< md): 
          Hiển thị theo thứ tự nhóm chuẩn (Lead luôn đi đầu nhóm), gap nhỏ gọn gàng, aspect ratio hài hòa
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          {mobileOrderedItems.map((item, idx) => (
            <motion.div
              key={`mobile-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative aspect-[4/4.8] sm:aspect-square overflow-hidden group border border-[#E5D8C8] bg-[#E5D8C8]/20 ${
                item.isLead ? 'ring-1 ring-[#A17C6D]/40 shadow-lg' : ''
              }`}
            >
              <LazyImage
                src={item.src}
                alt={item.title || 'Hio Hair Studio Curation'}
                className="w-full h-full object-cover object-center"
                containerClassName="w-full h-full"
              />

              {item.isLead ? (
                <>
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 pointer-events-none flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                      <span className="w-8 h-[1.5px] bg-[#E5D8C8] block mt-2 opacity-90" />
                    </div>

                    <div>
                      <p className="text-[11px] sm:text-xs text-[#E5D8C8]/90 font-light leading-relaxed max-w-xs drop-shadow-md font-sans line-clamp-2">
                        Bespoke tailored experience shaped by master craftsmen, harmonizing structural texture and organic movement.
                      </p>
                      
                      <a
                        href={BRAND.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-white hover:text-[#E5D8C8] mt-2.5 pointer-events-auto"
                      >
                        <span className="underline underline-offset-4">Reserve</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </motion.div>
          ))}
        </div>

        {/* 
          2. LƯỚI 3x3 CHUẨN TRÊN DESKTOP (md:grid):
          Giữ nguyên layout so le nghệ thuật và hiệu ứng stagger animation
        */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6">
          {galleryItems.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.94 }
                }
                transition={{
                  duration: 1.0,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative md:aspect-[4/4.5] overflow-hidden group border border-[#E5D8C8] bg-[#E5D8C8]/20 ${
                  item.isLead ? 'ring-1 ring-[#A17C6D]/40 shadow-xl z-10' : ''
                }`}
              >
                {/* Ảnh thẻ */}
                <LazyImage
                  src={item.src}
                  alt={item.title || 'Hio Hair Studio Curation'}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Lớp gradient overlay tối điện ảnh cho ảnh đại diện */}
                {item.isLead ? (
                  <>
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-500 pointer-events-none" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70 group-hover:from-black/80 group-hover:via-black/20 group-hover:to-black/50 transition-all duration-500 pointer-events-none flex flex-col justify-between p-6 sm:p-7 md:p-8">
                      {/* Tiêu đề góc trên */}
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-white font-normal tracking-tight drop-shadow-lg">
                          {item.title}
                        </h3>
                        <span className="w-10 h-[1.5px] bg-[#E5D8C8] block mt-2.5 opacity-90 transition-all duration-500 group-hover:w-16" />
                      </div>

                      {/* Đoạn mô tả góc dưới */}
                      <div>
                        <p className="text-[11px] sm:text-xs text-[#E5D8C8]/90 font-light leading-relaxed max-w-xs drop-shadow-md font-sans line-clamp-3">
                          Bespoke tailored experience shaped by master craftsmen, harmonizing structural texture and organic movement.
                        </p>
                        
                        <a
                          href={BRAND.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-medium text-white hover:text-[#E5D8C8] mt-3 group/link pointer-events-auto"
                        >
                          <span className="underline underline-offset-4">Reserve</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Ghi chú footer dưới section */}
        <div className="mt-14 pt-8 border-t border-[#E5D8C8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#84746A] uppercase tracking-wider font-light">
          <span>* Each appointment includes private diagnostic dialogue</span>
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 text-[#302724] hover:text-[#A17C6D] underline underline-offset-4 tracking-widest font-normal"
          >
            Explore Complete Treatment Menu
          </a>
        </div>

      </div>
    </section>
  );
};
