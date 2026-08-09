import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Users, Music } from "lucide-react";
import { eventsData } from "@/data/events-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Events & Royal Celebrations | RASOI MAHAL",
  description: "Host birthdays, anniversaries, corporate banquets, and live music nights at RASOI MAHAL."
};

export default function EventsPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Palace Celebrations
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Royal Events & Celebrations
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            From intimate anniversary dinners to live classical sitar evenings and grand milestone celebrations.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.map((evt) => (
            <div
              key={evt.id}
              className="royal-card-dark rounded-3xl overflow-hidden border border-[#D4AF37]/30 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#4A0E17] text-[#F3E5AB] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]">
                  {evt.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {evt.description}
                  </p>
                  <p className="text-xs font-semibold text-[#D4AF37]">
                    Capacity: {evt.capacity}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
                  <h4 className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                    {evt.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F3E5AB]">
                    {evt.priceRange}
                  </span>
                  <Link
                    href="/reservation"
                    className="px-4 py-2 rounded-full bg-[#D4AF37] text-[#2D080E] font-bold text-xs uppercase tracking-wider"
                  >
                    Inquire Event
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
