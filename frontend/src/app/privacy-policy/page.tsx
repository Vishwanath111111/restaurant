import React from "react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

export const metadata = {
  title: "Privacy Policy | RASOI MAHAL",
  description: "Privacy Policy for RASOI MAHAL fine dining restaurant."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8 font-sans text-xs sm:text-sm text-gray-800">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          Legal & Compliance
        </span>
        <h1 className="font-royal text-3xl font-bold text-[#2D080E]">
          Privacy Policy
        </h1>
        <JaaliPattern />
      </div>

      <div className="royal-card rounded-2xl p-6 sm:p-8 space-y-4 leading-relaxed">
        <p>
          At <strong>RASOI MAHAL</strong>, protecting the privacy of our patrons and online visitors is paramount. This Privacy Policy outlines how we collect, store, and utilize your personal information.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">1. Information Collection</h3>
        <p>
          We collect personal details (Name, Email, Phone Number, Dining Preferences) strictly when you submit a Table Reservation, Contact Form, or Newsletter Subscription.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">2. Use of Information</h3>
        <p>
          Your information is used solely for confirming table bookings, tailoring dietary requests, providing corporate invoicing, and sending optional promotional hampers or festival menu announcements.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">3. Data Security</h3>
        <p>
          We employ industry-standard encryption protocols. We NEVER sell or disclose patron data to third-party advertisers.
        </p>

        <h3 className="font-royal text-lg font-bold text-[#4A0E17]">4. Contact</h3>
        <p>
          For privacy inquiries, contact our Legal Desk at <code>privacy@rasoimahal.com</code>.
        </p>
      </div>
    </div>
  );
}
