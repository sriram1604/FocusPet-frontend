"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause, Heart, AlertTriangle, Sparkles, Smile } from "lucide-react";

type PetType = "cat" | "dog";
type CompanionState = "idle" | "pet" | "alert" | "timeout";

export function InteractiveStage() {
  const [pet, setPet] = useState<PetType>("cat");
  const [state, setState] = useState<CompanionState>("idle");

  const petDetails = {
    cat: {
      name: "Cat Companion",
      image: "/images/cat.png",
      tagline: "Calm, gentle & watchful",
      idleMessage: "Purring quietly by the taskbar...",
      petMessage: "❤️ Purr... purr! You gave the kitty some love!",
      alertMessage: "👀 Distraction detected on Instagram. Timer ticking!",
      timeoutMessage: "⏰ Daily limit reached! Tab gently closed.",
    },
    dog: {
      name: "Dog Companion",
      image: "/images/dog.png",
      tagline: "Eager, energetic & loyal",
      idleMessage: "Wagging tail happily while you work...",
      petMessage: "❤️ Woof woof! Tail wagging at maximum speed!",
      alertMessage: "👀 YouTube Shorts detected! Keeping you honest!",
      timeoutMessage: "⏰ Daily limit reached! Time to get back on track!",
    },
  };

  const current = petDetails[pet];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-zinc-950/60 to-transparent border-y border-zinc-900/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-orange-400 mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Your companion has a life of its own.
          </h2>
          <p className="mt-3.5 text-base text-zinc-400">
            Switch companions and test their desktop reactions in real-time.
          </p>
        </div>

        {/* Companion Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex p-1 bg-zinc-900 rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={() => setPet("cat")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                pet === "cat"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>🐱</span>
              <span>Cat</span>
            </button>
            <button
              type="button"
              onClick={() => setPet("dog")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                pet === "dog"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>🐶</span>
              <span>Dog</span>
            </button>
          </div>
        </div>

        {/* Live Stage Display */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-zinc-950 border border-zinc-800/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Reaction Simulator Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-zinc-800/80 text-xs">
            <span className="text-zinc-400 font-medium flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-orange-400" />
              Test Behavior:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => setState("idle")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  state === "idle"
                    ? "bg-zinc-800 text-zinc-100 border border-zinc-700"
                    : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                Idle
              </button>
              <button
                type="button"
                onClick={() => setState("pet")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1 ${
                  state === "pet"
                    ? "bg-rose-950/60 text-rose-300 border border-rose-800/50"
                    : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                <Heart className="w-3 h-3 text-rose-400" /> Click / Pet
              </button>
              <button
                type="button"
                onClick={() => setState("alert")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1 ${
                  state === "alert"
                    ? "bg-amber-950/60 text-amber-300 border border-amber-800/50"
                    : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                <AlertTriangle className="w-3 h-3 text-amber-400" /> Watching
              </button>
              <button
                type="button"
                onClick={() => setState("timeout")}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  state === "timeout"
                    ? "bg-orange-950/60 text-orange-300 border border-orange-800/50"
                    : "bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                Time&apos;s Up
              </button>
            </div>
          </div>

          {/* Center Stage Box */}
          <div className="relative min-h-[240px] flex flex-col items-center justify-center p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50">
            {/* Speech bubble according to state */}
            <div className="mb-4 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700/80 text-xs font-medium text-zinc-200 shadow-md text-center max-w-sm transition-all duration-300">
              {state === "idle" && current.idleMessage}
              {state === "pet" && current.petMessage}
              {state === "alert" && current.alertMessage}
              {state === "timeout" && current.timeoutMessage}
            </div>

            {/* Pet Graphic */}
            <div
              key={`${pet}-${state}`}
              className={`relative w-36 h-36 sm:w-40 sm:h-40 transition-all duration-300 ${
                state === "pet" ? "scale-110" : "scale-100"
              } animate-pet-idle`}
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 768px) 144px, 160px"
                className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Sub-label */}
            <p className="mt-4 text-xs font-mono text-zinc-500">
              {current.name} &bull; {current.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
