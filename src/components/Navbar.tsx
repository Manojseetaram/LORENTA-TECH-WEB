"use client";

import React from "react";
import Image from "next/image";

interface NavbarProps {
  active: string;
  scrollTo: (key: string) => void;
}

export default function Navbar({ active, scrollTo }: NavbarProps) {
  return (
    <>
      {/* Main Container */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-10">
        {/* Logo and LORENTA TECHNOLOGIES - LEFT SIDE */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-4 hover:opacity-80 transition group"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl transition-shadow">
            <Image 
              src="/logo.png" 
              alt="Lorenta Logo" 
              width={64} 
              height={64}
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              LORENTA
            </div>
            <div className="text-xs font-medium text-slate-500 -mt-1 tracking-wider">
              TECHNOLOGIES
            </div>
          </div>
        </button>

        {/* Navigation Links - RIGHT SIDE */}
        <nav className="rounded-full bg-white/80 backdrop-blur-xl border border-black/10 px-4 py-2.5 shadow-lg hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-2">
            {[
              { key: "how", label: "How to Use" },
              { key: "why", label: "Why us?" },
              { key: "services", label: "Services" },
              { key: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.key)}
                className={`
                  px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300
                  ${
                    active === item.key
                      ? "text-indigo-600 bg-indigo-50 shadow-md border border-indigo-200"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70 hover:shadow-md"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Reduced spacer */}
      <div className="h-24"></div>
    </>
  );
}