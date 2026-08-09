import React from "react";
import Link from "next/link";
import { UtensilsCrossed, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 bg-[#1A1818] text-[#FDFBF7] space-y-6 my-8">
      <div className="w-20 h-20 rounded-full bg-[#4A0E17] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
        <UtensilsCrossed className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
          Error 404 - Page Not Found
        </span>
        <h1 className="font-royal text-4xl sm:text-5xl font-bold text-[#F3E5AB]">
          Lost in Palace Courtyard?
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-sans">
          The royal dish or page you are seeking has strayed from our palace menu. Allow our Royal Concierge to guide you back to fine dining.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="/"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest hover:brightness-110"
        >
          Return to Royal Home
        </Link>
        <Link
          href="/menu"
          className="px-8 py-3.5 rounded-full bg-[#4A0E17] text-[#F3E5AB] border border-[#D4AF37]/50 font-royal font-bold text-xs uppercase tracking-widest hover:bg-[#6B111D]"
        >
          Explore Royal Menu
        </Link>
      </div>
    </div>
  );
}
