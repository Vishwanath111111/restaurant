import React from "react";
import Link from "next/link";
import { Star, Award } from "lucide-react";
import { testimonialsData } from "@/data/testimonials-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Patron Reviews & Ratings | RASOI MAHAL",
  description: "Read reviews and ratings from critics, VIP patrons, Google Reviews, and Zomato Gold users."
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Patron Acclaim
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Testimonials & Reviews
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Discover why food critics, families, industrial leaders, and international travelers choose RASOI MAHAL.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-around gap-6">
          <div>
            <span className="font-royal text-5xl font-bold text-[#D4AF37]">4.9</span>
            <div className="flex justify-center gap-1 text-[#D4AF37] my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-300">Google Verified Rating (1,280+ Reviews)</p>
          </div>

          <div className="w-px h-16 bg-[#D4AF37]/30 hidden md:block" />

          <div>
            <Award className="w-10 h-10 text-[#D4AF37] mx-auto mb-2" />
            <h4 className="font-royal text-base font-bold text-[#F3E5AB]">
              Times Luxury Dining Award 2025
            </h4>
            <p className="text-xs text-gray-400">Best Indian Heritage Culinary Excellence</p>
          </div>
        </div>
      </section>

      {/* Grid of Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-4 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div>
                  <h3 className="font-royal text-lg font-bold text-[#F3E5AB]">
                    {t.author}
                  </h3>
                  <p className="text-xs text-[#D4AF37]">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 text-[#D4AF37]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed font-serif">
                "{t.comment}"
              </p>

              <div className="pt-4 border-t border-[#D4AF37]/20 flex justify-between items-center text-xs text-gray-400">
                <span>Verified {t.source}</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <Link
          href="/reservation"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
        >
          Experience Royal Dining Firsthand
        </Link>
      </section>
    </div>
  );
}
