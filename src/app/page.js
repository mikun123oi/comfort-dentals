"use client";

import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  MapPin, 
  Check, 
  ArrowRight, 
  Star, 
  Smile, 
  Award, 
  ChevronRight,
  Stethoscope,
  AlertCircle,
  Zap,
  CheckCircle2,
  Activity
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { DOCTORS } from "@/data/doctorsData";
import { TESTIMONIALS, TRUST_STATS } from "@/data/testimonialsData";
import { DENTAL_TECHNOLOGY } from "@/data/technologyData";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingWizard from "@/components/BookingWizard";
import FaqAccordion from "@/components/FaqAccordion";
import InsuranceCalculator from "@/components/InsuranceCalculator";
import ServicesExplorer from "@/components/ServicesExplorer";
import SmileAssessmentQuiz from "@/components/SmileAssessmentQuiz";

export default function HomePage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* ========================================================
          3. LARGE PHOTOGRAPHIC HERO SECTION WITH COMPELLING HEADLINE
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-oklahoma-ivory-100 via-white to-oklahoma-ivory-50 dark:from-oklahoma-charcoal-900 dark:via-oklahoma-charcoal-800 dark:to-oklahoma-charcoal-900 pt-8 sm:pt-16 pb-16 sm:pb-24 border-b border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800">
        {/* Subtle Decorative Oklahoma Prairie Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-oklahoma-gold-300/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-oklahoma-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50 shadow-sm">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-oklahoma-gold-500 text-oklahoma-gold-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300">
                  Top-Rated Oklahoma City Dental Practice • 850+ Reviews
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 leading-[1.12]">
                World-Class Dental Artistry <br />
                <span className="gold-gradient-text italic font-normal">Rooted in Oklahoma</span> Integrity.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience a new standard of healthcare luxury. Advanced 3D diagnostics, anxiety-free sedation suites, and bespoke smile transformations in Oklahoma City—designed to make you feel calm, respected, and radiant.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-base shadow-lg hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 border border-oklahoma-gold-300"
                >
                  <Calendar className="w-5 h-5 text-oklahoma-blue-900" />
                  <span>Schedule Consultation</span>
                </Link>

                <Link
                  href="#services-directory"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-oklahoma-blue-700 dark:border-oklahoma-gold-500/60 bg-white/70 dark:bg-oklahoma-charcoal-800/80 text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 hover:bg-oklahoma-ivory-100 text-sm font-semibold transition-colors"
                >
                  <span>Explore Dental Treatments</span>
                  <ChevronRight className="w-4 h-4 text-oklahoma-gold-600" />
                </Link>
              </div>

              {/* Key Trust Highlights under Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-left">
                <div className="flex items-center gap-2 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Pain-Free Local Anesthesia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Board IV Twilight Sedation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Same-Day Emergency Relief</span>
                </div>
              </div>
            </div>

            {/* Hero Right Media Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photographic Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-oklahoma-charcoal-700 aspect-[4/5] relative bg-oklahoma-blue-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                    alt="Dr. Garrett Vance and modern Oklahoma dental clinic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oklahoma-blue-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-oklahoma-gold-400">
                      Private Surgical Suite
                    </span>
                    <div className="font-serif text-lg font-bold">
                      Comfort Dental Clinic & Implant Institute
                    </div>
                    <p className="text-xs text-oklahoma-ivory-300">
                      3725 S Western Ave, Unit 725, Oklahoma City, OK
                    </p>
                  </div>
                </div>

                {/* Floating Special Offer Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-oklahoma-charcoal-800 p-4 sm:p-5 rounded-2xl shadow-luxury border border-oklahoma-gold-400/60 max-w-xs animate-in slide-in-from-bottom-6 duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 shrink-0">
                      <Sparkles className="w-5 h-5 text-oklahoma-blue-900" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                        New Patient Welcome
                      </div>
                      <div className="font-serif text-xl font-black text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                        $99 Exam & 3D CT
                      </div>
                      <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                        Includes full oral cancer screening
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Doctor Badge */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 dark:bg-oklahoma-charcoal-800/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <div className="text-xs font-semibold text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-100">
                    Same-Day Emergency Openings Today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TRUST INDICATORS AND PATIENT STATISTICS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-oklahoma-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-oklahoma-blue-800 relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-oklahoma-blue-800">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className={`space-y-1.5 ${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""}`}>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-oklahoma-gold-400">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-oklahoma-ivory-300">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INTRODUCTION TO THE DENTAL CLINIC
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Left Photographic Collage */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Modern patient consultation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 rounded-2xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-center">
                <span className="font-serif text-3xl font-black text-oklahoma-blue-900 dark:text-oklahoma-gold-400 block">
                  18+
                </span>
                <span className="text-xs font-semibold text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 uppercase">
                  Years Serving Central Oklahoma
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-2xl bg-oklahoma-sage-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-sage-200 dark:border-oklahoma-charcoal-700 text-center">
                <HeartHandshake className="w-6 h-6 text-oklahoma-sage-600 dark:text-oklahoma-sage-400 mx-auto mb-1" />
                <span className="text-xs font-semibold text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-100 block">
                  Oklahoma Heritage Care Philosophy
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                  alt="3D Dental diagnostics suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                Welcome to Comfort Dental Clinic
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-2">
                A Refreshing Departure from Ordinary Healthcare
              </h2>
            </div>

            <p className="text-base text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
              Founded on the belief that healthcare should be comforting, authentic, and clinically impeccable, Comfort Dental Clinic & Implant Institute blends the heartfelt warmth of Oklahoma heritage with the foremost breakthroughs in modern dental science.
            </p>

            <p className="text-base text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
              Located on South Western Avenue in Oklahoma City, our practice is purpose-built as an anxiety-free sanctuary. From the moment you arrive, you will notice the subtle scent of calming essential oils, natural leather and oak finishes, and an attentive concierge team devoted to your comfort.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-oklahoma-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    Transparent Integrity
                  </h4>
                  <p className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                    No surprise bills, no high-pressure sales. Every option clearly explained.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-oklahoma-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    Aesthetic Mastery
                  </h4>
                  <p className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                    Natural tooth contours and lifelike shade graduation for authentic beauty.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 hover:text-oklahoma-gold-600 transition-colors"
              >
                <span>Read our full clinic story & mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE OUR DENTAL CLINIC?
      ======================================================== */}
      <section className="bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 py-16 sm:py-20 border-y border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              The Comfort Dental Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Why Oklahoma Chooses Our Practice
            </h2>
            <p className="text-sm sm:text-base text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              We redesigned the entire patient journey around tranquility, precision, and respect for your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "Sparkles",
                title: "Spa-Inspired Comfort Suites",
                desc: "Heated massage dental chairs, overhead ceiling TVs with streaming apps, Bose noise-canceling headphones, and warm lavender towels post-treatment."
              },
              {
                icon: "Zap",
                title: "100% Pain-Free Local Anesthesia",
                desc: "We deploy computerized micro-injection technology (The Wand®) that delivers numbing agent without the stinging pressure of traditional needles."
              },
              {
                icon: "Clock",
                title: "Zero-Wait Appointment Promise",
                desc: "Your time is valuable. We run on a strict zero-wait schedule where 99.2% of patients are seated within 5 minutes of their scheduled time."
              },
              {
                icon: "ShieldCheck",
                title: "Board-Certified Specialists Under One Roof",
                desc: "From cosmetic veneers and orthodontics to surgical dental implants and IV sedation, our multi-disciplinary team handles your entire care on-site."
              },
              {
                icon: "Activity",
                title: "Same-Day CAD/CAM Ceramic Restorations",
                desc: "Our in-house 3D robotic milling suite fabricates monolithic zirconia crowns and onlays in a single visit—no gooey molds or temporary crowns."
              },
              {
                icon: "HeartHandshake",
                title: "Comfort Dental Membership Plan",
                desc: "No insurance? Our exclusive wellness plan covers 100% of preventive checkups and cleanings with a flat 20% discount on all procedures."
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm hover:shadow-luxury hover:border-oklahoma-gold-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 flex items-center justify-center mb-4 group-hover:bg-oklahoma-gold-500 group-hover:text-oklahoma-blue-900 transition-colors">
                  {pillar.icon === "Sparkles" && <Sparkles className="w-6 h-6" />}
                  {pillar.icon === "Zap" && <Zap className="w-6 h-6" />}
                  {pillar.icon === "Clock" && <Clock className="w-6 h-6" />}
                  {pillar.icon === "ShieldCheck" && <ShieldCheck className="w-6 h-6" />}
                  {pillar.icon === "Activity" && <Activity className="w-6 h-6" />}
                  {pillar.icon === "HeartHandshake" && <HeartHandshake className="w-6 h-6" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 group-hover:text-oklahoma-gold-600 dark:group-hover:text-oklahoma-gold-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed mt-2">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FEATURED DENTAL SERVICES (HIGHLIGHTS)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Excellence Across All Specialties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
              Signature Dental Treatments
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 hover:text-oklahoma-gold-600"
          >
            <span>View All 20+ Dental Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Permanent Dental Implants",
              category: "Restorative Surgery",
              desc: "3D computer-guided titanium and zirconia posts restoring 100% chew power and lifelike tooth aesthetics.",
              image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
              link: "/services#restorative",
              badge: "Lifetime Warranty"
            },
            {
              title: "Porcelain Veneers & DSD",
              category: "Cosmetic Artistry",
              desc: "Handcrafted master ceramics designed with 3D digital facial mapping for your perfect golden ratio smile.",
              image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
              link: "/services#cosmetic",
              badge: "Hollywood Grade"
            },
            {
              title: "Invisalign Clear Aligners",
              category: "Orthodontics",
              desc: "Discreet, removable alignment trays straightening crowded teeth in as little as 6 to 9 months.",
              image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
              link: "/services#orthodontics",
              badge: "Diamond+ Provider"
            },
            {
              title: "24/7 Emergency Dentistry",
              category: "Priority Care",
              desc: "Same-day priority appointments for severe toothaches, cracked enamel, and acute dental trauma.",
              image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
              link: "/services#emergency",
              badge: "Same-Day Relief"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-md hover:shadow-luxury hover:border-oklahoma-gold-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-oklahoma-blue-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-oklahoma-blue-900/90 backdrop-blur-md text-oklahoma-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.badge}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-semibold text-oklahoma-gold-600 dark:text-oklahoma-gold-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 group-hover:text-oklahoma-gold-600 dark:group-hover:text-oklahoma-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href={item.link}
                  className="w-full flex items-center justify-between text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More & Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. COMPLETE SERVICES DIRECTORY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Comprehensive Clinical Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Complete Services Directory
          </h2>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            Explore every dental treatment offered at our Oklahoma City practice with transparent warranties, procedure times, and clinical details.
          </p>
        </div>

        <ServicesExplorer defaultCategory="restorative" />
      </section>

      {/* ========================================================
          VIRTUAL SMILE ASSESSMENT QUIZ SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SmileAssessmentQuiz />
      </section>

      {/* ========================================================
          9. MEET OUR DENTAL PROFESSIONALS
      ======================================================== */}
      <section className="bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 py-16 sm:py-20 border-y border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              World-Class Clinical Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Meet Our Dental Specialists
            </h2>
            <p className="text-sm sm:text-base text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              Compassionate leaders recognized across Oklahoma and nationwide for clinical distinction, continuing education, and gentle bedside manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-md hover:shadow-luxury hover:border-oklahoma-gold-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[3/4] relative overflow-hidden bg-oklahoma-blue-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-oklahoma-blue-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-[11px] font-bold text-oklahoma-gold-400 uppercase tracking-wider">
                        {doctor.role}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                        {doctor.name}
                      </h3>
                      <p className="text-xs font-semibold text-oklahoma-gold-700 dark:text-oklahoma-gold-400 mt-0.5">
                        {doctor.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed line-clamp-3">
                      {doctor.bio}
                    </p>

                    <div className="space-y-1 pt-1 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                      <div className="font-semibold text-oklahoma-blue-900 dark:text-oklahoma-ivory-200">
                        Education:
                      </div>
                      <div className="line-clamp-1">{doctor.education}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href="/about"
                    className="w-full py-2.5 rounded-lg border border-oklahoma-blue-600 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 dark:border-oklahoma-gold-500/60 text-xs font-bold text-center block hover:bg-oklahoma-blue-50 dark:hover:bg-oklahoma-charcoal-700 transition-colors"
                  >
                    View Doctor Credentials
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. OUR APPROACH TO MODERN DENTISTRY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Methodology & Patient Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Our 4-Step Patient Journey
          </h2>
          <p className="text-sm sm:text-base text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            From the moment you step through our doors, your care is completely collaborative, comfortable, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Digital 3D Discovery",
              desc: "Ultra-low dose Cone Beam CT scans and HD intraoral camera tour displayed on widescreen monitors so you see exactly what we see."
            },
            {
              step: "02",
              title: "Co-Crafting Your Plan",
              desc: "You test-drive your proposed smile using Digital Smile Design (DSD). All treatment options and transparent fees reviewed with zero pressure."
            },
            {
              step: "03",
              title: "Pain-Free Execution",
              desc: "Relax in your private comfort suite with ceiling Netflix, noise-canceling headphones, computerized gentle anesthesia, or IV sedation."
            },
            {
              step: "04",
              title: "Lifetime Wellness Guarantee",
              desc: "Proactive preventive hygiene and our 10-year restorative assurance program to protect your investment for years to come."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm relative overflow-hidden space-y-4"
            >
              <div className="font-serif text-5xl font-black text-oklahoma-gold-400/30 dark:text-oklahoma-gold-500/20 absolute top-3 right-4 select-none">
                {item.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-oklahoma-blue-900 text-oklahoma-gold-400 flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          11. BEFORE-AND-AFTER SMILE TRANSFORMATIONS
      ======================================================== */}
      <section className="bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 py-16 sm:py-20 border-y border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Interactive Clinical Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Real Oklahoma Patient Smile Transformations
            </h2>
            <p className="text-sm sm:text-base text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              Drag the interactive comparison divider to see the dramatic before-and-after results achieved by our team.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* ========================================================
          12. ADVANCED DENTAL TECHNOLOGY AND EQUIPMENT
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Medical Innovation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Advanced Dental Technology & Equipment
          </h2>
          <p className="text-sm sm:text-base text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            We invest continuously in top-tier medical engineering to make treatments faster, safer, and completely comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DENTAL_TECHNOLOGY.map((tech) => (
            <div
              key={tech.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-md hover:shadow-luxury hover:border-oklahoma-gold-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-oklahoma-blue-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-oklahoma-blue-900/90 backdrop-blur-md text-oklahoma-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {tech.badge}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    {tech.title}
                  </h3>
                  <div className="text-xs font-semibold text-oklahoma-gold-700 dark:text-oklahoma-gold-400">
                    {tech.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
                    {tech.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                    {tech.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          13. PATIENT TESTIMONIALS
      ======================================================== */}
      <section className="bg-oklahoma-blue-900 text-white py-16 sm:py-20 border-y border-oklahoma-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Verified Patient Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Our Oklahoma Patients Say
            </h2>
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-oklahoma-gold-400 text-oklahoma-gold-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-oklahoma-ivory-200">
                4.9 Stars Across 850+ Google & Healthgrades Reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-oklahoma-blue-800/80 border border-oklahoma-blue-700 space-y-4 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-oklahoma-gold-400 text-oklahoma-gold-400" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      Verified Patient
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-white">
                    &quot;{item.headline}&quot;
                  </h3>

                  <p className="text-xs sm:text-sm text-oklahoma-ivory-300 leading-relaxed italic">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-oklahoma-blue-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-oklahoma-gold-400"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{item.name}</div>
                    <div className="text-[11px] text-oklahoma-ivory-400">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          14. INSURANCE AND PAYMENT INFORMATION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Financial Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Insurance, Financing & Membership
          </h2>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            We work with virtually all major PPO insurance plans and provide 0% APR promotional financing through CareCredit, Sunbit, and our in-house savings plan.
          </p>
        </div>

        <InsuranceCalculator />
      </section>

      {/* ========================================================
          15. FREQUENTLY ASKED QUESTIONS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Frequently Asked Dental Questions
          </h2>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            Search our comprehensive clinical database or ask Dr. Vance and our team directly.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* ========================================================
          16. STRONG APPOINTMENT-BOOKING SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Reserve Your Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Schedule Your Oklahoma Appointment
          </h2>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            Select your preferred specialist and time slot. Our team prepares your private comfort suite before you arrive.
          </p>
        </div>

        <BookingWizard />
      </section>
    </div>
  );
}
