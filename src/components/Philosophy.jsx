import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "../data/content";
import { LazyImage } from "./LazyImage";

export const Philosophy = () => {
  const sectionRef = useRef(null);

  // Kiểm tra khi section lọt vào tầm mắt người dùng (mobile dùng ngưỡng nhỏ hơn 0.2 để nhạy hơn)
  const isInView = useInView(sectionRef, {
    amount: 0.2, // Lọt vào tầm mắt 20% là kích hoạt
    once: false,
  });

  const [isFanned, setIsFanned] = useState(false);

  useEffect(() => {
    let timer;
    if (isInView) {
      // Khi vừa scroll tới: vẫn giữ nguyên 1 ảnh duy nhất trong 850ms, sau đó TỰ ĐỘNG XÒE RA mà không cần cuộn tiếp!
      timer = setTimeout(() => {
        setIsFanned(true);
      }, 850);
    } else {
      // Khi scroll ra khỏi vùng nhìn: gập lại thành 1 ảnh để lần sau scroll tới lại xòe tiếp
      setIsFanned(false);
    }

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-36 bg-[#F5F0E9] border-t border-[#E5D8C8]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Layout Trái - Phải tinh tế */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* CỘT TRÁI: TEXT NỘI DUNG TRIẾT LÝ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-3 sm:mb-4">
              The Philosophy
            </span>

            <h2 className="font-serif text-[1.95rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.12] text-[#302724] font-normal mb-6 sm:mb-8">
              True beauty does not demand attention. <br className="hidden sm:inline" />
              <span className="italic font-light text-[#84746A]">
                It commands presence.
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-[#84746A] text-sm sm:text-base leading-relaxed font-light mb-8 sm:mb-10 max-w-xl">
              <p>
                At HIO, hair design is approached as quiet architecture. We
                discard cookie-cutter trends in favor of intuitive
                nuance—studying how your hair catches natural daylight, settles
                over your collar, and moves with your daily rhythm.
              </p>
              <p>
                Each appointment is private and unhurried. Our signature
                technique harmonizes traditional French precision with Japanese
                hair wellness principles, yielding dimensional forms that grow
                out seamlessly across seasons.
              </p>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-[#E5D8C8] flex items-center justify-between max-w-md">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-serif italic text-xl sm:text-2xl text-[#302724]">
                  Hio Studio Collective
                </span>
                <span className="w-6 sm:w-8 h-[1px] bg-[#A17C6D]" />
              </div>

              <a
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium text-[#302724] hover:text-[#A17C6D] transition-colors group"
              >
                <span>Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: KHỐI ẢNH TỰ ĐỘNG XÒE SAU KHI SCROLL TỚI (Cân chỉnh padding & khoảng xòe không chạm mép mobile) */}
          <div className="lg:col-span-6 flex items-center justify-center py-8 sm:py-10 px-4 sm:px-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] aspect-[4/5]">
              {/* LÁ BÀI 2 (ẢNH SAU - TỰ ĐỘNG XÒE SANG TRÁI SAU 0.8S) */}
              <motion.div
                initial={{ rotate: 0, x: 0, y: 0 }}
                animate={
                  isFanned
                    ? { rotate: -5.5, x: -28, y: 8 }
                    : { rotate: 0, x: 0, y: 0 }
                }
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1], // Chuyển động lụa mềm mại
                }}
                style={{
                  boxShadow: isFanned
                    ? "0 20px 40px -10px rgba(48,39,36,0.25)"
                    : "0 15px 35px -10px rgba(48,39,36,0.15)",
                }}
                className="absolute inset-0 rounded-xs overflow-hidden border border-[#E5D8C8] bg-[#241D1A] z-10 origin-bottom-right"
              >
                <LazyImage
                  src="/phil_1.png"
                  alt="Hio Hair Studio Hair Texture Artistry"
                  className="w-full h-full object-cover filter contrast-105"
                  containerClassName="w-full h-full"
                />
              </motion.div>

              {/* LÁ BÀI 1 (ẢNH TRƯỚC - TỰ ĐỘNG XOAY NHẸ SANG PHẢI SAU 0.8S) */}
              <motion.div
                initial={{ rotate: 0, x: 0, y: 0 }}
                animate={
                  isFanned
                    ? { rotate: 4, x: 20, y: -6 }
                    : { rotate: 0, x: 0, y: 0 }
                }
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  boxShadow: isFanned
                    ? "0 20px 40px -10px rgba(48,39,36,0.25)"
                    : "0 15px 35px -10px rgba(48,39,36,0.15)",
                }}
                className="absolute inset-0 rounded-xs overflow-hidden border border-[#E5D8C8] bg-[#302724] z-20 origin-bottom-left"
              >
                <LazyImage
                  src="/phil_2.png"
                  alt="Hio Hair Studio Sanctuary Environment"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />

                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 bg-[#FFFEFC]/90 backdrop-blur-md border border-[#E5D8C8]/60 shadow-xs">
                  <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#302724] leading-snug">
                    "Space conceived for stillness, light, and private
                    artistry."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
