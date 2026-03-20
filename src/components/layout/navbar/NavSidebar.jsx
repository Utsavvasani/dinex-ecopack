"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
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
      {navDropdowns.map(({ key, title, items, href }) => (
        <AccordionItem
          key={key}
          value={key}
          className="border-b border-gray-100">
          <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline hover:text-primary [&>svg]:text-foreground">
            {title.charAt(0) + title.slice(1).toLowerCase()}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col space-y-2 pb-4">
            {href && (
              <SheetClose asChild>
                <Link
                  href={href}
                  className="text-sm font-bold text-primary hover:underline transition-colors pl-4 py-1 mb-2">
                  View All {title.charAt(0) + title.slice(1).toLowerCase()}
                </Link>
              </SheetClose>
            )}
            {items.map((item) => (
              <SheetClose asChild key={item.title}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors pl-4 py-1">
                  {item.title}
                </Link>
              </SheetClose>
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
      <SheetTrigger className="lg:hidden p-2 text-white hover:text-white/80 transition-colors">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm bg-white border-l border-gray-100 p-0 overflow-y-auto">
        <SheetHeader className="px-6 pt-8 pb-4">
          <SheetTitle className="text-foreground text-xl font-bold">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col px-6 pb-6">
          <SheetClose asChild>
            <Link
              href="/about"
              className="text-base font-semibold text-foreground hover:text-primary transition-colors py-4 border-b border-gray-100">
              About Us
            </Link>
          </SheetClose>

          <NavSidebarAccordion />

          <SheetClose asChild>
            <Link
              href="/blog"
              className="text-base font-semibold text-foreground hover:text-primary transition-colors py-4 border-t border-b border-gray-100">
              Blog
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Contact Us
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
