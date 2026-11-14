import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, Calendar, ShieldCheck, HeartHandshake } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const metadata = {
  title: "Frequently Asked Dental Questions (FAQ) | Comfort Dental Clinic OKC",
  description: "Comprehensive answers to dental questions regarding pricing, PPO insurance, dental anxiety, IV sedation, porcelain veneers, dental implants, and same-day emergency appointments in Oklahoma City."
};

export default function FaqPage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50">
            <HelpCircle className="w-4 h-4 text-oklahoma-gold-500" />
            <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 uppercase tracking-wider">
              Patient Knowledge Base
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Frequently Asked <br />
            <span className="gold-gradient-text italic font-normal">Dental Questions</span>
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            Have questions about your upcoming visit, insurance billing, comfort sedation, or cosmetic treatment options? Browse our comprehensive guide or contact our team directly.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion Component */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <FaqAccordion />
      </section>

      {/* Quick Help Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-luxury space-y-4">
            <div className="w-10 h-10 rounded-xl bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Speak with Our Treatment Concierge
            </h3>
            <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
              Our patient coordinators are here Monday through Friday to verify your insurance benefits in real-time or explain our flexible 0% APR financing options.
            </p>
            <a
              href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 hover:underline"
            >
              <span>Call {CLINIC_INFO.contact.phone}</span>
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-luxury space-y-4">
            <div className="w-10 h-10 rounded-xl bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Ready for a Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
              Experience the Comfort Dental standard in person. Reserve your preferred doctor and time slot with instant calendar confirmation.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-sm font-bold text-oklahoma-gold-600 dark:text-oklahoma-gold-400 hover:underline"
            >
              <span>Book Appointment Online &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
