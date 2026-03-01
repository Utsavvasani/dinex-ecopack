"use client";

import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "@/components/layout/navbar/NavMenu";
import { NavSidebar } from "@/components/layout/navbar/NavSidebar";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed top-6 z-50 w-full flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between rounded-full border border-white/20 bg-primary/15 backdrop-blur-xl shadow-xl pr-2 pl-6 py-2 max-w-6xl w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Dinex Logo"
            width={90}
            height={10}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
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
