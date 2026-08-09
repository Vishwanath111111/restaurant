import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Heart, Sparkles, Utensils } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "About Us | RASOI MAHAL | Royal Heritage Indian Dining",
  description: "Learn about RASOI MAHAL's 28-year culinary lineage, royal Rajasthani and Mughal court architecture, and authentic Indian hospitality."
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Royal Heritage & Ethos
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            About RASOI MAHAL
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Preserving the sacred recipes and architectural grandeur of India's historic royal courts for over 28 years.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-royal text-3xl font-bold text-[#2D080E]">
              Inspired by Royal Rajasthan & Mughal Gastronomy
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              Founded with a singular mission to celebrate authentic Indian identity, RASOI MAHAL transports guests back to the opulent banquets of Maharanas and Nawabs. From hand-chiseled Jharokha archways to golden chandeliers and carved teakwood tables, every element of our interior reflects true cultural craftsmanship.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              Our master culinary team preserves ancient dum-cooking techniques, grinding whole organic spices daily in traditional stone mortar pestles (*sil-batta*) and cooking in unglazed clay handis over acacia wood charcoal.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
              alt="Palace Interior Architecture"
              className="w-full h-80 object-cover rounded-3xl border border-[#D4AF37]/50 shadow-2xl"
            />
          </div>
        </div>

        {/* 4 Pillars of Royal Hospitality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="royal-card-dark rounded-2xl p-6 text-center space-y-3">
            <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="font-royal text-lg font-bold text-[#F3E5AB]">
              Uncompromising Quality
            </h3>
            <p className="text-xs text-gray-300">
              Only Mathania chillies, Kashmiri saffron, and pure A2 cow ghee used.
            </p>
          </div>

          <div className="royal-card-dark rounded-2xl p-6 text-center space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="font-royal text-lg font-bold text-[#F3E5AB]">
              Strict Jain & Sattvik Care
            </h3>
            <p className="text-xs text-gray-300">
              Dedicated cookware and zero onion-garlic preparation pipelines.
            </p>
          </div>

          <div className="royal-card-dark rounded-2xl p-6 text-center space-y-3">
            <Heart className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="font-royal text-lg font-bold text-[#F3E5AB]">
              Atithi Devo Bhava
            </h3>
            <p className="text-xs text-gray-300">
              Guest is God. Uniformed butler service and warm cultural attention.
            </p>
          </div>

          <div className="royal-card-dark rounded-2xl p-6 text-center space-y-3">
            <Utensils className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <h3 className="font-royal text-lg font-bold text-[#F3E5AB]">
              18-Hour Charcoal Dum
            </h3>
            <p className="text-xs text-gray-300">
              Slow charcoal simmering that seals essential oils and natural flavors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <Link
          href="/reservation"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
        >
          Book Your Table at Palace
        </Link>
      </section>
    </div>
  );
}
