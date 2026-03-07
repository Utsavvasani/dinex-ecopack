"use client";

import { motion } from "framer-motion";
import { BLOG_CATEGORIES } from "@/lib/blogData";

export function BlogHero({ activeCategory, setActiveCategory }) {
  return (
    <section className="w-full pt-32 pb-16 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            Insights & Updates
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.95]">
            DineX{" "}
            <span className="text-primary italic font-heading text-6xl md:text-8xl">
              Eco-Journal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium leading-relaxed">
            Exploring the latest in sustainable tableware, biodegradable
            innovations, and our journey towards a greener planet.
          </motion.p>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 pt-8">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-background text-muted-foreground border-border hover:border-primary/30 hover:text-primary"
                }`}>
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
