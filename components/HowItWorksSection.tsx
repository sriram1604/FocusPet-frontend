import React from "react";
import { Download, Sliders, Target, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install FocusPet",
      description: "Download and run the Windows installer. FocusPet sets up locally on your computer in seconds.",
    },
    {
      number: "02",
      icon: Sliders,
      title: "Choose your companion",
      description: "Pick a cat or dog, choose your favorite colors and accessories, and set your daily distraction timer.",
    },
    {
      number: "03",
      icon: Target,
      title: "Focus & Flow",
      description: "Work normally. Your companion sits quietly and gently notifies you when social media time is up.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-zinc-950/60 border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-orange-400 mb-4">
            <span>Simple Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            How it works.
          </h2>
          <p className="mt-3.5 text-base text-zinc-400">
            Get your desktop companion running in three simple steps.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-zinc-600">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-zinc-100 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector between steps on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
