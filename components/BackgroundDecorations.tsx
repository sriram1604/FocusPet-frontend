import React from "react";
import Image from "next/image";

export function BackgroundDecorations() {
  // Scattered cute FocusPet logos with larger, clearly visible dimensions
  const logos = [
    { top: "5%", left: "3%", size: 100, rot: "-12deg", opacity: 0.15, anim: "animate-float-subtle" },
    { top: "10%", right: "4%", size: 120, rot: "15deg", opacity: 0.16, anim: "animate-pet-idle" },
    { top: "28%", left: "6%", size: 85, rot: "8deg", opacity: 0.14, anim: "animate-gentle-pulse" },
    { top: "38%", right: "5%", size: 110, rot: "-18deg", opacity: 0.15, anim: "animate-float-subtle" },
    { top: "52%", left: "4%", size: 95, rot: "20deg", opacity: 0.14, anim: "animate-pet-idle" },
    { top: "62%", right: "6%", size: 130, rot: "-10deg", opacity: 0.16, anim: "animate-gentle-pulse" },
    { top: "76%", left: "5%", size: 105, rot: "-15deg", opacity: 0.15, anim: "animate-float-subtle" },
    { top: "86%", right: "4%", size: 115, rot: "12deg", opacity: 0.15, anim: "animate-pet-idle" },
    // Subtle interior floaters
    { top: "18%", left: "18%", size: 75, rot: "-6deg", opacity: 0.1, anim: "animate-float-subtle" },
    { top: "24%", right: "18%", size: 80, rot: "14deg", opacity: 0.11, anim: "animate-pet-idle" },
    { top: "45%", left: "14%", size: 70, rot: "-20deg", opacity: 0.1, anim: "animate-gentle-pulse" },
    { top: "68%", right: "16%", size: 85, rot: "10deg", opacity: 0.11, anim: "animate-float-subtle" },
    { top: "82%", left: "16%", size: 90, rot: "-14deg", opacity: 0.1, anim: "animate-pet-idle" },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Prominently sized scattered cute FocusPet logos */}
      {logos.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.anim}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            transform: `rotate(${item.rot})`,
            opacity: item.opacity,
            width: item.size,
            height: item.size,
          }}
        >
          <Image
            src="/images/Focuspet.png"
            alt=""
            width={item.size}
            height={item.size}
            className="object-contain filter grayscale contrast-125"
          />
        </div>
      ))}

      {/* Playful cute paws scattered */}
      <div
        className="absolute top-[8%] right-[15%] text-purple-400 text-2xl opacity-30 -rotate-12 animate-float-subtle"
      >
        🐾
      </div>
      <div
        className="absolute top-[32%] left-[12%] text-purple-400 text-xl opacity-35 rotate-15 animate-gentle-pulse"
      >
        🐾
      </div>
      <div
        className="absolute top-[50%] right-[12%] text-purple-400 text-3xl opacity-30 rotate-45 animate-float-subtle"
      >
        🐾
      </div>
      <div
        className="absolute top-[72%] left-[12%] text-purple-400 text-2xl opacity-35 -rotate-20 animate-pet-idle"
      >
        🐾
      </div>
      <div
        className="absolute top-[88%] right-[15%] text-purple-400 text-xl opacity-30 rotate-12 animate-gentle-pulse"
      >
        🐾
      </div>
    </div>
  );
}
