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
import Footer from "./components/sections/footer";
// import CountdownPage from "./countdown";

type SectionKey = "home" | "how" | "why" | "services" | "contact";

export default function HomePage() {
  const [active, setActive] = useState<SectionKey>("home");

  useEffect(() => {
    const idsToObserve: SectionKey[] = [
      "home",
      "how",
      "why",
      "services",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio || 0) -
              (a.intersectionRatio || 0)
          )[0];

        if (visibleEntry?.target?.id) {
          setActive(visibleEntry.target.id as SectionKey);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px -80px 0px", // better for mobile
      }
    );

    idsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((key: SectionKey) => {
    const element = document.getElementById(key);
    if (element) {
      const yOffset = -80; // offset for fixed navbar
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-grid">
      <Navbar active={active} scrollTo={scrollTo} />

      {/* Sections wrapped in responsive container */}
      <div className="flex flex-col">
       <Hero scrollTo={scrollTo} /> 
        <Features />
        <MarqueeStrip />
        <HowToUse />
        <WhyUs />
        <Services />
        <Contact />
        <Footer />
         {/* <CountdownPage /> */}
      </div>
    </main>
  );
}
