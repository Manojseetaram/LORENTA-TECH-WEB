"use client";

import React from "react";
import { Star } from "lucide-react";

interface HeroProps {
  scrollTo: (key: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section 
      id="home" 
      className="pt-36 pb-16 flex items-center justify-center" /* Removed h-screen */
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm">
            <Star className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-slate-700">
              Tech-enabled smart printing Lorenta
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl">
            Smart Document Printing{" "}
            <span className="text-indigo-600">Lorenta</span> for{" "}
            <span className="text-indigo-600">Campuses</span> &{" "}
            <span className="text-indigo-600">Offices</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-600">
            Hardware + software + automated payments to improve campus operations and student experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="rounded-full bg-indigo-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:bg-indigo-700 transition">
              Request Installation
            </button>
            <button
              onClick={() => scrollTo("how")}
              className="rounded-full bg-white/70 border border-black/10 px-8 py-4 text-lg font-medium hover:bg-white shadow-md transition"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}