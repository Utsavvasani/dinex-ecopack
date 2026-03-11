"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blogData";
import { BlogCard } from "./BlogCard";
import { NewsletterBox } from "./NewsletterBox";

export function BlogDetail({ post }) {
  // Get related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(
    0,
    3,
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header & Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-[100px] hidden lg:block" />

        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          {/* Breadcrumbs / Back button */}
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-12 gap-2 text-muted-foreground hover:text-primary transition-colors pl-0">
              <ArrowLeft size={16} />
              <span className="font-bold uppercase tracking-widest text-[10px]">
                Back to Journal
              </span>
            </Button>
          </Link>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              {post.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.05]">
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-8 pt-4">
              {/* Meta Info */}
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-8 pl-0 w-full sm:w-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Date
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Calendar size={14} className="text-primary" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Read Time
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Clock size={14} className="text-primary" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Shared Icons in Hero */}
                  <div className="flex flex-col col-span-2 sm:col-auto sm:border-l sm:border-border sm:pl-8 pt-4 sm:pt-0 border-t border-border/50 sm:border-t-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Share
                    </span>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-pointer">
                          <div className="w-3.5 h-3.5 bg-current opacity-20" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="container px-4 md:px-8 mx-auto max-w-7xl pb-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/10] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-primary/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </section>

      {/* Content Section - Full Width Readability */}
      <section className="container px-4 md:px-8 mx-auto max-w-7xl pb-24">
        <div className="max-w-4xl pb-10 md:pb-24 mx-auto">
          {/* Main Content */}
          <article
            className="prose prose-lg prose-primary max-w-none 
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-foreground prose-headings:mb-8 prose-headings:mt-12
            prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8
            prose-strong:text-foreground prose-strong:font-black
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-3xl prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:my-12
            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-4
            prose-li:text-muted-foreground prose-li:font-medium
            prose-img:rounded-4xl prose-img:border prose-img:border-border
          ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 md:pt-24 border-t border-border">
            <div className="flex flex-col items-center md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4 text-center md:text-left">
                <div className="text-primary font-black uppercase tracking-[0.2em] text-xs">
                  Keep Reading
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground">
                  Related{" "}
                  <span className="text-primary italic font-heading">
                    Journal
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-primary/30 rounded-full mx-auto md:mx-0" />
              </div>
              <Link href="/blog">
                <Button className="rounded-2xl px-8 h-12 font-bold uppercase tracking-widest text-xs bg-primary text-white shadow-lg shadow-primary/20">
                  Explore More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((p, idx) => (
                <BlogCard key={p.id} post={p} index={idx} />
              ))}
            </div>
          </div>
        )}

      </section>
    </main>
  );
}
