"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Download,
  FolderArchive,
  FolderOpen,
  Compass,
  KeyRound,
  CheckCircle2,
  Copy,
  Check,
  AlertTriangle,
  FileCode,
  ShieldCheck,
  ShieldAlert,
  Info,
} from "lucide-react";
import { ChromeIcon, WindowsIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function InstallationGuide() {
  const [selectedBrowser, setSelectedBrowser] = useState<"chrome" | "edge">("chrome");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div id="installation-guide" className="scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-3 shadow-xs">
          <FileCode className="w-3.5 h-3.5" />
          <span>Step-by-Step Walkthrough</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Installation Guide
        </h2>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Follow these numbered steps to set up FocusPet on Windows and connect your browser companion for active distraction tracking.
        </p>
      </div>

      {/* Featured Video Tutorial Card */}
      <div id="installation-video" className="mb-12 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-5 sm:p-7 shadow-2xl shadow-purple-950/20 text-white relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

        {/* Video Header / Mockup Titlebar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-200">
                FocusPet Installation &amp; Pairing Video Walkthrough
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-[11px] font-semibold text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>Video Tutorial</span>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative z-10 rounded-2xl overflow-hidden bg-black/80 border border-slate-800 shadow-2xl">
          <video
            src="/videos/tutorial.mp4"
            controls
            preload="metadata"
            playsInline
            className="w-full aspect-video object-contain bg-black rounded-2xl focus:outline-hidden"
          >
            <source src="/videos/tutorial.mp4" type="video/mp4" />
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Quick Highlights / Video Key Stages */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 relative z-10">
          <div className="text-xs font-semibold text-slate-400 mb-3 flex items-center justify-between">
            <span>What you will learn in this video:</span>
            <span className="text-[11px] text-purple-400 font-normal">Full setup ~ 2 minutes</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2 text-xs">
              <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="font-semibold text-slate-200">Run Windows Setup</p>
                <p className="text-[11px] text-slate-400">Install FocusPet.exe</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2 text-xs">
              <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="font-semibold text-slate-200">Extract Companion</p>
                <p className="text-[11px] text-slate-400">Unzip extension folder</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2 text-xs">
              <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="font-semibold text-slate-200">Load Unpacked</p>
                <p className="text-[11px] text-slate-400">Chrome / Edge Dev Mode</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2 text-xs">
              <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-[11px] flex items-center justify-center shrink-0">4</span>
              <div>
                <p className="font-semibold text-slate-200">Register Pet</p>
                <p className="text-[11px] text-slate-400">Paste Extension ID</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* STEP 01 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                01
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <WindowsIcon className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Install &amp; Launch FocusPet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Download the Windows setup installer (<code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-purple-700 font-semibold">{SITE_CONFIG.downloads.installerFilename}</code>) from Google Drive and run the installer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">1. Download</span>
                  <span className="text-slate-600">Get <code className="font-mono text-[11px] text-purple-700">FocusPet-Setup.exe</code></span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">2. Run Setup</span>
                  <span className="text-slate-600">Follow the standard Windows wizard steps</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">3. Launch Pet</span>
                  <span className="text-slate-600">The FocusPet desktop pet will appear on screen</span>
                </div>
              </div>

              {/* Microsoft Defender SmartScreen Guidance */}
              <div className="my-5 rounded-2xl bg-gradient-to-br from-sky-50/90 via-blue-50/60 to-indigo-50/70 border border-sky-200/90 p-5 sm:p-6 shadow-xs">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/20">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-100/90 text-blue-900 text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Info className="w-3 h-3 text-blue-700" />
                      <span>Microsoft Defender SmartScreen Notice</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Windows blocked the installer? (&quot;Windows protected your PC&quot;)
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      As a newly released independent application, Microsoft Defender SmartScreen may display a blue prompt. Simply follow these <strong>2 quick steps</strong>:
                    </p>
                  </div>
                </div>

                {/* 2 Step Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl border border-sky-200/90 p-4 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          Click &quot;More info&quot;
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                        On the blue SmartScreen dialog, click the underlined <strong className="text-blue-700 underline">More info</strong> link below the text.
                      </p>
                    </div>

                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
                      <Image
                        src="/images/defender-steps/step-1.png"
                        alt="Step 1: Click More info on Windows Defender SmartScreen"
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2 text-center text-[10px] font-medium text-slate-500">
                      Step 1: Click <span className="text-blue-600 font-bold underline">More info</span> link
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white rounded-xl border border-sky-200/90 p-4 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          Click &quot;Run anyway&quot;
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                        The window will reveal app details. Click the <strong className="text-emerald-700 font-bold">Run anyway</strong> button to launch the installer.
                      </p>
                    </div>

                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
                      <Image
                        src="/images/defender-steps/step-2.png"
                        alt="Step 2: Click Run anyway on Windows Defender SmartScreen"
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2 text-center text-[10px] font-medium text-slate-500">
                      Step 2: Click <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-300 px-1 py-0.5 rounded">Run anyway</span> button
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-sky-200/60 flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>100% Safe &amp; Clean:</strong> FocusPet runs locally on your PC with zero telemetry.</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>FocusPet is now running locally on your desktop.</span>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 02 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                02
              </span>
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Install the Browser Companion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                FocusPet requires the lightweight browser companion to detect when you are actively using supported distracting websites (such as Instagram and YouTube Shorts).
              </p>
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>Why manual installation?</strong> Because the browser extensions are currently distributed for testing and are not yet published to the official Chrome Web Store / Microsoft Edge Add-ons catalog, you will install the extension using the browser&apos;s standard <strong>Developer Mode &rarr; Load Unpacked</strong> feature.
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                03
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <Compass className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Choose Your Browser
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Select the browser you use for daily browsing to view tailored instructions:
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBrowser("chrome")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedBrowser === "chrome"
                      ? "bg-purple-600 text-white border-purple-600 shadow-sm shadow-purple-500/20"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <ChromeIcon className="w-4 h-4" />
                  <span>Google Chrome</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBrowser("edge")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                    selectedBrowser === "edge"
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>Microsoft Edge</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 04 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                04
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <Download className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Download the Extension ZIP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Open the Google Drive extension release folder and download{" "}
                <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-purple-700 font-semibold">
                  {selectedBrowser === "chrome"
                    ? SITE_CONFIG.downloads.chromeExtensionFilename
                    : SITE_CONFIG.downloads.edgeExtensionFilename}
                </code>.
              </p>

              <a
                href={SITE_CONFIG.downloads.extensionFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm shadow-purple-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  Open Extension Folder &rarr; Download{" "}
                  {selectedBrowser === "chrome"
                    ? SITE_CONFIG.downloads.chromeExtensionFilename
                    : SITE_CONFIG.downloads.edgeExtensionFilename}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* STEP 05 */}
        <div className="rounded-3xl bg-white border-2 border-purple-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-400">
                05
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <FolderArchive className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-3 h-3 text-amber-700" />
                <span>Crucial Step</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Extract the ZIP to a Normal Folder
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                <strong className="text-slate-900">Do NOT load the ZIP file directly into your browser.</strong> Right-click the downloaded ZIP file and click <strong>Extract All...</strong> to create a normal folder.
              </p>

              {/* Extraction Visual Diagram */}
              <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
                <div className="text-slate-400 mb-1">// Expected Extracted Folder Structure:</div>
                <div className="text-amber-400">Downloads/</div>
                <div className="text-slate-400 pl-4">└── {selectedBrowser === "chrome" ? "FocusPet-Chrome-Extension.zip" : "FocusPet-Edge-Extension.zip"}</div>
                <div className="text-purple-400 pl-8">↓  Right-click &rarr; Extract All...</div>
                <div className="text-emerald-400 pl-4 font-bold">
                  └── {selectedBrowser === "chrome" ? "FocusPet-Chrome-Extension/" : "FocusPet-Edge-Extension/"}
                </div>
                <div className="text-slate-300 pl-8">├── manifest.json  <span className="text-slate-500">// &larr; Must be in top-level of extracted folder</span></div>
                <div className="text-slate-300 pl-8">├── background.js</div>
                <div className="text-slate-300 pl-8">├── content.js</div>
                <div className="text-slate-300 pl-8">├── icons/</div>
                <div className="text-slate-300 pl-8">└── popup/</div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 06 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                06
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <FolderOpen className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Load the Unpacked Extension in {selectedBrowser === "chrome" ? "Chrome" : "Edge"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Open your browser extensions management page and load the extracted directory:
              </p>

              {selectedBrowser === "chrome" ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900">1. Address:</span>
                    <code className="font-mono bg-white px-2 py-1 rounded border text-purple-700 font-semibold">
                      chrome://extensions
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy("chrome://extensions", "chrome-url")}
                      className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-purple-700 hover:text-purple-900"
                    >
                      {copiedItem === "chrome-url" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">2. Enable Developer mode:</strong> Toggle the switch located in the top-right corner of the extensions page.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">3. Click &quot;Load unpacked&quot;:</strong> Click the button in the top-left toolbar.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">4. Select the folder:</strong> Choose the extracted <code className="font-mono text-purple-700">FocusPet-Chrome-Extension</code> folder (the folder containing <code className="font-mono">manifest.json</code>).
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                    5. Chrome will now show the FocusPet extension tile along with its <strong>Extension ID</strong>.
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900">1. Address:</span>
                    <code className="font-mono bg-white px-2 py-1 rounded border text-indigo-700 font-semibold">
                      edge://extensions
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy("edge://extensions", "edge-url")}
                      className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 hover:text-indigo-900"
                    >
                      {copiedItem === "edge-url" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">2. Enable Developer mode:</strong> Toggle the switch in the left sidebar.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">3. Click &quot;Load unpacked&quot;:</strong> Click the button in the main header.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">4. Select the folder:</strong> Choose the extracted <code className="font-mono text-indigo-700">FocusPet-Edge-Extension</code> folder.
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                    5. Microsoft Edge will display the active FocusPet extension and its <strong>Extension ID</strong>.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STEP 07 */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-purple-300">
                07
              </span>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-2xs">
                <KeyRound className="w-5 h-5 text-purple-700" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Register the Extension ID in FocusPet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Because unpacked local extensions may be assigned a local development ID, FocusPet provides a built-in registration UI so the browser can securely connect to the native desktop companion.
              </p>

              {/* Step checklist */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700 mb-4">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">A.</span>
                  <span>Copy the <strong>Extension ID</strong> string shown in your browser&apos;s extension page (e.g. 32 alphanumeric characters).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">B.</span>
                  <span>Right-click your FocusPet desktop companion &rarr; Open <strong>Settings</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">C.</span>
                  <span>Navigate to <strong>Developer &amp; Unpacked Extension Management</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-700">D.</span>
                  <span>Paste the Extension ID and click <strong>Register</strong>.</span>
                </div>
              </div>

              {/* Strong Reassurance Notice */}
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-xs text-purple-950 space-y-1">
                <p className="font-bold text-purple-900">Zero Technical Overhead:</p>
                <ul className="list-disc pl-4 space-y-0.5 text-purple-900/90">
                  <li>You do <strong>NOT</strong> need to edit the Windows Registry.</li>
                  <li>You do <strong>NOT</strong> need to modify manifest files manually.</li>
                  <li>You do <strong>NOT</strong> need Python, Node, or PowerShell terminal commands.</li>
                  <li>You do <strong>NOT</strong> need to manually run <code className="font-mono text-purple-950">FocusPetNativeHost.exe</code> (it is automatically launched by the browser through Native Messaging).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
