"use client";

import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", phone: "", email: "", message: "" });
        
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(`❌ Failed: ${data.message || "Try again."}`);
      }
    } catch (error) {
      setStatus("❌ Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-16 pb-28 scroll-mt-20 min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-black/10 bg-white/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Get in touch</h2>
              <p className="mt-3 text-slate-600">
                Message us on WhatsApp or send your details here.
              </p>

              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-indigo-600" />
                  <span>Contact Number: (add your number)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span>Email: sales@lorentatechnologies.com</span>
                </div>
                <div className="mt-4 text-slate-600">
                  Head Office: (add address)
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  sales@lorentatechnologies Pvt Ltd
                </div>
              </div>
            </div>

            <ContactForm form={form} setForm={setForm} submit={submit} status={status} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactFormProps {
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  submit: (e: React.FormEvent) => Promise<void>;
  status: string;
}

function ContactForm({ form, setForm, submit, status }: ContactFormProps) {
  return (
    <form onSubmit={submit} className="rounded-3xl bg-white/70 border border-black/10 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          icon={<User className="h-4 w-4 text-indigo-600" />}
          placeholder="Name *"
          value={form.name}
          onChange={(v: string) => setForm((p) => ({ ...p, name: v }))}
        />
        <Field
          icon={<Phone className="h-4 w-4 text-indigo-600" />}
          placeholder="Phone no. *"
          value={form.phone}
          onChange={(v: string) => setForm((p) => ({ ...p, phone: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<Mail className="h-4 w-4 text-indigo-600" />}
          placeholder="Email *"
          value={form.email}
          onChange={(v: string) => setForm((p) => ({ ...p, email: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<MessageSquare className="h-4 w-4 text-indigo-600" />}
          placeholder="Message *"
          value={form.message}
          onChange={(v: string) => setForm((p) => ({ ...p, message: v }))}
          textarea
        />
      </div>

      <button
        type="submit"
        disabled={status === "Sending..."}
        className="mt-5 w-full rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "Sending..." ? "Sending..." : "Send Message"}
      </button>

      {status && status !== "Sending..." && (
        <div className={`mt-3 text-sm ${
          status.includes("✅") ? "text-green-600" : "text-red-600"
        }`}>
          {status}
        </div>
      )}
    </form>
  );
}

interface FieldProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}

function Field({
  icon,
  placeholder,
  value,
  onChange,
  textarea,
}: FieldProps) {
  return (
    <div className="flex items-start gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
      <div className="mt-1">{icon}</div>
      {textarea ? (
        <textarea
          className="w-full bg-transparent outline-none min-h-[110px]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      ) : (
        <input
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      )}
    </div>
  );
}