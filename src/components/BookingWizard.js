"use client";

import React, { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  HeartHandshake, 
  Download, 
  ChevronRight, 
  ArrowLeft,
  Phone,
  MapPin,
  Check
} from "lucide-react";
import { SERVICES_CATEGORIES } from "@/data/servicesData";
import { DOCTORS } from "@/data/doctorsData";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function BookingWizard({ initialCategory = null, initialService = null }) {
  const [step, setStep] = useState(1);
  
  // Form State
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "cosmetic");
  const [selectedService, setSelectedService] = useState(initialService || "teeth-whitening");
  const [selectedDoctor, setSelectedDoctor] = useState("first-available");
  const [selectedDate, setSelectedDate] = useState(() => {
    // Tomorrow as default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isNewPatient: true,
    insuranceType: "ppo",
    insuranceCarrier: "",
    anxietyLevel: "mild",
    sedationInterest: false,
    notes: ""
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const timeSlots = [
    { time: "8:00 AM", period: "Morning" },
    { time: "9:15 AM", period: "Morning" },
    { time: "10:30 AM", period: "Morning" },
    { time: "11:45 AM", period: "Morning" },
    { time: "1:30 PM", period: "Afternoon" },
    { time: "2:45 PM", period: "Afternoon" },
    { time: "4:00 PM", period: "Afternoon" },
    { time: "5:15 PM", period: "Evening" }
  ];

  const currentCategoryObj = SERVICES_CATEGORIES.find(c => c.id === selectedCategory) || SERVICES_CATEGORIES[0];
  const allServices = SERVICES_CATEGORIES.flatMap(c => c.services);
  const currentServiceObj = allServices.find(s => s.id === selectedService) || currentCategoryObj.services[0];
  const currentDoctorObj = DOCTORS.find(d => d.id === selectedDoctor);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatientInfo(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const randomCode = "OKC-" + Math.floor(10000 + Math.random() * 90000);
    setConfirmationCode(randomCode);
    setBookingConfirmed(true);
    setStep(5);
  };

  const generateIcsFile = () => {
    const title = `Dental Appointment: ${currentServiceObj?.title || 'Dental Consultation'} - Comfort Dental Clinic`;
    const description = `Appointment with ${currentDoctorObj ? currentDoctorObj.name : 'Comfort Dental Specialist'}. Location: 3725 S Western Ave, Unit 725, Oklahoma City, OK 73109. Phone: (405) 400-2670. Reference: ${confirmationCode}`;
    const location = "3725 S Western Ave, Unit 725, Oklahoma City, OK 73109";
    
    const [hoursStr, minutesPart] = selectedTime.split(":");
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesPart.slice(0, 2), 10);
    if (selectedTime.includes("PM") && hours < 12) hours += 12;
    if (selectedTime.includes("AM") && hours === 12) hours = 0;

    const startDate = new Date(selectedDate);
    startDate.setHours(hours, minutes, 0);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour

    const formatIcsDate = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Comfort Dental Clinic//Oklahoma City//EN",
      "BEGIN:VEVENT",
      `UID:${confirmationCode}@comfortdentalokc.com`,
      `DTSTAMP:${formatIcsDate(new Date())}`,
      `DTSTART:${formatIcsDate(startDate)}`,
      `DTEND:${formatIcsDate(endDate)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Appointment-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-oklahoma-charcoal-800 rounded-3xl shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 overflow-hidden">
      {/* Header Wizard Progress */}
      <div className="bg-oklahoma-blue-900 text-white p-6 sm:p-8 border-b border-oklahoma-blue-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-oklahoma-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-oklahoma-gold-400" />
              <span>Easy Online Scheduling</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Schedule Your Appointment
            </h2>
            <p className="text-xs sm:text-sm text-oklahoma-ivory-300 mt-1">
              Takes less than 2 minutes. Instant confirmation and zero-wait promise.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step === s
                    ? "bg-oklahoma-gold-500 text-oklahoma-blue-900 ring-2 ring-oklahoma-gold-300"
                    : step > s
                    ? "bg-emerald-600 text-white"
                    : "bg-oklahoma-blue-800 text-oklahoma-ivory-400"
                }`}
              >
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wizard Steps */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* STEP 1: Select Treatment / Reason */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                1. Select Treatment or Reason for Visit
              </h3>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1">
                Choose the care category that best matches your immediate need.
              </p>
            </div>

            {/* Category tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              {SERVICES_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedService(cat.services[0].id);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedCategory === cat.id
                      ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 ring-1 ring-oklahoma-gold-500 shadow-sm"
                      : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400/50"
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 mt-1 line-clamp-1">
                    {cat.services.length} services
                  </div>
                </button>
              ))}
            </div>

            {/* Services inside selected category */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                Specific Treatment or Consultation:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCategoryObj.services.map((srv) => (
                  <label
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedService === srv.id
                        ? "bg-oklahoma-blue-50/70 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 ring-1 ring-oklahoma-gold-500 shadow-sm"
                        : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceRadio"
                      checked={selectedService === srv.id}
                      onChange={() => setSelectedService(srv.id)}
                      className="mt-1 text-oklahoma-gold-500 focus:ring-oklahoma-gold-400"
                    />
                    <div className="space-y-1">
                      <div className="font-semibold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                        {srv.title}
                      </div>
                      <p className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 line-clamp-2">
                        {srv.shortDesc}
                      </p>
                      <div className="text-[11px] font-medium text-oklahoma-gold-700 dark:text-oklahoma-gold-400 flex items-center gap-1.5 pt-1">
                        <Clock className="w-3 h-3" />
                        <span>Approx. {srv.time}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Continue to Doctor Selection</span>
                <ChevronRight className="w-4 h-4 text-oklahoma-gold-400" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Preferred Doctor */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                2. Choose Your Dental Specialist
              </h3>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1">
                Select a specific doctor or choose first available for the earliest appointment slot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 0: First Available */}
              <label
                onClick={() => setSelectedDoctor("first-available")}
                className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedDoctor === "first-available"
                    ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 ring-1 ring-oklahoma-gold-500 shadow-sm"
                    : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-300"
                }`}
              >
                <input
                  type="radio"
                  name="doctorRadio"
                  checked={selectedDoctor === "first-available"}
                  onChange={() => setSelectedDoctor("first-available")}
                  className="mt-1 text-oklahoma-gold-500 focus:ring-oklahoma-gold-400"
                />
                <div className="space-y-1">
                  <div className="font-semibold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 flex items-center gap-2">
                    <span>First Available Doctor</span>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">
                      Earliest Openings
                    </span>
                  </div>
                  <p className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                    We will match you with our earliest available board-certified dental specialist.
                  </p>
                </div>
              </label>

              {/* Doctors list */}
              {DOCTORS.map((doc) => (
                <label
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc.id)}
                  className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedDoctor === doc.id
                      ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 border-oklahoma-gold-500 ring-1 ring-oklahoma-gold-500 shadow-sm"
                      : "bg-white dark:bg-oklahoma-charcoal-800 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="doctorRadio"
                    checked={selectedDoctor === doc.id}
                    onChange={() => setSelectedDoctor(doc.id)}
                    className="mt-1 text-oklahoma-gold-500 focus:ring-oklahoma-gold-400"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-oklahoma-gold-400"
                  />
                  <div className="space-y-0.5">
                    <div className="font-semibold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                      {doc.name}
                    </div>
                    <div className="text-xs font-medium text-oklahoma-gold-700 dark:text-oklahoma-gold-400">
                      {doc.specialty}
                    </div>
                    <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                      {doc.experience}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-300 dark:border-oklahoma-charcoal-600 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:bg-oklahoma-ivory-100 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4 text-oklahoma-gold-400" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Date & Time */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                3. Choose Preferred Date & Time
              </h3>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1">
                Select your preferred day and time slot. Our team reserves this appointment exclusively for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Date Input */}
              <div className="md:col-span-5 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                  Select Date:
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                  />
                </div>
                <div className="p-3 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 space-y-1">
                  <div className="font-semibold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                    Clinic Hours for Oklahoma City:
                  </div>
                  <div>Mon – Thu: 7:00 AM – 6:00 PM</div>
                  <div>Friday: 7:00 AM – 3:00 PM</div>
                  <div>Saturday: 8:00 AM – 1:00 PM (By Appt)</div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="md:col-span-7 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300">
                  Available Reserved Time Slots:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-3 rounded-xl text-center border font-semibold text-sm transition-all ${
                        selectedTime === slot.time
                          ? "bg-oklahoma-blue-900 text-white border-oklahoma-gold-500 shadow-md ring-2 ring-oklahoma-gold-400/40"
                          : "bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-200 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 hover:border-oklahoma-gold-400"
                      }`}
                    >
                      <div className="text-xs font-normal text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                        {slot.period}
                      </div>
                      <div className="mt-0.5">{slot.time}</div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 italic">
                  *Need an urgent same-day emergency slot not listed? Call our emergency triage desk directly at (405) 400-2670.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-300 dark:border-oklahoma-charcoal-600 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:bg-oklahoma-ivory-100 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Continue to Patient Details</span>
                <ChevronRight className="w-4 h-4 text-oklahoma-gold-400" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Patient Information & Anxiety/Sedation options */}
        {step === 4 && (
          <form onSubmit={handleBookingSubmit} className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                4. Patient Information & Comfort Preferences
              </h3>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-1">
                Please provide your contact information so our concierge team can prepare your welcome suite.
              </p>
            </div>

            {/* Name & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="e.g. Eleanor"
                  value={patientInfo.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="e.g. Vance"
                  value={patientInfo.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Phone Number (for SMS confirmation) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(405) 000-0000"
                  value={patientInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={patientInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Insurance & Payment Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Insurance / Payment Method
                </label>
                <select
                  name="insuranceType"
                  value={patientInfo.insuranceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                >
                  <option value="ppo">PPO Dental Insurance (Delta, MetLife, Cigna, Aetna, etc.)</option>
                  <option value="membership">Comfort Dental Membership Plan ($0 Cleanings)</option>
                  <option value="self-pay">Self-Pay / CareCredit 0% Financing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                  Insurance Carrier Name (optional)
                </label>
                <input
                  type="text"
                  name="insuranceCarrier"
                  placeholder="e.g. Delta Dental Premier, MetLife PDP"
                  value={patientInfo.insuranceCarrier}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Anxiety & Sedation Comfort Feature */}
            <div className="p-4 sm:p-5 rounded-2xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 space-y-3">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-oklahoma-gold-600" />
                <span className="font-semibold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                  Personal Comfort & Dental Anxiety Level
                </span>
              </div>
              <p className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                We customize the appointment pace and sensory environment for your absolute peace of mind.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {[
                  { id: "none", label: "No Anxiety" },
                  { id: "mild", label: "Mild Hesitation" },
                  { id: "moderate", label: "Moderate Nervousness" },
                  { id: "severe", label: "Severe Fear / Phobia" }
                ].map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setPatientInfo(p => ({ ...p, anxietyLevel: level.id }))}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      patientInfo.anxietyLevel === level.id
                        ? "bg-oklahoma-blue-900 text-white border-oklahoma-gold-500 shadow-sm"
                        : "bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700"
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>

              <label className="flex items-center gap-2.5 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="sedationInterest"
                  checked={patientInfo.sedationInterest}
                  onChange={handleInputChange}
                  className="rounded text-oklahoma-gold-500 focus:ring-oklahoma-gold-400 w-4 h-4"
                />
                <span className="text-xs font-medium text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-200">
                  I am interested in complimentary Nitrous Oxide (&apos;laughing gas&apos;) or discussing certified IV twilight sedation.
                </span>
              </label>
            </div>

            {/* Special Requests or Medical Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 mb-1">
                Special Requests or Notes for Dr. Vance / Dr. Lin (optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Mention any symptoms, past dental experiences, or specific concerns you would like us to know beforehand..."
                value={patientInfo.notes}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-700 text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 focus:ring-2 focus:ring-oklahoma-gold-400 focus:outline-none text-sm"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-oklahoma-charcoal-300 dark:border-oklahoma-charcoal-600 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:bg-oklahoma-ivory-100 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm sm:text-base shadow-lg hover:shadow-gold-glow transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-oklahoma-blue-900" />
                <span>Confirm & Reserve Appointment</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: Instant Booking Confirmation Message */}
        {step === 5 && bookingConfirmed && (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40 shadow-lg">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Reservation Confirmed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
                We Look Forward to Welcoming You, {patientInfo.firstName}!
              </h3>
              <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 max-w-md mx-auto mt-2">
                Your appointment has been officially logged in our clinical scheduling schedule. A confirmation email and SMS have been dispatched to your phone.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="max-w-lg mx-auto bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 p-6 rounded-2xl border border-oklahoma-gold-400/40 text-left space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 pb-3">
                <span className="text-xs font-semibold text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 uppercase">
                  Confirmation Code:
                </span>
                <span className="font-mono text-base font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400 tracking-wider">
                  {confirmationCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Procedure</span>
                  <span className="font-semibold text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100">
                    {currentServiceObj?.title}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Assigned Doctor</span>
                  <span className="font-semibold text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100">
                    {currentDoctorObj ? currentDoctorObj.name : "First Available Board Specialist"}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Date & Time</span>
                  <span className="font-semibold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block">Location</span>
                  <span className="font-semibold text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100">
                    3725 S Western Ave, Unit 725, OKC
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 flex items-center gap-2 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Wait Guarantee: You will be greeted and seated within 5 minutes of arrival.</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={generateIcsFile}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-oklahoma-blue-900 hover:bg-oklahoma-blue-800 text-white font-semibold text-sm shadow-md transition-colors"
              >
                <Download className="w-4 h-4 text-oklahoma-gold-400" />
                <span>Download Calendar Invite (.ics)</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-oklahoma-blue-700 bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 hover:bg-oklahoma-ivory-100 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-oklahoma-gold-600" />
                <span>Call Clinic Desk</span>
              </a>
            </div>

            <p className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 pt-2">
              Need to reschedule or add family members? Contact our concierge desk at {CLINIC_INFO.contact.phone} quoting your code #{confirmationCode}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
