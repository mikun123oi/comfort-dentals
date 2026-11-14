"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, MessageSquare, CheckCircle2 } from "lucide-react";
import { FAQ_CATEGORIES } from "@/data/faqData";

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({ "0-0": true }); // First item open by default
  const [submittedQuestion, setSubmittedQuestion] = useState(false);
  const [customQuestion, setCustomQuestion] = useState("");

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = FAQ_CATEGORIES.map(cat => {
    if (activeCategory !== "all" && cat.category !== activeCategory) {
      return null;
    }
    const filteredItems = cat.items.filter(item => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
    });
    return {
      ...cat,
      items: filteredItems
    };
  }).filter(Boolean);

  const handleAskSubmit = (e) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    setSubmittedQuestion(true);
    setTimeout(() => {
      setCustomQuestion("");
      setSubmittedQuestion(false);
    }, 4000);
  };

  return (
    <div className="w-full space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-oklahoma-gold-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dental questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-600 bg-white dark:bg-oklahoma-charcoal-800 text-sm text-oklahoma-charcoal-900 dark:text-oklahoma-ivory-100 placeholder-oklahoma-charcoal-400 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-oklahoma-blue-900 text-white shadow-sm"
                : "bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-300 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400"
            }`}
          >
            All Questions
          </button>
          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.category
                  ? "bg-oklahoma-blue-900 text-white shadow-sm"
                  : "bg-white dark:bg-oklahoma-charcoal-800 text-oklahoma-charcoal-700 dark:text-oklahoma-ivory-300 border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 hover:border-oklahoma-gold-400"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-6">
        {filteredCategories.map((cat, catIdx) => {
          if (cat.items.length === 0) return null;
          return (
            <div key={cat.category} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-oklahoma-gold-600 dark:text-oklahoma-gold-400 pl-1">
                {cat.category}
              </h3>

              <div className="space-y-2.5">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={item.q}
                      className="rounded-2xl border border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700 bg-white dark:bg-oklahoma-charcoal-800 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(key)}
                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-oklahoma-ivory-50 dark:hover:bg-oklahoma-charcoal-700/50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-oklahoma-gold-500 shrink-0 mt-0.5" />
                          <span className="font-serif text-base sm:text-lg font-bold text-oklahoma-blue-900 dark:text-oklahoma-ivory-100">
                            {item.q}
                          </span>
                        </div>
                        <div className={`p-1.5 rounded-full bg-oklahoma-ivory-100 dark:bg-oklahoma-charcoal-700 text-oklahoma-blue-900 dark:text-oklahoma-gold-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-oklahoma-ivory-200 dark:border-oklahoma-charcoal-700/60 mt-1">
                          <p className="text-sm sm:text-base text-oklahoma-charcoal-700 dark:text-oklahoma-charcoal-300 leading-relaxed pl-8 pt-3">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {filteredCategories.every(c => c.items.length === 0) && (
          <div className="text-center py-12 bg-white dark:bg-oklahoma-charcoal-800 rounded-2xl border border-dashed border-oklahoma-ivory-300 dark:border-oklahoma-charcoal-700">
            <p className="text-sm text-oklahoma-charcoal-500 dark:text-oklahoma-charcoal-400">
              No dental questions found matching &quot;{searchQuery}&quot;. Please try a different query or submit your question below.
            </p>
          </div>
        )}
      </div>

      {/* Ask a Dentist Interactive Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-oklahoma-blue-900 to-oklahoma-blue-950 text-white shadow-luxury border border-oklahoma-gold-400/30">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-oklahoma-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <MessageSquare className="w-4 h-4 text-oklahoma-gold-400" />
            <span>Have a Specific Question?</span>
          </div>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Ask Dr. Vance or Our Clinical Team
          </h4>
          <p className="text-xs sm:text-sm text-oklahoma-ivory-300 mt-1 mb-4">
            Do you have questions regarding a procedure, insurance plan, or dental anxiety? Send us your question and our clinical coordinator will reply within 2 business hours.
          </p>

          {submittedQuestion ? (
            <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Thank you! Your question has been forwarded to Dr. Vance&apos;s team. We will contact you promptly.</span>
            </div>
          ) : (
            <form onSubmit={handleAskSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Type your dental question here..."
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-oklahoma-blue-800/90 border border-oklahoma-blue-700 text-sm text-white placeholder-oklahoma-ivory-400 focus:outline-none focus:ring-2 focus:ring-oklahoma-gold-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-oklahoma-gold-500 hover:bg-oklahoma-gold-400 text-oklahoma-blue-900 font-bold text-sm shadow-md transition-colors whitespace-nowrap"
              >
                Send Question
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
