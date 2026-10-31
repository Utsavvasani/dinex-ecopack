"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, Award } from "lucide-react";

export function FounderMessage() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/[0.03] to-background relative overflow-hidden border-y border-primary/10">
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Founder Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 max-w-md lg:max-w-none flex justify-center">
            <div className="relative group w-full max-w-[380px]">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden bg-background border-2 border-primary/20 shadow-2xl">
                <div className="relative w-full aspect-[4/5] bg-muted overflow-hidden">
                  <Image
                    src="/founder.png"
                    alt="Mr. Deep Gediya - Founder & Managing Director, DineX Ecopack"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Identity Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 backdrop-blur-md border border-primary/40 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span>Leadership</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    Mr. Deep Gediya
                  </h3>
                  <p className="text-white/80 text-sm font-medium mt-0.5">
                    Founder & Managing Director, DineX Ecopack
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder's Message & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-7/12 flex flex-col justify-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Message from Our Founder</span>
            </div>

            {/* Quote Headline */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 md:-left-8 w-12 h-12 text-primary/15 -z-10 rotate-180" />
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                &ldquo;Building a Greener Future,{" "}
                <span className="text-primary italic font-heading">
                  One Paper Bowl
                </span>{" "}
                at a Time&rdquo;
              </h2>
            </div>

            {/* Divider line */}
            <div className="h-1 w-20 bg-primary/30 rounded-full" />

            {/* Message Body */}
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              <p>
                As the founder of DineX Ecopack, my vision has always been to
                bridge the gap between high-performance food service packaging
                and true environmental sustainability. Driven by a commitment to
                eliminate single-use plastics from the global supply chain, we
                established DineX Ecopack to deliver premium, export-grade
                paper bowls to international markets.
              </p>
              <p>
                Under our leadership, we ensure that every paper bowl we
                manufacture meets rigorous international quality and safety
                standards. Whether partnering with global distributors,
                restaurant chains, or eco-conscious brands, our promise remains
                unwavering: reliable supply, superior durability, and a genuine
                dedication to protecting our planet for future generations.
              </p>
            </div>

            {/* Sign-off badge */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                DG
              </div>
              <div>
                <div className="font-bold text-foreground text-base">
                  Mr. Deep Gediya
                </div>
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Founder & Managing Director &bull; DineX Ecopack
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
