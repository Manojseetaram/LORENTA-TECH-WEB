import React from "react";

interface FieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}

export default function Field({ icon, placeholder, value, onChange, textarea }: FieldProps) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
      {icon}
      {textarea ? (
        <textarea
          className="w-full bg-transparent outline-none resize-none min-h-[110px]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}