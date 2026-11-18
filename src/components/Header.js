"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Stethoscope, 
  AlertCircle,
  Sun,
  Moon,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { SERVICES_CATEGORIES } from "@/data/servicesData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check dark mode preference
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services", hasDropdown: true },
    { label: "Membership Plan", href: "/membership", isSpecial: true },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];

  const getServiceCategoryIcon = (iconName) => {
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Premium Announcement Bar */}
      <div className="bg-oklahoma-blue-900 text-oklahoma-ivory-100 border-b border-oklahoma-blue-800 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Location & Emergency */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-oklahoma-ivory-300">
              <MapPin className="w-3.5 h-3.5 text-oklahoma-gold-400 shrink-0" />
              <span>3725 S Western Ave, Unit 725, OKC</span>
            </span>
            <span className="hidden md:inline-block text-oklahoma-blue-700">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-oklahoma-ivory-300">
              <Clock className="w-3.5 h-3.5 text-oklahoma-gold-400 shrink-0" />
              <span>Mon-Thu 7AM-6PM • Fri 7AM-3PM • Sat By Appt</span>
            </span>
          </div>

          {/* Right: New Patient Special & Membership Plan Link */}
          <div className="flex items-center gap-4 ml-auto">
            <Link 
              href="/membership"
              className="hidden lg:flex items-center gap-2 bg-oklahoma-gold-500/20 hover:bg-oklahoma-gold-500/30 px-3 py-1 rounded-full text-oklahoma-gold-300 hover:text-white border border-oklahoma-gold-500/40 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-oklahoma-gold-400" />
              <span className="font-semibold">No Insurance? Comfort Dental Membership Plan ($0 Cleanings)</span>
            </Link>
            
            <a 
              href={`tel:${CLINIC_INFO.contact.phoneRaw}`} 
              className="flex items-center gap-1.5 font-semibold text-oklahoma-gold-400 hover:text-oklahoma-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-oklahoma-gold-400" />
              <span>{CLINIC_INFO.contact.phone}</span>
            </a>

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-1 rounded text-oklahoma-ivory-300 hover:text-oklahoma-gold-400 transition-colors ml-1"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-oklahoma-charcoal-800/95 backdrop-blur-md shadow-md py-3" 
            : "bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-900 py-4.5"
        } border-b border-oklahoma-ivory-300/80 dark:border-oklahoma-charcoal-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-oklahoma-blue-800 to-oklahoma-blue-900 border border-oklahoma-gold-400/60 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <Image src="/logo.svg" alt="Comfort Dental Logo" width={44} height={44} priority />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 group-hover:text-oklahoma-blue-700 dark:group-hover:text-oklahoma-gold-400 transition-colors leading-tight">
                Comfort Dental
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
                Clinic & Implant Institute • OKC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 ${
                        pathname.startsWith("/services") 
                          ? "text-oklahoma-blue-900 dark:text-oklahoma-gold-400 font-semibold" 
                          : "text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:text-oklahoma-blue-600 dark:hover:text-oklahoma-gold-400"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-oklahoma-gold-600" />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white dark:bg-oklahoma-charcoal-800 rounded-xl shadow-2xl border border-oklahoma-gold-400/30 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {SERVICES_CATEGORIES.map((category) => (
                          <Link 
                            key={category.id} 
                            href={`/services#${category.id}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="p-3.5 rounded-lg hover:bg-oklahoma-ivory-100 dark:hover:bg-oklahoma-charcoal-700 transition-colors group/item flex items-start gap-3 border border-transparent hover:border-oklahoma-gold-400/20"
                          >
                            <div className="p-2 rounded-md bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-600 group-hover/item:bg-oklahoma-gold-500/10">
                              {getServiceCategoryIcon(category.icon)}
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 group-hover/item:text-oklahoma-gold-600 dark:group-hover/item:text-oklahoma-gold-400 transition-colors">
                                {category.name}
                              </div>
                              <p className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-300 line-clamp-1 mt-0.5">
                                {category.tagline}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {category.services.slice(0, 3).map((srv) => (
                                  <span key={srv.id} className="text-[11px] text-oklahoma-blue-700 dark:text-oklahoma-ivory-300 bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-700 px-1.5 py-0.5 rounded">
                                    {srv.title.split("(")[0].trim()}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-3 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700 flex items-center justify-between text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
                          <span className="font-medium">Need immediate emergency dental care in OKC?</span>
                          <Link href="/services#emergency" className="text-red-600 dark:text-red-400 font-semibold hover:underline flex items-center gap-1">
                            Same-Day Emergency Dental &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium text-sm transition-colors py-2 relative flex items-center ${
                    isActive 
                      ? "text-oklahoma-blue-900 dark:text-oklahoma-gold-400 font-semibold" 
                      : "text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:text-oklahoma-blue-600 dark:hover:text-oklahoma-gold-400"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isSpecial && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-oklahoma-gold-500 text-oklahoma-blue-900 shadow-sm animate-pulse">
                      $0 Cleanings
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-oklahoma-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 text-oklahoma-blue-900 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 shadow-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 border border-oklahoma-gold-300"
            >
              <Calendar className="w-4 h-4 text-oklahoma-blue-900" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:bg-oklahoma-ivory-200 dark:hover:bg-oklahoma-charcoal-800"
            >
              {darkMode ? <Sun className="w-5 h-5 text-oklahoma-gold-400" /> : <Moon className="w-5 h-5 text-oklahoma-blue-900" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation menu"
              className="p-2 rounded-lg text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 hover:bg-oklahoma-ivory-200 dark:hover:bg-oklahoma-charcoal-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-oklahoma-charcoal-900 border-b border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href 
                      ? "bg-oklahoma-blue-50 dark:bg-oklahoma-charcoal-800 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 font-semibold" 
                      : "text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 hover:bg-oklahoma-ivory-100 dark:hover:bg-oklahoma-charcoal-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-800 space-y-3">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-center bg-oklahoma-gold-500 text-oklahoma-blue-900 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>
              <a
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-center border border-oklahoma-blue-600 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 dark:border-oklahoma-gold-500"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic: {CLINIC_INFO.contact.phone}</span>
              </a>
              <div className="text-center text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
                3725 S Western Ave, Unit 725, Oklahoma City, OK 73109
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
