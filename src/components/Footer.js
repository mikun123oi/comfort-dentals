"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  Award,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-oklahoma-blue-900 text-oklahoma-ivory-100 border-t border-oklahoma-blue-800">
      {/* Top Highlights Strip */}
      <div className="border-b border-oklahoma-blue-800/80 bg-oklahoma-blue-950/60 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-oklahoma-blue-800 text-oklahoma-gold-400 shrink-0 border border-oklahoma-gold-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Board-Certified Specialists</div>
              <div className="text-xs text-oklahoma-ivory-300">Fellows of AGD, ICOI & ABO</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-oklahoma-blue-800 text-oklahoma-gold-400 shrink-0 border border-oklahoma-gold-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">100% Pain-Free Guarantee</div>
              <div className="text-xs text-oklahoma-ivory-300">Computerized Wand & IV sedation</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-oklahoma-blue-800 text-oklahoma-gold-400 shrink-0 border border-oklahoma-gold-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">4.9★ Top-Rated OKC Clinic</div>
              <div className="text-xs text-oklahoma-ivory-300">Over 850+ five-star patient reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-oklahoma-blue-800 text-oklahoma-gold-400 shrink-0 border border-oklahoma-gold-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Zero-Wait Appointment Promise</div>
              <div className="text-xs text-oklahoma-ivory-300">Prompt seating within 5 minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-oklahoma-blue-600 to-oklahoma-blue-800 border border-oklahoma-gold-400 flex items-center justify-center text-oklahoma-gold-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 6 4.5 6 8c0 3 1.5 5 2.5 8 .8 2.5 1.5 6 3.5 6s2.7-3.5 3.5-6c1-3 2.5-5 2.5-8 0-3.5-2-6-6-6z" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Comfort Dental
                </span>
                <span className="text-[10px] tracking-widest uppercase text-oklahoma-gold-400 font-semibold block">
                  Clinic & Implant Institute • OKC
                </span>
              </div>
            </div>

            <p className="text-sm text-oklahoma-ivory-300 leading-relaxed max-w-sm">
              Oklahoma City&apos;s premier destination for luxury restorative, aesthetic, and sedation dentistry. Combining Oklahoma warmth and natural heritage with state-of-the-art 3D imaging, pain-free anesthesia, and personalized dental wellness.
            </p>

            <div className="space-y-2 text-xs text-oklahoma-ivory-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-oklahoma-gold-400 shrink-0 mt-0.5" />
                <span>3725 S Western Ave, Unit 725, Oklahoma City, OK 73109</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-oklahoma-gold-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.contact.phoneRaw}`} className="hover:text-oklahoma-gold-400 transition-colors">
                  Clinic: {CLINIC_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-oklahoma-gold-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.contact.email}`} className="hover:text-oklahoma-gold-400 transition-colors">
                  {CLINIC_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-oklahoma-ivory-300">
              <li>
                <Link href="/" className="hover:text-oklahoma-gold-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-oklahoma-gold-400 transition-colors">About Our Clinic & Team</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-oklahoma-gold-400 transition-colors">All Dental Services</Link>
              </li>
              <li>
                <Link href="/membership" className="text-oklahoma-gold-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Membership Plan ($0 Cleanings)</span>
                  <span className="text-[10px] bg-oklahoma-gold-500 text-oklahoma-blue-900 px-1.5 py-0.2 rounded font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-oklahoma-gold-400 transition-colors">Patient FAQs & Insurance</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-oklahoma-gold-400 transition-colors">Contact & Directions</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-oklahoma-gold-400 transition-colors font-semibold text-oklahoma-gold-300">
                  Book Appointment Online &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Dental Treatments Directory */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Specialized Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-oklahoma-ivory-300">
              <li>
                <Link href="/services#restorative" className="hover:text-oklahoma-gold-400 transition-colors">Permanent Dental Implants</Link>
              </li>
              <li>
                <Link href="/services#cosmetic" className="hover:text-oklahoma-gold-400 transition-colors">Porcelain Veneers & DSD</Link>
              </li>
              <li>
                <Link href="/services#cosmetic" className="hover:text-oklahoma-gold-400 transition-colors">Zoom! Laser Teeth Whitening</Link>
              </li>
              <li>
                <Link href="/services#orthodontics" className="hover:text-oklahoma-gold-400 transition-colors">Invisalign Clear Aligners</Link>
              </li>
              <li>
                <Link href="/services#restorative" className="hover:text-oklahoma-gold-400 transition-colors">Painless Root Canal Therapy</Link>
              </li>
              <li>
                <Link href="/services#orthodontics" className="hover:text-oklahoma-gold-400 transition-colors">Certified IV Sedation</Link>
              </li>
              <li>
                <Link href="/services#emergency" className="hover:text-red-400 transition-colors font-semibold text-red-300">
                  24/7 Same-Day Emergency
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Emergency Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Hours & Emergency
            </h4>
            <div className="space-y-2 text-xs text-oklahoma-ivory-300">
              <div>
                <span className="font-semibold text-white block">Mon – Thu:</span>
                <span>7:00 AM – 6:00 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Friday:</span>
                <span>7:00 AM – 3:00 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Saturday:</span>
                <span>8:00 AM – 1:00 PM (By Appt)</span>
              </div>
              <div className="pt-2">
                <span className="font-semibold text-red-400 block">Emergency Line:</span>
                <a href={`tel:${CLINIC_INFO.contact.emergencyPhoneRaw}`} className="text-white hover:text-red-300 font-bold text-sm">
                  {CLINIC_INFO.contact.emergencyPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/book"
                className="block text-center py-2.5 px-4 rounded-lg bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal, ADA, and Copyright */}
        <div className="mt-12 pt-8 border-t border-oklahoma-blue-800 text-xs text-oklahoma-ivory-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Comfort Dental Clinic & Implant Institute. All rights reserved.</span>
            <span className="hidden sm:inline-block">•</span>
            <span>Oklahoma Dental Board License #OK-29184</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-oklahoma-ivory-400">ADA Compliant</span>
            <span>•</span>
            <span className="text-oklahoma-ivory-400">HIPAA Protected</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-oklahoma-blue-800 hover:bg-oklahoma-blue-700 text-oklahoma-gold-400 transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
