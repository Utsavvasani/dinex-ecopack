"use client";

import { motion } from "framer-motion";

export function CategoryHeader({ title }) {
  return (
    <div className="flex flex-col items-center justify-center text-center my-10 md:my-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
        Explore Our{" "}
        <span className="text-primary italic font-heading">{title}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-muted-foreground text-sm xl:text-base max-w-2xl px-4">
        Discover our professional-grade {title.toLowerCase()} designed for
        durability, sustainability, and premium presentation.
      </motion.p>
    </div>
  );
}
