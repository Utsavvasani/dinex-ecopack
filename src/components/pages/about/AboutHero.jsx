"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { ABOUT_STATS } from "@/lib/about.data";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary/5">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 container px-4 max-w-5xl mx-auto flex flex-col items-center text-center gap-8 py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest">
          <Leaf size={14} className="fill-primary" />
          Who We Are
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 italic font-heading pr-4 md:pr-6 leading-tight inline-block">
            DineX Ecopack
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Building the Future of Sustainable Food Packaging.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 px-3 rounded-2xl border border-primary/20 bg-background/60 backdrop-blur-sm">
              <span className="text-3xl font-black text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
