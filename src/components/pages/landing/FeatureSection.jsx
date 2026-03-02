"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Leaf,
  Utensils,
  ThermometerSnowflake,
  Microwave, // Removed Recycle since it is not exported from lucide-react in this version
} from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Tilt } from "@/components/ui/tilt";
// fallback for standard 'Recycle' icon meaning renewable
const RenewableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const features = [
  {
    title: "100% Biodegradable",
    description: "Eco-friendly completely sustainable alternatives.",
    icon: Leaf,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Water & Oil Proof",
    description: "Leak-proof design suitable for hot curries and liquids.",
    icon: Droplet,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Food Grade",
    description: "Safe for direct food contact, manufactured hygienically.",
    icon: Utensils,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Ovenable",
    description: "Microwave and oven safe for reheating meals.",
    icon: Microwave,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Freezer Safe",
    description: "Can be used to freeze food without cracking.",
    icon: ThermometerSnowflake,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Renewable Resources",
    description: "Made entirely from renewable sugarcane bagasse.",
    icon: RenewableIcon,
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeatureSection() {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      {/* Decorative leaf/bagasse graphic suggestion */}
      <div className="absolute -right-[20%] top-[10%] opacity-5 pointer-events-none rotate-45 scale-150">
        <Leaf size={600} />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-background text-primary px-4 py-1 flex items-center gap-2 group cursor-default"
              duration={2}
              as="div">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Dinex?</span>
            </HoverBorderGradient>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Uncompromised Quality. <br />
            <span className="text-primary mt-2 block">Naturally Better.</span>
          </motion.h2>
        </div>

        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Tilt
                key={index}
                rotationFactor={6}
                className="h-full"
                springOptions={{ stiffness: 300, damping: 30 }}>
                <div className="group cursor-pointer relative flex flex-col h-full p-8 bg-card border border-border rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 overflow-hidden">
                  <GlowingEffect
                    blur={16}
                    borderWidth={2}
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <div
                      className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300 border border-transparent group-hover:border-current/20`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
