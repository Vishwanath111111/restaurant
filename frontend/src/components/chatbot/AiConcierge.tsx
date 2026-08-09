"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, X, Send, Sparkles, PhoneCall } from "lucide-react";
import { ChatMessage } from "@/types";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";

const initialTopics = [
  "Reserve Table",
  "Today's Special",
  "Chef Recommendation",
  "Jain Menu",
  "Vegetarian Menu",
  "Wedding Catering",
  "Corporate Catering",
  "Private Dining",
  "Birthday Celebration",
  "Festival Menu",
  "Opening Hours",
  "Location",
  "Parking",
  "Wine / Beverage Pairing",
  "Family Dining",
  "Bulk Orders"
];

const knowledgeBase: Record<string, { reply: string; link?: string; whatsapp?: boolean }> = {
  "Reserve Table": {
    reply: "Greetings! I would be delighted to assist you with booking a table at RASOI MAHAL. You can select your date, time, and guest count directly on our Reservation portal, or connect instantly with our Royal Butler team on WhatsApp.",
    link: "/reservation",
    whatsapp: true
  },
  "Today's Special": {
    reply: "Today our Executive Chef recommends the 'Royal Murgh Musallam' coated in almond-saffron velvet gravy with 24K gold leaf, accompanied by slow-simmered 18-Hour Dal Makhani.",
    link: "/menu?category=Chef's+Signature"
  },
  "Chef Recommendation": {
    reply: "Chef Vikramaditya Singh Rathore highly recommends starting with Bhatti Da Paneer Tikka, followed by Rajasthani Shahi Laal Maas with Bajra Roti, and finishing with Warm Shahi Gulab Jamun over Rabri.",
    link: "/chef"
  },
  "Jain Menu": {
    reply: "We take immense pride in our Jain culinary tradition! We maintain dedicated sattvik cookware. Our Maharani Paneer Lababdar, Dum Biryani, and Malai Kofta are crafted without onion, garlic, or root vegetables.",
    link: "/menu?category=Jain+Menu"
  },
  "Vegetarian Menu": {
    reply: "Over 60% of our royal menu is purely vegetarian, featuring Palak Paneer, Amritsari Chole, Sarson Ka Saag, and rich paneer specialties prepared in pure desi ghee.",
    link: "/menu?category=Vegetarian"
  },
  "Wedding Catering": {
    reply: "We offer end-to-end Royal Destination Wedding Catering for 200 to 2,500 guests across India. Featuring live tandoor stations, silver thali service, and custom sweet displays.",
    link: "/wedding-catering",
    whatsapp: true
  },
  "Corporate Catering": {
    reply: "Impress your corporate clients with executive boardroom lunches and annual galas. We provide GST invoicing, high-speed Wi-Fi dining suites, and tailored multi-course meals.",
    link: "/corporate-catering",
    whatsapp: true
  },
  "Private Dining": {
    reply: "Experience the Maharaja Private Dining Suite featuring hand-carved Rajasthani Jharokhas, private butler service, live sitar music, and a 7-course royal tasting flight.",
    link: "/private-dining",
    whatsapp: true
  },
  "Birthday Celebration": {
    reply: "Celebrate your milestone birthday with complimentary royal table decoration, bespoke dessert platters, and personalized seating arrangements for family and friends.",
    link: "/events",
    whatsapp: true
  },
  "Festival Menu": {
    reply: "During major Indian festivals (Diwali, Holi, Navratri, Eid), we serve special thali banquets and sweet hampers curated with heritage traditional recipes.",
    link: "/menu?category=Festival+Specials"
  },
  "Opening Hours": {
    reply: "RASOI MAHAL opens daily:\n- Lunch: 12:00 PM – 3:30 PM\n- Dinner: 7:00 PM – 11:30 PM\n- Live Classical Music: Friday to Sunday (8:00 PM onwards)."
  },
  "Location": {
    reply: "We are located at Heritage Palace Road, Civil Lines, Jaipur, Rajasthan - 302006. Valet parking is available at the main gate.",
    link: "/contact"
  },
  "Parking": {
    reply: "Complimentary Royal Valet Parking is provided for all dining guests at our main entrance court."
  },
  "Wine / Beverage Pairing": {
    reply: "Our Sommelier recommends pairing spicy kebabs with crisp citrus mocktails or peaty single malts, and creamy kormas with Alphonso Mango Lassi or floral Riesling.",
    link: "/blog/wine-and-beverage-pairings-for-indian-spices"
  },
  "Family Dining": {
    reply: "We welcome families! We offer spacious circular family booths, kid-friendly mild curries, and high chairs upon request.",
    link: "/about"
  },
  "Bulk Orders": {
    reply: "For home banquets or bulk office party orders (15+ people), we offer curated party boxes and live handi delivery with burner stands.",
    link: "/contact",
    whatsapp: true
  }
};

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "Namaste! 🙏 Welcome to RASOI MAHAL. I am your Royal Concierge Assistant. How may I assist your dining experience today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSelectTopic = (topic: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // User message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: topic,
      timestamp: time
    };

    const kb = knowledgeBase[topic] || {
      reply: `Thank you for asking about "${topic}". Our Royal Concierge is ready to help you directly on WhatsApp or phone.`,
      whatsapp: true
    };

    const botMsg: ChatMessage = {
      id: `b-${Date.now() + 1}`,
      sender: "bot",
      text: kb.reply,
      timestamp: time,
      deepLink: kb.link,
      whatsappHandoff: kb.whatsapp
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const query = inputQuery.trim();
    setInputQuery("");

    // Find closest keyword match
    const matchedKey = Object.keys(knowledgeBase).find((key) =>
      query.toLowerCase().includes(key.toLowerCase())
    );

    if (matchedKey) {
      handleSelectTopic(matchedKey);
    } else {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const userMsg: ChatMessage = {
        id: `u-${Date.now()}`,
        sender: "user",
        text: query,
        timestamp: time
      };
      const botMsg: ChatMessage = {
        id: `b-${Date.now() + 1}`,
        sender: "bot",
        text: "Thank you for reaching out! For detailed custom arrangements, menu modifications, or special event bookings, please speak with our Royal Manager directly on WhatsApp.",
        timestamp: time,
        whatsappHandoff: true
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Namaste RASOI MAHAL! I would like to inquire about dining & reservation arrangements."
  )}`;

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Concierge Chat"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#4A0E17] to-[#6B111D] text-[#F3E5AB] border border-[#D4AF37]/50 shadow-2xl hover:scale-105 transition-all duration-300 group"
      >
        <div className="relative">
          <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF9933] rounded-full animate-ping" />
        </div>
        <span className="font-royal text-sm font-semibold tracking-wider">
          Mahal Concierge
        </span>
      </button>

      {/* Chatbot Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[600px] h-[80vh] flex flex-col bg-[#1A1818] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#4A0E17] via-[#2D080E] to-[#4A0E17] border-b border-[#D4AF37]/30 text-[#F3E5AB]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#4A0E17]">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-royal text-base font-bold tracking-wide">
                  Mahal Concierge
                </h3>
                <p className="text-[10px] text-[#D4AF37]/80 uppercase tracking-widest">
                  Royal Dining Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#D4AF37] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-sans bg-[#121212]/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#6B111D] text-[#FFFDF6] border border-[#D4AF37]/30 rounded-br-none"
                      : "bg-[#221F1F] text-[#FDFBF7] border border-[#D4AF37]/20 rounded-bl-none shadow-md"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Deep link button if available */}
                  {msg.deepLink && (
                    <div className="mt-3">
                      <Link
                        href={msg.deepLink}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#2D080E] font-semibold text-xs hover:bg-[#F3E5AB] transition-colors"
                      >
                        Explore Page →
                      </Link>
                    </div>
                  )}

                  {/* WhatsApp handoff button */}
                  {msg.whatsappHandoff && (
                    <div className="mt-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-medium text-xs hover:bg-[#1EBE57] transition-colors shadow-md"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        Continue on WhatsApp
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Topic Chips */}
          <div className="px-3 py-2 bg-[#1A1818] border-t border-[#D4AF37]/20 flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
            {initialTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleSelectTopic(topic)}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#2A2424] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#4A0E17] hover:border-[#D4AF37] transition-all"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-3 bg-[#1A1818] border-t border-[#D4AF37]/30 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about dishes, parking, catering..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-[#121212] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2 text-xs text-[#FFFDF6] placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-bold hover:brightness-110 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
