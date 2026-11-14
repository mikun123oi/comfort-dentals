import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Stethoscope, 
  AlertCircle, 
  Clock, 
  Award, 
  CreditCard, 
  Check, 
  Calendar,
  Phone,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { SERVICES_CATEGORIES } from "@/data/servicesData";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const metadata = {
  title: "Dental Services & Specialized Treatments | Comfort Dental Clinic OKC",
  description: "Explore our comprehensive clinical offerings in Oklahoma City: Dental Implants, Crowns & Bridges, Veneers, Teeth Whitening, Root Canals, Invisalign, Sedation, and 24/7 Emergency Dentistry."
};

export default function ServicesPage() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-oklahoma-gold-500" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-oklahoma-gold-500" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-oklahoma-gold-500" />;
      case "Stethoscope": return <Stethoscope className="w-6 h-6 text-oklahoma-gold-500" />;
      case "AlertCircle": return <AlertCircle className="w-6 h-6 text-red-500" />;
      default: return <Sparkles className="w-6 h-6 text-oklahoma-gold-500" />;
    }
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50">
            <Sparkles className="w-4 h-4 text-oklahoma-gold-500" />
            <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 uppercase tracking-wider">
              Clinical Excellence & Bio-Aesthetics
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Comprehensive Dental Care, <br />
            <span className="gold-gradient-text italic font-normal">Flawlessly Executed.</span>
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            From routine preventive checkups to complex full-mouth smile reconstructions, every treatment at Comfort Dental Clinic is delivered with gentle precision, biocompatible materials, and anxiety-free sedation options.
          </p>

          {/* Jump Links Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {SERVICES_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:border-oklahoma-gold-400 transition-colors shadow-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Callout Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-red-900 via-oklahoma-blue-950 to-oklahoma-blue-900 text-white p-6 sm:p-8 rounded-3xl border border-red-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-red-600 text-white shrink-0 mt-1">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-300">
                24/7 Priority Emergency Wing
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                Experiencing Acute Dental Pain or Trauma?
              </h2>
              <p className="text-xs sm:text-sm text-oklahoma-ivory-200 mt-1 max-w-xl">
                We reserve daily emergency slots for severe toothaches, knocked-out teeth, broken crowns, and facial infections. Guaranteed same-day triage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href={`tel:${CLINIC_INFO.contact.emergencyPhoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line: {CLINIC_INFO.contact.emergencyPhone}</span>
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors"
            >
              <span>Book Online</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessible Membership Plan Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-oklahoma-gold-100 via-white to-oklahoma-ivory-100 dark:from-oklahoma-charcoal-800 dark:via-oklahoma-charcoal-750 dark:to-oklahoma-charcoal-800 p-6 sm:p-8 rounded-3xl border-2 border-oklahoma-gold-400 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-oklahoma-gold-500 text-oklahoma-blue-900 shrink-0 mt-1 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-oklahoma-gold-700 dark:text-oklahoma-gold-400">
                Accessible Direct Wellness • No Insurance Required
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                Comfort Dental Membership Plan ($0 Cleanings & 20% Off All Treatments)
              </h2>
              <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 max-w-2xl">
                Adult plans start at just $32/month. Includes 2 free cleanings, annual exams, all 3D digital X-rays, emergency exams, and a flat 20% discount on every restorative and cosmetic treatment.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/membership"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 to-oklahoma-gold-400 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Explore Membership Tiers &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Category Sections */}
      <div className="space-y-24">
        {SERVICES_CATEGORIES.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28 space-y-8"
          >
            {/* Category Header Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-oklahoma-blue-900 via-oklahoma-blue-800 to-oklahoma-blue-950 text-white border border-oklahoma-gold-400/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-oklahoma-blue-700/80 border border-oklahoma-gold-400/30">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
                    {category.tagline}
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {category.name}
                </h2>
                <p className="text-sm text-oklahoma-ivory-300 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 to-oklahoma-gold-400 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-all shrink-0"
              >
                <Calendar className="w-4 h-4 text-oklahoma-blue-900" />
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Sub-services Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm hover:shadow-luxury hover:border-oklahoma-gold-400 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-300 shrink-0">
                        {service.time}
                      </span>
                    </div>

                    <p className="text-sm text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2 pt-2 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-gold-700 dark:text-oklahoma-gold-400 block">
                        Clinical Advantages:
                      </span>
                      <ul className="space-y-1.5 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div className="p-3.5 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600 text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Assurance:</span>
                        <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">{service.warranty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Payment / Insurance:</span>
                        <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">{service.financing}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/book"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 text-oklahoma-gold-400" />
                      <span>Book {service.title.split("(")[0].trim()}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-oklahoma-blue-900 to-oklahoma-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-oklahoma-gold-400/40 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
            Oklahoma Healthcare Reimagined
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Ready to Experience the Comfort Dental Difference?
          </h2>
          <p className="text-sm text-oklahoma-ivory-300 max-w-xl mx-auto">
            Join thousands of Oklahoma City residents who have discovered gentle, modern, world-class dental care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/book"
              className="px-8 py-4 rounded-xl bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-bold text-base shadow-lg transition-colors"
            >
              Book Online Now
            </Link>
            <a
              href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
              className="px-6 py-4 rounded-xl border border-oklahoma-blue-700 bg-oklahoma-blue-800 hover:bg-oklahoma-blue-750 text-white font-medium text-sm transition-colors"
            >
              Call Our Concierge: {CLINIC_INFO.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
