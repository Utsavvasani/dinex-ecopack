"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navDropdowns, navLinks } from "@/lib/navConstants";

const NAV_TRIGGER_STYLE =
  "text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white data-[state=open]:hover:bg-white/10 bg-transparent text-xs xl:text-sm font-semibold tracking-wide transition-colors";

// ─── NavListItem ──────────────────────────────────────────────────────────────
const NavListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "group h-full block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            className,
          )}
          {...props}>
          <div className="text-sm font-medium leading-none group-hover:text-primary-foreground">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-foreground/70 group-hover:text-primary-foreground/90 transition-colors">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  ),
);
NavListItem.displayName = "NavListItem";

// ─── NavDropdown ──────────────────────────────────────────────────────────────
function NavDropdown({ title, items, isGrid, isActive }) {
  return (
    <NavigationMenuItem className="cursor-pointer">
      <NavigationMenuTrigger
        className={cn(
          "cursor-pointer",
          NAV_TRIGGER_STYLE,
          isActive && "text-primary bg-white/10",
        )}>
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {isGrid ? (
          <ul className="flex w-[800px] justify-between gap-4 p-1 lg:w-[1000px]">
            {items.map((item) => (
              <li key={item.title} className="flex-1">
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="group flex flex-col items-center select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-primary focus:bg-primary">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4 bg-white shadow-sm ring-1 ring-black/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center text-sm font-medium leading-none group-hover:text-primary-foreground">
                      {item.title}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul
            className={cn(
              "grid w-[400px] gap-3 p-1",
              items.length === 1
                ? "md:w-[400px]"
                : items.length === 2
                  ? "md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:grid-cols-2"
                  : "md:w-[500px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3",
            )}>
            {items.map((item) => (
              <NavListItem key={item.title} title={item.title} href={item.href}>
                {item.description}
              </NavListItem>
            ))}
          </ul>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

import { usePathname } from "next/navigation";

// ─── NavMenu ──────────────────────────────────────────────────────────────────
export function NavMenu() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <NavigationMenu className="hidden lg:flex shrink-0">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                NAV_TRIGGER_STYLE,
                isActive("/about") && "text-primary bg-white/10",
              )}>
              <Link href="/about">ABOUT US</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {navDropdowns.map((dropdown) => {
            const isAnyActive = dropdown.items.some((item) =>
              isActive(item.href),
            );
            return (
              <NavDropdown
                key={dropdown.key}
                title={dropdown.title}
                items={dropdown.items}
                isGrid={dropdown.isGrid}
                isActive={isAnyActive}
              />
            );
          })}

          {navLinks.slice(1).map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  NAV_TRIGGER_STYLE,
                  isActive(link.href) && "text-primary bg-white/10",
                )}>
                <Link href={link.href}>{link.label.toUpperCase()}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA */}
      <div className="hidden lg:flex shrink-0 items-center">
        <Link
          href="/contact"
          className={cn(
            "inline-flex h-8 xl:h-10 items-center justify-center rounded-full bg-white px-3 xl:px-6 text-xs xl:text-sm font-semibold text-black transition-colors hover:bg-white/85 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
            pathname === "/contact" && "ring-2 ring-primary ring-offset-2",
          )}>
          CONTACT US
        </Link>
      </div>
    </>
  );
}
