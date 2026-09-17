"use client";

import React, { useState } from "react";
import { ChromeIcon } from "@/components/Icons";
import { Compass, Download, ExternalLink, ShieldCheck, FolderArchive, Info, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function BrowserCompanionCards() {
  const [activeTab, setActiveTab] = useState<"chrome" | "edge">("chrome");

  const browsers = {
    chrome: {
      name: "Google Chrome",
      icon: ChromeIcon,
      iconColor: "text-purple-600",
      filename: SITE_CONFIG.downloads.chromeExtensionFilename,
      compatibility: "Chrome v88+, Brave, Opera, Vivaldi",
      guideAnchor: "guide-step-chrome",
      description:
        "Lightweight companion manifest for Chrome & Chromium browsers. Detects active Instagram & YouTube Shorts feeds without reading browsing history.",
    },
    edge: {
      name: "Microsoft Edge",
      icon: Compass,
      iconColor: "text-indigo-600",
      filename: SITE_CONFIG.downloads.edgeExtensionFilename,
      compatibility: "Microsoft Edge (Chromium)",
      guideAnchor: "guide-step-edge",
      description:
        "Optimized extension package for Microsoft Edge. Communicates directly with FocusPetNativeHost.exe via local native messaging.",
    },
  };

  const current = browsers[activeTab];
  const Icon = current.icon;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="browser-companion" className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
          <span>Browser Monitoring Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Browser Companion Extensions
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          FocusPet uses a browser extension to detect supported distracting websites such as Instagram and YouTube Shorts.
        </p>
      </div>

      {/* Manual Testing Distribution Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3 mb-8">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold text-amber-900 block mb-0.5">
            Testing Distribution Notice
          </span>
          <span>
            Browser extensions are currently distributed manually as ZIP packages for testing. Official publishing to the <strong>Chrome Web Store</strong> and <strong>Microsoft Edge Add-ons</strong> catalog is not yet available. Please follow the Load Unpacked guide below.
          </span>
        </div>
      </div>

      {/* Browser Tab Selector */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("chrome")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "chrome"
              ? "bg-white text-purple-700 shadow-xs border border-slate-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <ChromeIcon className="w-4 h-4 text-purple-600" />
          <span>Google Chrome</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("edge")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "edge"
              ? "bg-white text-indigo-700 shadow-xs border border-slate-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Compass className="w-4 h-4 text-indigo-600" />
          <span>Microsoft Edge</span>
        </button>
      </div>

      {/* Active Browser Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
              <Icon className={`w-5 h-5 ${current.iconColor}`} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                FocusPet {current.name} Extension
              </h3>
              <p className="text-xs font-mono text-purple-700 font-semibold">
                {current.filename}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {current.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span className="font-semibold text-slate-700">Supported:</span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-mono">
              {current.compatibility}
            </span>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-2.5">
          <a
            href={SITE_CONFIG.downloads.extensionFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm shadow-purple-500/20 active:scale-95 group"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Extension ZIP</span>
            <ExternalLink className="w-3 h-3 text-purple-200 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => scrollToSection("installation-guide")}
            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs transition-all"
          >
            <span>View Unpacked Guide</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </button>

          <p className="text-[10px] text-slate-500 text-center">
            Opens Google Drive to download <span className="font-mono font-medium">{current.filename}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
