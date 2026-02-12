"use client";

import React, { useState } from "react";
import { User, Phone, Mail, MessageSquare } from "lucide-react";
import Field from "./Field";

export default function ContactForm() {
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
    <form onSubmit={submit} className="rounded-3xl bg-white/70 border border-black/10 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          icon={<User className="h-4 w-4 text-indigo-600" />}
          placeholder="Name"
          value={form.name}
          onChange={(v) => setForm((p) => ({ ...p, name: v }))}
        />
        <Field
          icon={<Phone className="h-4 w-4 text-indigo-600" />}
          placeholder="Phone no."
          value={form.phone}
          onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<Mail className="h-4 w-4 text-indigo-600" />}
          placeholder="Email"
          value={form.email}
          onChange={(v) => setForm((p) => ({ ...p, email: v }))}
        />
      </div>

      <div className="mt-4">
        <Field
          icon={<MessageSquare className="h-4 w-4 text-indigo-600" />}
          placeholder="Message"
          value={form.message}
          onChange={(v) => setForm((p) => ({ ...p, message: v }))}
          textarea
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-md hover:opacity-95 transition"
      >
        Send Message Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ducimus quae quaerat libero enim possimus doloremque molestiae. Tempore aspernatur aliquid voluptate, distinctio nam quaerat excepturi quod odit consectetur autem ab!
      </button>

      {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
    </form>
  );
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero nam laborum temporibus sunt vitae itaque impedit asperiores, repellat deserunt quos perspiciatis velit amet consequuntur aperiam mollitia animi ducimus perferendis!