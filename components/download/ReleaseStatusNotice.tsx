import React from "react";
import { Info, CheckCircle2, AlertCircle, Clock, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function ReleaseStatusNotice() {
  const statuses = [
    {
      label: "Windows Desktop Application",
      status: "Available Now",
      subtext: "Official standalone setup installer ready for Windows 10 & 11",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: CheckCircle2,
      iconClass: "text-emerald-600",
    },
    {
      label: "Chrome Browser Extension",
      status: "Manual / Testing Release",
      subtext: "Distributed as unpacked ZIP for developer-mode installation",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      icon: AlertCircle,
      iconClass: "text-amber-600",
    },
    {
      label: "Microsoft Edge Extension",
      status: "Manual / Testing Release",
      subtext: "Distributed as unpacked ZIP for developer-mode installation",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      icon: AlertCircle,
      iconClass: "text-amber-600",
    },
    {
      label: "Chrome Web Store & Edge Add-ons",
      status: "Not Published Yet",
      subtext: "Store review and public directory listings in progress",
      badgeClass: "bg-slate-100 text-slate-600 border-slate-200",
      icon: Clock,
      iconClass: "text-slate-500",
    },
  ];

  return (
    <div id="release-status" className="scroll-mt-24 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Current Release Status
            </h2>
            <p className="text-xs text-slate-500">
              Testing release distribution notice &amp; channel breakdown
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700">
          <Sparkles className="w-3 h-3 text-purple-600" />
          <span>v1.0.0 Testing Build</span>
        </span>
      </div>

      {/* Grid of status items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statuses.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-900">
                  {item.label}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border shrink-0 inline-flex items-center gap-1 ${item.badgeClass}`}
                >
                  <Icon className={`w-3 h-3 ${item.iconClass}`} />
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* Note regarding future publishing */}
      <div className="mt-5 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs text-purple-950 leading-relaxed">
        <span className="font-semibold text-purple-900">Future Store Experience: </span>
        The manual developer-mode setup described below is temporary for the testing release. Once browser extensions are published to the official Chrome Web Store and Microsoft Edge Add-ons catalog, setup will simply be: <code className="px-1.5 py-0.5 rounded bg-purple-100 font-mono text-[11px] text-purple-900">Install FocusPet + 1-Click Install from Official Store</code>.
      </div>
    </div>
  );
}
