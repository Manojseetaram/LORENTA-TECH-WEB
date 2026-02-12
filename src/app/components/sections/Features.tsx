import React from "react";
import { Shield, Clock, Star, Zap, Smartphone, User } from "lucide-react";
import FeaturePill from "../ui/FeaturePill";

export default function Features() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative rounded-3xl bg-white/55 border border-black/10 p-6 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            <div className="space-y-5">
              <FeaturePill icon={<Shield className="h-5 w-5" />} title="100% Secured Documents" />
              <FeaturePill icon={<Clock className="h-5 w-5" />} title="24/7 Availability" />
              <FeaturePill icon={<Star className="h-5 w-5" />} title="Patented Technology" />
            </div>

            <div className="flex justify-center">
              <div className="w-[260px] sm:w-[320px] aspect-[9/16] rounded-2xl bg-gradient-to-b from-indigo-100 to-indigo-200 border border-black/10 shadow-[var(--shadow)] flex items-center justify-center">
                <span className="text-slate-600 text-sm">Kiosk Image</span>
              </div>
            </div>

            <div className="space-y-5">
              <FeaturePill icon={<Zap className="h-5 w-5" />} title="Print Under 60 Seconds" />
              <FeaturePill icon={<Smartphone className="h-5 w-5" />} title="Contactless & Clean" />
              <FeaturePill icon={<User className="h-5 w-5" />} title="Ideal for All Users" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}