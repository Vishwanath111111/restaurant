import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Calendar, PhoneCall } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Maharaja Private Dining Suites | RASOI MAHAL",
  description: "Experience exclusive luxury private dining in our Maharaja Jharokha suites featuring personal butler service, live classical Sitar, and custom 7-course royal flights."
};

export default function PrivateDiningPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Opulent Seclusion
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Maharaja Private Dining Suites
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Designed for intimate anniversary celebrations, royal family gatherings, and high-level diplomatic banquets.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Suite Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-royal text-3xl font-bold text-[#2D080E]">
              Private Jharokha Suites with Personal Butler Service
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              Step into an enclave of unhindered luxury. Our Maharaja Private Suites feature hand-carved Rajasthani filigree screens (*jaalis*), velvet seating, gold-embossed personalized menu cards, and dedicated uniformed butler service.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    7-Course Royal Tasting Flight
                  </h4>
                  <p className="text-xs text-gray-600">
                    Hand-crafted menu curated directly by Executive Chef Rathore.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Acoustic Live Sitar Performance
                  </h4>
                  <p className="text-xs text-gray-600">
                    Private classical musicians dedicated to your suite upon request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Custom Floral & Candlelight Ambience
                  </h4>
                  <p className="text-xs text-gray-600">
                    Fresh marigold, mogra, and rose petal styling with silver lamps.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest text-center shadow-xl"
              >
                Reserve Maharaja Suite
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
              alt="Maharaja Private Dining Suite"
              className="w-full h-[450px] object-cover rounded-3xl border border-[#D4AF37]/50 shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
