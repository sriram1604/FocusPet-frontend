"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { WindowsIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm shadow-slate-900/5"
          : "bg-white/60 backdrop-blur-sm border-b border-slate-200/40 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-slate-900 font-semibold tracking-tight transition-transform duration-200 hover:opacity-90"
        >
          <div className="relative w-10 h-10 rounded-xl bg-white border border-purple-100 shadow-sm flex items-center justify-center overflow-hidden p-1 group-hover:border-purple-300 transition-colors">
            <Image
              src="/images/Focuspet.png"
              alt="FocusPet Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold text-slate-900">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            Windows
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
          {SITE_CONFIG.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg transition-all text-xs lg:text-sm font-medium ${
                  isActive
                    ? "text-purple-700 bg-purple-50 border border-purple-200/80 shadow-xs"
                    : "text-slate-600 hover:text-purple-700 hover:bg-purple-50/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/download"
            className="group inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-all shadow-sm shadow-purple-500/20 active:scale-95"
          >
            <WindowsIcon className="w-3.5 h-3.5 text-white" />
            <span>Download for Windows</span>
            <ArrowRight className="w-3 h-3 text-purple-200 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-purple-700 bg-purple-50 border border-purple-200"
                  : "text-slate-700 hover:text-purple-700"
              }`}
            >
              Home
            </Link>
            {SITE_CONFIG.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-purple-700 bg-purple-50 border border-purple-200"
                      : "text-slate-700 hover:text-purple-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-200 mt-2">
              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold px-4 py-2.5 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-sm shadow-purple-500/20"
              >
                <WindowsIcon className="w-4 h-4 text-white" />
                <span>Download for Windows</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
