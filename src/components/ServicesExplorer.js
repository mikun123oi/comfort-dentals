"use client";

import React, { useState } from "react";
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
  ArrowRight,
  Calendar
} from "lucide-react";
import { SERVICES_CATEGORIES } from "@/data/servicesData";

export default function ServicesExplorer({ defaultCategory = "restorative" }) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [expandedService, setExpandedService] = useState(null);

  const currentCategory = SERVICES_CATEGORIES.find(c => c.id === activeCategory) || SERVICES_CATEGORIES[0];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-oklahoma-gold-600" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-oklahoma-gold-600" />;
      case "HeartHandshake": return <HeartHandshake className="w-5 h-5 text-oklahoma-gold-600" />;
      case "Stethoscope": return <Stethoscope className="w-5 h-5 text-oklahoma-gold-600" />;
      case "AlertCircle": return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Sparkles className="w-5 h-5 text-oklahoma-gold-600" />;
    }
  };

  return (
    <div className="w-full space-y-8" id="services-directory">
      {/* Category Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {SERVICES_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedService(null);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-oklahoma-blue-900 text-white border-oklahoma-gold-500 shadow-md ring-2 ring-oklahoma-gold-400/40"
                  : "bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400"
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Overview Banner */}
      <div className="bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-800 p-6 sm:p-8 rounded-3xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            {currentCategory.tagline}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
            {currentCategory.name} Solutions
          </h3>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1 max-w-2xl">
            {currentCategory.description}
          </p>
        </div>
        <Link
          href="/book"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-colors whitespace-nowrap shrink-0"
        >
          <Calendar className="w-4 h-4" />
          <span>Book {currentCategory.name}</span>
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.services.map((service) => {
          const isExpanded = expandedService === service.id;

          return (
            <div
              key={service.id}
              className={`rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isExpanded
                  ? "border-oklahoma-gold-500 shadow-xl ring-2 ring-oklahoma-gold-400/20 md:col-span-2 lg:col-span-3"
                  : "border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400 hover:shadow-luxury"
              }`}
            >
              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    {service.title}
                  </h4>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-800 dark:text-oklahoma-gold-400 shrink-0">
                    {service.time}
                  </span>
                </div>

                <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-oklahoma-gold-700 dark:text-oklahoma-gold-400 block">
                    Clinical Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                    {service.benefits.slice(0, isExpanded ? service.benefits.length : 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded Details View */}
                {isExpanded && (
                  <div className="pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 space-y-4 animate-in fade-in duration-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block mb-1">
                        Detailed Treatment Overview:
                      </span>
                      <p className="text-sm text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 text-xs">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-oklahoma-gold-600 shrink-0" />
                        <div>
                          <span className="text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Appointment Duration</span>
                          <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">{service.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-oklahoma-gold-600 shrink-0" />
                        <div>
                          <span className="text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Assurance Warranty</span>
                          <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">{service.warranty}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-oklahoma-gold-600 shrink-0" />
                        <div>
                          <span className="text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Payment / Insurance</span>
                          <span className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">{service.financing}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block mb-1.5">
                        Recommended For Patients With:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.suitableFor.map((item, idx) => (
                          <span key={idx} className="text-xs bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-300 px-3 py-1 rounded-full border border-oklahoma-blue-100 dark:border-oklahoma-charcoal-600">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-750 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  className="text-xs font-semibold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 hover:underline flex items-center gap-1"
                >
                  <span>{isExpanded ? "Show Less" : "Full Clinical Details"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "-rotate-90" : ""}`} />
                </button>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-oklahoma-gold-400" />
                  <span>Schedule</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
