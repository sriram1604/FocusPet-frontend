"use client";

import React from "react";
import Image from "next/image";
import { Download, BookOpen, PlayCircle, ExternalLink, Monitor, ShieldCheck, Sparkles } from "lucide-react";
import { WindowsIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function DownloadHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 pb-12 text-center">
      {/* Pet Avatars Floating Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-purple-200/90 shadow-xs mb-6">
        <div className="flex items-center -space-x-2">
          <div className="relative w-6 h-6 rounded-full bg-purple-50 border border-purple-200 overflow-hidden">
            <Image
              src="/images/cat.png"
              alt="Cat companion"
              fill
              sizes="24px"
              className="object-contain p-0.5"
            />
          </div>
          <div className="relative w-6 h-6 rounded-full bg-purple-50 border border-purple-200 overflow-hidden">
            <Image
              src="/images/dog.png"
              alt="Dog companion"
              fill
              sizes="24px"
              className="object-contain p-0.5"
            />
          </div>
        </div>
        <span className="text-xs font-semibold text-purple-900">
          Windows Desktop Productivity Companion
        </span>
        <span className="w-1 h-1 rounded-full bg-purple-400"></span>
        <span className="text-[11px] font-mono font-medium text-purple-700">
          v1.0.0
        </span>
      </div>

      {/* Primary Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
        Download{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
          FocusPet
        </span>
      </h1>

      <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Focus better with your desktop companion. Download the standalone Windows installer and connect your browser companion in minutes.
      </p>

      {/* Hero CTA Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
        <a
          href={SITE_CONFIG.downloads.mainFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-500/25 active:scale-95"
        >
          <WindowsIcon className="w-4 h-4 text-white" />
          <span>Download for Windows</span>
          <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
        </a>

        <button
          type="button"
          onClick={() => scrollToSection("installation-guide")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all shadow-2xs hover:border-purple-200 active:scale-95"
        >
          <PlayCircle className="w-4 h-4 text-purple-600" />
          <span>Installation Guide &amp; Video</span>
        </button>
      </div>

      {/* Specs Badges Line */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
          <WindowsIcon className="w-3.5 h-3.5 text-purple-600" />
          Windows 10 / 11 (64-bit)
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
          <Monitor className="w-3.5 h-3.5 text-purple-600" />
          Installer Size: {SITE_CONFIG.downloads.installerSize}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          100% Local &amp; Private
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Chrome &amp; Edge Companion
        </span>
      </div>
    </section>
  );
}
