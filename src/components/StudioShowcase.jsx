import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const StudioShowcase = () => {
  const containerRef = useRef(null);

  // Theo dõi tiến trình cuộn của container (desktop 220vh, mobile 160vh để lướt vừa tay)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phóng to khung ảnh:
  // Trên Desktop: từ 52% -> 100%
  // Trên Mobile: xuất phát từ tỷ lệ rộng hơn (82% width / 45svh) để khung ảnh không bị teo nhỏ như que diêm
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerWidth = useTransform(
    scrollYProgress,
    [0, 0.75],
    [isMobile ? '84%' : '52%', '100%']
  );
  const containerHeight = useTransform(
    scrollYProgress,
    [0, 0.75],
    [isMobile ? '46svh' : '52vh', isMobile ? '100svh' : '100vh']
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.75],
    [isMobile ? '12px' : '20px', '0px']
  );

  const containerShadow = useTransform(
    scrollYProgress,
    [0, 0.75],
    ['0 30px 70px -15px rgba(0,0,0,0.6)', '0 0px 0px 0px rgba(0,0,0,0)']
  );

  // Mảng từ khóa chữ chạy loop:
  const marqueeItems = [...Array(12)].map((_, i) => (
    <div key={i} className="flex items-center mx-1.5 sm:mx-3 md:mx-4">
      <span className="font-serif text-2xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase font-light drop-shadow-md">
        HIO Hair Studio
      </span>
      <span className="mx-2 sm:mx-4 md:mx-5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current shrink-0 shadow-xs opacity-75" />
    </div>
  ));

  return (
    <section
      ref={containerRef}
      className="relative bg-[#302724] border-t border-[#3D332F] h-[170vh] md:h-[230vh]"
    >
      {/* KHUNG STICKY GHIM TOÀN MÀN HÌNH TRÊN NỀN WARM ESPRESSO ẤM ÁP */}
      <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#302724]">
        
        {/* 
          KHUNG ẢNH ZOOM TỪ TỪ RA TRÀN MÀN HÌNH (z-0)
        */}
        <motion.div
          style={{
            width: containerWidth,
            height: containerHeight,
            borderRadius: borderRadius,
            boxShadow: containerShadow,
          }}
          className="relative overflow-hidden border border-[#52443E] z-0 flex items-center justify-center"
        >
          {/* Bức ảnh background.png quầy lễ tân đá tự nhiên */}
          <img
            src="/background.png"
            alt="HIO Hair Studio Atelier Reception"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Lớp phủ điện ảnh mỏng nhẹ để bức ảnh luôn sáng sủa, tự nhiên */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Huy hiệu nhỏ góc dưới giới thiệu không gian */}
          <div className="absolute bottom-6 left-6 sm:left-10 z-10 hidden sm:flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D8C8] animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#FFFEFC] font-mono">
              The Atelier • Sanctuary Space
            </span>
          </div>
        </motion.div>

        {/* 
          DUY NHẤT 1 DÒNG CHỮ TRẮNG TINH KHIẾT NẰM ĐÈ LÊN TRÊN (z-20):
          - Nền xung quanh màu tối Espresso (#140F0D)
          - Khung ảnh cũng có lớp phủ tối
          -> Dòng chữ TRẮNG SÁNG (#FFFEFC) chạy xuyên suốt toàn màn hình cực kỳ mượt mà,
          không cần tách 2 lớp màu, không sợ bị delay hay lệch trục!
        */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden select-none pointer-events-none text-[#FFFEFC] z-20">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems}
          </div>
        </div>

      </div>
    </section>
  );
};
