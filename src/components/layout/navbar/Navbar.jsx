"use client";

import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "@/components/layout/navbar/NavMenu";
import { NavSidebar } from "@/components/layout/navbar/NavSidebar";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between bg-primary/85 backdrop-blur-md px-6 xl:px-12 py-3 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Dinex Logo"
            width={90}
            height={10}
            className="object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/80 transition-colors">
            <Phone className="size-4" />
          </Link>
          <NavSidebar />
        </div>

        {/* Desktop Nav + CTA */}
        <NavMenu />
      </header>
    </div>
  );
}
