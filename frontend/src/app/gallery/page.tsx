"use client";

import React, { useState } from "react";
import { galleryItems } from "@/data/gallery-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

const categories = ["All", "Food", "Interior", "Chefs", "Decor", "Weddings", "Private Dining"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Visual Splendor
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Palace Gallery
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Glimpse into the opulent interiors, artisanal food presentation, and royal celebrations at RASOI MAHAL.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-royal uppercase tracking-wider font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-[#2D080E] shadow-md"
                  : "bg-[#1A1818] text-[#F3E5AB] border border-[#D4AF37]/30 hover:bg-[#4A0E17]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="royal-card-dark rounded-2xl overflow-hidden group border border-[#D4AF37]/30 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#2D080E]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#4A0E17]/90 text-[#F3E5AB] text-[10px] font-bold px-2 py-0.5 rounded border border-[#D4AF37]/50">
                  {item.category}
                </span>
              </div>
              <div className="p-4 bg-[#1A1818]">
                <h4 className="font-royal text-sm font-bold text-[#F3E5AB]">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
