import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage Component
 * - Đảm bảo ảnh luôn load tin cậy trên cả mobile và desktop
 * - Tự động phát hiện ảnh cached (img.complete) để không bị kẹt opacity: 0
 * - Hiển thị placeholder màu be sang trọng (shimmer) trước khi ảnh tải xong
 */
export const LazyImage = ({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Nếu ảnh đã có sẵn trong cache trình duyệt, img.complete = true ngay lập tức
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Lớp nền placeholder khi đang tải */}
      <div
        className={`absolute inset-0 bg-[#E5D8C8]/30 transition-opacity duration-500 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // Đảm bảo không bị kẹt trắng nếu có lỗi
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
