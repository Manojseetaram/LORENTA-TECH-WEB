import React from "react";
import { Shield, Zap, XCircle, CheckCircle2 } from "lucide-react";
import WhyCard from "../ui/WhyCard";
import { WHY_US_ITEMS_ROW1, WHY_US_ITEMS_ROW2 } from "../../constants";

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur-md">
            <Shield className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium">Why us?</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl font-semibold tracking-tight">
            So, why{" "}
            <span className="text-indigo-600">Lorenta</span> is the best way to print?
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            Smarter printing for a busy world.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_US_ITEMS_ROW1.map((item, index) => (
            <WhyCard
              key={index}
              icon={<item.icon className="h-5 w-5 text-indigo-600" />}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_US_ITEMS_ROW2.map((item, index) => (
            <WhyCard
              key={index}
              icon={<item.icon className="h-5 w-5 text-indigo-600" />}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md shadow-[var(--shadow)] p-8 sm:p-12">
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/50 px-4 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium">Smarter vs Traditional</span>
            </div>

            <h3 className="mt-6 text-2xl sm:text-4xl font-semibold">
              And, why{" "}
              <span className="text-indigo-600">Lorenta</span> stands out?
            </h3>

            <p className="mt-2 text-[var(--muted)]">
              Self-service printing vs. traditional print shops
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Traditional */}
            <div className="rounded-2xl border border-[var(--border)] bg-white/60 backdrop-blur-md p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4">
                Traditional Print Shops
              </h4>

              <ul className="space-y-3 text-[var(--text)]">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  Limited working hours
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  Long queues and delays
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  Requires staff interaction
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  Manual handling of files
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  Slower process overall
                </li>
              </ul>
            </div>

            {/* Lorenta */}
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-50/40 backdrop-blur-md p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-indigo-700">
                Lorenta Technology
              </h4>

              <ul className="space-y-3 text-[var(--text)]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  24/7 access
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  Fast printing workflow
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  Private and self-service
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  No human interaction needed
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                  Built for campuses and offices
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
