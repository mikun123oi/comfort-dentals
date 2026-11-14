"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  HelpCircle, 
  Calendar, 
  Phone, 
  CreditCard, 
  CheckCircle2, 
  UserCheck, 
  X,
  ArrowRight,
  DollarSign
} from "lucide-react";
import { MEMBERSHIP_TIERS, INSURANCE_VS_MEMBERSHIP } from "@/data/membershipData";
import InsuranceCalculator from "@/components/InsuranceCalculator";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState("annual"); // "annual" or "monthly"
  const [selectedTier, setSelectedTier] = useState("adult");
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    membersCount: "1",
    desiredTier: "adult",
    notes: ""
  });

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollmentSubmitted(true);
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 sm:py-16" id="membership-top">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-gold-100 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400 text-oklahoma-blue-900 dark:text-oklahoma-gold-300">
            <ShieldCheck className="w-4 h-4 text-oklahoma-gold-600" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Accessible Dental Healthcare For All
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 leading-tight">
            The Comfort Dental <br />
            <span className="gold-gradient-text italic font-normal">Direct Membership Plan</span>
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            No dental insurance? You don&apos;t need it. Experience luxury dental care with 100% covered preventive checkups, cleanings, digital X-rays, and a flat 20% discount on every procedure—with zero deductibles and zero waiting periods.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${billingCycle === "annual" ? "text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 font-extrabold" : "text-oklahoma-charcoal-400"}`}>
              Annual (Save Most)
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billingCycle === "monthly"}
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-oklahoma-blue-900 dark:bg-oklahoma-charcoal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-oklahoma-gold-400 transition-transform ${
                  billingCycle === "monthly" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider ${billingCycle === "monthly" ? "text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 font-extrabold" : "text-oklahoma-charcoal-400"}`}>
              Monthly Payment
            </span>
          </div>
        </div>
      </section>

      {/* Plan Tiers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const price = billingCycle === "annual" ? tier.priceAnnual : tier.priceMonthly;
            const period = billingCycle === "annual" ? "/year" : "/month";

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isPopular
                    ? "bg-white dark:bg-oklahoma-charcoal-800 border-2 border-oklahoma-gold-500 shadow-2xl ring-2 ring-oklahoma-gold-400/40 md:-translate-y-2"
                    : "bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-luxury hover:border-oklahoma-gold-400"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-oklahoma-gold-500 to-oklahoma-gold-400 text-oklahoma-blue-900 font-extrabold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-oklahoma-gold-600 dark:text-oklahoma-gold-400 uppercase tracking-wider">
                      {tier.target}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl sm:text-5xl font-black text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                        ${price}
                      </span>
                      <span className="text-xs font-semibold text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                        {period}
                      </span>
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      Valued at over ${tier.retailValue}/year in dental services
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 block">
                      Included 100% Free ($0 Copay):
                    </span>
                    <ul className="space-y-2 text-xs text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                      {tier.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 space-y-3">
                  <a
                    href="#enrollment-form"
                    onClick={() => {
                      setSelectedTier(tier.id);
                      setFormData(prev => ({ ...prev, desiredTier: tier.id }));
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-all shadow-md ${
                      isPopular
                        ? "bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 shadow-gold-glow"
                        : "bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white"
                    }`}
                  >
                    Select {tier.name}
                  </a>
                  <p className="text-[11px] text-center text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                    {tier.savingsHighlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Accessible Comparison Table: Traditional Insurance vs. Comfort Dental Membership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-oklahoma-charcoal-800 rounded-3xl p-6 sm:p-10 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-luxury space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Clear & Transparent Comparison
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Traditional Insurance vs. Comfort Dental Plan
            </h2>
            <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              See why hundreds of Oklahoma families choose our direct membership over expensive third-party insurance policies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Comparison between Traditional Dental Insurance and Comfort Dental Membership Plan">
              <thead>
                <tr className="border-b border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
                  <th scope="col" className="py-3 px-4 font-bold text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 uppercase tracking-wider text-xs">
                    Benefit / Feature
                  </th>
                  <th scope="col" className="py-3 px-4 font-bold text-red-600 dark:text-red-400 uppercase tracking-wider text-xs bg-red-50/50 dark:bg-red-950/20 rounded-t-lg">
                    Traditional PPO Insurance
                  </th>
                  <th scope="col" className="py-3 px-4 font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 uppercase tracking-wider text-xs bg-oklahoma-gold-50 dark:bg-oklahoma-charcoal-700 rounded-t-lg">
                    Comfort Dental Membership
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-oklahoma-ivory-200 dark:divide-oklahoma-charcoal-700">
                {INSURANCE_VS_MEMBERSHIP.map((row, i) => (
                  <tr key={i} className="hover:bg-oklahoma-ivory-50 dark:hover:bg-oklahoma-charcoal-750">
                    <td className="py-3.5 px-4 font-semibold text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 bg-red-50/30 dark:bg-red-950/10">
                      {row.traditionalInsurance}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 bg-oklahoma-gold-50/40 dark:bg-oklahoma-charcoal-700/40">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{row.comfortPlan}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <InsuranceCalculator />
      </section>

      {/* Instant Enrollment Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6" id="enrollment-form">
        <div className="bg-white dark:bg-oklahoma-charcoal-800 p-8 sm:p-12 rounded-3xl shadow-luxury border border-oklahoma-gold-400/50 space-y-6">
          {!enrollmentSubmitted ? (
            <form onSubmit={handleEnrollSubmit} className="space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                  Instant Online Enrollment
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                  Join the Comfort Dental Membership Plan
                </h3>
                <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                  Complete this form to activate your membership immediately. Coverage starts the exact same day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enroll-name" className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                    Primary Member Full Name *
                  </label>
                  <input
                    id="enroll-name"
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                  />
                </div>

                <div>
                  <label htmlFor="enroll-phone" className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                    Phone Number (for verification) *
                  </label>
                  <input
                    id="enroll-phone"
                    type="tel"
                    required
                    placeholder="(405) 400-2670"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                  />
                </div>

                <div>
                  <label htmlFor="enroll-email" className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="enroll-email"
                    type="email"
                    required
                    placeholder="rachel@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                  />
                </div>

                <div>
                  <label htmlFor="enroll-tier" className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                    Choose Membership Tier *
                  </label>
                  <select
                    id="enroll-tier"
                    value={formData.desiredTier}
                    onChange={(e) => setFormData({ ...formData, desiredTier: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                  >
                    <option value="adult">Adult Wellness Plan ($349/yr or $32/mo)</option>
                    <option value="child">Child Wellness Plan ($249/yr or $23/mo)</option>
                    <option value="perio">Periodontal Care Plan ($499/yr or $45/mo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="enroll-notes" className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Additional Family Members or Questions (optional)
                </label>
                <textarea
                  id="enroll-notes"
                  rows={2}
                  placeholder="List names and ages of any family members or dependents to enroll together..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-oklahoma-ivory-50 dark:bg-oklahoma-charcoal-700 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Coverage activates instantly upon submission. No waiting.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md hover:shadow-gold-glow transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Activate Membership Plan</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                Welcome to the Family, {formData.fullName}!
              </h4>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 max-w-md mx-auto">
                Your Comfort Dental Membership request has been received. Our concierge coordinator will verify your plan activation and send your welcome packet to {formData.email}.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Link
                  href="/book"
                  className="px-6 py-3 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md"
                >
                  Schedule Your $0 First Cleaning & Exam &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Membership FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Got Questions About Membership?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Membership Plan FAQs
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 space-y-1">
            <h4 className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              How quickly can I use my membership benefits?
            </h4>
            <p className="text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              Immediately! There are zero waiting periods. You can enroll today and receive your 100% covered comprehensive exam, 3D digital imaging, and cleanings today, along with your 20% discount on any needed treatment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 space-y-1">
            <h4 className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Is this insurance?
            </h4>
            <p className="text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              No. This is a direct wellness agreement between you and Comfort Dental Clinic. By cutting out insurance middlemen, we eliminate claim denials, pre-authorizations, deductibles, and annual caps.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 space-y-1">
            <h4 className="font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Does the 20% discount apply to cosmetic work like Veneers or Teeth Whitening?
            </h4>
            <p className="text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              Yes! Unlike traditional insurance companies that exclude 100% of cosmetic dentistry, our Comfort Dental Membership gives you a flat 20% off porcelain veneers, Invisalign clear aligners, Zoom! laser whitening, and sedation services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
