"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, Calendar, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/our-story" },
  { name: "Menu", href: "/menu" },
  { name: "Chef", href: "/chef" },
  { name: "Private Dining", href: "/private-dining" },
  { 
    name: "Events & Catering", 
    href: "/events",
    dropdown: [
      { name: "Overview Events", href: "/events" },
      { name: "Wedding Catering", href: "/wedding-catering" },
      { name: "Corporate Catering", href: "/corporate-catering" }
    ] 
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2D080E]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/30 py-3"
          : "bg-gradient-to-b from-[#2D080E]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#4A0E17] group-hover:bg-[#6B111D] transition-colors">
            <span className="font-royal text-xl font-bold text-[#F3E5AB] -rotate-45">
              RM
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-royal text-xl md:text-2xl font-bold tracking-widest text-[#F3E5AB]">
              RASOI MAHAL
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
              The Royal Taste of India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-sans text-xs uppercase tracking-wider font-semibold py-2 transition-colors ${
                      isActive || link.dropdown.some((d) => pathname === d.href)
                        ? "text-[#D4AF37] border-b border-[#D4AF37]"
                        : "text-[#FFFDF6] hover:text-[#D4AF37]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-48 bg-[#1A1818] border border-[#D4AF37]/40 rounded-xl shadow-2xl py-2 z-50">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-xs text-[#FFFDF6] hover:bg-[#4A0E17] hover:text-[#D4AF37] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-wider font-semibold py-2 transition-colors ${
                  isActive
                    ? "text-[#D4AF37] border-b border-[#D4AF37]"
                    : "text-[#FFFDF6] hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-xs text-[#F3E5AB] hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            +91 98765 43210
          </a>
          <Link
            href="/reservation"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all hover:scale-105"
          >
            <Calendar className="w-3.5 h-3.5" />
            Reserve Table
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-[#F3E5AB] p-2 hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1A1818] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-2">
                  <span className="block font-sans text-xs uppercase tracking-wider font-bold text-[#D4AF37]">
                    {link.name}
                  </span>
                  <div className="pl-4 space-y-2 border-l border-[#D4AF37]/30">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#FFFDF6] hover:text-[#D4AF37]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-sans text-sm uppercase tracking-wider font-medium ${
                    pathname === link.href ? "text-[#D4AF37]" : "text-[#FFFDF6]"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm text-[#F3E5AB]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              +91 98765 43210
            </a>
            <Link
              href="/reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-wider"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
