import React from "react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Terms of Service | RASOI MAHAL",
  description: "Terms and Conditions for dining and catering services at RASOI MAHAL."
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8 font-sans text-xs sm:text-sm text-gray-800">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Terms & Conditions
        </span>
        <h1 className="font-royal text-3xl font-bold text-[#2D080E]">
          Terms of Service
        </h1>
        <JaaliPattern />
      </div>

      <div className="royal-card rounded-2xl p-6 sm:p-8 space-y-4 leading-relaxed">
        <p>
          Welcome to <strong>RASOI MAHAL</strong>. By accessing our website, reserving tables, or booking catering packages, you agree to comply with these Terms of Service.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">1. Reservations & Grace Period</h3>
        <p>
          Table reservations are held for up to 20 minutes past the scheduled arrival time. If running late, please notify our Concierge Desk (+91 98765 43210).
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">2. Dress Code & Atmosphere</h3>
        <p>
          To maintain an elegant royal fine-dining environment for all patrons, Smart Casual or Indian Ethnic attire is requested.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">3. Catering Deposits & Cancellations</h3>
        <p>
          For Wedding and Corporate catering bookings, a advance deposit is required to lock dates. Cancellations made 14 days prior to the event are eligible for partial refund as per contractual terms.
        </p>
      </div>
    </div>
  );
}
