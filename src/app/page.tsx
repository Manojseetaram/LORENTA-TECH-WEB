"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import HowToUse from "./components/sections/HowToUse";
import WhyUs from "./components/sections/WhyUs";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

type SectionKey = "home" | "how" | "why" | "services" | "contact";

export default function HomePage() {
  const [active, setActive] = useState<SectionKey>("home");

  // Setup intersection observer to detect active section
  useEffect(() => {
    const idsToObserve: SectionKey[] = ["home", "how", "why", "services", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Get the entry with the highest intersection ratio
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        
        if (visibleEntry?.target?.id) {
          setActive(visibleEntry.target.id as SectionKey);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-100px 0px -100px 0px", // Offset for navbar
      }
    );

    // Observe all sections
    idsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll to section
  const scrollTo = useCallback((key: SectionKey) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <main className="bg-grid min-h-screen">
      <Navbar active={active} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Features />
      <MarqueeStrip />
      <HowToUse />
      <WhyUs />
      <Services />
      <Contact />
    </main>
  );
}