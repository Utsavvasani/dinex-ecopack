"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-background border border-border rounded-4xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="w-full flex flex-col h-full">
        {/* Featured Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-1 gap-6">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                {post.date}
              </div>
            </div>

            {/* Tags moved to content area */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-black tracking-tight text-foreground transition-colors leading-[1.2]">
              {post.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed font-medium line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-between hover:bg-primary hover:text-white group/btn rounded-2xl h-12 px-6">
              <span className="font-bold uppercase tracking-widest text-xs">
                Read More
              </span>
              <ArrowRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
