import React from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";
import { Clock, User } from "lucide-react";

export const metadata = {
  title: "Royal Culinary Journal & Blog | RASOI MAHAL",
  description: "Read articles on royal Indian spice heritage, slow-cooking techniques, and beverage pairing guides written by our master chefs."
};

export default function BlogListPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Chronicles of Spice & Craft
          </span>
          <h1 className="font-royal text-4xl md:text-5xl font-bold text-[#F3E5AB]">
            Royal Culinary Journal
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Insights, history, and secrets of authentic Indian fine dining directly from Executive Chef Rathore and our culinary masters.
          </p>
          <JaaliPattern />
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="royal-card-dark rounded-3xl overflow-hidden border border-[#D4AF37]/30 flex flex-col justify-between group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#2D080E]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#4A0E17] text-[#F3E5AB] text-[10px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-royal text-lg font-bold text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="truncate max-w-[120px]">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
