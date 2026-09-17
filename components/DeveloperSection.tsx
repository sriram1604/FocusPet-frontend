import React from "react";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function DeveloperSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: SITE_CONFIG.developer.github,
      icon: GithubIcon,
      detail: "Developer profile & projects",
    },
    {
      name: "LinkedIn",
      href: SITE_CONFIG.developer.linkedin,
      icon: LinkedinIcon,
      detail: "Professional profile",
    },
    {
      name: "Instagram",
      href: SITE_CONFIG.developer.instagram,
      icon: InstagramIcon,
      detail: "Updates & behind the scenes",
    },
  ];

  return (
    <section id="developer" className="py-20 md:py-28 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl shadow-slate-900/5 relative overflow-hidden">
          {/* Ambient subtle purple glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Profile header with Image */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
            {/* Developer Portrait Image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-md shrink-0 group">
              <Image
                src="/images/image.png"
                alt={SITE_CONFIG.developer.name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Developer details */}
            <div className="text-center sm:text-left flex-grow">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-[11px] font-mono text-purple-700 font-semibold border border-purple-200">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Developer Spotlight</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  Creator
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {SITE_CONFIG.developer.name}
              </h2>
              <p className="text-xs sm:text-sm text-purple-700 font-semibold mt-0.5">
                Software Engineer &amp; Creator of FocusPet
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg leading-relaxed">
                Crafted with care to help people build healthier computer habits through delightful, non-intrusive desktop companions.
              </p>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-200 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-purple-600 group-hover:border-purple-200 group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-[11px] text-slate-500">{link.detail}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
