import React from "react";
import { cn } from "../../utils/cn";

interface MarqueeProps {
  text: string;
  inverse?: boolean;
  speed?: number;
}

export default function Marquee({ text, inverse, speed = 18 }: MarqueeProps) {
  return (
    <div
      className={cn(
        "rounded-full px-6 py-3 border border-black/10",
        inverse ? "bg-white/70" : "bg-indigo-600 text-white"
      )}
    >
      <div className="whitespace-nowrap overflow-hidden">
        <div className="inline-block animate-[marquee_18s_linear_infinite]">
          <span className="mx-6 font-medium">{text}</span>
          <span className="mx-6 font-medium">{text}</span>
          <span className="mx-6 font-medium">{text}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}