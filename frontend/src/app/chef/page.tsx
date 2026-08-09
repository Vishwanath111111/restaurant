import React from "react";
import Link from "next/link";
import { Award, Sparkles, Utensils } from "lucide-react";
import { chefsData } from "@/data/chefs-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Executive Chef & Master Culinary Team | RASOI MAHAL",
  description: "Meet Executive Culinary Director Master Chef Vikramaditya Singh Rathore and our team of heritage Indian halwai and tandoor masters."
};

export default function ChefPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Masters of Spice & Ember
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Our Executive Culinary Team
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Meet the master artisans who preserve centuries-old royal Indian recipes and culinary craftsmanship.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Master Chef Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {chefsData.map((chef, idx) => (
          <div
            key={chef.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative">
              <div className="royal-card-dark rounded-3xl p-2 border border-[#D4AF37]/40 shadow-2xl overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-widest">
                  {chef.experience}
                </span>
                <h2 className="font-royal text-3xl font-bold text-[#2D080E] mt-1">
                  {chef.name}
                </h2>
                <p className="text-xs font-serif text-[#6B111D] font-bold mt-1">
                  {chef.title}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                {chef.bio}
              </p>

              {/* Cooking Philosophy */}
              <div className="bg-[#1A1818] text-[#FDFBF7] p-5 rounded-2xl border border-[#D4AF37]/30 space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cooking Philosophy
                </span>
                <p className="text-xs italic text-gray-200 font-serif leading-relaxed">
                  "{chef.cookingPhilosophy}"
                </p>
              </div>

              {/* Awards & Signatures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <h4 className="font-royal font-bold text-[#2D080E] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    Awards & Honors
                  </h4>
                  <ul className="space-y-1 text-gray-600 list-disc list-inside">
                    {chef.awards.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-royal font-bold text-[#2D080E] uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-[#D4AF37]" />
                    Signature Creations
                  </h4>
                  <ul className="space-y-1 text-gray-600 list-disc list-inside">
                    {chef.signatureDishes.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <Link
          href="/reservation"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
        >
          Reserve a Chef's Table
        </Link>
      </section>
    </div>
  );
}
