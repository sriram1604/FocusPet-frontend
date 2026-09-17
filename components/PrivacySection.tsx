import React from "react";
import { ShieldCheck, HardDrive, UserX, Ban } from "lucide-react";

export function PrivacySection() {
  const privacyPillars = [
    {
      icon: HardDrive,
      title: "Runs on your computer",
      description: "FocusPet is a standalone Windows desktop app. Time calculations and pet animations run 100% locally on your machine.",
    },
    {
      icon: UserX,
      title: "No account required",
      description: "No email signup, no passwords, no cloud profiles. Install and start using FocusPet immediately.",
    },
    {
      icon: Ban,
      title: "No screen recording",
      description: "FocusPet never records your screen, reads keystrokes, or captures your personal messages.",
    },
    {
      icon: ShieldCheck,
      title: "Selective domain matching",
      description: "The companion only monitors configured distraction endpoints (Instagram & YouTube Shorts), leaving everything else untouched.",
    },
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Local Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Your focus companion runs on your computer.
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Thoughtfully built with privacy at the core. No invasive surveillance, no external telemetry servers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {privacyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
