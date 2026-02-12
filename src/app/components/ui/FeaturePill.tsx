import React from "react";

interface FeaturePillProps {
  icon: React.ReactNode;
  title: string;
}

export default function FeaturePill({ icon, title }: FeaturePillProps) {
  return (
    <div className="rounded-2xl bg-indigo-600 text-white px-5 py-5 shadow-md flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center">
        {icon}
      </div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}