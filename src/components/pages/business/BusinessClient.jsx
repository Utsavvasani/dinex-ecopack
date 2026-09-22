"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Copy,
  Check,
  Smartphone,
  Maximize2,
  RotateCw,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Share2,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";

export default function BusinessClient() {
  const [viewMode, setViewMode] = useState("mockup"); // 'mockup' | 'expanded'
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [frameKey, setFrameKey] = useState(0);

  const cardUrl = "https://tapmo.io/dinexecopack";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleRefresh = () => {
    setLoading(true);
    setFrameKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/70 pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <JsonLd
        type="breadcrumb"
        data={{
          links: [
            { name: "Home", url: "/" },
            { name: "Business Profile", url: "/business" },
          ],
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* ── HEADER & HERO ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Official Digital Profile</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            DineX Ecopack Business Profile
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Connect directly with our founder,{" "}
            <strong className="text-gray-900 font-semibold">
              Mr. Deep R Gediya
            </strong>
            . View our verified digital business card, save contact info
            instantly, explore product portfolios, or start a collaboration.
          </p>

          {/* Controls & Quick Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={cardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Open in Tapmo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              title="Copy Profile URL"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Desktop View Switcher */}
            <div className="hidden sm:inline-flex items-center p-1 bg-gray-100 rounded-xl border border-gray-200/80">
              <button
                type="button"
                onClick={() => setViewMode("mockup")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "mockup"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                title="Mobile Mockup View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("expanded")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "expanded"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                title="Expanded Wide View"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expanded</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all shadow-sm"
              title="Reload Frame"
              aria-label="Reload Frame"
            >
              <RotateCw
                className={`w-4 h-4 ${loading ? "animate-spin text-primary" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* ── IFRAME VIEWPORT CONTAINER ── */}
        <div className="relative mx-auto flex justify-center items-center">
          {/* Subtle decorative glowing background blurs */}
          <div
            className="absolute -top-12 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -right-12 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {viewMode === "mockup" ? (
            /* ── Mockup Device Frame (Optimized for Tapmo 450px Card) ── */
            <div className="w-full max-w-[440px] px-2 sm:px-0 transition-all duration-300">
              <div className="relative rounded-[36px] sm:rounded-[48px] p-2.5 sm:p-3 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_40px_rgba(16,185,129,0.12)] ring-1 ring-white/15">
                {/* Speaker / Dynamic Island Top Bar */}
                <div className="relative py-2 hidden sm:flex justify-center items-center">
                  <div className="w-24 h-4 bg-black rounded-full ring-1 ring-neutral-800 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-900 ring-1 ring-neutral-700" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </div>
                </div>

                {/* Inner Screen Container */}
                <div className="relative w-full h-[740px] sm:h-[780px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#050505] shadow-inner">
                  {loading && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] text-white p-6 gap-3">
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                        <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                      </div>
                      <p className="text-sm font-medium text-neutral-300">
                        Loading Business Profile...
                      </p>
                      <p className="text-xs text-neutral-500">
                        Connecting to tapmo.io
                      </p>
                    </div>
                  )}

                  <iframe
                    key={frameKey}
                    src={cardUrl}
                    title="DineX Ecopack Business Profile - Tapmo"
                    className="w-full h-full border-0 bg-[#050505]"
                    allow="clipboard-write; web-share; accelerometer; autoplay; encrypted-media"
                    loading="lazy"
                    onLoad={() => setLoading(false)}
                  />
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="py-2 hidden sm:flex justify-center">
                  <div className="w-32 h-1 bg-neutral-700 rounded-full" />
                </div>
              </div>
            </div>
          ) : (
            /* ── Expanded Full Width Frame ── */
            <div className="w-full max-w-5xl rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050505] shadow-2xl ring-1 ring-neutral-800 transition-all duration-300">
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-xs text-neutral-400 font-mono hidden sm:inline">
                    https://tapmo.io/dinexecopack
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={cardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>External View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative w-full h-[800px] bg-[#050505]">
                {loading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] text-white p-6 gap-3">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                      <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    </div>
                    <p className="text-sm font-medium text-neutral-300">
                      Loading Business Profile...
                    </p>
                  </div>
                )}

                <iframe
                  key={frameKey}
                  src={cardUrl}
                  title="DineX Ecopack Business Profile - Tapmo"
                  className="w-full h-full border-0 bg-[#050505]"
                  allow="clipboard-write; web-share; accelerometer; autoplay; encrypted-media"
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          )}
        </div>

        {/* ── HIGHLIGHT TILES ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              One-Tap Contact Save
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Save Mr. Deep R Gediya's verified details, email, and company
              headquarters straight into your smartphone contact book.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Catalogs & Inquiries
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore our sugarcane bagasse tableware, meal trays, and kraft
              paper bowls. Request samples and export pricing directly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Global Supply Network
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Manufacturing in Surat, India with an international sales office in
              London, UK servicing businesses across the globe.
            </p>
          </div>
        </div>

        {/* ── FAST TOUCHPOINTS ── */}
        <div className="rounded-3xl bg-primary text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div
            className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to Discuss a Partnership?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl">
                Get in touch with our team directly for custom mold designs,
                private labeling, bulk container orders, or distributorships.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919274748030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-primary font-bold text-sm hover:bg-white/90 transition-all shadow-md"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-foreground/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
              >
                <span>Contact Page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
