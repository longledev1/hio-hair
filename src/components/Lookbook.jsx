import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';
import { LOOKBOOK_IMAGES } from '../data/content';

export const Lookbook = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null); // Mở Modal cho cả VIDEO và ẢNH
  const [isMuted, setIsMuted] = useState(false);

  // Khóa scroll trang và đánh dấu modal-open khi mở Lightbox Modal
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
    };
  }, [selectedMedia]);

  const categories = ['All', 'Haircut & Styling', 'Hair Coloring', 'Hair Treatment'];

  const filteredImages = activeFilter === 'All'
    ? LOOKBOOK_IMAGES
    : LOOKBOOK_IMAGES.filter(img => img.tag === activeFilter);

  return (
    <section id="lookbook" className="py-16 sm:py-24 md:py-36 bg-[#F5F0E9] border-t border-[#E5D8C8]">
      {/* Container mở rộng tối đa (max-w-[1520px]) tương tự Services */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-2.5 sm:mb-4">
            Visual Anthology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#302724] font-normal tracking-tight">
            The Hair Lookbook
          </h2>
          <p className="mt-3 sm:mt-4 text-[#84746A] text-xs sm:text-sm md:text-base font-light px-2 sm:px-0">
            A continuous dialogue between light, texture, and refined individuality.
          </p>

          {/* Filter Bar: Hỗ trợ cuộn ngang mượt mà trên màn hình nhỏ */}
          <div className="flex items-center justify-start sm:justify-center gap-2 md:gap-4 mt-6 sm:mt-8 overflow-x-auto pb-2 sm:pb-0 no-scrollbar px-2 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap shrink-0 px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-all duration-300 rounded-full border cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#302724] text-[#FFFEFC] border-[#302724] shadow-sm'
                    : 'bg-transparent text-[#84746A] border-[#E5D8C8] hover:border-[#84746A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Gallery Grid: Trên mobile lưới 2 cột nhỏ xinh hoặc 1 cột tùy kích thước */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedMedia(item)}
              className="lookbook-card group flex flex-col cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/4.5] overflow-hidden bg-[#241D1A] mb-2 sm:mb-4 border border-[#E5D8C8] shadow-xs">
                {item.type === 'video' ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.title || "Lookbook hair artistry"}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                
                {/* Lớp phủ điện ảnh nhẹ khi hover */}
                <div className="absolute inset-0 bg-[#302724]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Huy hiệu tag danh mục */}
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 bg-[#FFFEFC]/90 backdrop-blur-sm text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#302724] font-medium border border-[#E5D8C8]">
                  {item.type === 'video' ? 'Motion Story' : item.tag}
                </span>

                {/* Huy hiệu nhỏ Live Reel */}
                {item.type === 'video' && (
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2 sm:px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-xs flex items-center gap-1.5 text-[8.5px] sm:text-[9px] uppercase tracking-wider text-[#E5D8C8] border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A17C6D] animate-ping" />
                    <span>Watch Reel</span>
                  </div>
                )}
              </div>

              {(item.title || item.subtitle) ? (
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    {item.title && (
                      <h3 className="font-serif text-xl sm:text-2xl text-[#302724] group-hover:text-[#A17C6D] transition-colors">
                        {item.title}
                      </h3>
                    )}
                    {item.subtitle && (
                      <p className="text-xs text-[#84746A] tracking-wide mt-0.5 font-light">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A17C6D] font-mono">
                    № 0{index + 1}
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

      </div>

      {/* 
        MODAL LIGHTBOX XEM TO TOÀN MÀN HÌNH (CHO CẢ VIDEO VÀ ẢNH):
        Tối ưu nút đóng, khoảng đệm an toàn trên Mobile
      */}
      <AnimatePresence>
        {selectedMedia && (
          <div data-modal="lightbox" className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop tối điện ảnh */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="absolute inset-0 bg-black/92 backdrop-blur-md cursor-pointer"
            />

            {/* Nút đóng to rõ, dễ bấm trên mobile */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-10 z-30 text-white/90 hover:text-white flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] cursor-pointer"
            >
              <span className="hidden sm:inline">Close</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center bg-black/60 hover:bg-white/20 transition-colors">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>

            {/* Khung media hiển thị */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 max-w-4xl w-full max-h-[82svh] sm:max-h-[85vh] bg-black/60 rounded-xs overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            >
              {selectedMedia.type === 'video' ? (
                <>
                  <video
                    src={selectedMedia.url}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    controls
                    className="max-h-[82svh] sm:max-h-[85vh] w-auto max-w-full object-contain"
                  />
                  {/* Nút bật/tắt tiếng nhanh */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 transition-colors cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </button>
                </>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt="Lookbook showcase"
                  className="max-h-[82svh] sm:max-h-[85vh] w-auto max-w-full object-contain"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
