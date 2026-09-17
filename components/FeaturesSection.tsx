import React from "react";
import {
  Monitor,
  Timer,
  Smartphone,
  BellRing,
  EyeOff,
  Palette,
  CheckCircle2,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Desktop Companion",
      subtitle: "Lives right on your desktop.",
      description:
        "The pet enters smoothly from your taskbar, walks along your screen edge, sits quietly while you work, and reacts naturally to your schedule.",
      tag: "Native Windows",
    },
    {
      icon: Timer,
      title: "Focus Timers",
      subtitle: "Set limits for distracting sites.",
      description:
        "Configure daily time limits (e.g. 30 minutes). Time counts only when you are actively viewing distracting feeds and pauses when you switch away.",
      tag: "Accurate Tracking",
    },
    {
      icon: Smartphone,
      title: "Instagram & Shorts",
      subtitle: "Track the scroll.",
      description:
        "Specifically targets endless short-form feeds on Instagram and YouTube Shorts. Long-form tutorials, study playlists, and regular YouTube videos are never interrupted.",
      tag: "Selective",
    },
    {
      icon: BellRing,
      title: "Cute Time-Up Reaction",
      subtitle: "Time's up. Your companion lets you know.",
      description:
        "When your time is expired, your companion provides a charming visual cue and gently helps close the distracting tab so you can return to what matters.",
      tag: "Gentle Accountability",
    },
    {
      icon: EyeOff,
      title: "Background Monitoring",
      subtitle: "Hidden doesn't mean inactive.",
      description:
        "Prefer a clean desktop during intense meetings? Minimize your pet to the system tray while FocusPet silently continues tracking your set limits.",
      tag: "Flexible",
    },
    {
      icon: Palette,
      title: "Deep Customization",
      subtitle: "Make your companion yours.",
      description:
        "Personalize your Cat or Dog with custom colors, fur patterns, eye styles, and fun accessories including bows, sunglasses, crowns, and headphones.",
      tag: "Personalized",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-orange-400 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Built for Real Productivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Engineered to keep you focused.
          </h2>
          <p className="mt-3.5 text-base text-zinc-400">
            A lightweight desktop application that provides gentle accountability without invasive tracking or complex dashboards.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-7 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:border-orange-500/40 group-hover:text-orange-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-zinc-100 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-400/90 mb-3">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
