import { Calendar, ShieldCheck, Clock, Award, Phone, HeartHandshake } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const metadata = {
  title: "Book Dental Appointment Online | Comfort Dental Clinic OKC",
  description: "Schedule your dental visit with Oklahoma City's premier dental specialists. Choose doctor, service, and convenient time slot with instant confirmation.",
};

export default function BookAppointmentPage() {
  return (
    <div className="w-full space-y-12 sm:space-y-16 py-10 sm:py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50">
            <Calendar className="w-4 h-4 text-oklahoma-gold-500" />
            <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 uppercase tracking-wider">
              Reserve In Real-Time
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Book Your Dental Visit <br />
            <span className="gold-gradient-text italic font-normal">In Oklahoma City</span>
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            Experience gentle, unhurried healthcare in our private comfort suites. Fill in your details below and we'll confirm your appointment shortly.
          </p>
        </div>
      </section>

      {/* Trust Pills */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm">
            <Clock className="w-5 h-5 text-oklahoma-gold-500 mx-auto mb-1" />
            <div className="font-bold text-xs sm:text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">Zero-Wait Guarantee</div>
            <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Seated within 5 min</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-oklahoma-gold-500 mx-auto mb-1" />
            <div className="font-bold text-xs sm:text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">PPO Insurance Accepted</div>
            <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">We file claims for you</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm">
            <HeartHandshake className="w-5 h-5 text-oklahoma-gold-500 mx-auto mb-1" />
            <div className="font-bold text-xs sm:text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">Sedation Options</div>
            <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">Nitrous & Board IV Sedation</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm">
            <Award className="w-5 h-5 text-oklahoma-gold-500 mx-auto mb-1" />
            <div className="font-bold text-xs sm:text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">Special $99 Welcome Exam</div>
            <div className="text-[11px] text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">3D X-Rays included</div>
          </div>
        </div>
      </section>

      {/* Custom Booking Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <BookingForm />
      </section>

      {/* Phone assistance callout */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-2">
        <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
          Prefer to book by phone with our treatment concierge?
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
            className="inline-flex items-center gap-2 font-bold text-sm text-oklahoma-blue-900 dark:text-oklahoma-gold-400 hover:underline"
          >
            <Phone className="w-4 h-4 text-oklahoma-gold-500" />
            <span>Call Clinic: {CLINIC_INFO.contact.phone}</span>
          </a>
          <span className="text-oklahoma-charcoal-400">•</span>
          <span className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
            Emergency Hotline: {CLINIC_INFO.contact.emergencyPhone}
          </span>
        </div>
      </section>
    </div>
  );
}
