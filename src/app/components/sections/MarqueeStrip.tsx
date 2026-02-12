import React from "react";
import Marquee from "../ui/Marquee";
import { MARQUEE_TEXT, MARQUEE_TEXT_INVERSE } from "../../constants";

export default function MarqueeStrip() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-full">
        <div className="relative h-68 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 w-[160%] -translate-x-1/2 -translate-y-1/2 -rotate-6 space-y-4">
            <Marquee text={MARQUEE_TEXT} speed={18} />
            <Marquee text={MARQUEE_TEXT_INVERSE} inverse speed={22} />
          </div>
        </div>
      </div>
    </section>
  );
}