"use client";

import React from "react";
import { 
  Wrench, 
  Printer, 
  Code2, 
  AppWindow,
  CheckCircle2 
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
            <Wrench className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-semibold">What we build</h2>
          <p className="mt-3 text-slate-600">Practical, tested, reliable solutions by <span className="font-semibold">Lorenta</span>.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
    <div className="rounded-3xl bg-white/70 border border-black/10 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-11 w-11 rounded-2xl bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}