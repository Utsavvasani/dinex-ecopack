"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MissionSection() {
  return (
    <section className="w-full py-24 bg-card overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Green change
          </h2>
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
            DINEX ECOPACK IS A LEADING MANUFACTURER OF ECO-FRIENDLY SINGLE-USE
            TABLEWARE PRODUCTS MADE FROM RENEWABLE SUGARCANE BAGASSE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                A Sustainable Alternative to Plastic
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to create sustainable products that benefit the
                planet first. We are dedicated to providing environmentally
                friendly solutions for our customers that reduce their carbon
                footprint by switching to biodegradable alternatives for plastic
                single-use products.
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
              <span className="text-primary font-bold text-xl md:text-2xl">
                Join us to make
              </span>
              <span className="text-accent-foreground font-extrabold text-2xl md:text-4xl mt-2">
                BIG <span className="text-primary">small GREEN</span> change.
              </span>
            </div>
            {/* Floating Transparent Product Images */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-40 h-40 md:w-56 md:h-56 -rotate-12 drop-shadow-2xl">
              <Image
                src="/landing/vecteezy_a-plain-transparent-foam-tray-on-a-transparent-background_55533363.png"
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
              className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 rotate-15 drop-shadow-2xl">
              <Image
                src="/landing/vecteezy_a-plain-transparent-paper-plate-isolated-on-a-clean_55326108.png"
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
