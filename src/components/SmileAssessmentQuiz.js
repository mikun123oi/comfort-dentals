"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Calendar, Smile } from "lucide-react";
import Link from "next/link";

export default function SmileAssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      id: "primaryGoal",
      title: "What is your primary smile or oral health objective?",
      options: [
        { label: "Brighter, whiter smile for everyday confidence", tag: "cosmetic", recommendation: "Zoom! 8-Shade In-Office Whitening" },
        { label: "Straightening crooked or crowded teeth discreetly", tag: "ortho", recommendation: "Invisalign Clear Aligner Consultation" },
        { label: "Replacing missing, failing, or loose teeth", tag: "implant", recommendation: "3D Guided Dental Implant Evaluation" },
        { label: "Relieving tooth pain, sensitivity, or dental fear", tag: "restorative", recommendation: "Pain-Free Sedation Restorative Assessment" }
      ]
    },
    {
      id: "timeline",
      title: "What is your ideal timeframe for treatment?",
      options: [
        { label: "Immediate (upcoming wedding, graduation, or event)", tag: "urgent" },
        { label: "Within the next 1 - 3 months", tag: "soon" },
        { label: "Flexible / exploring options and financing", tag: "flexible" }
      ]
    },
    {
      id: "comfortPreference",
      title: "How do you feel about dental appointments?",
      options: [
        { label: "Completely relaxed, routine checkups are easy", comfort: "Standard Care" },
        { label: "A little nervous, prefer a gentle touch and Netflix", comfort: "Comfort Suite with Noise-Canceling Audio" },
        { label: "High anxiety / dental phobia, require sedation", comfort: "Nitrous Oxide or Board IV Sedation" }
      ]
    }
  ];

  const handleSelectOption = (option) => {
    const updatedAnswers = { ...answers, [questions[currentQuestion].id]: option };
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizComplete(false);
  };

  const recommendedTreatment = answers.primaryGoal?.recommendation || "Comprehensive Smile Transformation Consultation";
  const comfortChoice = answers.comfortPreference?.comfort || "Warm Luxury Comfort Suite";

  return (
    <div className="w-full bg-gradient-to-br from-oklahoma-ivory-100 via-white to-oklahoma-ivory-200 dark:from-oklahoma-charcoal-800 dark:via-oklahoma-charcoal-900 dark:to-oklahoma-charcoal-800 rounded-3xl p-6 sm:p-10 border border-oklahoma-gold-400/40 shadow-luxury">
      {!quizComplete ? (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 pb-4">
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-oklahoma-gold-600" />
              <span className="font-serif text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                Virtual Smile Assessment
              </span>
            </div>
            <span className="text-xs font-semibold text-oklahoma-gold-700 dark:text-oklahoma-gold-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
              {questions[currentQuestion].title}
            </h3>
            <p className="text-xs text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400 mt-1">
              Select one option to personalize your clinical recommendation.
            </p>
          </div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectOption(opt)}
                className="w-full text-left p-4 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 bg-white dark:bg-oklahoma-charcoal-800 hover:border-oklahoma-gold-400 hover:bg-oklahoma-blue-50/50 dark:hover:bg-oklahoma-charcoal-700 transition-all flex items-center justify-between group shadow-sm"
              >
                <span className="font-medium text-sm text-oklahoma-charcoal-800 dark:text-oklahoma-ivory-100 group-hover:text-oklahoma-blue-900 dark:group-hover:text-oklahoma-gold-400">
                  {opt.label}
                </span>
                <ArrowRight className="w-4 h-4 text-oklahoma-gold-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-oklahoma-ivory-300 dark:bg-oklahoma-charcoal-700 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-oklahoma-gold-500 h-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      ) : (
        /* Quiz Results */
        <div className="max-w-xl mx-auto text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-oklahoma-gold-500/20 text-oklahoma-gold-600 dark:text-oklahoma-gold-400 mx-auto flex items-center justify-center border border-oklahoma-gold-400">
            <Sparkles className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-oklahoma-gold-600 dark:text-oklahoma-gold-400">
              Personalized Smile Assessment Result
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100 mt-1">
              {recommendedTreatment}
            </h3>
            <p className="text-sm text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 mt-2">
              Based on your answers, our Oklahoma City clinical team recommends this customized pathway with <strong>{comfortChoice}</strong> for maximum ease.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-oklahoma-charcoal-800 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 text-xs text-oklahoma-charcoal-600 dark:text-oklahoma-charcoal-300 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Recommended Doctor:</span>
              <span className="font-semibold text-oklahoma-blue-900 dark:text-oklahoma-gold-400">Dr. Garrett Vance, DDS or Dr. Sarah Lin</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Special New Patient Fee:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">$99 Full Diagnostic Exam + 3D X-Ray</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-oklahoma-gold-500 via-oklahoma-gold-400 to-oklahoma-gold-500 text-oklahoma-blue-900 font-bold text-sm shadow-md hover:shadow-gold-glow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Recommended Consultation</span>
            </Link>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-1.5 text-xs text-oklahoma-charcoal-500 hover:text-oklahoma-blue-900 dark:hover:text-oklahoma-gold-400 font-medium py-2 px-3 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
