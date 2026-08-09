import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Corporate Catering & Executive Banquets | RASOI MAHAL",
  description: "Seamless corporate catering, executive boardroom lunches, annual galas, and GST invoicing."
};

export default function CorporateCateringPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Executive Hospitality
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Corporate Catering & Executive Banquets
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Elevate your boardroom lunches, VIP client dinners, and corporate galas with refined Indian fine dining.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-royal text-3xl font-bold text-[#2D080E]">
              Tailored Corporate Dining with Full Invoicing & GST Support
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              We understand the speed and precision required for corporate hospitality. Our corporate catering team delivers custom fixed-course menus, high-speed Wi-Fi dining suites, and dedicated account management.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Executive Thali & Bento Lunches
                  </h4>
                  <p className="text-xs text-gray-600">
                    Individual hot brass-style bento boxes delivered straight to office boardrooms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Annual Corporate Gala Buffets
                  </h4>
                  <p className="text-xs text-gray-600">
                    Multi-station spreads with live kebabs, biryanis, and mocktail mixology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-royal font-bold text-sm text-[#2D080E]">
                    Full Corporate GST Invoicing
                  </h4>
                  <p className="text-xs text-gray-600">
                    Complimentary credit terms for empaneled corporate accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl"
              >
                Inquire Corporate Account
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate Dining Setup"
              className="w-full h-[450px] object-cover rounded-3xl border border-[#D4AF37]/50 shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
