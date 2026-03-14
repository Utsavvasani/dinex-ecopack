"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Download,
  ArrowRight,
  Trash2,
  Droplets,
  Wind,
  Check,
  Flame,
  Timer,
  Scale,
  DollarSign,
  Globe2,
  Leaf,
  Waves,
  Sprout,
  Ban,
} from "lucide-react";
import Link from "next/link";

const comparisonData = [
  {
    feature: "Material",
    bagasse: "Sugarcane byproduct (renewable)",
    plastic: "Petroleum-based (non-renewable)",
    bagasseIcon: "✔",
    plasticIcon: "✘",
  },
  {
    feature: "Durability",
    bagasse: "Sturdy but less moisture-resistant",
    plastic: "Highly durable and moisture-resistant",
    bagasseIcon: "✔",
    plasticIcon: "✔",
  },
  {
    feature: "Biodegradability",
    bagasse: "100% biodegradable (60-90 days)",
    plastic: "Takes hundreds of years to decompose",
    bagasseIcon: "✔",
    plasticIcon: "✘",
  },
  {
    feature: "Compostability",
    bagasse: "Industrial and home compostable",
    plastic: "Not compostable",
    bagasseIcon: "✔",
    plasticIcon: "✘",
  },
  {
    feature: "Microwave Safe",
    bagasse: "Yes",
    plastic: "Some types are microwave-safe",
    bagasseIcon: "✔",
    plasticIcon: "⚠",
  },
  {
    feature: "Portability",
    bagasse: "Lightweight and strong",
    plastic: "Lightweight and strong",
    bagasseIcon: "✔",
    plasticIcon: "✔",
  },
  {
    feature: "Cost",
    bagasse: "Higher than plastic",
    plastic: "Low production cost",
    bagasseIcon: "⚠",
    plasticIcon: "✔",
  },
  {
    feature: "Environmental Impact",
    bagasse: "Low carbon footprint, reduces waste",
    plastic: "High pollution contributes to microplastics",
    bagasseIcon: "✔",
    plasticIcon: "✘",
  },
];

export function BagasseVsPlasticSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-10 bg-background overflow-hidden border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Upper Part */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Why Choose <br className="md:hidden" />
                <span className="text-primary italic font-heading">
                  Bagasse
                </span>{" "}
                Instead of Plastic?
              </h2>
              <div className="h-1.5 w-24 bg-primary/30 rounded-full mx-auto mt-6" />
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-x-8 gap-y-5 max-w-3xl mx-auto">
              {[
                { label: "100% compostable", icon: Leaf },
                { label: "Microwave safe", icon: Waves },
                { label: "Oil & water resistant", icon: Droplets },
                { label: "Plastic-free", icon: Ban },
                { label: "Made from agricultural waste", icon: Sprout },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 group">
                  <item.icon className="size-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-bold text-sm tracking-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto border-t border-primary/10 pt-8 italic">
              Bagasse is the natural fiber left after extracting juice from
              sugarcane. Instead of burning this waste, it is transformed into
              strong biodegradable tableware.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                Explore Products Range <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/inquiry/download-catalog"
                className="px-8 py-4 border-2 border-primary/20 text-primary rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/5 transition-all">
                Download Catalog <Download className="size-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Responsive Comparison Section */}
        <div className="mb-10 md:mb-24">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <table className="w-full border-separate border-spacing-1.5">
              <thead>
                <tr className="text-center">
                  <th className="p-3 bg-transparent w-auto"></th>
                  <th className="p-4 bg-primary rounded-t-[2rem] text-white w-1/3">
                    <div className="flex flex-col items-center gap-1">
                      <CheckCircle2 className="size-6" />
                      <span className="text-lg font-black italic tracking-tight uppercase">
                        Bagasse
                      </span>
                    </div>
                  </th>
                  <th className="p-4 bg-primary/40 rounded-t-[2rem] text-white w-1/3">
                    <div className="flex flex-col items-center gap-1">
                      <XCircle className="size-6 text-white" />
                      <span className="text-lg font-black italic tracking-tight uppercase">
                        Plastic
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="group transition-all">
                    <td className="p-4 bg-primary/8 rounded-2xl font-bold text-gray-700 text-[10px] uppercase tracking-widest border-b border-white">
                      {row.feature}
                    </td>
                    <td
                      className={`p-4 bg-primary/15 text-center font-bold text-gray-800 text-sm border-b border-primary/5 ${i === comparisonData.length - 1 ? "rounded-b-[2rem]" : ""}`}>
                      {row.bagasse}
                    </td>
                    <td
                      className={`p-4 bg-primary/10 text-center font-medium text-sm border-b border-primary/5 ${i === comparisonData.length - 1 ? "rounded-b-[2rem]" : ""}`}>
                      {row.plastic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="md:hidden space-y-4">
            {/* Mobile Header Indicators */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-primary p-4 rounded-3xl text-white flex flex-col items-center gap-1 shadow-lg shadow-primary/20">
                <CheckCircle2 className="size-5" />
                <span className="text-xs font-black uppercase tracking-tighter">
                  Bagasse
                </span>
              </div>
              <div className="bg-primary/40 p-4 rounded-3xl text-white flex flex-col items-center gap-1">
                <XCircle className="size-5" />
                <span className="text-xs font-black uppercase tracking-tighter">
                  Plastic
                </span>
              </div>
            </div>

            {/* Mobile Comparison Blocks */}
            {comparisonData.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-primary/10 rounded-3xl p-5 shadow-sm border border-primary/5">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 border-b border-primary pb-2">
                  {row.feature}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-gray-800 leading-tight">
                      {row.bagasse}
                    </div>
                  </div>
                  <div className="space-y-1 border-l border-primary/50 pl-3">
                    <div className="text-sm font-medium text-gray-600 leading-tight">
                      {row.plastic}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Part - Impact Stats */}
        <div className="bg-primary rounded-3xl md:rounded-[3rem] p-6 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative accents */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
          <div className="absolute -bottom-24 -left-24 size-64 bg-white/5 rounded-full blur-[80px]" />
          <div className="absolute -top-24 -right-24 size-64 bg-black/5 rounded-full blur-[80px]" />

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-white text-lg md:text-3xl font-black mb-6 md:mb-10 relative z-10">
            1 Ton Bagasse Tableware Saves:
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {[
              {
                label: "Plastic waste avoided",
                value: "1.2 Tons",
                icon: Trash2,
              },
              { label: "CO2 Emissions reduced", value: "3 Tons", icon: Wind },
              {
                label: "Fresh water saved",
                value: "5000 Liters",
                icon: Droplets,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-white/20 group hover:bg-white/20 transition-colors"
                viewport={{ once: true }}>
                <div
                  className={`size-10 md:size-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform text-white`}>
                  <stat.icon className="size-5 md:size-6" />
                </div>
                <div className="text-xl md:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
