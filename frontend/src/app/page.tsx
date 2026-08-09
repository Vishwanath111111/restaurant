import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Award, Star, ArrowRight, ShieldCheck, Flame, UtensilsCrossed, Users, CheckCircle2 } from "lucide-react";
import { JaaliPattern } from "@/components/ui/JaaliPattern";
import { menuItems } from "@/data/menu-data";
import { testimonialsData } from "@/data/testimonials-data";
import { galleryItems } from "@/data/gallery-data";

export default function HomePage() {
  const signatureDishes = menuItems.filter((m) => m.isChefSpecial || m.isPopular).slice(0, 6);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. LUXURY HERO BANNER */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2D080E] via-[#1A1818] to-[#121212] text-[#FDFBF7] px-4">
        {/* Parallax Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            alt="RASOI MAHAL Royal Palace Dining"
            className="w-full h-full object-cover opacity-25 scale-105 transform transition-transform duration-10000 animate-pulse-gold"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#2D080E]/60 to-[#2D080E]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E17]/80 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Cuisine Royal Fine Dining</span>
          </div>

          <h1 className="font-royal text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F3E5AB] leading-tight">
            RASOI MAHAL
          </h1>

          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#D4AF37] italic font-light">
            "The Royal Taste of India"
          </p>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-300 leading-relaxed font-sans font-normal">
            Immerse yourself in authentic Indian heritage gastronomy. From slow-cooked Rajasthani Laal Maas to 18-Hour Dal Makhani and Nizam-grade Dum Biryani, served with royal palace hospitality.
          </p>

          <JaaliPattern className="my-4" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/reservation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4A0E17]/90 text-[#F3E5AB] border border-[#D4AF37]/50 font-royal font-bold text-xs uppercase tracking-widest hover:bg-[#6B111D] transition-all flex items-center justify-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
              Explore Royal Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ROYAL WELCOME & HERITAGE ETHOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="royal-card-dark rounded-3xl p-2 border border-[#D4AF37]/40 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80"
                alt="Rajasthani Royal Culinary Art"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#4A0E17] text-[#F3E5AB] border border-[#D4AF37] p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <p className="font-royal text-sm font-bold">28+ Years Heritage</p>
                <p className="text-[10px] text-gray-300">Royal Mewari & Mughal Lineage</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Authentic Indian Identity
              </span>
              <h2 className="font-royal text-3xl md:text-4xl font-bold text-[#2D080E]">
                A Heritage of Royal Flavors & Warm Indian Hospitality
              </h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              At **RASOI MAHAL**, every dish tells the story of India’s grand royal courts. Inspired by Rajasthani palace architecture, hand-carved Jharokhas, and centuries-old Mewari spice formulas, we present an dining experience that is authentically and unapologetically Indian.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="flex items-center gap-2 text-[#4A0E17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Pure Desi Ghee & Saffron
              </div>
              <div className="flex items-center gap-2 text-[#4A0E17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Dedicated Jain Cookware
              </div>
              <div className="flex items-center gap-2 text-[#4A0E17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                18-Hour Dum Cooking
              </div>
              <div className="flex items-center gap-2 text-[#4A0E17] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Live Classical Sitar Nights
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 font-royal font-bold text-xs uppercase tracking-wider text-[#4A0E17] border-b-2 border-[#D4AF37] pb-1 hover:text-[#6B111D] transition-colors"
              >
                Read Our Story & Royal Legacy <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES & CHEF RECOMMENDATIONS */}
      <section className="bg-[#1A1818] text-[#FDFBF7] py-16 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Chef Recommendations
            </span>
            <h2 className="font-royal text-3xl md:text-4xl font-bold text-[#F3E5AB]">
              Royal Signature Delicacies
            </h2>
            <JaaliPattern />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <div
                key={dish.id}
                className="royal-card-dark rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#4A0E17]/90 text-[#F3E5AB] text-[10px] font-bold px-2.5 py-1 rounded border border-[#D4AF37]/50">
                    {dish.category}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-royal text-lg font-bold text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-royal text-base font-bold text-[#D4AF37]">
                        ₹{dish.price}
                      </span>
                    </div>
                    {dish.hindiName && (
                      <p className="text-xs text-[#D4AF37] font-serif">
                        {dish.hindiName}
                      </p>
                    )}
                    <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#FF9933]" />
                      <span>Spice level {dish.spiceLevel}/5</span>
                    </div>
                    <Link
                      href="/menu"
                      className="text-[#D4AF37] font-semibold text-[11px] hover:underline"
                    >
                      View in Menu →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110"
            >
              Explore Full Royal Menu ({menuItems.length} Dishes)
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRADITIONAL THALI SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#4A0E17] via-[#6B111D] to-[#2D080E] rounded-3xl p-8 md:p-12 text-[#FDFBF7] border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Royal Grand Feast
              </span>
              <h2 className="font-royal text-3xl md:text-4xl font-bold text-[#F3E5AB]">
                Traditional Maharaja & Maharani Thali Showcase
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                Served on pure hand-engraved silver and Kansa thalis, our traditional thali features 12 curated regional delicacies including Dal Baati Churma, Ker Sangri, Paneer Lababdar, Shahi Dum Biryani, Kesar Pista Kheer, and hot Puran Poli doused in warm ghee.
              </p>

              <ul className="text-xs space-y-2 text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Unlimited Refills on Dal, Rotis, and Chutneys
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Available in Veg, Pure Jain, and Non-Veg Royal Variants
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-wider hover:bg-[#F3E5AB]"
                >
                  Reserve Thali Feast
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Royal Silver Thali Showcase"
                className="w-full h-80 object-cover rounded-2xl border border-[#D4AF37]/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRIVATE DINING & CATERING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Bespoke Celebrations
          </span>
          <h2 className="font-royal text-3xl md:text-4xl font-bold text-[#2D080E]">
            Private Dining & Destination Catering
          </h2>
          <JaaliPattern />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="royal-card-dark rounded-2xl p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-[#4A0E17] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-royal text-xl font-bold text-[#F3E5AB]">
              Maharaja Private Suite
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Carved Jharokha views, dedicated butler service, customized menus, and acoustic sitar music.
            </p>
            <Link
              href="/private-dining"
              className="inline-block text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Explore Suites →
            </Link>
          </div>

          <div className="royal-card-dark rounded-2xl p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-[#4A0E17] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-royal text-xl font-bold text-[#F3E5AB]">
              Wedding Catering
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Grand multi-station banquets for 200 to 2,500 guests with live tandoor and silver thalis.
            </p>
            <Link
              href="/wedding-catering"
              className="inline-block text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Wedding Packages →
            </Link>
          </div>

          <div className="royal-card-dark rounded-2xl p-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-[#4A0E17] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-royal text-xl font-bold text-[#F3E5AB]">
              Corporate Banquets
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Executive boardroom dining, annual galas, GST invoicing, and swift professional service.
            </p>
            <Link
              href="/corporate-catering"
              className="inline-block text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Corporate Services →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & GOOGLE REVIEWS */}
      <section className="bg-[#1A1818] text-[#FDFBF7] py-16 border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="font-royal text-3xl md:text-4xl font-bold text-[#F3E5AB]">
              Words of Praise from Our Patrons
            </h2>
            <p className="text-xs text-gray-300">
              Rated 4.9/5 across 1,280+ Google & TripAdvisor Reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="royal-card-dark rounded-2xl p-6 space-y-4 border border-[#D4AF37]/30"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="font-royal text-base font-bold text-[#F3E5AB]">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#D4AF37]">{t.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed font-serif">
                  "{t.comment}"
                </p>
                <div className="flex justify-between items-center text-[10px] text-gray-500 pt-2 border-t border-gray-800">
                  <span>{t.source}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Visual Splendor
            </span>
            <h2 className="font-royal text-3xl font-bold text-[#2D080E]">
              Palace Ambiance & Gastronomy Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-royal font-bold text-[#4A0E17] uppercase tracking-wider hover:underline"
          >
            View All Photos →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="relative h-48 md:h-64 rounded-2xl overflow-hidden group border border-[#D4AF37]/30 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-xs font-royal font-bold text-[#F3E5AB]">
                  {item.title}
                </span>
                <span className="text-[10px] text-gray-300">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL RESERVATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1818] border border-[#D4AF37]/40 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Your Table Awaits
            </span>
            <h2 className="font-royal text-3xl md:text-5xl font-bold text-[#F3E5AB]">
              Experience the Royal Hospitality of RASOI MAHAL
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Book your preferred date and time to savor authentic royal Indian fine dining.
            </p>
          </div>

          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-[#2D080E] font-royal font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Reserve Table Now
          </Link>
        </div>
      </section>
    </div>
  );
}
