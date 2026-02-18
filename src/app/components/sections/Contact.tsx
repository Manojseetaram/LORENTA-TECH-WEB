"use client";

import React, { useState } from "react";
import { Phone, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";

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



 const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const loadingToast = toast.loading("Sending message...");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message || "Message sent successfully!", {
        id: loadingToast,
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      toast.error(data.message || "Failed to send message", {
        id: loadingToast,
      });
    }
  } catch (error) {
    toast.error("Network error. Please try again.", {
      id: loadingToast,
    });
  }
};

  return (
    <section
      id="contact"
      className="relative py-24 scroll-mt-24 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-6xl px-4 w-full">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md shadow-[var(--shadow)] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Get in touch
              </h2>

              <p className="mt-3 text-[var(--muted)]">
                Message us on WhatsApp or send your details here.
              </p>

              <div className="mt-8 space-y-4 text-[var(--text)]">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-indigo-600" />
                  <span>Contact Number: 8618634848</span>
                </div>

                {/* <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span>Email: sales@lorentatechnologies.com</span>
                </div> */}

                {/* <div className="mt-4 text-[var(--muted)]">
                  Head Office: (add address)
                </div> */}

                {/* <div className="text-xs text-[var(--muted)] mt-2">
                  sales@lorentatechnologies Pvt Ltd
                </div> */}
              </div>
            </div>

            {/* Form */}
            <ContactForm
  form={form}
  setForm={setForm}
  submit={submit}
/>  
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

function ContactForm({
  form,
  setForm,
  submit,
  status,
}: ContactFormProps) {
  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-[var(--border)] bg-white/50 backdrop-blur-md p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          icon={<User className="h-4 w-4 text-indigo-600" />}
          placeholder="Name *"
          value={form.name}
          onChange={(v) => setForm((p) => ({ ...p, name: v }))}
        />

        <Field
          icon={<Phone className="h-4 w-4 text-indigo-600" />}
          placeholder="Phone no. *"
          value={form.phone}
          onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
        />
      </div>

      <div className="mt-5">
        <Field
          icon={<Mail className="h-4 w-4 text-indigo-600" />}
          placeholder="Email *"
          value={form.email}
          onChange={(v) => setForm((p) => ({ ...p, email: v }))}
        />
      </div>

      <div className="mt-5">
        <Field
          icon={<MessageSquare className="h-4 w-4 text-indigo-600" />}
          placeholder="Message *"
          value={form.message}
          onChange={(v) => setForm((p) => ({ ...p, message: v }))}
          textarea
        />
      </div>

      <button
        type="submit"
        disabled={status === "Sending..."}
        className="mt-6 w-full rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-md hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "Sending..." ? "Sending..." : "Send Message"}
      </button>

      {status && status !== "Sending..." && (
        <div
          className={`mt-4 text-sm ${
            status.includes("✅") ? "text-emerald-600" : "text-rose-500"
          }`}
        >
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
    <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/60 backdrop-blur-sm px-4 py-3 focus-within:border-indigo-400 transition">
      <div className="mt-1">{icon}</div>

      {textarea ? (
        <textarea
          className="w-full bg-transparent outline-none min-h-[120px] resize-none"
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
