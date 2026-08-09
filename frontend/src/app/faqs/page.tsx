"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/data/faqs-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

const categories = ["All", "General", "Reservations", "Dietary & Jain", "Events & Catering", "Dress Code & Ambience"] as const;

export default function FaqsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>("faq-01");
  const [query, setQuery] = useState("");

  const filtered = faqsData.filter((item) => {
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    const matchesQuery =
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      item.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Common Inquiries
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Frequently Asked Questions
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Everything you need to know about table reservations, Jain dietary options, valet parking, and catering.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Search & Categories */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. Jain, Parking, Dress code)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#1A1818] border border-[#D4AF37]/30 rounded-2xl pl-12 pr-4 py-3 text-xs md:text-sm text-[#FFFDF6] placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-royal uppercase tracking-wider font-bold transition-all ${
                selectedCat === cat
                  ? "bg-[#D4AF37] text-[#2D080E]"
                  : "bg-[#1A1818] text-[#F3E5AB] border border-[#D4AF37]/30 hover:bg-[#4A0E17]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="royal-card-dark rounded-2xl border border-[#D4AF37]/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-royal text-base font-bold text-[#F3E5AB] hover:text-[#D4AF37] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#D4AF37]/20 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
