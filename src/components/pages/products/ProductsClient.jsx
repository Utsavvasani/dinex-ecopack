"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories } from "@/lib/productData";
import { ProductDetails } from "@/components/pages/products/ProductDetails";
import JsonLd from "@/components/JsonLd";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].slug);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <JsonLd 
        type="breadcrumb" 
        data={{
          links: [
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" }
          ]
        }} 
      />
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
            DineX Ecopack
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-foreground decoration-primary/30">
            Explore Our <span className="italic font-heading text-primary">Products</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover our premium range of 100% biodegradable and compostable bagasse tableware. 
            Sustainable solutions for every dining occasion.
          </motion.p>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="container mx-auto px-4 mb-12 flex justify-center">
        <div className="w-full max-w-md md:max-w-fit mx-auto">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-2 md:gap-3 p-1.5 md:p-2 bg-muted/10 backdrop-blur-sm rounded-3xl md:rounded-full border border-border/40">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`relative px-4 md:px-8 py-3.5 md:py-2.5 rounded-2xl md:rounded-full text-[11px] md:text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === category.slug
                    ? "text-primary-foreground border-primary shadow-sm"
                    : "text-muted-foreground border-border/40 hover:text-primary hover:border-primary/30 hover:bg-primary/5"
                }`}>
                {selectedCategory === category.slug && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-[inherit] z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-20">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductDetails key={product.id} product={product} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground italic">No products found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
