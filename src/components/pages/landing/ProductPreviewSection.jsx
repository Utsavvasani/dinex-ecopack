"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Showcase a variety of real products from public/products using the infinite slider
// 4 main product categories as per catalog
const productCategories = [
  {
    name: "Plates",
    description: "Round & Square serving plates",
    image: "/assets/all_plates.jpeg",
    link: "/products?category=plates",
  },
  {
    name: "Meal Trays",
    description: "Multi-compartment food service",
    image: "/assets/imte_13.jpeg",
    link: "/products?category=trays",
  },
  {
    name: "Clamshells",
    description: "Self-locking takeaway boxes",
    image: "/assets/item_13.jpeg",
    link: "/products?category=clamshells",
  },
  {
    name: "Bowls & Cups",
    description: "Sauce & soup containers",
    image: "/assets/item_9.jpeg",
    link: "/products?category=bowls",
  },
];

export function ProductPreviewSection() {
  return (
    <section className="w-full py-24 bg-card overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Explore Our Catalog
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our complete range of biodegradable bagasse tableware
              designed for modern catering, takeaways, and everyday use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Link
              href="/products"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group px-6 py-2 rounded-full bg-primary/5 border border-primary/20">
              View Full Range
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 4-Category Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col aspect-4/5">
              {/* Product Image Area */}
              <div className="relative grow w-full bg-primary/5 transition-colors group-hover:bg-primary/10 overflow-hidden p-8">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Category Info */}
              <div className="p-6 bg-background relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary overflow-hidden">
                  <span className="transform translate-x-0 group-hover:translate-x-0 transition-transform duration-300">
                    Explore Details
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
