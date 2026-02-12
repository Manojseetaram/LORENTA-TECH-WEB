"use client";

import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent!");
      setForm({ name: "", phone: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed. Try again.");
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
                  <span>Contact Number: +91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span>Email: sales@lorenta.tech</span>
                </div>
                <div className="mt-4 text-slate-600">
                  Head Office: Bengaluru, Karnataka, India
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

function ContactForm({ form, setForm, submit, status }: any) {
  return (
    <form onSubmit={submit} className="rounded-3xl bg-white/70 border border-black/10 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          icon={<User className="h-4 w-4 text-indigo-600" />}
          placeholder="Name"
          value={form.name}
          onChange={(v: string) => setForm((p: any) => ({ ...p, name: v }))}
        />
        <Field
          icon={<Phone className="h-4 w-4 text-indigo-600" />}
          placeholder="Phone no."
          value={form.phone}
          onChange={(v: string) => setForm((p: any) => ({ ...p, phone: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<Mail className="h-4 w-4 text-indigo-600" />}
          placeholder="Email"
          value={form.email}
          onChange={(v: string) => setForm((p: any) => ({ ...p, email: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<MessageSquare className="h-4 w-4 text-indigo-600" />}
          placeholder="Message"
          value={form.message}
          onChange={(v: string) => setForm((p: any) => ({ ...p, message: v }))}
          textarea
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-md hover:opacity-95 transition"
      >
        Send Message
      </button>

      {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
    </form>
  );
}

function Field({
  icon,
  placeholder,
  value,
  onChange,
  textarea,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
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