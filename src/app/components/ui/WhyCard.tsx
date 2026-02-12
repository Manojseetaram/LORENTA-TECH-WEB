import React from "react";

interface WhyCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function WhyCard({ icon, title, desc }: WhyCardProps) {
  return (
    <div className="rounded-3xl bg-white/70 border border-black/10 p-6 shadow-sm">
      <div className="h-11 w-11 rounded-2xl bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}