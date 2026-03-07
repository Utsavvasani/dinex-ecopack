"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Tilt } from "@/components/ui/tilt";

/**
 * A reusable card that combines a 3D Tilt effect with a GlowingEffect border.
 * Used throughout the About page for Vision, Mission, Goals, and Commitment cards.
 */
export function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <Tilt rotationFactor={6} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`relative h-full rounded-2xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group ${className}`}>
        <GlowingEffect blur={0} spread={18} glow={true} inactiveZone={0.01} />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </Tilt>
  );
}
