"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  PackageCheck,
  Palette,
  Globe2,
  ArrowRight,
  FileCheck2,
  Boxes,
  Sparkles,
} from "lucide-react";

const exportBenefits = [
  {
    title: "International Compliance & Certifications",
    badge: "FDA • FSC • EU Standards",
    icon: ShieldCheck,
    description:
      "Fully certified for global markets (FDA, FSC, EU food-contact standards), ensuring seamless customs clearance and compliance for importers worldwide.",
    highlight: "100% Food-Grade & Customs Ready",
  },
  {
    title: "Export-Optimized Logistics & Bulk Packaging",
    badge: "Container Space Optimized",
    icon: PackageCheck,
    description:
      "Space-saving, stackable carton designs engineered to optimize container space, reduce shipping costs, and protect goods during long-haul ocean and air freight.",
    highlight: "High-Density Palletizing",
  },
  {
    title: "OEM / Private Label Customization",
    badge: "Bespoke Branding & Sizing",
    icon: Palette,
    description:
      "Tailored branding options, custom sizing, and bespoke printing specifically built for international food franchises looking to elevate their brand identity.",
    highlight: "Custom Tooling & Precision Print",
  },
];

export function ExportBenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden border-b border-primary/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold uppercase tracking-wider">
            <Globe2 className="w-4 h-4" />
            <span>Global Eco-Standards, Local Freshness</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
            Built for Global Food Brands &{" "}
            <span className="text-primary italic font-heading">Importers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Supplying cross-border compliance, high-volume consistency, and
            custom food-service engineering for international markets across North
            America, Europe, the Middle East, and beyond.
          </motion.p>
        </div>

        {/* 3 Export Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {exportBenefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-background border border-primary/15 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                <div className="space-y-4">
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{item.highlight}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Buyer Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-xl shadow-primary/20 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest font-black text-white/80">
              International Trade & Wholesale
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Expand Your Eco-Packaging Supply Chain?
            </h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed">
              Connect directly with our export desk for volume pricing, full
              compliance dossiers, and tailored private-label manufacturing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/inquiry/distributorship"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-primary px-8 text-sm md:text-base font-bold shadow-md hover:bg-white/95 transition-all">
              Become a Global Distributor
            </Link>
            <Link
              href="/inquiry/download-catalog"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm px-8 text-sm md:text-base font-bold hover:bg-white/20 transition-all">
              Request Export Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
