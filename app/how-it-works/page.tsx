import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Sliders,
  Target,
  ArrowRight,
  Sparkles,
  MousePointer,
  HelpCircle,
} from "lucide-react";
import { BrowserCompanionSection } from "@/components/BrowserCompanionSection";

export const metadata: Metadata = {
  title: "How It Works — FocusPet Desktop Companion",
  description:
    "Learn how FocusPet works in 3 simple steps: Install the native Windows app, choose & customize your companion, and let it keep you accountable.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      icon: Download,
      title: "Download & Install FocusPet",
      desc: "Get the lightweight FocusPet Windows installer. It unpacks the local desktop runtime and background native messaging host directly on your PC.",
      tips: [
        "Compatible with Windows 10 & 11 (64-bit)",
        "No administrator overhead for standard operation",
        "Includes both FocusPet.exe and FocusPetNativeHost.exe",
      ],
    },
    {
      num: "02",
      icon: Sliders,
      title: "Choose & Customize Your Pet",
      desc: "When FocusPet launches, select between a calm Cat or an energetic Dog. Set your desired daily limit (e.g. 30 minutes for Instagram & YouTube Shorts).",
      tips: [
        "Customize fur colors, patterns, and eyes",
        "Equip accessories like crowns, bows, or headphones",
        "Right-click anywhere on your pet for instant settings",
      ],
    },
    {
      num: "03",
      icon: Target,
      title: "Focus in Peace",
      desc: "Work normally. Your companion sits quietly on your taskbar. When you browse distracting feeds, your daily timer ticks down. When it expires, your pet gently helps you step away.",
      tips: [
        "Time only counts while actively browsing target feeds",
        "Pauses immediately when switching to work apps",
        "Softly closes the distracting tab when time is reached",
      ],
    },
  ];

  const interactions = [
    {
      action: "Click your pet",
      result: "Pets your companion, prompting happy purrs, hearts, or energetic tail wags.",
    },
    {
      action: "Drag anywhere",
      result: "Freely reposition your pet anywhere across single or multi-monitor screens.",
    },
    {
      action: "Right-click or Double-click",
      result: "Opens the companion customization panel and distraction timer limits.",
    },
    {
      action: "Taskbar / Tray Minimize",
      result: "Sends your companion into hiding while background monitoring stays active.",
    },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Setup &amp; Workflow</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            How{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              FocusPet works
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From quick installation to daily focus sessions, getting started with your desktop companion takes less than two minutes.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-purple-300">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {step.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">&bull;</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Controls Guide */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 mb-20 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <MousePointer className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-slate-900">
              Desktop Interaction Guide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interactions.map((item) => (
              <div
                key={item.action}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <p className="text-sm font-bold text-purple-700 mb-1">
                  {item.action}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Browser companion section */}
        <BrowserCompanionSection />
      </div>
    </div>
  );
}
