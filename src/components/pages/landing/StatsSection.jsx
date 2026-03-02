"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "140,000+", label: "Ton Capacity / Year" },
  { value: "100+", label: "SKU Numbers" },
  { value: "50+", label: "Export Countries" },
  { value: "15,000+", label: "Happy Clients" },
];

export function StatsSection() {
  return (
    <section className="w-full py-16 bg-primary/5 border-y border-primary/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
