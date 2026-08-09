import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Award, Calendar } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Royal Destination Wedding Catering | RASOI MAHAL",
  description: "Extravagant Indian wedding catering services with live tandoor counters, silver thalis, dedicated Jain counters, and sweet halwai displays."
};

export default function WeddingCateringPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Grand Indian Weddings
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Royal Wedding Destination Catering
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Transforming your wedding day into an unforgettable imperial feast with authentic silver thalis, live charcoal counters, and sweet halwai displays.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-royal text-3xl font-bold text-[#2D080E]">
              Palace Banquet Culinary Management for 200 to 2,500 Guests
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              Our dedicated wedding catering unit delivers full-scale culinary management across India. From Sangeet chaat live counters to Mehendi high-teas and grand wedding silver thali banquets, we take care of every detail.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Live Charcoal Mangal & Tandoor Counters
                  </h4>
                  <p className="text-xs text-gray-600">
                    Freshly skewered kebabs, naan breads, and roasted tikka counters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Dedicated Jain & Sattvik Live Counter
                  </h4>
                  <p className="text-xs text-gray-600">
                    Strict zero onion-garlic preparation pipelines for family guests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Artisanal Halwai & Dessert Pavilion
                  </h4>
                  <p className="text-xs text-gray-600">
                    Hot jalebis, kulfi falooda, rabri jalebi, and live imarti displays.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
              >
                Request Wedding Tasting & Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              alt="Royal Wedding Catering Setup"
              className="w-full h-[450px] object-cover rounded-3xl border border-[#D4AF37]/50 shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
