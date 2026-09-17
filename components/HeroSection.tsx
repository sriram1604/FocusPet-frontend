"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ChevronRight, Sparkles, Clock, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const [activePet, setActivePet] = useState<"cat" | "dog">("cat");

  const petDetails = {
    cat: {
      name: "cat",
      image: "/images/cat.png",
      alt: "FocusPet Cat Companion",
      speech: "Ready to focus together? 🐾",
      tag: "Focus Cat",
    },
    dog: {
      name: "dog",
      image: "/images/dog.png",
      alt: "FocusPet Dog Companion",
      speech: "Ready to crush your goals? 🐾",
      tag: "Focus Dog",
    },
  };

  const current = petDetails[activePet];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle radial ambient purple glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs text-purple-800 shadow-xs mb-6 hover:border-purple-300 transition-colors">
          <span className="text-sm">🐾</span>
          <span className="font-semibold tracking-wide">Your little focus companion</span>
          <span className="w-1 h-1 rounded-full bg-purple-500"></span>
          <span className="text-purple-600 text-[11px] font-medium">Windows 10 / 11</span>
        </div>

        {/* Dynamic Headline with ONLY image inline: "Your [image] is watching." */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.2]">
          Stay focused. <br />
          <span className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent align-middle">
            <span>Your</span>
            <span className="relative inline-block w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 align-middle -mt-1 sm:-mt-2 mx-1 animate-pet-idle select-none pointer-events-none">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="(max-width: 640px) 44px, (max-width: 768px) 64px, 80px"
                className="object-contain drop-shadow-sm"
                priority
              />
            </span>
            <span>is watching.</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          A cute desktop companion that helps you control time spent on distracting websites — without getting in your way.
        </p>

        {/* Companion Switcher with Real Thumbnails */}
        <div className="mt-6 flex items-center justify-center">
          <div className="inline-flex p-1 bg-white border border-purple-200/90 rounded-full shadow-xs">
            <button
              type="button"
              onClick={() => setActivePet("cat")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activePet === "cat"
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-500/20"
                  : "text-slate-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src="/images/cat.png"
                  alt="Cat"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <span>Cat</span>
            </button>
            <button
              type="button"
              onClick={() => setActivePet("dog")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activePet === "dog"
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-500/20"
                  : "text-slate-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src="/images/dog.png"
                  alt="Dog"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <span>Dog</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-500/25 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download for Windows</span>
          </Link>
          <Link
            href="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm transition-all shadow-xs active:scale-95"
          >
            <span>See how it works</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Micro highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>100% Local &amp; Private</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>Instagram &amp; Shorts Limits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Interactive Companion</span>
          </div>
        </div>

        {/* Desktop Scene Representation */}
        <div className="mt-14 relative max-w-3xl mx-auto">
          {/* Outer window container */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-2 sm:p-3 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            {/* Window titlebar mock */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80 rounded-t-xl mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                FocusPet Workspace &bull; {current.tag} Active
              </span>
              <div className="w-10"></div>
            </div>

            {/* Desktop Stage Content */}
            <div className="relative min-h-[260px] sm:min-h-[300px] flex flex-col justify-end items-center bg-gradient-to-b from-purple-50/30 via-slate-50/50 to-purple-50/40 rounded-lg p-6 overflow-hidden">
              {/* Subtle background dot pattern */}
              <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

              {/* Status widget floating */}
              <div className="absolute top-4 left-4 sm:left-6 flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-800">Focus active</p>
                  <p className="text-[10px] text-slate-500">Watching Instagram &amp; Shorts</p>
                </div>
              </div>

              {/* Distraction limit counter pill */}
              <div className="absolute top-4 right-4 sm:right-6 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-sm text-right hidden sm:block">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-medium">Daily Remaining</span>
                <span className="text-xs font-mono font-bold text-purple-600">18m 42s</span>
              </div>

              {/* The Hero Pet (Cat or Dog) with dynamic switching & subtle animation */}
              <div
                onClick={() => setActivePet(activePet === "cat" ? "dog" : "cat")}
                title="Click to switch companion"
                className="relative z-10 flex flex-col items-center group cursor-pointer"
              >
                {/* Speech Bubble */}
                <div className="mb-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 text-[11px] font-semibold text-purple-900 shadow-sm animate-float-subtle">
                  {current.speech}
                </div>

                {/* Companion Image */}
                <div
                  key={activePet}
                  className="relative w-36 h-36 sm:w-44 sm:h-44 transition-all duration-300 group-hover:scale-105 animate-pet-idle"
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-contain drop-shadow-[0_12px_24px_rgba(124,58,237,0.15)]"
                    priority
                  />
                </div>
              </div>

              {/* Taskbar Bar */}
              <div className="w-full mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                    ⊞
                  </div>
                  <span>Taskbar Anchor ({current.tag})</span>
                </div>
                <span className="text-[10px] font-mono text-purple-700 font-medium">Desktop Overlay: Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
