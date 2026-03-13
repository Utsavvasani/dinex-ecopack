"use client";

import { useState } from "react";
import { BlogHero } from "./BlogHero";
import { BlogCard } from "./BlogCard";
import { BLOG_POSTS } from "@/lib/blogData";
import { motion, AnimatePresence } from "framer-motion";

export function BlogPage() {
  const filteredPosts = BLOG_POSTS;

  return (
    <main className="min-h-screen bg-background">
      <BlogHero />

      <section className="pb-24 container px-4 md:px-8 mx-auto max-w-7xl">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* No Posts State removed since filtering is removed */}

      </section>
    </main>
  );
}
