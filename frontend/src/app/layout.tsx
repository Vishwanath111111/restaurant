import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AiConcierge } from "@/components/chatbot/AiConcierge";
import { SpiceParticles } from "@/components/ui/SpiceParticles";
import { RoyalLoader } from "@/components/ui/RoyalLoader";
import { RestaurantSchema } from "@/components/seo/RestaurantSchema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  title: "RASOI MAHAL | The Royal Taste of India | Authentic Fine Dining",
  description: "Experience authentic royal Indian fine dining inspired by Royal Rajasthan, Mughal court gastronomy, and traditional hospitality. Multi-cuisine menu, Jain specialities, Maharaja private dining, and wedding catering.",
  keywords: ["Indian Restaurant", "Royal Indian Dining", "Fine Dining Jaipur", "Laal Maas", "Butter Chicken", "Dum Biryani", "Jain Food", "Wedding Catering"],
  openGraph: {
    title: "RASOI MAHAL | The Royal Taste of India",
    description: "Multi-cuisine royal Indian fine dining experience.",
    url: "https://rasoimahal.com",
    siteName: "RASOI MAHAL",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "RASOI MAHAL Royal Interior"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RASOI MAHAL - The Royal Taste of India",
    description: "Experience authentic royal Indian gastronomy."
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${jakarta.variable}`}
    >
      <body className="antialiased bg-[#FFFDF6] text-[#2C2825] selection:bg-[#D4AF37] selection:text-[#2D080E]">
        <RestaurantSchema />
        <RoyalLoader />
        <SpiceParticles />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <AiConcierge />
      </body>
    </html>
  );
}
