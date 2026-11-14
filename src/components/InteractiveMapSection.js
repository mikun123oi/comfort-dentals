"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  ShieldCheck, 
  ExternalLink,
  Copy,
  Check
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function InteractiveMapSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC_INFO.location.fullAddress
  )}`;

  return (
    <section className="relative w-full bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 border-t border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800 overflow-hidden">
      {/* Top Banner introducing location */}
      <div className="bg-oklahoma-blue-900 text-oklahoma-ivory-100 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-oklahoma-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-oklahoma-gold-400" />
              <span>Centrally Located in Oklahoma City</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Visit Our Oklahoma City Practice
            </h2>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-semibold text-sm shadow-md transition-all duration-200"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <button
              onClick={copyAddress}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-oklahoma-blue-700 bg-oklahoma-blue-800/80 hover:bg-oklahoma-blue-800 text-oklahoma-ivory-200 text-sm font-medium transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-oklahoma-gold-400" />}
              <span>{copied ? "Address Copied!" : "Copy Address"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white dark:bg-oklahoma-charcoal-800 p-6 sm:p-8 rounded-2xl shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400 uppercase">
                  Convenient South Western Access
                </span>
                <h3 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
                  Comfort Dental Clinic & Implant Institute
                </h3>
                <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-2">
                  Situated conveniently on S Western Avenue with swift highway access from I-35, I-40, and I-240. Proudly serving Oklahoma City, Moore, Norman, and surrounding communities.
                </p>
              </div>

              {/* Address card */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-oklahoma-ivory-100/80 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600">
                <div className="p-2.5 rounded-lg bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-600 text-oklahoma-blue-800 dark:text-oklahoma-gold-400 shrink-0">
                  <MapPin className="w-5 h-5 text-oklahoma-blue-700 dark:text-oklahoma-gold-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-oklahoma-gold-700 dark:text-oklahoma-gold-400 uppercase tracking-wider">
                    Physical Address
                  </div>
                  <div className="font-semibold text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 text-base mt-0.5">
                    3725 S Western Ave, Unit 725
                  </div>
                  <div className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                    Oklahoma City, OK 73109, United States
                  </div>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-oklahoma-ivory-100/80 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600 hover:border-oklahoma-gold-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-oklahoma-gold-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 uppercase font-semibold">
                      Main Clinic Phone
                    </div>
                    <div className="text-sm font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                      {CLINIC_INFO.contact.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.contact.emergencyPhoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 hover:border-red-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-[11px] text-red-700 dark:text-red-400 uppercase font-semibold">
                      Emergency Hotline
                    </div>
                    <div className="text-sm font-bold text-red-700 dark:text-red-300">
                      {CLINIC_INFO.contact.emergencyPhone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 uppercase">
                  <Clock className="w-3.5 h-3.5 text-oklahoma-gold-600" />
                  <span>Clinic & Surgical Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
                      <span className="font-medium text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-200">{h.day}</span>
                      <span className="font-semibold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parking details */}
              <div className="flex items-center gap-2.5 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 bg-oklahoma-sage-50 dark:bg-oklahoma-charcoal-700/50 p-2.5 rounded-lg border border-oklahoma-sage-200 dark:border-oklahoma-charcoal-600">
                <Car className="w-4 h-4 text-oklahoma-sage-600 dark:text-oklahoma-sage-400 shrink-0" />
                <span><strong>Complimentary Parking:</strong> Direct ground-level parking reserved in front of Unit 725. Wheelchair accessible ramp.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-oklahoma-gold-400" />
                <span>Open in Google Maps Navigation</span>
              </a>
            </div>
          </div>

          {/* Right Map Canvas */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 min-h-[420px] lg:min-h-[520px] relative bg-oklahoma-ivory-200 dark:bg-oklahoma-charcoal-800">
            {/* Interactive embedded Google Map */}
            <iframe
              title="Western Heritage Dental Clinic Location"
              src={CLINIC_INFO.location.mapEmbedUrl}
              className="w-full h-full min-h-[420px] lg:min-h-[520px] border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Floating Badge */}
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-oklahoma-charcoal-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-oklahoma-gold-400/40 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                  Comfort Dental Clinic
                </div>
                <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                  3725 S Western Ave, Unit 725, OKC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
