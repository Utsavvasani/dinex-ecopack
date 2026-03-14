"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blogData";
import { BlogCard } from "./BlogCard";

export function BlogDetail({ post }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Get related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(
    0,
    3,
  );

  const shareTitle = post.title;

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={14} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={14} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={14} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header & Hero */}
      <section className="pt-32 pb-5 relative overflow-hidden">
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
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              {post.category}
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-primary leading-[1.05]">
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
                    {shareLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-primary hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer"
                        title={`Share on ${link.name}`}>
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image Section - Contained and Premium */}
      <section className="container px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-21/10 md:aspect-21/7 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border border-primary/10 bg-primary/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Content Section - Centered Premium Readability */}
      <section className="container px-4 md:px-8 mx-auto max-w-7xl pb-8">
        <div className="max-w-4xl mx-auto">
          <article
            className="prose prose-sm md:prose-base prose-stone max-w-none 
            prose-headings:text-primary prose-headings:font-black prose-headings:tracking-tighter prose-headings:mb-2 md:prose-headings:mb-3
            prose-h2:text-xl md:prose-h2:text-2xl prose-h2:border-l-4 md:prose-h2:border-l-8 prose-h2:border-primary/20 prose-h2:pl-3 md:prose-h2:pl-4 prose-h2:py-0 prose-h2:mt-6 md:prose-h2:mt-8
            prose-h3:text-base md:prose-h3:text-lg prose-h3:font-black prose-h3:text-primary/90 prose-h3:mt-0
            prose-p:text-sm md:text-base prose-p:text-muted-foreground/90 prose-p:leading-relaxed prose-p:mb-3 md:prose-p:mb-4 prose-p:font-medium
            prose-strong:text-foreground prose-strong:font-black
            prose-blockquote:border-l-4 md:prose-blockquote:border-l-8 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-5 md:prose-blockquote:px-8 prose-blockquote:rounded-lg md:prose-blockquote:rounded-[16px] prose-blockquote:text-sm md:prose-blockquote:text-base prose-blockquote:font-black prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:my-6 md:prose-blockquote:my-8 prose-blockquote:shadow-sm prose-blockquote:shadow-primary/5
            prose-ul:list-disc prose-ul:pl-4 md:prose-ul:pl-5 prose-ul:space-y-1.5 md:prose-ul:space-y-2 prose-ul:my-0
            prose-li:text-muted-foreground prose-li:font-bold prose-li:text-sm md:prose-li:text-base
            prose-img:rounded-xl md:prose-img:rounded-[24px] prose-img:border prose-img:border-primary/10 prose-img:shadow-md prose-img:mx-auto prose-img:max-h-[300px] prose-img:aspect-video prose-img:object-cover prose-img:w-full md:prose-img:w-[75%]
            prose-table:border-collapse prose-table:m-0 prose-table:border-none
            prose-th:bg-primary prose-th:text-white prose-th:p-2 md:prose-th:p-3 prose-th:font-black prose-th:uppercase prose-th:tracking-widest prose-th:text-[8px] md:prose-th:text-[9px]
            prose-td:p-2 md:prose-td:p-3 prose-td:text-[10px] md:prose-td:text-[11px] prose-td:font-bold prose-td:text-muted-foreground prose-td:border-b
            prose-hr:border-primary/10 prose-hr:my-6 md:prose-hr:my-8
          ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-border">
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
