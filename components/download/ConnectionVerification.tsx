"use client";

import React, { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Monitor,
  Radio,
  Zap,
} from "lucide-react";
import { ChromeIcon } from "@/components/Icons";

export function ConnectionVerification() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const verificationSteps = [
    {
      step: 1,
      title: "FocusPet is Running",
      description: "Ensure the FocusPet companion is visible or minimized in your Windows system tray.",
    },
    {
      step: 2,
      title: "Browser Extension Enabled",
      description: "Verify that the FocusPet toggle is enabled in chrome://extensions or edge://extensions.",
    },
    {
      step: 3,
      title: "Open Distracting Website",
      description: "Open an Instagram feed/Reels tab or a YouTube Shorts tab in your browser.",
    },
    {
      step: 4,
      title: "Check Companion Status",
      description: "Open FocusPet settings or status widget to confirm the status displays 'Connected (Native)'.",
    },
    {
      step: 5,
      title: "Run Diagnostic Ping/Pong",
      description: "In FocusPet, go to Settings → System Health & Diagnostic Inspection and click 'Test Native Host (Ping/Pong)'.",
    },
  ];

  return (
    <div id="connection-verification" className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>System Health &amp; Verification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Verify Everything Is Connected
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          FocusPet uses a clean local native messaging pipeline to keep your attention on track without remote telemetry.
        </p>
      </div>

      {/* Visual Pipeline Architecture Box */}
      <div className="rounded-2xl bg-slate-950 p-6 text-white mb-8 shadow-inner overflow-hidden relative">
        <div className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span>Native Messaging Pipeline Architecture</span>
        </div>

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center relative">
          {/* Node 1 */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2">
              <ChromeIcon className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold text-slate-100">Browser Extension</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Chrome / Edge</p>
          </div>

          {/* Node 2 */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2">
              <Radio className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold text-slate-100">Native Messaging</p>
            <p className="text-[10px] text-slate-400 mt-0.5">stdin / stdout Pipe</p>
          </div>

          {/* Node 3 */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold text-slate-100">FocusPetNativeHost</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Automatic Process</p>
          </div>

          {/* Node 4 */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/40 bg-gradient-to-b from-purple-950/40 to-slate-900 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <Monitor className="w-4 h-4" />
            </div>
            <p className="text-xs font-bold text-slate-100">FocusPet Desktop</p>
            <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">Pet &amp; Timer Active</p>
          </div>
        </div>
      </div>

      {/* Verification Checklist */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
        5-Step Verification Checklist
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {verificationSteps.map((item) => (
          <div
            key={item.step}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-mono text-[11px] font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <p className="text-xs font-bold text-slate-900">{item.title}</p>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Status Confirmation Box */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-emerald-950">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold text-emerald-900">Expected Desktop Status Indicator</p>
            <p className="text-emerald-800/90 text-[11px]">
              When connection succeeds, the companion settings panel displays <code className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-950 font-mono font-bold">Connected (Native)</code>.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-emerald-300 font-mono text-emerald-800 text-[11px] font-bold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Connected (Native)</span>
        </div>
      </div>
    </div>
  );
}
