import React, { useState } from 'react';

/**
 * LazyImage Component
 * - Tự động tải lazy (loading="lazy", decoding="async")
 * - Hiển thị placeholder màu be sang trọng (shimmer) trước khi ảnh tải xong
 * - Fade-in mượt mà khi ảnh xuất hiện trong tầm nhìn và tải xong
 */
export const LazyImage = ({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Lớp nền placeholder chuyển động mờ nhẹ (Shimmer) khi đang tải */}
      <div
        className={`absolute inset-0 bg-[#E5D8C8]/30 transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
