"use client";

import React, { useEffect, useState } from "react";
import { ListTree, ArrowUp } from "lucide-react";

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("desktop-downloads");

  const navItems = [
    { id: "desktop-downloads", label: "Windows Desktop Release" },
    { id: "release-status", label: "Current Release Status" },
    { id: "browser-companion", label: "Browser Companion" },
    { id: "installation-guide", label: "Installation Guide (7 Steps)" },
    { id: "connection-verification", label: "Verify Connection" },
    { id: "troubleshooting", label: "Troubleshooting & FAQ" },
    { id: "system-requirements", label: "System Requirements" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-28 hidden lg:block w-64 shrink-0">
      <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
          <ListTree className="w-4 h-4 text-purple-600" />
          <span>On this page</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all block truncate ${
                  isActive
                    ? "font-semibold text-purple-700 bg-purple-50 border-l-2 border-purple-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="pt-4 mt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-purple-700 transition-colors"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
