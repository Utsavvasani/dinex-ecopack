"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block bg-white/10 p-2 rounded-xl backdrop-blur-sm">
            <Image
              src="/logo.png"
              alt="Dinex Logo"
              width={120}
              height={40}
              className="object-contain brightness-0 invert"
              priority
            />
          </Link>
          <p className="max-w-xs text-primary-foreground/80 leading-relaxed">
            Manufacturer of biodegradable bagasse tableware products. Living
            green is a must. Eco-living style is a choice.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold border-b border-primary-foreground/20 pb-2 inline-block">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-primary-foreground/90">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">UK Office:</p>
                <p className="text-sm text-primary-foreground/70">
                  114 Belmont rise, Sutton,
                  <br />
                  London, SM2 6EE, UK
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-primary-foreground/90 mt-2">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 opacity-0" />
              <div>
                <p className="font-medium">India Office:</p>
                <p className="text-sm text-primary-foreground/70">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold border-b border-primary-foreground/20 pb-2 inline-block">
            Get in Touch
          </h4>
          <div className="space-y-4">
            <a
              href="tel:+919624548030"
              className="flex items-center space-x-3 text-primary-foreground/90 hover:text-white transition-colors group">
              <Phone className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>+91 9624548030</span>
            </a>
            <a
              href="tel:+447879905973"
              className="flex items-center space-x-3 text-primary-foreground/90 hover:text-white transition-colors group">
              <Phone className="w-5 h-5 shrink-0 opacity-0" />
              <span>+44 7879 905973</span>
            </a>
            <a
              href="mailto:dinexecopack@gmail.com"
              className="flex items-center space-x-3 text-primary-foreground/90 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="hover:underline">dinexecopack@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Dinex Ecopack. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="/privacy"
            className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-primary-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
