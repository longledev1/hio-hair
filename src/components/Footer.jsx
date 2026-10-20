import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#241D1A] text-[#E5D8C8] pt-24 pb-12 border-t border-[#302724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Grid: Logo & Main Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#302724]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="h-12 mb-6">
              <img
                src="/logo.png"
                alt="HIO Hair Studio"
                className="h-full w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-[#84746A] text-sm font-light leading-relaxed max-w-sm mb-6">
              A bespoke hair sanctuary dedicated to architectural cutting, couture color dimension, and restorative scalp therapy in Ho Chi Minh City.
            </p>
            <div className="flex items-center space-x-5">
              {BRAND.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-[#A17C6D] hover:text-[#E5D8C8] transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Map Col */}
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A17C6D] font-medium block mb-4">
              Studio Location
            </span>
            <div className="flex items-start gap-3 text-sm font-light text-[#E5D8C8]/90 mb-4">
              <MapPin className="w-4 h-4 text-[#A17C6D] shrink-0 mt-0.5" />
              <div>
                <p>{BRAND.address.street}</p>
                <p>{BRAND.address.city}, {BRAND.address.country}</p>
              </div>
            </div>

            {/* Stylized Minimal Map Card */}
            <div className="mt-4 p-4 border border-[#3A2F2B] bg-[#1C1614] rounded-sm flex items-center justify-between">
              <div>
                <span className="text-xs text-[#E5D8C8] font-serif block">District 1 Atelier</span>
                <span className="text-[10px] text-[#84746A] uppercase tracking-wider">Ben Thanh, District 1</span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BRAND.address.street + ', ' + BRAND.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A17C6D] hover:text-[#E5D8C8] inline-flex items-center gap-1 uppercase tracking-wider"
              >
                Maps <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Atelier Hours & Concierge */}
          <div className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A17C6D] font-medium block mb-4">
              Opening Hours & Concierge
            </span>
            <ul className="space-y-3 text-xs font-light text-[#84746A] mb-6">
              {BRAND.hours.map((schedule, i) => (
                <li key={i} className="flex justify-between border-b border-[#302724] pb-2">
                  <span className="text-[#E5D8C8]">{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-xs font-light text-[#84746A]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A17C6D]" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-[#E5D8C8] transition-colors">{BRAND.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A17C6D]" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#E5D8C8] transition-colors">{BRAND.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#84746A] font-light">
          <p>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#E5D8C8] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E5D8C8] transition-colors">Etiquette & Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-[#E5D8C8] transition-colors">Booking Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
