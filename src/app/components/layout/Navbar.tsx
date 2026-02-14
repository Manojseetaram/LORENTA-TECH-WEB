"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SectionKey } from "@/types/section";

interface NavbarProps {
  active: SectionKey;
  scrollTo: (key: SectionKey) => void;
}

export default function Navbar({ active, scrollTo }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide navbar on scroll down
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

  const navItems = [
    { key: "how", label: "How to Use" },
    { key: "why", label: "Why us?" },
    { key: "services", label: "Services" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={`
          fixed top-4 left-0 right-0 z-50
          transition-transform duration-300 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-32"}
        `}
      >
        <div className="relative flex items-center justify-between px-6 md:px-10">
          
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group"
          >
            <div className="h-12 w-12 md:h-14 md:w-14 overflow-hidden shadow-md bg-white rounded-full p-2">
              <Image
                src="/logo.png"
                alt="Lorenta Logo"
                width={56}
                height={56}
              />
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-lg md:text-xl font-bold text-slate-900">
                LORENTA
              </div>
              <div className="text-[10px] md:text-xs text-slate-500">
                TECHNOLOGIES
              </div>
            </div>
          </button>

          {/* Desktop Center Nav */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:block rounded-full bg-white/90 backdrop-blur-xl px-4 py-2.5 shadow-lg border border-black/5">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.key as SectionKey)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === item.key
                      ? "text-indigo-600 bg-indigo-50 shadow-sm"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Right Side Placeholder (Desktop) */}
          <div className="hidden md:block w-[160px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-white shadow-md"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 mx-6 bg-white rounded-full shadow-2xl p-6 z-50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    scrollTo(item.key as SectionKey);
                    setMenuOpen(false);
                  }}
                  className={`text-left text-base font-medium transition ${
                    active === item.key
                      ? "text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="h-24 md:h-28" />
    </>
  );
}
