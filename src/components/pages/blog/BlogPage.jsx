"use client";

import { useState } from "react";
import { BlogHero } from "./BlogHero";
import { BlogCard } from "./BlogCard";
import { NewsletterBox } from "./NewsletterBox";
import { BLOG_POSTS } from "@/lib/blogData";
import { motion, AnimatePresence } from "framer-motion";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <BlogHero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="pb-24 container px-4 md:px-8 mx-auto max-w-7xl">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* No Posts State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center">
            <h3 className="text-2xl font-bold text-muted-foreground">
              No articles found in this category.
            </h3>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-primary font-bold underline">
              Back to all posts
            </button>
          </motion.div>
        )}

      </section>
    </main>
  );
}
