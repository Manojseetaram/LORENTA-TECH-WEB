"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SectionKey } from "@/types/section";

interface NavbarProps {
  active: SectionKey;
  scrollTo: (key: SectionKey) => void;
}

export default function Navbar({ active, scrollTo }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`
          fixed top-8 left-0 right-0 z-50 flex justify-between items-center px-10
          transition-transform duration-300 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-32"}
        `}
      >
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-4 hover:opacity-80 transition group"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-xl shadow-md">
            <Image src="/logo.png" alt="Lorenta Logo" width={64} height={64} />
          </div>

          <div className="text-left">
            <div className="text-xl font-bold text-slate-900">LORENTA</div>
            <div className="text-xs text-slate-500">TECHNOLOGIES</div>
          </div>
        </button>

        <nav className="absolute left-1/2 transform -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-xl border px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            {[
              { key: "how", label: "How to Use" },
              { key: "why", label: "Why us?" },
              { key: "services", label: "Services" },
              { key: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.key as SectionKey)}
                className={
                  active === item.key
                    ? "text-indigo-600 bg-indigo-50 px-6 py-2.5 rounded-full"
                    : "text-slate-600 px-6 py-2.5 rounded-full"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="w-[180px]" />
      </div>

      <div className="h-28"></div>
    </>
  );
}
