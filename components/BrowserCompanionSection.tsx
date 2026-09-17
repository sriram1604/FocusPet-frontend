import React from "react";
import { Compass, Cpu, Radio } from "lucide-react";
import { ChromeIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function BrowserCompanionSection() {
  return (
    <section className="py-20 md:py-28 border-t border-slate-200 bg-slate-50/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-4">
                <Radio className="w-3 h-3 text-purple-600" />
                <span>Browser Integration</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Lightweight Browser Companion
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                FocusPet works with a lightweight browser companion to detect supported distracting websites and communicate directly with your desktop application via secure local messaging.
              </p>

              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                The extension does not track your general browsing history, read private messages, or send data outside your PC. It simply notifies your local pet when an Instagram or YouTube Shorts feed is active.
              </p>

              {/* Supported Browsers List & Guide CTA */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 shadow-2xs">
                  <ChromeIcon className="w-4 h-4 text-purple-600" />
                  <span>Google Chrome</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 shadow-2xs">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  <span>Microsoft Edge</span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  + Brave &amp; Opera
                </span>
              </div>

              <div>
                <a
                  href="/download#browser-companion"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 bg-purple-50 border border-purple-200 px-4 py-2 rounded-xl transition-colors"
                >
                  <span>Download Extension &amp; View Installation Guide &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Status Badge Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-inner">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Testing Release
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {SITE_CONFIG.releaseStatus.browserExtension}
              </p>

              <div className="w-full py-2 px-3 rounded-xl bg-white border border-slate-200 text-[11px] font-mono text-slate-600 flex items-center justify-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Native Messaging Host Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
