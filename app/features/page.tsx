import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  Timer,
  Smartphone,
  BellRing,
  EyeOff,
  Palette,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features — FocusPet Desktop Companion",
  description:
    "Explore the genuine productivity features of FocusPet: Desktop companion overlay, selective distraction timers for Instagram and YouTube Shorts, and deep pet customization.",
};

export default function FeaturesPage() {
  const deepFeatures = [
    {
      icon: Monitor,
      title: "Native Windows Desktop Companion",
      tag: "Desktop Overlay",
      description:
        "Your companion is rendered natively on your Windows screen. It emerges smoothly from behind your taskbar, walks along the display border, and rests peacefully in an idle state while you work.",
      bullets: [
        "Smooth taskbar entrance and exit animations",
        "Drag your pet anywhere on multi-monitor setups",
        "Click to pet with purrs, hearts, and cheerful reactions",
        "Lightweight footprint with negligible CPU/RAM usage",
      ],
    },
    {
      icon: Timer,
      title: "Smart Focus Limits & Active-Time Tracking",
      tag: "Accurate Focus",
      description:
        "Unlike crude site blockers that penalize you for having a tab open in the background, FocusPet only ticks down your daily allowance when you are actively scrolling or interacting with the page.",
      bullets: [
        "Configurable daily time limits per distracting domain",
        "Pauses immediately when switching to code editors or work tools",
        "Persistent local timer memory reset each midnight",
        "Clear status display showing minutes remaining",
      ],
    },
    {
      icon: Smartphone,
      title: "Targeted Instagram & Shorts Control",
      tag: "Selective Blocking",
      description:
        "FocusPet specifically zeroes in on addictive short-form feeds (Instagram and YouTube Shorts) where hours are easily lost to algorithmic doomscrolling. Standard YouTube videos and study lectures remain completely unblocked.",
      bullets: [
        "Detects Instagram feeds and Reels",
        "Detects YouTube Shorts without affecting normal videos",
        "No interference with coding docs, Slack, or work apps",
        "Customizable domain rules stored locally",
      ],
    },
    {
      icon: BellRing,
      title: "Gentle Time-Up Alert & Tab Action",
      tag: "Accountability",
      description:
        "When your time is finished, your companion gently walks up to inform you. FocusPet communicates with the companion extension to close the active distraction tab, cleanly breaking the doomscroll loop.",
      bullets: [
        "Charming visual reaction and soft cue",
        "Automated tab closing via local native messaging",
        "Encouraging return-to-focus desktop animation",
        "No harsh lockouts or intrusive system freezes",
      ],
    },
    {
      icon: EyeOff,
      title: "Discreet Background Monitoring",
      tag: "Flexibility",
      description:
        "Need a clean screen for presentations or intense design sessions? You can minimize your pet into the Windows system tray at any moment while FocusPet continues to monitor distraction time in the background.",
      bullets: [
        "Quick toggle via system tray icon",
        "Pet gracefully descends into taskbar when hidden",
        "Zero interruption to timer accuracy in background mode",
        "One-click restoration to screen whenever you want",
      ],
    },
    {
      icon: Palette,
      title: "Deep Companion Customization",
      tag: "Personalization",
      description:
        "Make your companion truly yours. Right-click or double-click your companion on the desktop to customize colors, fur patterns, eye styles, and wearable accessories.",
      bullets: [
        "Switch between Cat (calm) and Dog (energetic)",
        "Custom color hues and fur markings",
        "Accessory choices: Bows, Sunglasses, Crowns, Headphones",
        "Instant real-time preview on your screen",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Features built for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              real accountability
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore how FocusPet pairs charming native desktop companionship with precise, privacy-first distraction monitoring.
          </p>
        </div>

        {/* Deep Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {deepFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {feat.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <ul className="space-y-2 text-xs text-slate-700">
                    {feat.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-white border border-purple-200 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl shadow-purple-500/5">
          <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Ready to experience FocusPet?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
            Choose your companion and bring gentle focus accountability to your Windows setup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/20"
            >
              <span>Download FocusPet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/companions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition-all"
            >
              <span>Meet the Companions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
