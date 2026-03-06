"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Package } from "lucide-react";
import { GlowCard } from "@/components/shared/GlowCard";

/** Story told in chapters — each maps to a GlowCard below */
const CHAPTERS = [
  {
    number: "01",
    icon: <Leaf className="w-5 h-5" />,
    title: "Why We Exist",
    body: "At Dinex Ecopack, we believe that packaging should serve people without harming the planet. With the growing global concern over plastic pollution, we are committed to creating sustainable alternatives that support both businesses and the environment.",
  },
  {
    number: "02",
    icon: <Recycle className="w-5 h-5" />,
    title: "How We Do It",
    body: "Our biodegradable tableware is crafted from natural sugarcane bagasse — a renewable agricultural by-product transformed into strong, durable, eco-friendly packaging. By converting agricultural waste into valuable products, we create a sustainable cycle that reduces environmental impact.",
  },
  {
    number: "03",
    icon: <Package className="w-5 h-5" />,
    title: "What We Deliver",
    body: "We deliver high-quality biodegradable plates, bowls, clamshell containers, and meal trays for restaurants, catering, food delivery, and global distributors — combining functionality, durability, and sustainability in every product.",
  },
];

function ChapterCard({ chapter, delay }) {
  return (
    <GlowCard delay={delay}>
      <div className="flex flex-col gap-4 p-6">
        {/* Number + Icon row */}
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-primary/10 leading-none select-none">
            {chapter.number}
          </span>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 group-hover:scale-110">
            {chapter.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">
          {chapter.title}
        </h3>

        <div className="h-px bg-border" />

        {/* Body */}
        <p className="text-muted-foreground leading-relaxed text-sm">
          {chapter.body}
        </p>
      </div>
    </GlowCard>
  );
}

export function OurStory() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-16">
        {/* ── Editorial header ─────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
          {/* Big label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Leaf className="w-3.5 h-3.5 fill-primary" />
              Our Story
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
              The{" "}
              <span className="text-primary italic font-heading">Journey</span>
            </h2>
          </motion.div>

          {/* Animated pull quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 pb-2">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium border-l-4 border-primary/30 pl-6">
              Packaging that serves people without harming the planet —
              that&apos;s the promise every Dinex Ecopack product carries.
            </p>
          </motion.div>
        </div>

        {/* ── Chapter cards — 3 equal columns ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CHAPTERS.map((ch, i) => (
            <ChapterCard key={ch.number} chapter={ch} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
