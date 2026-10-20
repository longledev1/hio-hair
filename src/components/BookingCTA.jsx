import React from 'react';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';

export const BookingCTA = () => {
  return (
    <section className="py-28 md:py-36 bg-[#302724] text-[#F5F0E9] relative overflow-hidden">
      {/* Subtle Metallic/Bronze Ambient Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A17C6D]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#E5D8C8] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#A17C6D]" />
          <span>Private Appointments</span>
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-normal mb-8">
          Step into an Unhurried <br />
          <span className="italic font-light text-[#E5D8C8]">World of Beauty.</span>
        </h2>

        <p className="text-[#E5D8C8]/80 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
          Reservations are curated in advance to ensure full, dedicated immersion with your master stylist. We invite you to secure your private suite.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-[#E5D8C8] text-[#302724] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#FFFEFC] transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#A17C6D]" />
            <span>Book Your Reservation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto px-8 py-5 border border-[#E5D8C8]/30 text-[#E5D8C8] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#E5D8C8] transition-colors"
          >
            Concierge Call
          </a>
        </div>

        <p className="mt-8 text-xs text-[#84746A] tracking-wider uppercase font-light">
          Complimentary Consultation Included With Every Signature Ritual
        </p>
      </div>
    </section>
  );
};
