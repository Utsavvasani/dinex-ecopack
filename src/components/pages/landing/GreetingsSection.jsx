"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function GreetingsSection() {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 rounded-l-[100px] hidden lg:block" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 items-start">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Leaf size={28} />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[1.1]">
                Consumers <br />
                <span className="text-primary font-heading italic">
                  Health & Nature
                </span>
              </h2>
              <div className="h-1.5 w-24 bg-primary/30 rounded-full" />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl">
              DineX Ecopack is a leading manufacturer of eco-friendly single-use
              tableware products made from renewable sugarcane bagasse.
            </p>
          </motion.div>

          {/* Right Column: Visual Features */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Feature list matching the vertical reference */}
              <div className="flex flex-col gap-6 w-full max-w-sm relative z-20">
                {[
                  {
                    title: "100% Compostable",
                    desc: "Returns to soil within 90 days",
                    icon: "🌱",
                  },
                  {
                    title: "Renewable Resources",
                    desc: "Made from sugarcane bagasse",
                    icon: "♻️",
                  },
                  {
                    title: "Eco-Friendly",
                    desc: "Carbon neutral production",
                    icon: "🌍",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="group p-6 rounded-3xl bg-background border border-border shadow-md hover:shadow-xl hover:border-primary/30 transition-all flex items-center gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Background Decorative Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
