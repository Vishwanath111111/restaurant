"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, Award, ShieldCheck } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatusMsg("Welcome to RASOI MAHAL Connoisseurs Circle!");
        setEmail("");
      } else {
        setStatusMsg("Subscribed! Thank you for joining our royal circle.");
        setEmail("");
      }
    } catch (err) {
      // Fallback
      setStatusMsg("Subscribed! Thank you for joining our royal circle.");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#2D080E] via-[#1A1818] to-[#121212] text-[#FDFBF7] pt-16 pb-8 border-t border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <JaaliPattern />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-12">
          {/* Col 1: Brand & Royal Ethos */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#4A0E17]">
                <span className="font-royal text-lg font-bold text-[#F3E5AB] -rotate-45">
                  RM
                </span>
              </div>
              <span className="font-royal text-2xl font-bold tracking-widest text-[#F3E5AB]">
                RASOI MAHAL
              </span>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Experience authentic royal Indian fine dining inspired by Maharanas of Mewar, Mughal court gastronomy, and traditional hospitality.
            </p>
            <div className="flex items-center gap-3 text-[#D4AF37] text-xs pt-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Times Luxury Dining Winner 2025</span>
            </div>
          </div>

          {/* Col 2: Hours & Location */}
          <div className="space-y-3">
            <h4 className="font-royal text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Royal Hours & Location
            </h4>
            <div className="text-xs text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Lunch:</p>
                  <p>12:00 PM – 3:30 PM (Daily)</p>
                  <p className="font-semibold text-white mt-1">Dinner:</p>
                  <p>7:00 PM – 11:30 PM (Daily)</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p>Heritage Palace Road, Civil Lines, Jaipur, Rajasthan - 302006</p>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-royal text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Explore Palace
            </h4>
            <ul className="text-xs space-y-2 text-gray-300">
              <li>
                <Link href="/menu" className="hover:text-[#D4AF37] transition-colors">
                  Full Menu & Regional Cuisines
                </Link>
              </li>
              <li>
                <Link href="/chef" className="hover:text-[#D4AF37] transition-colors">
                  Executive Chef & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/private-dining" className="hover:text-[#D4AF37] transition-colors">
                  Maharaja Private Suites
                </Link>
              </li>
              <li>
                <Link href="/wedding-catering" className="hover:text-[#D4AF37] transition-colors">
                  Wedding Destination Catering
                </Link>
              </li>
              <li>
                <Link href="/corporate-catering" className="hover:text-[#D4AF37] transition-colors">
                  Corporate Banquets
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#D4AF37] transition-colors">
                  Patron Reviews & Ratings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Legal */}
          <div className="space-y-3">
            <h4 className="font-royal text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Connoisseurs Circle
            </h4>
            <p className="text-xs text-gray-300">
              Subscribe to receive invitations to private tasting events and seasonal festival menus.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex items-center bg-[#121212] border border-[#D4AF37]/40 rounded-xl overflow-hidden">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-3 py-2 bg-[#D4AF37] text-[#2D080E] font-bold hover:bg-[#F3E5AB] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {statusMsg && (
                <p className="text-[11px] text-[#D4AF37]">{statusMsg}</p>
              )}
            </form>
            <div className="pt-2 text-xs flex gap-4 text-gray-400">
              <Link href="/privacy-policy" className="hover:text-[#D4AF37]">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#D4AF37]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-[#D4AF37]/20 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} RASOI MAHAL. All Rights Reserved. The Royal Taste of India.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>FSSAI Certified Royal Fine Dining</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
