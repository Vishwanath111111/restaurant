"use client";

import React, { useEffect, useState } from "react";

export const RoyalLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2D080E] text-[#D4AF37] transition-opacity duration-700">
      <div className="relative flex flex-col items-center">
        {/* Animated Royal Mandla / Emblem */}
        <div className="w-24 h-24 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center animate-pulse-gold">
          <div className="w-16 h-16 border border-[#F3E5AB] flex items-center justify-center">
            <span className="font-royal text-2xl font-bold tracking-widest text-[#F3E5AB] -rotate-45">
              RM
            </span>
          </div>
        </div>

        <h1 className="font-royal text-3xl md:text-4xl mt-8 tracking-widest text-[#F3E5AB]">
          RASOI MAHAL
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/80 mt-2 font-sans">
          The Royal Taste of India
        </p>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6 animate-pulse" />
      </div>
    </div>
  );
};
