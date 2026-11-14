"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, CheckCircle2, User, Clock, ShieldCheck } from "lucide-react";
import { BEFORE_AFTER_CASES } from "@/data/beforeAfterData";

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStopDragging);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleStopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

  return (
    <div className="w-full">
      {/* Case Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {BEFORE_AFTER_CASES.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveCaseIndex(idx);
              setSliderPosition(50);
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
              activeCaseIndex === idx
                ? "bg-oklahoma-blue-900 text-white border-oklahoma-gold-500 shadow-md ring-2 ring-oklahoma-gold-400/40"
                : "bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-200 border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Comparison Canvas */}
        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-oklahoma-gold-400/50 select-none cursor-ew-resize bg-oklahoma-charcoal-900 group"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeCase.afterImage}
                alt={`${activeCase.title} - After Transformation`}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-emerald-400/30">
                After: Radiance & Health
              </div>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeCase.beforeImage}
                alt={`${activeCase.title} - Before Transformation`}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 left-4 bg-oklahoma-charcoal-800/90 backdrop-blur-md text-oklahoma-ivory-100 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-oklahoma-charcoal-600">
                Before Treatment
              </div>
            </div>

            {/* Slider Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-oklahoma-gold-300 via-white to-oklahoma-gold-300 shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-oklahoma-blue-900 border-2 border-oklahoma-gold-400 shadow-gold-glow flex items-center justify-center text-oklahoma-gold-400 pointer-events-auto cursor-ew-resize group-hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Hint pill at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-oklahoma-blue-950/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] text-oklahoma-gold-300 border border-oklahoma-gold-400/30 pointer-events-none">
              Drag left or right to compare smile transformation
            </div>
          </div>
        </div>

        {/* Case Clinical Card */}
        <div className="lg:col-span-4 bg-white dark:bg-oklahoma-charcoal-800 p-6 sm:p-7 rounded-2xl shadow-luxury border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Case Study #{activeCaseIndex + 1}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-oklahoma-sage-100 dark:bg-oklahoma-charcoal-700 text-oklahoma-sage-700 dark:text-oklahoma-sage-300">
              {activeCase.tag}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
            {activeCase.title}
          </h3>

          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-xl bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-600">
              <span className="text-xs font-bold text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 block uppercase">
                Patient Concern:
              </span>
              <p className="text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-200 mt-1">
                {activeCase.concern}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-oklahoma-blue-50/70 dark:bg-oklahoma-charcoal-700/60 border border-oklahoma-blue-100 dark:border-oklahoma-charcoal-600">
              <span className="text-xs font-bold text-oklahoma-blue-700 dark:text-oklahoma-gold-400 block uppercase">
                Clinical Solution:
              </span>
              <p className="text-oklahoma-blue-950 dark:text-oklahoma-ivory-100 mt-1">
                {activeCase.solution}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              <Clock className="w-4 h-4 text-oklahoma-gold-600 shrink-0" />
              <span>{activeCase.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300">
              <User className="w-4 h-4 text-oklahoma-gold-600 shrink-0" />
              <span>{activeCase.doctor.split(",")[0]}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700">
            <a
              href="/book"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 to-oklahoma-gold-400 hover:from-oklahoma-gold-600 hover:to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Consultation for This Treatment</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
