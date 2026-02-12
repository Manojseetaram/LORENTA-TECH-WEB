import React from "react";

interface StepCardProps {
  step: string;
  title: string;
  desc: string;
}

export default function StepCard({ step, title, desc }: StepCardProps) {
  return (
    <div className="rounded-3xl bg-indigo-600 text-white p-6 shadow-[var(--shadow)]">
      <div className="inline-flex items-center rounded-full bg-white text-indigo-700 px-4 py-1 text-xs font-semibold">
        {step}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/85 text-sm">{desc}</p>
      <div className="mt-5 h-40 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white/80 text-sm">
        (Image placeholder)
      </div>
    </div>
  );
}