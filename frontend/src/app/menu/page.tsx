import React from "react";
import { MenuFilter } from "@/components/menu/MenuFilter";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Royal Menu | RASOI MAHAL | Authentic Multi-Cuisine Indian Dishes",
  description: "Explore our authentic Indian menu featuring North Indian, South Indian, Punjabi, Maharashtrian, Gujarati, Rajasthani, Hyderabadi Biryanis, Tandoori Kebabs, Desserts, and Pure Jain delicacies."
};

export default function MenuPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            The Imperial Gastronomy
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Royal Indian Menu
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Every dish is cooked fresh in pure desi ghee, organic whole spices, and slow charcoal embers. Use the filters below to browse categories, Jain options, and spice levels.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Filter & Dishes Grid Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuFilter />
      </section>
    </div>
  );
}
