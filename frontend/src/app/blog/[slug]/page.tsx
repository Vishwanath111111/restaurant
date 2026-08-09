import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogs-data";
import { JaaliPattern } from "@/components/ui/JaaliPattern";
import { Clock, User, ArrowLeft, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);
  if (!post) return { title: "Article Not Found | RASOI MAHAL" };
  return {
    title: `${post.title} | RASOI MAHAL Culinary Journal`,
    description: post.excerpt
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2D080E] to-[#1A1818] text-[#FDFBF7] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
          </Link>

          <span className="block text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            {post.category}
          </span>
          <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3E5AB] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-2 border-t border-[#D4AF37]/30">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#D4AF37]" /> {post.author} ({post.authorRole})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {post.readTime}
            </span>
            <span>•</span>
            <span>Published {post.date}</span>
          </div>
        </div>
      </section>

      {/* Main Post Image & Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        <div className="royal-card-dark rounded-3xl p-8 border border-[#D4AF37]/30 space-y-6 text-gray-200 leading-relaxed font-sans text-sm sm:text-base">
          <div className="prose prose-invert max-w-none space-y-4">
            {post.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h2 key={idx} className="font-royal text-2xl font-bold text-[#F3E5AB] pt-4">
                    {paragraph.replace("# ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h3 key={idx} className="font-royal text-xl font-bold text-[#D4AF37] pt-3">
                    {paragraph.replace("## ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h4 key={idx} className="font-royal text-lg font-bold text-[#F3E5AB] pt-2">
                    {paragraph.replace("### ", "")}
                  </h4>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          <JaaliPattern />

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#D4AF37]/20">
            <Tag className="w-4 h-4 text-[#D4AF37]" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#2D080E] border border-[#D4AF37]/30 text-xs text-[#F3E5AB] rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
