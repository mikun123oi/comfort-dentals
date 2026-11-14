import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Award, 
  MapPin, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Heart,
  Users,
  Compass,
  Check
} from "lucide-react";
import { DOCTORS } from "@/data/doctorsData";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const metadata = {
  title: "About Us | Comfort Dental Clinic & Implant Institute OKC",
  description: "Learn about Oklahoma City's premier dental practice, our clinic heritage, board-certified dental specialists, comfort amenities, and community outreach at 3725 S Western Ave."
};

export default function AboutPage() {
  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 border border-oklahoma-gold-400/50">
            <Compass className="w-4 h-4 text-oklahoma-gold-500" />
            <span className="text-xs font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-300 uppercase tracking-wider">
              The Comfort Dental Story
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Dentistry Elevated to <br />
            <span className="gold-gradient-text italic font-normal">An Art of Comfort</span> & Precision.
          </h1>

          <p className="text-base sm:text-lg text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
            Rooted in central Oklahoma values of honesty, neighborly hospitality, and hard work, Comfort Dental Clinic was founded to offer an unapologetically luxurious, anxiety-free healthcare experience.
          </p>
        </div>
      </section>

      {/* Heritage & Origin Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 aspect-[4/3] bg-oklahoma-blue-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Western Heritage Dental Clinic Reception & Consultation Lounge"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white dark:bg-oklahoma-charcoal-800 p-5 rounded-2xl shadow-luxury border border-oklahoma-gold-400/50 max-w-sm hidden sm:block">
              <p className="text-xs italic text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200">
                &quot;We don&apos;t just fix teeth; we rebuild self-esteem, relieve long-held fears, and give people the confidence to smile freely again.&quot;
              </p>
              <div className="mt-2 text-[11px] font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">
                — Dr. Garrett Vance, DDS, FAGD
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Our Oklahoma Roots
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              A Purpose-Built Sanctuary on Western Avenue
            </h2>
            <p className="text-sm sm:text-base text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
              When Dr. Garrett Vance envisioned Comfort Dental Clinic, he was troubled by the sterile, rushed, and often intimidating experience typical of corporate dental chains. Patients were left in cold waiting rooms, hurried through 15-minute appointments, and handed unexpected surprise bills.
            </p>
            <p className="text-sm sm:text-base text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
              In choosing our location at <strong>3725 S Western Ave, Unit 725 in Oklahoma City</strong>, Dr. Vance designed every square foot to feel like a high-end private club or spa retreat. With rich natural walnut woodwork, soft Oklahoma prairie light, and an in-house ceramic laboratory, our patients receive uncompromising clinical excellence wrapped in genuine Southern hospitality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
                <div className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">100%</div>
                <div className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-0.5">Doctor-Owned & Operated</div>
              </div>
              <div className="p-4 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
                <div className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">4,500+</div>
                <div className="text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-0.5">Implants & Restorations Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-oklahoma-blue-900 text-white py-16 sm:py-20 border-y border-oklahoma-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-400">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-oklahoma-blue-800/80 border border-oklahoma-blue-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-oklahoma-blue-900" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-oklahoma-ivory-300 leading-relaxed">
                To liberate Oklahoma patients from dental anxiety through compassionate care, computerized pain-free mechanics, and aesthetic restorations that preserve natural oral biology.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-oklahoma-blue-800/80 border border-oklahoma-blue-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-oklahoma-blue-900" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-oklahoma-ivory-300 leading-relaxed">
                To be Oklahoma City&apos;s benchmark for American healthcare excellence—where technology serves the human spirit and every patient leaves proud of their smile.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-oklahoma-blue-800/80 border border-oklahoma-blue-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-oklahoma-gold-500 text-oklahoma-blue-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-oklahoma-blue-900" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Our Values</h3>
              <p className="text-xs sm:text-sm text-oklahoma-ivory-300 leading-relaxed">
                Radical transparency, zero judgment, punctual zero-wait scheduling, relentless continuing education, and unwavering clinical honesty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dental Specialists Full Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
            Dedicated Physicians
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            Meet the Comfort Dental Doctors
          </h2>
          <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
            Our multi-disciplinary team brings together premier training from OU College of Dentistry, Harvard, Baylor, and UCLA.
          </p>
        </div>

        <div className="space-y-12">
          {DOCTORS.map((doctor, idx) => (
            <div
              key={doctor.id}
              className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden relative shadow-md bg-oklahoma-blue-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                      {doctor.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                      {doctor.name}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-300">
                    {doctor.experience}
                  </span>
                </div>

                <div className="text-sm font-semibold text-oklahoma-gold-700 dark:text-oklahoma-gold-400">
                  {doctor.specialty}
                </div>

                <p className="text-sm text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="p-4 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600 space-y-2">
                  <div className="text-xs font-bold uppercase text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200">
                    Board Certifications & Credentials:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                    {doctor.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-2 border-oklahoma-gold-500 pl-4 italic text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-400">
                  &quot;{doctor.quote}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Comfort Amenities */}
      <section className="bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 py-16 sm:py-20 border-y border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              The Sensory Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              Patient Comfort & Luxury Amenities
            </h2>
            <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              Every detail in our 3725 S Western Ave facility has been curated to transform your perception of dentistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Overhead Entertainment",
                desc: "Ceiling-mounted monitors with wireless Bose headphones so you can watch your favorite Netflix show during care."
              },
              {
                title: "Heated Massage Chairs",
                desc: "Ultraleather memory foam dental chairs with adjustable lumbar warmth and gentle vibration massage."
              },
              {
                title: "Lavender Facial Towels",
                desc: "Warm organic aromatherapy towels presented post-treatment to refresh and soothe your skin."
              },
              {
                title: "Complimentary Beverage Bar",
                desc: "Artisan espresso, cold-pressed juices, sparkling water, and organic herbal teas in our patient lounge."
              }
            ].map((amenity, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 shadow-sm space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-oklahoma-gold-500/20 text-oklahoma-gold-600 dark:text-oklahoma-gold-400 flex items-center justify-center font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach & Oklahoma Giving */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-oklahoma-blue-900 to-oklahoma-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-oklahoma-gold-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-oklahoma-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-oklahoma-gold-400" />
              <span>Giving Back to Central Oklahoma</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Proud Community Healthcare Partners
            </h3>
            <p className="text-xs sm:text-sm text-oklahoma-ivory-300 leading-relaxed">
              We believe a premier practice must serve its broader community. Dr. Vance and our staff volunteer annually at the <strong>Oklahoma Mission of Mercy (OkMOM)</strong>, host complimentary dental wellness days for Oklahoma military veterans, and support local public schools in South Oklahoma City with free oral health kits.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/book"
              className="py-3.5 px-6 rounded-xl bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-bold text-sm text-center shadow-md transition-colors"
            >
              Schedule Your Visit
            </Link>
            <Link
              href="/contact"
              className="py-3.5 px-6 rounded-xl border border-oklahoma-blue-700 bg-oklahoma-blue-800 text-white font-medium text-sm text-center hover:bg-oklahoma-blue-750 transition-colors"
            >
              Contact Our Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
