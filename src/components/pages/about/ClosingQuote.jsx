"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const QUOTE =
  "Dinex Ecopack is more than a packaging company — we are part of a global movement toward sustainable living and responsible manufacturing.";

export function ClosingQuote() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-primary/20 bg-primary/5 p-10 md:p-16 text-center overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <Award className="w-12 h-12 text-primary/50" />
            <blockquote className="text-2xl md:text-3xl font-black text-primary italic leading-relaxed max-w-3xl">
              &ldquo;{QUOTE}&rdquo;
            </blockquote>
            <div className="h-1 w-16 bg-linear-to-r from-primary to-primary/30 rounded-full" />
            <cite className="text-sm text-muted-foreground font-semibold uppercase tracking-widest not-italic">
              — The Dinex Ecopack Promise
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
