import React from "react";
import type { Metadata } from "next";
import { PetShowcase } from "@/components/PetShowcase";
import { Sparkles, Palette, Crown, Glasses, Music, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Companions — FocusPet Desktop Companions",
  description:
    "Meet the FocusPet companions: Cat and Dog. Discover their personalities, desktop animations, customizable colors, eyes, and accessories.",
};

export default function CompanionsPage() {
  const accessories = [
    {
      icon: Crown,
      name: "Royal Crown",
      description: "A shiny golden crown for the most distinguished desk royalty.",
    },
    {
      icon: Glasses,
      name: "Cool Sunglasses",
      description: "Dark shades for when your companion is in deep, uninterrupted focus mode.",
    },
    {
      icon: Heart,
      name: "Dapper Bowtie",
      description: "A sharp crimson bowtie to keep things professional and adorable.",
    },
    {
      icon: Music,
      name: "Lo-Fi Headphones",
      description: "Cute over-ear headphones matching your study playlist vibes.",
    },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Companion Roster</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Meet your{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              desk companions
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Whether you love a quiet, peaceful cat or a vibrant, tail-wagging dog, FocusPet companions bring warmth and focus to your workstation.
          </p>
        </div>

        {/* Pet Showcase with interactive popups */}
        <PetShowcase />

        {/* Customization Details */}
        <div className="mt-20 rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-3 shadow-xs">
              <Palette className="w-3.5 h-3.5" />
              <span>Wardrobe &amp; Styles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Customize with accessories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Unlock new looks and match your companion to your desktop aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((acc) => {
              const Icon = acc.icon;
              return (
                <div
                  key={acc.name}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center hover:border-purple-300 hover:bg-purple-50/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {acc.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-500/20"
            >
              <span>Download &amp; Adopt Your Pet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
