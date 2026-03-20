"use client";

import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "@/components/layout/navbar/NavMenu";
import { NavSidebar } from "@/components/layout/navbar/NavSidebar";
import { Phone, Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const phoneMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(event.target)) {
        setShowPhoneMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const phoneNumbers = [
    { label: "India Office", value: "+91 9274748030", href: "tel:+919274748030" },
    { label: "UK Office", value: "+44 7879905973", href: "tel:+447879905973" },
  ];

  return (
    <div className="fixed top-0 z-50 w-full pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between bg-primary/85 backdrop-blur-md px-6 xl:px-12 py-3 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group perspective-1000">
          <Image
            src="/logo.png"
            alt="DineX Logo"
            width={90}
            height={10}
            className="object-contain brightness-0 invert transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_8px_16px_rgba(255,255,255,0.4)]"
            priority
          />
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <div className="relative" ref={phoneMenuRef}>
            <button
              onClick={() => setShowPhoneMenu(!showPhoneMenu)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-white/80 transition-colors shadow-lg"
              aria-label="Contact Numbers"
            >
              <Phone className="size-4" />
            </button>

            {showPhoneMenu && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50 overflow-hidden">
                <div className="px-4 py-2 border-b border-gray-50 mb-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Number</p>
                </div>
                {phoneNumbers.map((num) => (
                  <a
                    key={num.value}
                    href={num.href}
                    className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                    onClick={() => setShowPhoneMenu(false)}
                  >
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-0.5">
                      {num.label}
                    </span>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {num.value}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <NavSidebar />
        </div>

        {/* Desktop Nav + CTA */}
        <NavMenu />
      </header>
    </div>
  );
}
