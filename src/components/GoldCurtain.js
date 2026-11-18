"use client";
import { useEffect, useState } from "react";

export default function GoldCurtain() {
  const [phase, setPhase] = useState("hold"); // hold → open → gone

  useEffect(() => {
    // After 2 s hold, start the opening animation (0.8 s)
    const openTimer = setTimeout(() => setPhase("open"), 2000);
    // After animation finishes, remove from DOM entirely
    const goneTimer = setTimeout(() => setPhase("gone"), 2900);
    return () => { clearTimeout(openTimer); clearTimeout(goneTimer); };
  }, []);

  if (phase === "gone") return null;

  const isOpen = phase === "open";

  const panelBase =
    "absolute inset-y-0 w-1/2 flex flex-col overflow-hidden transition-transform duration-[850ms] ease-in-out";

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* ── Left curtain panel ── */}
      <div
        className={`${panelBase} left-0 ${isOpen ? "-translate-x-full" : "translate-x-0"}`}
        style={{ background: "linear-gradient(135deg, #c9a84c 0%, #f7e199 30%, #dfbe65 55%, #9a7b2c 80%, #c9a84c 100%)" }}
      >
        {/* Fabric folds */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-y-0"
            style={{
              left: `${i * 18}%`,
              width: "12%",
              background: "rgba(0,0,0,0.07)",
              filter: "blur(6px)",
            }}
          />
        ))}
        {/* Shimmer stripe */}
        <div className="absolute inset-y-0 right-0 w-6"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />
      </div>

      {/* ── Right curtain panel ── */}
      <div
        className={`${panelBase} right-0 ${isOpen ? "translate-x-full" : "translate-x-0"}`}
        style={{ background: "linear-gradient(225deg, #c9a84c 0%, #f7e199 30%, #dfbe65 55%, #9a7b2c 80%, #c9a84c 100%)" }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-y-0"
            style={{
              right: `${i * 18}%`,
              width: "12%",
              background: "rgba(0,0,0,0.07)",
              filter: "blur(6px)",
            }}
          />
        ))}
        <div className="absolute inset-y-0 left-0 w-6"
          style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.35), transparent)" }} />
      </div>

      {/* ── Centre logo shown while curtains are closed ── */}
      {!isOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          {/* Logo mark */}
          <div className="w-20 h-20 rounded-2xl bg-oklahoma-blue-900 border-2 border-oklahoma-gold-400/80 shadow-2xl flex items-center justify-center">
            <img src="/logo.svg" alt="Comfort Dental" className="w-16 h-16 object-contain" />
          </div>
          {/* Clinic name */}
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-oklahoma-blue-900 drop-shadow-lg tracking-tight leading-tight">
              Comfort Dental
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-oklahoma-blue-800 mt-1">
              Clinic &amp; Implant Institute • OKC
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
