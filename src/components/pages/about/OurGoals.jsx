"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GOALS } from "@/lib/about.data";

function GoalRow({ goal, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.08 * idx }}
      className="flex flex-col sm:flex-row gap-3 sm:gap-5 cursor-pointer group items-start p-4 rounded-2xl hover:bg-background transition-colors duration-300">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-primary">
        <div className="text-primary group-hover:text-background transition-colors">
          {goal.icon}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-foreground transition-colors">
          {goal.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {goal.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function OurGoals() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-primary/20 bg-background/50 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left — Image with centered title overlay */}
            <div className="relative min-h-[340px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-r border-primary/10">
              <Image
                src="/landing/sugarcane.jpg"
                alt="Sugarcane Bagasse"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-background/60 lg:to-background" />

              {/* Centered title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-6xl font-black text-foreground mb-3 drop-shadow-sm">
                  Our <span className="text-primary">Goals</span>
                </h2>
                <p className="text-foreground/80 font-medium text-lg max-w-[240px]">
                  Setting the standard for responsible manufacturing and global
                  supply.
                </p>
              </div>
            </div>

            {/* Right — Goals list */}
            <div className="flex flex-col gap-2 justify-center p-4 md:p-10 bg-background/50 backdrop-blur-sm">
              {GOALS.map((goal, idx) => (
                <GoalRow key={goal.title} goal={goal} idx={idx} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
