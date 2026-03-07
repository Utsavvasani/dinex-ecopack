"use client";

import { motion } from "framer-motion";

/**
 * Reusable section header with badge, animated headline, and divider bar.
 *
 * @param {React.ReactNode} badge    - Small label shown in the pill badge
 * @param {React.ReactNode} title    - Main heading (can include JSX for coloring words)
 * @param {string}          subtitle - Optional subtitle paragraph
 * @param {string}          align    - "center" | "left" (default: "center")
 */
export function SectionHeader({ badge, title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start"}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-linear-to-r from-primary to-primary/30 rounded-full ${isCenter ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-muted-foreground text-lg leading-relaxed ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
