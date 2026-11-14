"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  Navigation,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    preferredContact: "phone"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50">
            <MessageSquare className="w-4 h-4 text-oklahoma-gold-500" />
            <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 uppercase tracking-wider">
              We Are Here for You
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Contact Our Oklahoma City <br />
            <span className="gold-gradient-text italic font-normal">Concierge Team</span>
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            Have a question, need assistance with insurance benefits, or wish to schedule an appointment? We respond promptly and warmly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                Clinic Location
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                Comfort Dental Clinic & Implant Institute
              </h2>
              <div className="p-5 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-oklahoma-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100">
                      3725 S Western Ave, Unit 725
                    </div>
                    <div className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                      Oklahoma City, OK 73109, United States
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 flex items-center gap-2 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                  <Car className="w-4 h-4 text-oklahoma-sage-600 shrink-0" />
                  <span>Ample, free patient parking directly in front of Unit 725.</span>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                Direct Communication
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                  className="p-4 rounded-xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400 transition-colors shadow-sm block group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 uppercase">
                    <Phone className="w-4 h-4 text-oklahoma-gold-500" />
                    <span>Main Clinic</span>
                  </div>
                  <div className="text-base font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
                    {CLINIC_INFO.contact.phone}
                  </div>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.contact.emergencyPhoneRaw}`}
                  className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 hover:border-red-400 transition-colors shadow-sm block group"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400 uppercase">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>24/7 Emergency</span>
                  </div>
                  <div className="text-base font-bold text-red-700 dark:text-red-300 mt-1">
                    {CLINIC_INFO.contact.emergencyPhone}
                  </div>
                </a>
              </div>

              <a
                href={`mailto:${CLINIC_INFO.contact.email}`}
                className="p-4 rounded-xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400 transition-colors shadow-sm flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-oklahoma-gold-500 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 uppercase">
                    General Email Inquiries
                  </div>
                  <div className="text-sm font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-0.5">
                    {CLINIC_INFO.contact.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                Clinic & Operating Hours
              </span>
              <div className="bg-white dark:bg-oklahoma-charcoal-800 p-5 rounded-2xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm divide-y divide-oklahoma-ivory-200 dark:divide-oklahoma-charcoal-700 text-xs">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center first:pt-0 last:pb-0">
                    <span className="font-semibold text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-200">{h.day}</span>
                    <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Patient Enquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-oklahoma-charcoal-800 p-8 sm:p-10 rounded-3xl shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                    Online Message
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
                    Send a Patient Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1">
                    Fill out the form below. Our concierge desk will contact you within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(405) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                      Reason for Contact
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Dental Implants">Dental Implants / Tooth Replacement</option>
                      <option value="Cosmetic Veneers">Cosmetic Dentistry / Veneers</option>
                      <option value="Invisalign">Invisalign Clear Aligners</option>
                      <option value="Sedation Dentistry">Sedation / Dental Anxiety</option>
                      <option value="Insurance Question">Dental Insurance Verification</option>
                      <option value="Emergency Care">Emergency Care Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                    Your Message or Clinical Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us how we can assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>HIPAA Compliant & Confidential</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4 text-oklahoma-gold-400" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    Message Received, {formData.name}!
                  </h4>
                  <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-2 max-w-md mx-auto">
                    Thank you for reaching out to Comfort Dental Clinic. Our patient concierge will contact you at {formData.phone} shortly.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md"
                  >
                    <span>Prefer to Schedule Online Now? &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
