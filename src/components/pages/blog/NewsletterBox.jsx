"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Image from "next/image";

export function NewsletterBox() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-24">
      {/* Main Container with Gradient Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-5xl bg-linear-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Side: Asset (Image of person or product) */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px]">
            {/* We'll use a generic sustainable/eco image here or a placeholder */}
            <div className="absolute inset-0 bg-primary/20 rounded-4xl blur-3xl opacity-30 animate-pulse" />
            <Image
              src="/landing/bamboo.jpg" // Using existing asset for now
              alt="Subscribe"
              fill
              className="object-cover rounded-4xl shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Right Side: Content & Form */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 relative z-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
              <LeafIcon className="w-6 h-6" />
            </div>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">
              Sustainable Living
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Subscribe to our <br />
              <span className="text-primary font-heading italic">
                Newsletter!
              </span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Get the latest blog articles, product updates, and eco-tips
              delivered straight to your inbox.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="h-14 rounded-2xl px-6 border-primary/20 bg-white/50 backdrop-blur-sm focus-visible:ring-primary shadow-sm"
              />
            </div>
            <Button className="h-14 px-8 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2">
              Subscribe
              <Send size={16} />
            </Button>
          </form>

          <p className="text-[10px] text-muted-foreground font-medium tracking-wide">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </motion.div>
    </div>
  );
}

function LeafIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 7 0 5.5-4.5 10-10 11z" />
      <path d="M9 21s-2.5-1-4-1" />
      <path d="M12 11c0 5-2 10-2 10" />
    </svg>
  );
}
