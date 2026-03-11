"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Leaf, Factory, Settings, UtensilsCrossed } from "lucide-react";

const steps = [
  {
    label: "Sugar Cane",
    iconPath: "/landing/sugarcane.png",
    description: "Harvesting renewable sugarcane bagasse",
  },
  {
    label: "Sugar Factory",
    iconComponent: Factory,
    description: "Processing sugar from harvested cane",
  },
  {
    label: "Sugar Cane Pulp",
    iconPath: "/landing/pulp.png",
    description: "Collecting residual bagasse fibers",
  },
  {
    label: "Pulp Process",
    icon: "⚙️",
    description: "Transforming fibers into eco-pulp",
  },
  {
    label: "Biodegradable Product",
    icon: "🍽️",
    description: "Pressing pulp into premium tableware",
  },
  {
    label: "Compost & Farming",
    iconPath: "/landing/compost.png",
    description: "Composting back to soil in 90 days",
  },
];

import { useMotionValue, useTransform, animate } from "framer-motion";

export function ProcessLifecycleSection() {
  const [radius, setRadius] = useState(240);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const rotation = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(180);
      } else {
        setRadius(210);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous linear rotation for the motion value
  useEffect(() => {
    const controls = animate(rotation, -360, {
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    });
    return controls.stop;
  }, [rotation]);

  // Update active step text by listening to the motion value - Throttled for performance
  useEffect(() => {
    let lastUpdate = 0;
    const unsubscribe = rotation.on("change", (latest) => {
      const now = Date.now();
      if (now - lastUpdate < 100) return; // Only check every 100ms
      lastUpdate = now;

      const idx =
        Math.floor(((360 - latest) % 360) / (360 / steps.length)) %
        steps.length;
      if (idx !== activeStepIdx) {
        setActiveStepIdx(idx);
      }
    });
    return unsubscribe;
  }, [rotation, activeStepIdx]);

  const activeStep = steps[activeStepIdx];

  return (
    <section className="w-full pt-10 md:py-20 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        {/* Section Header - Restored */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Sustainability Loop
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight">
            Product{" "}
            <span className="text-primary italic font-heading">Life Cycle</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary/30 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Left Column: Circular Track */}
          <div className="relative h-[400px] md:h-[550px] flex items-center justify-center order-2 lg:order-1">
            {/* Main Circular Track */}
            <div
              style={{ width: radius * 2, height: radius * 2 }}
              className="absolute rounded-full border border-dashed border-primary/20 shrink-0"
            />

            {/* Satellite Items - Each moved via specific x/y transforms based on rotation */}
            {steps.map((step, idx) => {
              const baseAngle = (idx * 360) / steps.length;

              const x = useTransform(
                rotation,
                (r) =>
                  Math.cos(((baseAngle + r - 90) * Math.PI) / 180) * radius,
              );
              const y = useTransform(
                rotation,
                (r) =>
                  Math.sin(((baseAngle + r - 90) * Math.PI) / 180) * radius,
              );

              const isActive = idx === activeStepIdx;

              return (
                <motion.div
                  key={idx}
                  className="absolute pointer-events-auto z-10"
                  style={{ x, y }}>
                  <div
                    className={`flex flex-col items-center gap-2 w-28 md:w-36 text-center ${isActive ? "scale-110" : "scale-90 opacity-60"} transition-opacity duration-300`}>
                    <div
                      className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${isActive ? "bg-white border-primary shadow-md" : "bg-transparent border-primary/10"} border-2 flex items-center justify-center relative overflow-hidden transition-colors`}>
                      {step.iconPath ? (
                        <img
                          src={step.iconPath}
                          alt={step.label}
                          className="w-8 h-8 md:w-12 md:h-12 object-contain p-0.5"
                        />
                      ) : step.iconComponent ? (
                        (() => {
                          const IconComp = step.iconComponent;
                          return (
                            <IconComp className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                          );
                        })()
                      ) : (
                        <span className="text-2xl md:text-3xl">
                          {step.icon}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-[10px] md:text-[12px] font-bold uppercase tracking-wider leading-tight max-w-[100px] md:max-w-[120px] transition-colors ${isActive ? "text-primary" : "text-foreground/40"}`}>
                      {step.label}
                    </h3>
                  </div>
                </motion.div>
              );
            })}

            {/* Center Graphic */}
            <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex flex-col items-center justify-center shadow-xl border-4 border-white overflow-hidden">
              <div className="text-white font-black text-center flex flex-col items-center leading-none">
                <span className="text-2xl md:text-3xl mb-1">100%</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black opacity-90">
                  Natural
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2 space-y-8 lg:pl-12">
            <motion.div
              key={activeStepIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6">
              <div className="flex items-center gap-5 text-primary">
                <div className="p-3 rounded-2xl bg-primary/5 border border-primary/10">
                  {activeStep.iconPath ? (
                    <img
                      src={activeStep.iconPath}
                      alt={activeStep.label}
                      className="w-10 h-10 md:w-14 md:h-14 object-contain"
                    />
                  ) : activeStep.iconComponent ? (
                    (() => {
                      const IconComp = activeStep.iconComponent;
                      return (
                        <IconComp className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                      );
                    })()
                  ) : activeStep.icon ? (
                    <span className="text-4xl md:text-5xl">
                      {activeStep.icon}
                    </span>
                  ) : (
                    <Leaf className="w-10 h-10 md:w-14 md:h-14 rotate-[-45deg]" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-medium tracking-tight text-foreground/50">
                    The Process
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none mt-1 text-foreground">
                    {activeStep.label}
                  </h2>
                </div>
              </div>

              <div className="space-y-6 max-w-xl">
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium">
                  {activeStep.description}
                </p>
                <div className="h-1.5 w-20 bg-primary/20 rounded-full" />
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                  Ensuring high quality and 100% biodegradable standards
                  throughout the entire cycle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
