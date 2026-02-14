"use client";

import React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  active: string;
  scrollTo: (key: string) => void;
}

export default function Navbar({ active, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { key: "how", label: "How to Use" },
    { key: "why", label: "Why us?" },
    { key: "services", label: "Services" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10">
        
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3"
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-xl shadow-md">
            <Image
              src="/logo.png"
              alt="Lorenta Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-lg md:text-xl font-bold text-slate-900">
              LORENTA
            </div>
            <div className="text-xs font-medium text-slate-500 -mt-1 tracking-wider">
              TECHNOLOGIES
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex rounded-full bg-white/80 backdrop-blur-xl border border-black/10 px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item.key
                    ? "text-indigo-600 bg-indigo-50 border border-indigo-200"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-white shadow-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed top-20 left-6 right-6 bg-white rounded-2xl shadow-2xl p-6 md:hidden z-40">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  scrollTo(item.key);
                  setMenuOpen(false);
                }}
                className="text-left text-base font-medium text-slate-700 hover:text-indigo-600 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="h-24"></div>
    </>
  );
}
