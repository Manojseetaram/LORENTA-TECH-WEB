"use client";

import React from "react";
import { Star } from "lucide-react";
import { SectionKey } from "@/types/section";

interface HeroProps {
  scrollTo: (key: SectionKey) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur-sm shadow-sm">
            <Star className="h-4 w-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Tech-enabled smart printing by{" "}
              <span className="font-semibold text-indigo-600">
                Lorenta
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl leading-tight">
            Smart Document Printing{" "}
            <span className="text-indigo-600">with Lorenta</span> for{" "}
            <span className="text-indigo-600">Campuses</span> &{" "}
            <span className="text-indigo-600">Offices</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            Hardware + software + automated payments by{" "}
            <span className="font-semibold">
              Lorenta Technologies
            </span>{" "}
            to improve campus operations and student experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <button className="w-full sm:w-auto rounded-full bg-indigo-600 text-white px-8 py-4 text-base sm:text-lg font-medium shadow-lg hover:bg-indigo-700 transition-all duration-300">
              Request Installation
            </button>

            <button
              onClick={() => scrollTo("how")}
              className="w-full sm:w-auto rounded-full bg-white/80 border border-black/10 px-8 py-4 text-base sm:text-lg font-medium hover:bg-white shadow-md transition-all duration-300"
            >
              See How It Works
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
