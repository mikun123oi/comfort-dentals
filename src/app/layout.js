import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import GoldCurtain from "@/components/GoldCurtain";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Comfort Dental Clinic & Implant Institute | Oklahoma City, OK",
  description: "Experience modern luxury dentistry in Oklahoma City. Offering permanent dental implants, porcelain veneers, Invisalign clear aligners, gentle sedation dentistry, and 24/7 same-day emergency dental care at 3725 S Western Ave, OKC.",
  keywords: [
    "Oklahoma City Dentist",
    "Dentist OKC",
    "Comfort Dental Clinic",
    "3725 S Western Ave Oklahoma City",
    "Dental Implants Oklahoma City",
    "Cosmetic Dentistry OKC",
    "Porcelain Veneers Oklahoma",
    "Sedation Dentistry OKC",
    "Emergency Dentist OKC",
    "Invisalign Provider Oklahoma City"
  ],
  authors: [{ name: "Comfort Dental Clinic & Implant Institute" }],
  openGraph: {
    title: "Comfort Dental Clinic & Implant Institute | Oklahoma City Luxury Healthcare",
    description: "World-class restorative, cosmetic, and sedation dentistry rooted in Oklahoma warmth and integrity. 3725 S Western Ave, Unit 725, OKC.",
    url: "https://comfortdentalokc.com",
    siteName: "Comfort Dental Clinic",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-oklahoma-gold-500/30 selection:text-oklahoma-blue-900">
        {/* Gold curtain intro animation */}
        <GoldCurtain />
        {/* Welcome audio */}
        <audio src="/welcome.wav" autoPlay />
        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Requirement: The map will appear immediately above the footer on every page */}
        <InteractiveMapSection />

        {/* Global Comprehensive Footer */}
        <Footer />

        {/* Floating Quick Action CTA for mobile/tablet */}
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:hidden">
          <a
            href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
            className="p-3.5 rounded-full bg-oklahoma-blue-900 text-white shadow-xl border border-oklahoma-gold-400"
            aria-label="Call clinic directly"
          >
            <Phone className="w-5 h-5 text-oklahoma-gold-400" />
          </a>
          <Link
            href="/book"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-xs shadow-xl border border-oklahoma-gold-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
