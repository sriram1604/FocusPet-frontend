import React from "react";
import { Cpu, ShieldCheck, HardDrive, Monitor, Layers, ExternalLink } from "lucide-react";
import { GithubIcon, WindowsIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function SystemSpecs() {
  const specs = [
    { label: "Operating System", value: "Windows 10 / 11 (64-bit)" },
    { label: "Architecture", value: "x86_64 / amd64" },
    { label: "Memory Footprint", value: "< 80 MB RAM" },
    { label: "Disk Space Needed", value: "~120 MB Storage" },
    { label: "Display Support", value: "Single & Multi-monitor setups" },
    { label: "Browser Support", value: "Chrome, Edge, Brave, Opera" },
  ];

  return (
    <div id="system-requirements" className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 mb-6">
        <Cpu className="w-5 h-5 text-purple-600" />
        <h2 className="text-xl font-bold text-slate-900">
          System Requirements &amp; Runtime Specifications
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {specs.map((item) => (
          <div
            key={item.label}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <p className="text-[11px] font-mono text-purple-700 font-semibold uppercase tracking-wider">
              {item.label}
            </p>
            <p className="text-sm font-bold text-slate-900 mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Standalone Windows installer package &bull; Zero network telemetry</span>
        </div>
        <a
          href={SITE_CONFIG.developer.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-700 transition-colors inline-flex items-center gap-1.5 font-semibold text-slate-700"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Developer GitHub Profile</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </div>
  );
}
