import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-white border border-purple-100 shadow-xs flex items-center justify-center p-1">
              <Image
                src="/images/Focuspet.png"
                alt="FocusPet Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900">{SITE_CONFIG.name}</p>
              <p className="text-slate-500">A tiny companion for better focus.</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 font-medium">
            {SITE_CONFIG.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-purple-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.developer.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200 transition-colors shadow-2xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200 transition-colors shadow-2xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.developer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200 transition-colors shadow-2xs"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <p>
            &copy; {new Date().getFullYear()} FocusPet. Created by {SITE_CONFIG.developer.name}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-purple-700 font-semibold">Windows Desktop Companion</span>
            <span>&bull;</span>
            <a
              href="#"
              className="hover:text-purple-700 transition-colors inline-flex items-center gap-1 text-slate-500"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
