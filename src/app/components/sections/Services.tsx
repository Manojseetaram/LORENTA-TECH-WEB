"use client";

import React from "react";
import {
  Wrench,
  Printer,
  Code2,
  AppWindow,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur-md shadow-sm">
            <Wrench className="h-4 w-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-[var(--text)]">
              Our Services
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            What we build
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Practical, tested, reliable solutions by{" "}
            <span className="font-semibold text-indigo-600">
              Lorenta
            </span>.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          <ServiceCard
            icon={<Printer className="h-5 w-5 text-indigo-600" />}
            title="Document Printing Lorenta"
            desc="We design and build document printing solutions that allow users to print documents quickly without staff support."
            bullets={[
              "Saves time for users",
              "Reduces dependency on manual staff",
              "Self-service system",
              "Available 24/7",
            ]}
          />

          <ServiceCard
            icon={<Code2 className="h-5 w-5 text-indigo-600" />}
            title="Web Development"
            desc="Clean and responsive websites focused on usability, performance, and stability."
            bullets={[
              "Works smoothly on all devices",
              "Easy to manage and update",
              "Built for speed and reliability",
            ]}
          />

          <ServiceCard
            icon={<AppWindow className="h-5 w-5 text-indigo-600" />}
            title="App Development"
            desc="Mobile applications for Android and iOS based on real user needs."
            bullets={[
              "Simple user experience",
              "Secure and scalable",
              "Designed for real-world use",
            ]}
          />

          <ServiceCard
            icon={<Wrench className="h-5 w-5 text-indigo-600" />}
            title="Customisable Product Development"
            desc="From concept to deployment, we build solutions that fit specific requirements."
            bullets={[
              "Custom-built to match your needs",
              "Easy to modify and scale",
              "Practical, tested, reliable",
              "Complete support end-to-end",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div
      className="
        group
        rounded-3xl
        bg-[var(--card)]
        border border-[var(--border)]
        backdrop-blur-xl
        p-6 sm:p-7 lg:p-8
        shadow-[var(--shadow)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Icon */}
      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-indigo-50 flex items-center justify-center transition group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[var(--muted)] leading-relaxed text-sm sm:text-base">
        {desc}
      </p>

      {/* Bullets */}
      <ul className="mt-5 space-y-3 text-[var(--text)] text-sm sm:text-base">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
