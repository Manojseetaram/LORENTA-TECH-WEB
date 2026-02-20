import React from "react";
import {
  Shield,
  Clock,
  Star,
  Zap,
  Smartphone,
  User,
} from "lucide-react";
import FeaturePill from "../ui/FeaturePill";

export default function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
{/* nothing changed */}
        <div
          className="
            relative
            rounded-3xl
            bg-[var(--card)]
            border border-[var(--border)]
            p-6 sm:p-10 lg:p-14
            shadow-[var(--shadow)]
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

            {/* Left Features */}
            <div className="space-y-6 text-center lg:text-left">
              <FeaturePill
                icon={<Shield className="h-5 w-5" />}
                title="100% Secured Documents"
              />
              <FeaturePill
                icon={<Clock className="h-5 w-5" />}
                title="24/7 Availability"
              />
              <FeaturePill
                icon={<Star className="h-5 w-5" />}
                title="Patented Technology"
              />
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-first lg:order-none">
              <div
                className="
                  w-[220px]
                  sm:w-[260px]
                  md:w-[300px]
                  lg:w-[320px]
                  aspect-[9/16]
                  rounded-2xl
                  bg-gradient-to-b
                  from-indigo-100
                  to-indigo-200
                  border border-[var(--border)]
                  shadow-[var(--shadow)]
                  flex items-center justify-center
                "
              >
                <span className="text-slate-600 text-sm font-medium">
                  Kiosk Image
                </span>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-6 text-center lg:text-left">
              <FeaturePill
                icon={<Zap className="h-5 w-5" />}
                title="Print Under 60 Seconds"
              />
              <FeaturePill
                icon={<Smartphone className="h-5 w-5" />}
                title="Contactless & Clean"
              />
              <FeaturePill
                icon={<User className="h-5 w-5" />}
                title="Ideal for All Users"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
