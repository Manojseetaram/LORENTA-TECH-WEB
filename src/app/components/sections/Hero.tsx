"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const loadGsap = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        // Orb floats
        gsap.fromTo(orb1Ref.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 2, ease: "power3.out" });
        gsap.to(orb1Ref.current, { y: -30, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });

        gsap.fromTo(orb2Ref.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 2, ease: "power3.out", delay: 0.3 });
        gsap.to(orb2Ref.current, { y: 24, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2.3 });

        // Staggered reveal
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.fromTo(logoRef.current, { opacity: 0, y: 30, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 })
          .fromTo(headingRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.75 }, "-=0.4")
          .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35")
          .fromTo(linkRef.current, { opacity: 0, y: 14, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, "-=0.3");
      }, sectionRef);
    };

    loadGsap();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ background: "#f8f8ff" }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Centre glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Orb 1 */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute opacity-0"
        style={{
          top: "10%", left: "5%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Orb 2 */}
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute opacity-0"
        style={{
          bottom: "8%", right: "4%",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}
        <div ref={logoRef} className="opacity-0 mb-8">
          <Image
            src="/logo.png"
            alt="Lorenta Technologies"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </div>

        {/* Coming Soon */}
        <h1
          ref={headingRef}
          className="opacity-0 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Coming{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="opacity-0 mt-5 text-base sm:text-lg text-slate-500 max-w-md leading-relaxed"
        >
          Our main website is on its way.
          <br />
          In the meantime, check out our smart printing app below.
        </p>

        {/* PrintPoint link — opens in new tab */}
        <a
          ref={linkRef}
          href="https://printpoint.lorentatechnologies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group mt-10 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/90 px-6 py-3.5 shadow-md backdrop-blur-sm hover:border-indigo-400 hover:shadow-indigo-200/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          {/* Printer icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>

          <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700 transition-colors duration-200">
            printpoint.lorentatechnologies.com
          </span>

          {/* External link arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

      </div>
    </section>
  );
}