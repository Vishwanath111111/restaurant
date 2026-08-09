import React from "react";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { JaaliPattern } from "@/components/ui/JaaliPattern";
import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Reserve a Royal Table | RASOI MAHAL Fine Dining",
  description: "Book your dining table or Maharaja Private Suite at RASOI MAHAL. Instant booking confirmation."
};

export default function ReservationPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Palace Hospitality
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Table & Suite Reservation
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Book your royal table in advance. For large banquets or Maharaja Suites, our Concierge will confirm your seating preferences.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Reservation Form Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ReservationForm />
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="royal-card-dark rounded-3xl p-6 border border-[#D4AF37]/30 space-y-4">
            <h3 className="font-royal text-lg font-bold text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-2">
              Concierge Direct Desk
            </h3>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Lunch: 12 PM - 3:30 PM | Dinner: 7 PM - 11:30 PM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Heritage Palace Road, Civil Lines, Jaipur</span>
              </div>
            </div>
          </div>

          <div className="royal-card-dark rounded-3xl p-6 border border-[#D4AF37]/30 space-y-3 text-xs text-gray-300">
            <div className="flex items-center gap-2 text-[#D4AF37] font-bold">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              Reservation Policy
            </div>
            <p>
              • Tables are held for up to 20 minutes past reservation time.
            </p>
            <p>
              • Smart casual or traditional Indian ethnic dress code requested.
            </p>
            <p>
              • Dedicated Jain & Sattvik preparation honored upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
