"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--card)] backdrop-blur-xl">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              Lorenta Technologies
            </h3>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Practical, tested and reliable technology solutions.  
              Built for campuses, offices and modern environments.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>Document Printing Solutions</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Custom Product Development</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
              <li><a href="#why" className="hover:text-indigo-600 transition">Why Us</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>

            <div className="mt-4 space-y-4 text-sm text-[var(--muted)]">

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-indigo-600 mt-0.5" />
                <span>7899957067</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-indigo-600 mt-0.5" />
                <span>sales@lorentatechnologies.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-indigo-600 mt-0.5" />
                <span>Mijar Manglore</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Lorenta Technologies Pvt Ltd.  
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
