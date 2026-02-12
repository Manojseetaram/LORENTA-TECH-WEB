import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}

export default function ServiceCard({ icon, title, desc, bullets }: ServiceCardProps) {
  return (
    <div className="rounded-3xl bg-white/70 border border-black/10 p-6 shadow-sm">
      <div className="h-11 w-11 rounded-2xl bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}