"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "One",
    title: "Sustainable by Nature",
    description:
      "Our products are made from renewable sugarcane bagasse, turning agricultural waste into eco-friendly packaging solutions.",
  },
  {
    number: "Two",
    title: "Designed for Modern Food Service",
    description:
      "Strong, durable, and heat-resistant tableware designed for restaurants, catering, and takeaway businesses.",
  },
  {
    number: "Three",
    title: "Plastic-Free Alternative",
    description:
      "Replace harmful plastic and Styrofoam with biodegradable packaging that protects the environment.",
  },
  {
    number: "Four",
    title: "Reliable Manufacturing",
    description:
      "Consistent quality and scalable production to support bulk orders and global distribution.",
  },
  {
    number: "Five",
    title: "Global Supply Ready",
    description:
      "We support distributors and businesses worldwide with export-ready packaging and efficient logistics.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center md:mb-20 mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Why <br className="md:hidden" />
            <span className="text-primary italic font-heading">
              DineX Ecopack
            </span>{" "}
            ?
          </h2>
          <div className="h-1.5 w-24 bg-primary/30 rounded-full mx-auto mt-6" />
        </div>

        <div className="flex flex-col gap-12 relative">
          {/* Vertical line connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
              {/* Number/Step */}
              <div className="flex-1 hidden md:block flex justify-center md:justify-end items-center">
                <div
                  className={`text-4xl md:text-7xl font-black text-primary/10 transition-colors group-hover:text-primary/20 ${idx % 2 === 0 ? "md:text-right" : "md:text-left md:flex-1 md:justify-start"}`}>
                  {reason.number}
                </div>
              </div>

              {/* Center Dot */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center font-bold text-primary shrink-0">
                {idx + 1}
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
