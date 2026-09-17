"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Zap,
  X,
  Monitor,
  Timer,
  Smartphone,
  Palette,
  ShieldCheck,
  ArrowRight,
  Smile,
} from "lucide-react";
import { WindowsIcon } from "@/components/Icons";

interface PetData {
  id: "cat" | "dog";
  name: string;
  emoji: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  traits: string[];
  capabilities: {
    title: string;
    desc: string;
    icon: React.ElementType;
  }[];
  moods: {
    state: string;
    label: string;
    speech: string;
  }[];
}

const PETS: Record<"cat" | "dog", PetData> = {
  cat: {
    id: "cat",
    name: "Focus Cat",
    emoji: "🐱",
    tagline: "Your calm little focus buddy.",
    badge: "Calm & Steady",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    image: "/images/cat.png",
    shortDesc:
      "Sits peacefully on your taskbar, gently napping while you do deep work, and politely reminds you when distraction time expires.",
    longDesc:
      "Focus Cat is designed for deep thinkers, writers, and developers who prefer a quiet, peaceful workspace. It stays quietly anchored to your taskbar and only perks up when social media feeds tempt you away.",
    traits: ["Gentle purrs when clicked", "Calm unobtrusive presence", "Soft tab close animation"],
    capabilities: [
      {
        title: "Taskbar Living",
        desc: "Gracefully enters from behind the Windows taskbar and sits by your workspace without blocking windows.",
        icon: Monitor,
      },
      {
        title: "Instagram & Shorts Tracking",
        desc: "Watches active doomscroll time on Instagram and YouTube Shorts with local stopwatch precision.",
        icon: Timer,
      },
      {
        title: "Gentle Tab Management",
        desc: "When daily limits are reached, the cat steps forward and softly closes the distracting browser tab.",
        icon: Smartphone,
      },
      {
        title: "Wardrobe & Style",
        desc: "Customize fur shades, eye styles, and equip accessories like bowties, crowns, and glasses.",
        icon: Palette,
      },
    ],
    moods: [
      { state: "idle", label: "Quiet Napping", speech: "Purring softly by the taskbar... Keep up the great work! ✨" },
      { state: "pet", label: "Pet Me", speech: "❤️ Purr... purr! Kitty feels appreciated!" },
      { state: "watching", label: "Watching Distraction", speech: "👀 Instagram feed detected. Your daily focus timer is ticking!" },
      { state: "timeout", label: "Time's Up", speech: "⏰ Daily limit reached! Tab gently closed. Time to get back in flow!" },
    ],
  },
  dog: {
    id: "dog",
    name: "Focus Dog",
    emoji: "🐶",
    tagline: "Your energetic focus companion.",
    badge: "Energetic & Cheerful",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    image: "/images/dog.png",
    shortDesc:
      "Wags its tail cheerfully, keeps high energy on your screen, and enthusiastically guides you back to your primary tasks.",
    longDesc:
      "Focus Dog is built for high-energy creators and busy multitaskers. With joyful animations and an upbeat attitude, it keeps you motivated and ensures social media breaks don't turn into lost hours.",
    traits: ["Bouncy tail wags on click", "Upbeat visual motivation", "Enthusiastic accountability"],
    capabilities: [
      {
        title: "Desktop Roaming",
        desc: "Plays along your desktop border, wags its tail, and celebrates whenever you complete a focus streak.",
        icon: Monitor,
      },
      {
        title: "Targeted Limit Enforcement",
        desc: "Only counts time while you are actively viewing distraction feeds, pausing when you return to work.",
        icon: Timer,
      },
      {
        title: "Tab Closer Action",
        desc: "Enthusiastically helps you break the endless scroll cycle by closing the expired media tab.",
        icon: Smartphone,
      },
      {
        title: "Custom Outfits",
        desc: "Dress your pup in cool sunglasses, crowns, headphones, and custom fur colors.",
        icon: Palette,
      },
    ],
    moods: [
      { state: "idle", label: "Happy Tail Wag", speech: "Woof! Sitting loyally while you do your best work! 🐾" },
      { state: "pet", label: "Pet Me", speech: "❤️ Woof woof! Tail wagging at maximum speed!" },
      { state: "watching", label: "Watching Distraction", speech: "👀 YouTube Shorts detected! I'm keeping you accountable!" },
      { state: "timeout", label: "Time's Up", speech: "⏰ Bark! Time's up! Let's get back to crushing your goals!" },
    ],
  },
};

export function PetShowcase() {
  const [activeModalPet, setActiveModalPet] = useState<"cat" | "dog" | null>(null);
  const [selectedMoodIndex, setSelectedMoodIndex] = useState(0);

  // Close modal on Escape key and lock background scrolling cleanly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalPet(null);
    };

    if (activeModalPet) {
      window.addEventListener("keydown", handleKeyDown);
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [activeModalPet]);

  const openPetModal = (petId: "cat" | "dog") => {
    setActiveModalPet(petId);
    setSelectedMoodIndex(0);
  };

  return (
    <section id="companions" className="py-20 md:py-28 border-t border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Companions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Choose your companion.
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Click on any companion to inspect their desktop abilities, interactive animations, and focus superpowers.
          </p>
        </div>

        {/* 2 Companions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Cat Card */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => openPetModal("cat")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openPetModal("cat");
              }
            }}
            className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer border bg-white border-slate-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              {/* Image with subtle float */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/images/cat.png"
                  alt="FocusPet Cat - Orange Tabby"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🐱</span>
                <h3 className="text-xl font-bold text-slate-900">Cat</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  Calm &amp; Steady
                </span>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-slate-700 mb-3">
                Your calm little focus buddy.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-6">
                Sits peacefully on your taskbar, gently napping while you do deep work, and politely reminds you when distraction time expires.
              </p>

              {/* Click prompt button */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-xl border border-purple-200 transition-colors shadow-xs">
                <span>View Full Functionalities</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Dog Card */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => openPetModal("dog")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openPetModal("dog");
              }
            }}
            className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer border bg-white border-slate-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              {/* Image with subtle float */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/images/dog.png"
                  alt="FocusPet Dog - Golden Pup"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🐶</span>
                <h3 className="text-xl font-bold text-slate-900">Dog</h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  Energetic &amp; Cheerful
                </span>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-slate-700 mb-3">
                Your energetic focus companion.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-6">
                Wags its tail cheerfully, keeps high energy on your screen, and enthusiastically guides you back to your primary tasks.
              </p>

              {/* Click prompt button */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-xl border border-purple-200 transition-colors shadow-xs">
                <span>View Full Functionalities</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL FOR PET FUNCTIONALITIES */}
      {activeModalPet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden animate-in fade-in duration-200">
          {/* Backdrop with 50% opacity veil over the website (no plain white, clearly shows background) */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
            onClick={() => setActiveModalPet(null)}
          />

          {/* Modal Container: Properly centered with max height, distinct elevation, and independent inner scroll */}
          <div className="relative w-full max-w-2xl max-h-[82vh] my-auto flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-black/30 z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
            {/* Modal Header Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-sm">🐾</span>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Companion Overview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalPet(null)}
                aria-label="Close popup"
                className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Inner Body (overscroll-contain prevents disturbing background website) */}
            <div className="overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7 flex-1 space-y-6 text-slate-800">
              {(() => {
                const pet = PETS[activeModalPet];
                const activeMood = pet.moods[selectedMoodIndex] || pet.moods[0];

                return (
                  <>
                    {/* Top Intro Section */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-purple-50/60 border border-purple-100 p-2 flex items-center justify-center shrink-0 shadow-inner">
                        <Image
                          src={pet.image}
                          alt={pet.name}
                          fill
                          sizes="112px"
                          className="object-contain p-2 animate-pet-idle"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                          <span className="text-xl">{pet.emoji}</span>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {pet.name}
                          </h3>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${pet.badgeColor}`}>
                            {pet.badge}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-purple-700 mb-2">
                          {pet.tagline}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                          {pet.longDesc}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Live Behavior Tester */}
                    <div className="pb-6 border-b border-slate-100">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                          <Smile className="w-3.5 h-3.5 text-purple-600" />
                          Live Behavior Reaction:
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          Click to test
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
                        {pet.moods.map((mood, idx) => (
                          <button
                            key={mood.state}
                            type="button"
                            onClick={() => setSelectedMoodIndex(idx)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              selectedMoodIndex === idx
                                ? "bg-purple-600 text-white shadow-sm shadow-purple-500/20"
                                : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200"
                            }`}
                          >
                            {mood.label}
                          </button>
                        ))}
                      </div>

                      {/* Speech Bubble */}
                      <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-950 flex items-start gap-2.5 shadow-xs">
                        <span className="text-base">💬</span>
                        <p className="leading-relaxed font-medium">
                          {activeMood.speech}
                        </p>
                      </div>
                    </div>

                    {/* Core Desktop Functionalities */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5 font-semibold">
                        Desktop Companion Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pet.capabilities.map((cap) => {
                          const Icon = cap.icon;
                          return (
                            <div
                              key={cap.title}
                              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                            >
                              <div className="w-8 h-8 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-slate-800">
                                  {cap.title}
                                </p>
                                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                  {cap.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Modal Bottom Footer Actions (Fixed at bottom of modal) */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Windows 10 / 11 Native Desktop App</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalPet(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors shadow-2xs"
                >
                  Close
                </button>
                <Link
                  href="/download"
                  onClick={() => setActiveModalPet(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition-all shadow-md shadow-purple-500/20"
                >
                  <WindowsIcon className="w-3.5 h-3.5" />
                  <span>Adopt &amp; Download</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
