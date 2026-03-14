"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-5">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block">
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
            green is a must. Choosing eco-friendly living makes a difference.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-bold border-b border-primary-foreground/20 pb-2 inline-block">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-primary-foreground/90">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-sm text-primary-foreground/70">
                <span className="font-semibold block mb-1 text-primary-foreground/90">India Office</span>
                6 / 456, 3rd Floor, Kharadi Sheri,<br />
                Manchharpura, SURAT-395003
                <p className="mt-1 font-medium text-xs text-primary-foreground/50 italic">
                  GST: 24DJOPG2992B1Z8
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-primary-foreground/90">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-sm text-primary-foreground/70">
                <span className="font-semibold block mb-1 text-primary-foreground/90">UK Office</span>
                114, Belmont rise,<br />
                Cheam, London. SM26EE
                <p className="mt-1 font-medium text-xs text-primary-foreground/50 italic">
                  +44 7879905973
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
              href="mailto:dinexecopack@gmail.com"
              className="flex items-center space-x-3 text-primary-foreground/90 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="hover:underline">dinexecopack@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto pt-4 flex flex-col items-center gap-8">
        {/* Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-primary-foreground/5 text-primary-foreground/80 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-primary-foreground/5 text-primary-foreground/80 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-primary-foreground/5 text-primary-foreground/80 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-primary-foreground/5 text-primary-foreground/80 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="X (formerly Twitter)">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://wa.me/919624548030"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 rounded-full bg-primary-foreground/5 text-primary-foreground/80 hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
            aria-label="WhatsApp">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-primary-foreground/60 border-t border-primary-foreground/10 pt-8">
          <p>© {new Date().getFullYear()} Dinex Ecopack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
