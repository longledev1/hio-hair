import React from "react";
import { STUDIO_FEATURES, STYLISTS } from "../data/content";
import { LazyImage } from "./LazyImage";

export const Studio = () => {
  return (
    <section
      id="studio"
      className="py-16 sm:py-24 md:py-36 bg-[#FFFEFC] border-t border-[#E5D8C8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Atmosphere Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-24 md:mb-28">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-3 sm:mb-4">
              The Architecture & Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#302724] font-normal tracking-tight mb-4 sm:mb-6 leading-tight">
              A Space Built for Stillness.
            </h2>
            <p className="text-[#84746A] text-sm md:text-base font-light leading-relaxed mb-6 sm:mb-8">
              We conceived our studio not as a bustling salon, but as a calming
              architectural pavilion. Warm lime-wash plaster, tactile linen
              drapery, and curated ambient acoustics shield you from city
              clamor.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {STUDIO_FEATURES.map((feature, i) => (
                <div key={i} className="border-l-2 border-[#A17C6D]/40 pl-3.5 sm:pl-4">
                  <h4 className="font-serif text-lg sm:text-xl text-[#302724] mb-0.5 sm:mb-1 font-medium">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#84746A] font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="aspect-[3/4] overflow-hidden border border-[#E5D8C8] bg-[#F5F0E9] shadow-xs">
                <LazyImage
                  src="/phil_1.png"
                  alt="Hio Studio Interior Wash Suite"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-3 sm:p-4 bg-[#F5F0E9] border border-[#E5D8C8] text-center">
                <span className="font-serif italic text-xs sm:text-sm md:text-base text-[#302724] leading-snug block">
                  "Private, acoustically dampened wash suites."
                </span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 pt-4 sm:pt-8 md:pt-12">
              <div className="p-3 sm:p-4 bg-[#F5F0E9] border border-[#E5D8C8] text-center">
                <span className="font-serif italic text-xs sm:text-sm md:text-base text-[#302724] leading-snug block">
                  "Minimalist workstations with daylight spectrum illumination."
                </span>
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-[#E5D8C8] bg-[#F5F0E9] shadow-xs">
                <LazyImage
                  src="/phil_3.jpg"
                  alt="Styling Station"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Master Stylists Section */}
        <div className="pt-12 sm:pt-16 border-t border-[#E5D8C8]">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A17C6D] font-medium block mb-2.5 sm:mb-3">
              The Collective
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#302724] font-normal">
              Master Craftsmen
            </h3>
            <p className="mt-2.5 sm:mt-3 text-[#84746A] text-xs sm:text-sm font-light">
              Each stylist operates as an individual artist, dedicated
              exclusively to one guest at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {STYLISTS.map((stylist, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4 sm:mb-6 border border-[#E5D8C8] bg-[#E5D8C8]/20 shadow-xs">
                  <LazyImage
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                    containerClassName="w-full h-full"
                  />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#302724]">
                  {stylist.name}
                </h4>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#A17C6D] font-medium mt-1 mb-1.5 sm:mb-2">
                  {stylist.role}
                </p>
                <p className="text-xs text-[#84746A] font-light leading-relaxed">
                  {stylist.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
