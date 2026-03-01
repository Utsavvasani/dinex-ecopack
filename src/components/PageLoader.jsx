"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextRoll } from "./ui/text-roll";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 8.5 seconds as requested (8-10 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none">
          <div className="text-2xl md:text-5xl font-black tracking-tighter text-primary">
            <TextRoll
              className="inline-block"
              repeat={Infinity}
              repeatDelay={2}>
              DineX ecopack
            </TextRoll>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
