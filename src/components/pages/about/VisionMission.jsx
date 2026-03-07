"use client";

import { motion } from "framer-motion";
import { Eye, Target, Leaf } from "lucide-react";
import { VISION, MISSION } from "@/lib/about.data";

function ValueCard({ icon: Icon, label, data, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex cursor-pointer flex-col gap-6 p-8 rounded-xl border border-primary/20 bg-background/50 hover:bg-background transition-colors duration-500 shadow-sm hover:shadow-xl group">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="w-8 h-8" />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black text-foreground">
        Our <span className="text-primary">{label}</span>
      </h3>

      {/* Bold headline */}
      <p className="text-lg font-bold text-foreground leading-relaxed">
        {data.headline}
      </p>

      <div className="h-px w-full bg-border" />

      {/* Body text */}
      <p className="text-muted-foreground text-lg leading-relaxed">
        {data.body}
      </p>
    </motion.div>
  );
}

export function VisionMission() {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
            <Leaf size={15} className="fill-primary" />
            Core Values
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-none tracking-tighter">
            Driving the{" "}
            <span className="text-primary italic font-heading">
              Green Revolution
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <ValueCard icon={Eye} label="Vision" data={VISION} delay={0} />
          <ValueCard
            icon={Target}
            label="Mission"
            data={MISSION}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
