"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navDropdowns } from "@/lib/navConstants";

// ─── NavSidebarAccordion ──────────────────────────────────────────────────────
function NavSidebarAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {navDropdowns.map(({ key, title, items }) => (
        <AccordionItem
          key={key}
          value={key}
          className="border-b border-white/20">
          <AccordionTrigger className="text-base font-semibold text-white hover:no-underline hover:text-white/70 [&>svg]:text-white">
            {title.charAt(0) + title.slice(1).toLowerCase()}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col space-y-2 pb-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors pl-4 py-1">
                {item.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// ─── NavSidebar ───────────────────────────────────────────────────────────────
export function NavSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm border-l border-white/20 bg-primary/15 backdrop-blur-xl p-0 text-white overflow-y-auto">
        <SheetHeader className="px-6 pt-8 pb-4">
          <SheetTitle className="text-white text-xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col px-6 pb-6">
          <Link
            href="/about"
            className="text-base font-semibold text-white hover:text-white/70 transition-colors py-4 border-b border-white/20">
            About Us
          </Link>

          <NavSidebarAccordion />

          <Link
            href="/blog"
            className="text-base font-semibold text-white hover:text-white/70 transition-colors py-4 border-t border-b border-white/20">
            Blog
          </Link>
          <Link
            href="/career"
            className="text-base font-semibold text-white hover:text-white/70 transition-colors py-4 border-b border-white/20">
            Career
          </Link>
          <Link
            href="/contact"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
