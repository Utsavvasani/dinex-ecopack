"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Showcase a variety of real products from public/products using the infinite slider
// 4 main product categories as per catalog
const productCategories = [
  {
    name: "Round Plates",
    description: "Classic round biodegradable plates",
    image: "/landing/round-plates.png",
    link: "/products/round-plates",
  },
  {
    name: "Bowls",
    description: "Deep biodegradable serving bowls",
    image: "/landing/food-containers.png",
    link: "/products/bowls",
  },
  {
    name: "Meal Trays",
    description: "Multi-compartment food service",
    image: "/landing/meal-trays.png",
    link: "/products/meal-trays",
  },
  {
    name: "Clamshells",
    description: "Self-locking takeaway boxes",
    image: "/landing/clamshell.png",
    link: "/products/clamshells",
  },
];

export function ProductPreviewSection() {
  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4">
            <Link href="/products" className="group/badge">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest group-hover/badge:bg-primary group-hover/badge:text-primary-foreground transition-all">
                Our Products
              </div>
            </Link>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight">
              Our Premium{" "}
              <span className="text-primary mx-3 italic font-heading">
                Eco-Friendly
              </span>{" "}
              Selection
            </h2>

            <div className="h-1.5 w-24 bg-primary/30 rounded-full mx-auto" />

            <p className="text-muted-foreground text-lg max-w-2xl mt-2">
              Explore our complete range of biodegradable bagasse tableware
              designed for modern food service.
            </p>
          </motion.div>
        </div>

        {/* 4-Category Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Link key={index} href={category.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col aspect-4/5">
                {/* Product Image Area */}
                <div className="relative grow w-full bg-primary/5 transition-colors group-hover:bg-primary/10 overflow-hidden p-6">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Category Info */}
                <div className="p-5 bg-background relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-primary overflow-hidden">
                    <span className="transform translate-x-0 group-hover:translate-x-0 transition-transform duration-300">
                      Explore Details
                    </span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
