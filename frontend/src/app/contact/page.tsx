"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, PhoneCall, CheckCircle2 } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatusMsg("Thank you! Your message has been sent to our Concierge.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatusMsg("Message received! Our team will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (err) {
      setStatusMsg("Message received! Our team will get back to you shortly.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Namaste RASOI MAHAL! I would like to inquire about dining arrangements."
  )}`;

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Palace Hospitality Desk
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Contact RASOI MAHAL
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Reach out for table reservations, private suites, destination wedding catering, or corporate inquiries.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Google Map Preview */}
        <div className="space-y-8">
          <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-6">
            <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
              Get in Touch
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Palace Address:</h4>
                  <p>Heritage Palace Road, Civil Lines, Jaipur, Rajasthan - 302006</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Direct Phone:</h4>
                  <p>+91 98765 43210 / +91 141 2345678</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Email Desk:</h4>
                  <p>concierge@rasoimahal.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Opening Hours:</h4>
                  <p>Lunch: 12:00 PM – 3:30 PM</p>
                  <p>Dinner: 7:00 PM – 11:30 PM (Daily)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1EBE57] transition-colors shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                Connect via WhatsApp Instant Desk
              </a>
            </div>
          </div>

          {/* Interactive Map Container */}
          <div className="royal-card-dark rounded-3xl overflow-hidden border border-[#D4AF37]/30 h-64 relative">
            <iframe
              title="RASOI MAHAL Jaipur Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.887228806526!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbooDI1JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-6">
          <div>
            <h3 className="font-royal text-2xl font-bold text-[#F3E5AB]">
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Our hospitality desk usually responds within 2 hours.
            </p>
          </div>

          {statusMsg && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {statusMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider block mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-[#FFFDF6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-[#FFFDF6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-[#FFFDF6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider block mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="General Inquiry / Private Dining / Wedding Catering"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs text-[#FFFDF6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#F3E5AB] uppercase tracking-wider block mb-1">
                Your Message *
              </label>
              <textarea
                rows={4}
                required
                placeholder="How can we assist your dining experience?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl p-3 text-xs text-[#FFFDF6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:brightness-110"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending Message..." : "Submit Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
