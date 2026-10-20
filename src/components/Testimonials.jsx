import React, { useRef, useState } from 'react';
import { Quote, Volume2, VolumeX, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Nhân bản mảng comments để chạy loop vô tận mượt mà liên tục
  const loopComments = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#F5F0E9] text-[#302724] overflow-hidden border-t border-[#E5D8C8]"
    >
      {/* 1. Header tiêu đề Section nền sáng */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-2 sm:mb-3">
            Guest Reflections & Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#302724] font-normal tracking-tight">
            Words of Reverence
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[#84746A] text-xs sm:text-sm md:text-base font-light">
            Genuine expressions of confidence, sensory calm, and elevated style from our distinguished clientele.
          </p>
        </div>
      </div>

      {/* 2. Full-bleed Stage: Video dọc gọn gàng sát mép trái, che đè lên dãy comment chạy phía sau */}
      <div className="relative w-full overflow-hidden flex items-center min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px]">
        
        {/* === LAYER NỀN PHÍA SAU: DÃY CMT CHẠY LOOP VÔ TẬN (z-10) === */}
        <div className="absolute inset-y-0 left-0 w-full flex items-center z-10 pointer-events-auto overflow-hidden">
          {/* Padding trái vừa đúng vị trí mép phải của Video để card cmt trôi ra từ sau lưng video */}
          <div className="animate-loop-comments flex items-center gap-4 sm:gap-6 md:gap-8 pl-[235px] sm:pl-[300px] md:pl-[380px] lg:pl-[440px]">
            {loopComments.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[240px] sm:w-[290px] md:w-[340px] lg:w-[380px] h-[320px] sm:h-[360px] md:h-[400px] shrink-0 p-5 sm:p-7 md:p-8 bg-[#FFFEFC] border border-[#E5D8C8] rounded-xs flex flex-col justify-between shadow-[0_10px_25px_rgba(48,39,36,0.06)] transition-all duration-300 hover:border-[#A17C6D] hover:shadow-[0_20px_45px_rgba(48,39,36,0.12)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-[#A17C6D]/40 group-hover:text-[#A17C6D] transition-colors" />
                    <div className="flex items-center gap-0.5 sm:gap-1 text-[#A17C6D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#A17C6D] text-[#A17C6D]" />
                      ))}
                    </div>
                  </div>

                  <p className="font-serif text-sm sm:text-base md:text-xl text-[#302724] italic leading-relaxed line-clamp-5">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-5 border-t border-[#E5D8C8]">
                  <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                    <h4 className="font-serif text-base sm:text-lg text-[#302724] font-medium tracking-wide">
                      {item.author}
                    </h4>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A17C6D] font-mono">
                      № 0{((idx % TESTIMONIALS.length) + 1)}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#84746A] font-light">{item.role}</p>
                  <div className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] text-[#A17C6D] uppercase tracking-widest font-mono">
                    {item.treatment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === LAYER PHÍA TRƯỚC: VIDEO DỌC SÁT MÉP TRÁI HOÀN TOÀN (z-20) === */}
        <div className="relative z-20 shrink-0 pointer-events-auto">
          {/* Sát mép trái tuyệt đối (left: 0), tỷ lệ chuẩn đẹp trên màn hình dọc */}
          <div className="relative w-[215px] sm:w-[280px] md:w-[350px] lg:w-[410px] h-[350px] sm:h-[410px] md:h-[470px] lg:h-[510px] overflow-hidden border-y border-r border-l-0 border-[#E5D8C8] shadow-[15px_0_35px_rgba(48,39,36,0.18)] bg-[#241D1A] group">
            
            <video
              ref={videoRef}
              src="/cmt_video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#302724]/60 via-transparent to-[#302724]/20 pointer-events-none" />

            {/* Badge Reel */}
            <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 px-2.5 sm:px-3 py-1 bg-[#302724]/75 backdrop-blur-md rounded-xs border border-white/20 flex items-center gap-1.5 sm:gap-2 text-[8.5px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#E5D8C8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A17C6D] animate-ping" />
              <span>Studio Live Story</span>
            </div>

            {/* Nút bật / tắt tiếng video */}
            <button
              onClick={toggleSound}
              className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 z-30 p-2 sm:p-2.5 rounded-full bg-[#302724]/80 backdrop-blur-md border border-[#E5D8C8]/30 text-[#FFFEFC] hover:bg-[#A17C6D] hover:border-[#A17C6D] transition-colors cursor-pointer"
              title={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Mép fade mờ mượt mà phía phải màn hình theo tone sáng */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 md:w-48 bg-gradient-to-l from-[#F5F0E9] to-transparent z-15" />
      </div>
    </section>
  );
};
