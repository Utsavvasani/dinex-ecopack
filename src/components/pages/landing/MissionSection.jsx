"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Leaf } from "lucide-react";

export function MissionSection() {
  return (
    <section
      className="w-full md:py-16 bg-background overflow-hidden relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 md:gap-24 items-center">
          {/* Left Column: Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 lg:col-span-2">
            <div className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl border border-primary/10 bg-primary/5">
              <Image
                src="/landing/bamboo.jpg"
                alt="The Essence of Sustainability"
                fill
                className="object-cover"
                priority
              />
              {/* Glass overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />

              {/* Floating Badge - Now Static */}
              <div className="absolute bottom-12 left-12 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white max-w-[200px]">
                <div className="text-xs font-black uppercase tracking-widest opacity-70 mb-2">
                  Purity
                </div>
                <div className="text-xl font-bold leading-tight">
                  100% Sugarcane Bagasse
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-4 order-1 lg:order-2 lg:col-span-3"
          >
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <Leaf size={16} className="fill-primary" />
                Our Mission
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[0.95] tracking-tighter">
                The Essence of <br />
                <span className="text-primary italic font-heading">
                  Sustainability
                </span>
              </h2>
              <div className="h-2 w-32 bg-primary/30 rounded-full" />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-tight max-w-xl">
                We are dedicated to providing environmentally friendly solutions
                that reduce the carbon footprint by switching to biodegradable
                alternatives.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <span className="font-bold">01</span>
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    Benefit the Planet First, always.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <span className="font-bold">02</span>
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    Transform waste into premium dining experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
