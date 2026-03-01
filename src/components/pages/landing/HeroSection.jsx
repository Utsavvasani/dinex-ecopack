"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Aurora from "@/components/ui/Aurora";
import { Tilt } from "@/components/ui/tilt";
import { Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-primary/5 flex items-center justify-center pt-20">
      {/* Aurora Background */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden -z-10 bg-background/50">
        <Aurora
          colorStops={["#86efac", "#4ade80", "#16a34a"]}
          blend={0.5}
          amplitude={1.2}
          speed={0.4}
        />
        {/* Soft, uniform overlay for text legibility, removing the harsh cut-off gradient so Aurora spans everywhere! */}
        <div className="absolute inset-0 bg-background/40 md:bg-background/20 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Floating Elements - Visually Balanced */}
      {/* Top Left */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] text-primary/50 pointer-events-none z-0 hidden sm:block">
        <Leaf size={48} />
      </motion.div>

      {/* Top Right */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[25%] right-[12%] text-primary/50 pointer-events-none z-0 hidden sm:block">
        <Leaf size={64} />
      </motion.div>

      {/* Middle Left */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[50%] left-[5%] text-primary/50 pointer-events-none z-0 hidden md:block">
        <Leaf size={32} />
      </motion.div>

      {/* Middle Right */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[60%] right-[8%] text-primary/50 pointer-events-none z-0 hidden md:block">
        <Leaf size={40} />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[20%] left-[18%] text-primary/50 pointer-events-none z-0 hidden sm:block">
        <Leaf size={56} />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        className="absolute bottom-[15%] right-[22%] text-primary/50 pointer-events-none z-0 hidden sm:block">
        <Leaf size={44} />
      </motion.div>

      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center max-w-5xl relative z-10">
        <Tilt rotationFactor={8} isRevese>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-green-900">
            Living Green <br className="hidden md:block" /> is a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Must.
            </span>
          </motion.h1>
        </Tilt>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-[42rem] leading-normal text-foreground sm:text-xl sm:leading-8">
          Eco-living style is a choice. Join us to make a big, small GREEN
          change with our premium, eco-friendly, single-use tableware products
          made from renewable sugarcane.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Explore Catalog
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Our Mission
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
