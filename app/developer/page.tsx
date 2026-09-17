import React from "react";
import type { Metadata } from "next";
import { DeveloperSection } from "@/components/DeveloperSection";
import { Code2, Terminal, GitBranch } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Developer — Sriram Venkatesan | FocusPet",
  description:
    "Learn about Sriram Venkatesan, creator of FocusPet, and explore the open development behind the desktop focus companion.",
};

export default function DeveloperPage() {
  const techStack = [
    { name: "Python / PyQt / Win32 API", role: "Desktop App Core Engine" },
    { name: "Chrome Native Messaging", role: "Browser Companion Communication" },
    { name: "Next.js & React 19", role: "Product Website Architecture" },
    { name: "Tailwind CSS", role: "Modern Design System" },
  ];

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer &amp; Creator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            About the{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Creator
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            FocusPet was created by <strong>{SITE_CONFIG.developer.name}</strong> to solve the modern challenge of mindless social media scrolling through charming, non-punitive desktop companionship.
          </p>
        </div>

        {/* Developer Spotlight Component with Portrait Photo */}
        <DeveloperSection />

        {/* Creator Backstory & Stack */}
        <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 space-y-8 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-600" />
              <span>The Philosophy Behind FocusPet</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Most website blockers feel aggressive, guilt-inducing, or overly bureaucratic. FocusPet was created on a different premise: humans respond far better to gentle reminders and cute accountability partners. By combining native desktop presence with discrete active-time tracking, FocusPet helps you stay in flow without friction.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-purple-600" />
              <span>Engineered With</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-slate-800">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-purple-700 font-medium">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
