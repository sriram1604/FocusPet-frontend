"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Monitor, CheckCircle, ExternalLink, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { WindowsIcon } from "@/components/Icons";

export function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200 relative overflow-hidden">
      {/* Background purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-14 text-center shadow-xl shadow-purple-500/5 relative overflow-hidden">
          {/* Top Pet Avatar cluster */}
          <div className="flex items-center justify-center -space-x-3 mb-6">
            <div className="relative w-14 h-14 rounded-full bg-purple-50 border-2 border-purple-200 overflow-hidden shadow-sm">
              <Image
                src="/images/cat.png"
                alt="Cat companion"
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </div>
            <div className="relative w-14 h-14 rounded-full bg-purple-50 border-2 border-purple-200 overflow-hidden shadow-sm z-10">
              <Image
                src="/images/dog.png"
                alt="Dog companion"
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Ready to focus?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 font-normal">
            Bring your new desktop companion home. Start taking control of your daily focus today with FocusPet for Windows.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={SITE_CONFIG.downloads.mainFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-xl shadow-purple-500/25 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
            </a>

            <Link
              href="/download#installation-guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all shadow-2xs hover:border-purple-200 active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Installation Guide</span>
            </Link>
          </div>

          {/* Platform badge */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200 font-medium">
              <WindowsIcon className="w-3.5 h-3.5 text-purple-700" />
              Windows 10 / 11 (64-bit)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200 font-medium">
              <Monitor className="w-3.5 h-3.5 text-purple-700" />
              {SITE_CONFIG.downloads.installerSize} Setup Package
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Local Desktop Application
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
