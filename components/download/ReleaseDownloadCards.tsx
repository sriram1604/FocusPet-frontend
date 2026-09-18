import React from "react";
import { Download, Check, ShieldCheck, ExternalLink, Monitor, ShieldAlert } from "lucide-react";
import { WindowsIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function ReleaseDownloadCards() {
  const installedItems = [
    "FocusPet.exe (Desktop Companion UI & Pet Overlay)",
    "FocusPetNativeHost.exe (Secure Native Messaging Host)",
    "Automatic Chrome & Edge Native Messaging Manifests",
    "Windows Start Menu & Desktop Shortcuts",
    "Self-contained application runtime & bundled assets",
  ];

  const highlights = [
    {
      title: "Self-Contained Installer",
      desc: "Single executable containing all necessary runtimes. No extra Python or runtime installations needed.",
    },
    {
      title: "Automatic Manifest Registration",
      desc: "Sets up native messaging configurations so browser extensions communicate directly without manual tweaks.",
    },
    {
      title: "Zero Remote Telemetry",
      desc: "100% offline and local-first. Your focus data and custom pet settings stay on your PC.",
    },
  ];

  return (
    <div id="desktop-downloads" className="scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-2">
            <WindowsIcon className="w-3.5 h-3.5 text-purple-700" />
            <span>Official Desktop Release</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            FocusPet for Windows
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Download the official <code className="font-mono text-purple-700 font-semibold">{SITE_CONFIG.downloads.installerFilename}</code> installer from Google Drive.
          </p>
        </div>

        <a
          href={SITE_CONFIG.downloads.mainFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200 transition-colors shrink-0 w-fit"
        >
          <span>Open Google Drive Release Folder</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Primary Installer Full-Width Card */}
      <div className="rounded-3xl bg-white border-2 border-purple-300 p-6 sm:p-10 shadow-lg shadow-purple-500/5 relative overflow-hidden">
        {/* Recommended Badge */}
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-[11px] font-semibold px-5 py-1 rounded-bl-2xl uppercase tracking-wider">
          Standard Windows Installer
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details & Checklist (7 columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <WindowsIcon className="w-7 h-7 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  FocusPet for Windows
                </h3>
                <p className="text-xs font-mono text-purple-700 font-bold mt-0.5">
                  {SITE_CONFIG.downloads.installerFilename} &bull; {SITE_CONFIG.downloads.installerSize}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Includes the complete FocusPet desktop application, interactive pet overlay, and background native messaging integration for distraction control on Windows 10 and 11.
            </p>

            {/* What is installed checklist */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                Package Components &amp; Installed Files:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {installedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Key Highlights & Download CTA (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-700"
                >
                  <p className="font-bold text-slate-900 mb-0.5">{h.title}</p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <a
                href={SITE_CONFIG.downloads.mainFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-md shadow-purple-500/25 active:scale-95 group"
              >
                <Download className="w-5 h-5" />
                <span>Download FocusPet-Setup.exe</span>
                <ExternalLink className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-center text-[11px] text-slate-500 mt-3">
                Opens the Google Drive release folder to download <code className="font-mono text-purple-700 font-semibold">{SITE_CONFIG.downloads.installerFilename}</code>
              </p>
            </div>
          </div>
        </div>

        {/* Security & Verification Footer */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>VirusTotal checked &bull; Standalone 64-bit installer</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-purple-600" />
            <span>Windows 10 / 11 (64-bit)</span>
          </div>
        </div>

        {/* Windows Defender SmartScreen quick tip banner */}
        <div className="mt-4 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-blue-950">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Windows Defender Notice:</strong> If prompted with <em>&quot;Windows protected your PC&quot;</em>, click <strong>&quot;More info&quot; &rarr; &quot;Run anyway&quot;</strong>.
            </span>
          </div>
          <a
            href="#installation-guide"
            className="text-[11px] font-bold text-blue-700 hover:text-blue-900 underline shrink-0 whitespace-nowrap sm:self-auto self-start"
          >
            See 2-step visual guide &darr;
          </a>
        </div>
      </div>
    </div>
  );
}
