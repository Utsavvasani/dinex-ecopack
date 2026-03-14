"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingSection() {
  return (
    <section className="w-full pb-6 bg-background overflow-hidden border-b border-primary/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary mb-6 md:mb-12 leading-tight">
            The Future of Packaging
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Harnessing Earth&apos;s Most Renewable Resources
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We transform agricultural by-products into premium tableware,
                upcycling plant fibers to significantly reduce the global carbon
                footprint. By choosing Dinex Ecopack, you&apos;re not just
                selecting a product; you&apos;re adopting a solution that
                nurtures the planet by returning to it creating a seamless cycle
                of renewal from earth to table and back again.
              </p>
            </div>
          </motion.div>

          {/* Graphical Representation / Placeholder for overlapping plates from catalog page 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-full bg-primary/10 flex items-center justify-center border-8 border-primary/20">
            {/* The circles represent the concentric green design from catalog Page 2 */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-background flex flex-col items-center justify-center text-center p-8 shadow-inner">
              <span className="text-primary font-bold text-xl md:text-2xl uppercase tracking-wider">
                Partner with us in
              </span>
              <span className="text-accent-foreground font-extrabold text-2xl md:text-4xl mt-2 leading-tight">
                Driving <span className="text-primary">Circular Economy</span>{" "}
                Growth.
              </span>
            </div>
            {/* Floating Transparent Product Images */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-40 h-40 md:w-56 md:h-56 -rotate-12 drop-shadow-2xl">
              <Image
                src="/landing/round.png"
                alt="Biodegradable Foam Tray"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 md:-bottom-15 -right-8 w-48 h-48 md:w-64 md:h-64 rotate-15 drop-shadow-2xl">
              <Image
                src="/landing/rectangle.png"
                alt="Biodegradable Plate"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
