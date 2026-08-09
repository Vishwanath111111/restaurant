import React from "react";
import Link from "next/link";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Our Story | RASOI MAHAL | 3rd Generation Royal Heritage",
  description: "Discover the 3-generation culinary journey of Chef Vikramaditya Singh Rathore and the royal lineage of RASOI MAHAL."
};

export default function OurStoryPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Chronicles of Taste
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Our Royal Story
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            From the royal kitchens of Udaipur and Old Delhi to an award-winning fine dining destination.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Timeline Narrative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Step 1 */}
        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
            1950s - Royal Court Beginnings
          </span>
          <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
            The Heritage of Master Chef Rathore's Grandfather
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
            Our story begins in the royal palaces of Mewar, Udaipur. The late Master Chef Thakur Raghuvir Singh Rathore served as head khansama for the Maharanas, developing secret formulas for spice roasting and game meat curing that were written in palm-leaf ledgers.
          </p>
        </div>

        {/* Step 2 */}
        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
            1998 - Establishment of RASOI MAHAL
          </span>
          <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
            Bringing Royal Dining to Modern Connoisseurs
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
            In 1998, Executive Chef Vikramaditya Singh Rathore opened the doors of RASOI MAHAL in Civil Lines, Jaipur. Combining ancestral family recipes with state-of-the-art hygienic kitchens and luxury palace interiors, the restaurant quickly became the benchmark for authentic Indian fine dining.
          </p>
        </div>

        {/* Step 3 */}
        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-3">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
            Present Day - Global Recognition
          </span>
          <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
            Award-Winning Indian Gastronomy
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
            Today, RASOI MAHAL welcomes dignitaries, celebrities, families, and food lovers from around the globe. Our commitment to 100% authentic Indian identity, zero compromise on ingredients, and warm cultural hospitality remains unchanged.
          </p>
        </div>

        <div className="text-center pt-6">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
          >
            Taste the Legacy on Our Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
