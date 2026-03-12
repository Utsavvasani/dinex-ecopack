"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LucideRuler,
  LucideScale,
  LucidePackage,
  LucideLayers,
  LucideBox,
  LucideMaximize,
  LucideCuboid as Cuboid,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductDetails({ product }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Sync state with carousel
  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  // Keep it synced if the user drags the carousel
  if (api) {
    api.on("select", onSelect);
  }

  const handleThumbnailClick = (index) => {
    if (api) {
      api.scrollTo(index);
      setCurrent(index);
    }
  };

  const specItems = [
    {
      label: "Product Size",
      value: product.specs.size,
      icon: <LucideRuler className="size-5 md:size-6" />,
    },
    {
      label: "Product Weight",
      value: product.specs.weight,
      icon: <LucideScale className="size-5 md:size-6" />,
    },
    {
      label: "PCS In Pack",
      value: product.specs.pcsInPack,
      icon: <LucidePackage className="size-5 md:size-6" />,
    },
    {
      label: "Pack In Carton",
      value: product.specs.packInCarton,
      icon: <LucideLayers className="size-5 md:size-6" />,
    },
    {
      label: "Total PCS In Carton",
      value: product.specs.totalPcsInCarton,
      icon: <LucideBox className="size-5 md:size-6" />,
    },
    {
      label: "Box Dimension L x W x H",
      value: product.specs.boxDimension,
      icon: <LucideMaximize className="size-5 md:size-6" />,
    },
    {
      label: "Box CBM",
      value: product.specs.boxCBM,
      icon: <Cuboid className="size-5 md:size-6" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mb-10 bg-background">
      {/* Top Section: Side By Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Left: Images */}
        <div className="space-y-4">
          <Carousel setApi={setApi} className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {product.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative aspect-square rounded-md overflow-hidden bg-primary/5 border border-border flex items-center justify-center p-8">
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx}`}
                      fill
                      className="object-contain"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Nav Arrows positioned inside on mobile, outside on desktop */}
            <CarouselPrevious className="left-2 sm:-left-12 md:-left-16 bg-background/80 sm:bg-background border-border text-foreground hover:bg-primary hover:text-white" />
            <CarouselNext className="right-2 sm:-right-12 md:-right-16 bg-background/80 sm:bg-background border-border text-foreground hover:bg-primary hover:text-white" />
          </Carousel>

          {/* Thumbnails */}
          <div className="flex justify-start gap-4 max-w-sm xl:max-w-md mx-auto lg:ml-21">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`relative w-16 aspect-square rounded overflow-hidden bg-transparent transition-all ${
                  current === idx
                    ? "border-2 border-primary"
                    : "border border-border hover:border-primary/50"
                }`}>
                <Image
                  src={img}
                  alt={`${product.name} thumb ${idx}`}
                  fill
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
            <span className="w-3 h-[2px] bg-primary" />
            Material – {product.material}
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm md:text-base pt-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Specifications Grid */}
      <div className="flex flex-col gap-2 mt-5 w-full lg:pl-21">
        <h3 className="text-xl md:text-2xl font-black text-primary tracking-tight">
          Product Specifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 bg-background rounded-2xl border border-border/60 overflow-hidden divide-y divide-border/60 sm:divide-y-0 sm:border-0 sm:bg-transparent">
          {specItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 sm:p-0 sm:py-6 sm:border-b sm:border-border/40">
              <div className="shrink-0 p-2.5 sm:p-3 bg-primary/5 border border-primary/20 rounded-xl text-primary mt-0.5">
                {item.icon}
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-sm md:text-base font-semibold text-foreground whitespace-pre-line leading-relaxed">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
