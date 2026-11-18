"use client";
import { useState } from "react";
import { Calendar, User, Phone, Mail, Clock, Heart, FileText, AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";

const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSd6InzDxZgnxcjR1WQL4DEpAQICZoNfJ15wPuIuISOsPaHeew/formResponse";

const SERVICES = [
  "Routine Check-up",
  "Teeth Cleaning",
  "Tooth Filling",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Dental Braces Consultation",
  "Dental Implant Consultation",
  "Emergency Dental Care",
  "Other",
];

const TIMES = [
  "8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", dob: "", gender: "",
    service: "", serviceOther: "", apptDate: "", apptTime: "",
    problem: "", pain: "", medConcerns: "", medication: "", agreed: false,
  });

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const [dobYear, dobMonth, dobDay] = form.dob ? form.dob.split("-") : ["","",""];
    const [apptYear, apptMonth, apptDay] = form.apptDate ? form.apptDate.split("-") : ["","",""];

    const data = new FormData();
    data.append("entry.50871955", form.name);
    data.append("entry.1067397522", form.phone);
    data.append("entry.1347837756", form.email);
    data.append("entry.637501399_year", dobYear);
    data.append("entry.637501399_month", dobMonth);
    data.append("entry.637501399_day", dobDay);
    data.append("entry.223304966", form.gender);
    data.append("entry.420490393", form.service);
    if (form.serviceOther) data.append("entry.1235647188", form.serviceOther);
    data.append("entry.1066968359_year", apptYear);
    data.append("entry.1066968359_month", apptMonth);
    data.append("entry.1066968359_day", apptDay);
    data.append("entry.1277488217", form.apptTime);
    if (form.problem) data.append("entry.2008882426", form.problem);
    if (form.pain) data.append("entry.2085946514", form.pain);
    if (form.medConcerns) data.append("entry.697995926", form.medConcerns);
    data.append("entry.307430938", form.medication);
    if (form.agreed) data.append("entry.1562049994", "I agree.");

    try {
      await fetch(FORM_ACTION, { method: "POST", body: data, mode: "no-cors" });
    } catch (_) {}

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">Appointment Request Received!</h2>
        <p className="max-w-md text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
          Thank you, <strong>{form.name}</strong>. We've received your request and will confirm your appointment shortly. Check your email at <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition";
  const labelCls = "block text-xs font-semibold text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 uppercase tracking-wide mb-1";
  const radioCls = "flex items-center gap-2 cursor-pointer text-sm text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-200";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">

        {/* ── SECTION 1: Personal Information ── */}
        <div className="bg-oklahoma-blue-900 p-8 space-y-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-oklahoma-gold-500/20">
              <User className="w-5 h-5 text-oklahoma-gold-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-oklahoma-ivory-100">Personal Information</h3>
              <p className="text-xs text-oklahoma-charcoal-400">Tell us a little about yourself</p>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Full Name <span className="text-oklahoma-gold-400">*</span></label>
            <input required type="text" placeholder="John Smith" value={form.name} onChange={e => set("name", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition" />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Phone Number <span className="text-oklahoma-gold-400">*</span></label>
            <input
              required
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="4050000000"
              maxLength={15}
              value={form.phone}
              onChange={e => set("phone", e.target.value.replace(/\D/g, ""))}
              className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition"
            />
            <p className="text-[11px] text-oklahoma-charcoal-500 mt-1">Numbers only — no spaces or dashes</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Email Address <span className="text-oklahoma-gold-400">*</span></label>
            <input required type="email" placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition" />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Date of Birth <span className="text-oklahoma-gold-400">*</span></label>
            <div className="relative">
              <input
                required
                type="date"
                value={form.dob}
                onChange={e => set("dob", e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition cursor-pointer [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-2">Gender <span className="text-oklahoma-gold-400">*</span></label>
            <div className="flex gap-4">
              {["Male","Female","Prefer not to say"].map(g => (
                <label key={g} className="flex items-center gap-2 cursor-pointer text-sm text-oklahoma-charcoal-200">
                  <input type="radio" required name="gender" value={g} checked={form.gender === g} onChange={() => set("gender", g)}
                    className="accent-oklahoma-gold-500" />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Medical Concerns */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Medical Concerns</label>
            <textarea rows={3} placeholder="Any medical conditions we should be aware of..." value={form.medConcerns} onChange={e => set("medConcerns", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition resize-none" />
          </div>

          {/* Medication */}
          <div>
            <label className="block text-xs font-semibold text-oklahoma-charcoal-300 uppercase tracking-wide mb-1">Current Medications <span className="text-oklahoma-gold-400">*</span></label>
            <textarea required rows={3} placeholder="List any medications you are taking, or write 'None'..." value={form.medication} onChange={e => set("medication", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-600 bg-oklahoma-charcoal-800/60 text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-500 text-sm focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400 transition resize-none" />
          </div>
        </div>

        {/* ── SECTION 2: Appointment Details ── */}
        <div className="bg-white dark:bg-oklahoma-charcoal-900 p-8 space-y-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-oklahoma-gold-500/10">
              <Calendar className="w-5 h-5 text-oklahoma-gold-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">Appointment Details</h3>
              <p className="text-xs text-oklahoma-charcoal-500">Help us prepare for your visit</p>
            </div>
          </div>

          {/* Service */}
          <div>
            <label className={labelCls}>Dental Service Needed <span className="text-oklahoma-gold-500">*</span></label>
            <div className="grid grid-cols-1 gap-1.5">
              {SERVICES.map(s => (
                <label key={s} className="flex items-center gap-2 cursor-pointer text-sm text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-200 hover:text-oklahoma-blue-900 dark:hover:text-oklahoma-ivory-100 transition">
                  <input type="radio" required name="service" value={s} checked={form.service === s} onChange={() => set("service", s)}
                    className="accent-oklahoma-gold-500" />
                  {s}
                </label>
              ))}
            </div>
            {form.service === "Other" && (
              <input type="text" placeholder="Please specify..." value={form.serviceOther} onChange={e => set("serviceOther", e.target.value)}
                className={`mt-2 ${inputCls}`} />
            )}
          </div>

          {/* Appointment Date */}
          <div>
            <label className={labelCls}>Preferred Appointment Date <span className="text-oklahoma-gold-500">*</span></label>
            <input required type="date" value={form.apptDate} onChange={e => set("apptDate", e.target.value)} className={inputCls} />
          </div>

          {/* Appointment Time */}
          <div>
            <label className={labelCls}>Preferred Appointment Time <span className="text-oklahoma-gold-500">*</span></label>
            <div className="relative">
              <select required value={form.apptTime} onChange={e => set("apptTime", e.target.value)} className={`${inputCls} appearance-none pr-10`}>
                <option value="">Select a time...</option>
                {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-oklahoma-charcoal-400 pointer-events-none" />
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <label className={labelCls}>Describe Your Dental Issue</label>
            <textarea rows={3} placeholder="Briefly describe your concern or reason for visit..." value={form.problem} onChange={e => set("problem", e.target.value)}
              className={`${inputCls} resize-none`} />
          </div>

          {/* Experiencing Pain */}
          <div>
            <label className={labelCls}>Are you currently experiencing pain?</label>
            <div className="flex gap-6">
              {["YES","NO"].map(p => (
                <label key={p} className={radioCls}>
                  <input type="radio" name="pain" value={p} checked={form.pain === p} onChange={() => set("pain", p)}
                    className="accent-oklahoma-gold-500" />
                  {p}
                </label>
              ))}
            </div>
          </div>

          {/* Agreement */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={form.agreed} onChange={e => set("agreed", e.target.checked)}
                className="mt-1 accent-oklahoma-gold-500 w-4 h-4 flex-shrink-0" />
              <span className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
                I understand that this is only a booking request and my appointment will be confirmed by Comfort Dental Clinic. <span className="text-oklahoma-gold-500">*</span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" disabled={submitting}
            className="w-full py-3.5 px-6 rounded-xl bg-oklahoma-gold-500 hover:bg-oklahoma-gold-600 text-oklahoma-blue-900 font-bold text-sm uppercase tracking-wider shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {submitting ? (
              <><span className="animate-spin inline-block w-4 h-4 border-2 border-oklahoma-blue-900 border-t-transparent rounded-full" /> Sending Request...</>
            ) : (
              <><Calendar className="w-4 h-4" /> Request Appointment</>
            )}
          </button>

          <p className="text-center text-xs text-oklahoma-charcoal-400 dark:text-oklahoma-charcoal-500 pt-1">
            Your information is kept private and secure.
          </p>
        </div>
      </div>
    </form>
  );
}
