import React from "react";
import type { Metadata } from "next";
import { PrivacySection } from "@/components/PrivacySection";
import { ShieldCheck, Lock, HardDrive, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Local-First — FocusPet",
  description:
    "FocusPet runs 100% locally on your Windows PC. No accounts, no cloud dependencies, no screen recording, and no invasive telemetry.",
};

export default function PrivacyPage() {
  const architecturalDetails = [
    {
      title: "Where is my data stored?",
      detail:
        "All configuration, pet styles, and timer records are stored directly on your Windows PC in your local user directory. Nothing is uploaded to remote servers.",
    },
    {
      title: "How does the browser extension communicate with the desktop app?",
      detail:
        "The extension communicates exclusively via Chrome & Edge's secure Native Messaging protocol (stdin/stdout between the browser and FocusPetNativeHost.exe on your machine). It does not initiate any internet requests.",
    },
    {
      title: "Does FocusPet monitor all my browsing activity?",
      detail:
        "No. The companion only compares active URLs against supported distraction patterns (specifically Instagram and YouTube Shorts). Standard search queries, banking, email, documentation, and work software are completely ignored.",
    },
    {
      title: "Do I need to create an account or sign in?",
      detail:
        "No. FocusPet has no concept of accounts, passwords, or subscriptions. You download, install, and run it locally without an internet account.",
    },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <Lock className="w-3.5 h-3.5" />
            <span>Local-First Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Privacy built into{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              the architecture
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            FocusPet is designed to protect your attention without compromising your personal computer privacy.
          </p>
        </div>

        {/* Privacy Pillars */}
        <PrivacySection />

        {/* In-depth FAQ / Architecture Breakdown */}
        <div className="mt-20 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-purple-600" />
            <span>Architecture &amp; Security Details</span>
          </h2>

          <div className="space-y-4">
            {architecturalDetails.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
