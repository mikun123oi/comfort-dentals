"use client";

import React, { useState } from "react";
import { ShieldCheck, Check, DollarSign, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InsuranceCalculator() {
  const [familyMembers, setFamilyMembers] = useState(2);
  const [plansInterested, setPlansInterested] = useState({
    whitening: true,
    restorativeWork: false,
    aligners: false
  });

  // Calculations
  const membershipCostPerPerson = 349; // $349/year per adult
  const totalMembershipCost = familyMembers * membershipCostPerPerson;

  // Standard retail value included free in membership:
  // 2 cleanings ($240), 2 comprehensive exams ($180), Full mouth 3D X-Rays ($220), 1 Emergency exam ($120) = $760 per person value
  const retailPreventivePerPerson = 760;
  const totalRetailPreventive = familyMembers * retailPreventivePerPerson;

  // Additional 20% savings on treatments
  let additionalSavings = 0;
  if (plansInterested.whitening) additionalSavings += 100 * familyMembers;
  if (plansInterested.restorativeWork) additionalSavings += 350 * familyMembers;
  if (plansInterested.aligners) additionalSavings += 800;

  const totalEstimatedSavings = Math.max(0, (totalRetailPreventive + additionalSavings) - totalMembershipCost);

  return (
    <div className="w-full bg-white dark:bg-oklahoma-charcoal-800 rounded-3xl p-6 sm:p-10 shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Calculator Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-oklahoma-gold-600 dark:text-oklahoma-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-oklahoma-gold-500" />
              <span>No Insurance? No Problem!</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Comfort Dental Membership Savings Calculator
            </h3>
            <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-2">
              Our direct in-house dental membership plan eliminates insurance middlemen, deductibles, and waiting periods. See how much your household saves each year.
            </p>
          </div>

          {/* Member Slider */}
          <div className="space-y-3 bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 p-5 rounded-2xl border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                Number of Family Members in Household:
              </span>
              <span className="font-serif text-xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">
                {familyMembers} {familyMembers === 1 ? "Person" : "People"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={familyMembers}
              onChange={(e) => setFamilyMembers(parseInt(e.target.value, 10))}
              className="w-full accent-oklahoma-gold-500 cursor-pointer h-2 bg-oklahoma-ivory-300 dark:bg-oklahoma-charcoal-600 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
              <span>1 Individual</span>
              <span>2 Couple</span>
              <span>4 Family</span>
              <span>6+ Large Household</span>
            </div>
          </div>

          {/* Planned treatments checkboxes */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
              Anticipated Dental Treatments (Includes 20% Flat Discount):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPlansInterested(p => ({ ...p, whitening: !p.whitening }))}
                className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                  plansInterested.whitening
                    ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 text-oklahoma-blue-900 dark:text-oklahoma-gold-300"
                    : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">Teeth Whitening</span>
                  {plansInterested.whitening && <Check className="w-3.5 h-3.5 text-oklahoma-gold-600" />}
                </div>
                <span className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Save ~$100/ea</span>
              </button>

              <button
                type="button"
                onClick={() => setPlansInterested(p => ({ ...p, restorativeWork: !p.restorativeWork }))}
                className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                  plansInterested.restorativeWork
                    ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 text-oklahoma-blue-900 dark:text-oklahoma-gold-300"
                    : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">Crown / Fillings</span>
                  {plansInterested.restorativeWork && <Check className="w-3.5 h-3.5 text-oklahoma-gold-600" />}
                </div>
                <span className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Save ~$350/ea</span>
              </button>

              <button
                type="button"
                onClick={() => setPlansInterested(p => ({ ...p, aligners: !p.aligners }))}
                className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                  plansInterested.aligners
                    ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 text-oklahoma-blue-900 dark:text-oklahoma-gold-300"
                    : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">Invisalign Aligners</span>
                  {plansInterested.aligners && <Check className="w-3.5 h-3.5 text-oklahoma-gold-600" />}
                </div>
                <span className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Save ~$800</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 pt-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Zero Waiting Periods</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>No Annual Maximums</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Covered Cleanings</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>No Denials for Pre-Existing</span>
            </div>
          </div>
        </div>

        {/* Right Calculated Savings Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-oklahoma-blue-900 via-oklahoma-blue-800 to-oklahoma-blue-950 text-white p-7 sm:p-8 rounded-2xl shadow-xl border border-oklahoma-gold-400/40 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Estimated Annual Household Value
            </span>
            <div className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
              ${totalEstimatedSavings}
            </div>
            <p className="text-xs text-oklahoma-ivory-300">
              Net savings compared to standard retail fees
            </p>
          </div>

          <div className="space-y-3 border-t border-b border-oklahoma-blue-700/80 py-4 text-xs">
            <div className="flex justify-between">
              <span className="text-oklahoma-ivory-300">Retail Preventive Value:</span>
              <span className="font-semibold text-white">${totalRetailPreventive}/yr</span>
            </div>
            {additionalSavings > 0 && (
              <div className="flex justify-between">
                <span className="text-oklahoma-ivory-300">20% Treatment Discount Value:</span>
                <span className="font-semibold text-oklahoma-gold-400">+${additionalSavings}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-oklahoma-ivory-300">Membership Cost ({familyMembers} members):</span>
              <span className="font-semibold text-white">-${totalMembershipCost}/yr</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/book"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enroll In Membership Today</span>
            </Link>
            <p className="text-[11px] text-center text-oklahoma-ivory-400">
              Also accepted alongside standard dental PPO insurance plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
