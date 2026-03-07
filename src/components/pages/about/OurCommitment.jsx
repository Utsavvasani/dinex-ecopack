"use client";

import { Award } from "lucide-react";
import { GlowCard } from "@/components/shared/GlowCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { COMMITMENTS } from "@/lib/about.data";

function CommitmentCard({ item, delay }) {
  return (
    <GlowCard delay={delay}>
      <div className="flex flex-col gap-5 p-7">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:scale-110 transition-all duration-300">
          {item.icon}
        </div>
        <h4 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </GlowCard>
  );
}

export function OurCommitment() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-14">
        <SectionHeader
          badge={
            <>
              <Award size={13} /> Our Commitment
            </>
          }
          title={
            <>
              What We <span className="text-primary">Stand For</span>
            </>
          }
          subtitle="Every decision we make is guided by sustainability, quality, and global responsibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMITMENTS.map((item, idx) => (
            <CommitmentCard key={item.title} item={item} delay={0.1 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
