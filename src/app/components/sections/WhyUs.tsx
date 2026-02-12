import React from "react";
import { Shield, Zap, Clock, Star, Smartphone, User, XCircle, CheckCircle2 } from "lucide-react";
import WhyCard from "../ui/WhyCard";
import { WHY_US_ITEMS_ROW1, WHY_US_ITEMS_ROW2 } from "../../constants";

export default function WhyUs() {
  return (
    <section id="why" className="py-16 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
            <Shield className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium">Why us?</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-semibold">
            So, why <span className="text-indigo-600">Lorenta</span> is the best way to print?
          </h2>
          <p className="mt-3 text-slate-600">Smarter printing for a busy world.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHY_US_ITEMS_ROW1.map((item, index) => (
            <WhyCard key={index} icon={<item.icon className="h-5 w-5 text-indigo-600" />} title={item.title} desc={item.desc} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHY_US_ITEMS_ROW2.map((item, index) => (
            <WhyCard key={index} icon={<item.icon className="h-5 w-5 text-indigo-600" />} title={item.title} desc={item.desc} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-black/10 bg-white/60 p-6 sm:p-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium">Smarter vs Traditional</span>
            </div>
            <h3 className="mt-6 text-2xl sm:text-4xl font-semibold">
              And, why <span className="text-indigo-600">Lorenta</span> stands out?
            </h3>
            <p className="mt-2 text-slate-600">Self-service printing vs. traditional print shops</p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
              <h4 className="text-lg font-semibold mb-4">Traditional Print Shops</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-rose-500 mt-0.5" /> Limited working hours</li>
                <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-rose-500 mt-0.5" /> Long queues and delays</li>
                <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-rose-500 mt-0.5" /> Requires staff interaction</li>
                <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-rose-500 mt-0.5" /> Manual handling of files</li>
                <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-rose-500 mt-0.5" /> Slower process overall</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-indigo-600/40 bg-indigo-50/60 p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-indigo-700">Lorenta Kiosk</span>
              </h4>
              <ul className="space-y-3 text-slate-800">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> 24/7 access</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> Fast printing workflow</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> Private and self-service</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> No human interaction needed</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" /> Built for campuses and offices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}