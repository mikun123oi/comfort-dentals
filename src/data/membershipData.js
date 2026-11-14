export const MEMBERSHIP_TIERS = [
  {
    id: "adult",
    name: "Adult Wellness Plan",
    target: "For adults & teens aged 13+",
    priceAnnual: 349,
    priceMonthly: 32,
    retailValue: 960,
    popular: true,
    badge: "Most Popular",
    inclusions: [
      "2 Comprehensive Dental Exams per year",
      "2 Professional Hygiene Cleanings (Prophylaxis)",
      "All necessary Digital X-Rays & 3D CT Scans",
      "1 Emergency Dental Exam & Triage per year",
      "2 Oral Cancer Velocity Screenings",
      "2 Fluoride Enamel Varnish Applications",
      "Flat 20% OFF all Restorative & Cosmetic Procedures",
      "Flat 20% OFF Sedation & Orthodontic Treatments"
    ],
    savingsHighlight: "Saves $611+ annually on routine preventive care alone"
  },
  {
    id: "child",
    name: "Child Wellness Plan",
    target: "For children aged 12 and under",
    priceAnnual: 249,
    priceMonthly: 23,
    retailValue: 780,
    popular: false,
    badge: "Family Friendly",
    inclusions: [
      "2 Pediatric Dental Exams & Growth Checks per year",
      "2 Gentle Hygiene Cleanings & Polishing",
      "All routine Pediatric Digital X-Rays",
      "2 High-Potency Medical Fluoride Treatments",
      "1 Emergency Exam per year",
      "Protective Dental Sealants (Included 50% discount)",
      "Flat 20% OFF all pediatric fillings and space maintainers",
      "Complimentary Kids Prize Bag & Oral Hygiene Kit"
    ],
    savingsHighlight: "Saves $531+ annually per child"
  },
  {
    id: "perio",
    name: "Periodontal Care Plan",
    target: "For patients managing gingival & gum wellness",
    priceAnnual: 499,
    priceMonthly: 45,
    retailValue: 1420,
    popular: false,
    badge: "Specialized Gum Health",
    inclusions: [
      "3 - 4 Periodontal Maintenance Cleanings per year",
      "2 Comprehensive Periodontal Depth Evaluations",
      "All Digital Diagnostic Radiographs & 3D Imaging",
      "1 Emergency Dental Exam with Pain Relief",
      "Subgingival Antimicrobial Irrigation during visits",
      "2 Oral Cancer & Airway Health Screenings",
      "Flat 20% OFF Deep Scaling & Root Planing (SRP)",
      "Flat 20% OFF all restorative & surgical gum treatments"
    ],
    savingsHighlight: "Saves $921+ annually compared to out-of-pocket perio fees"
  }
];

export const INSURANCE_VS_MEMBERSHIP = [
  { feature: "Annual Deductible", traditionalInsurance: "$50 – $150 per person", comfortPlan: "$0 (None)" },
  { feature: "Annual Maximum Cap", traditionalInsurance: "$1,000 – $1,500/year (Depletes fast)", comfortPlan: "Unlimited (No Cap Ever)" },
  { feature: "Waiting Periods", traditionalInsurance: "6 – 12 months for major work", comfortPlan: "Zero (Immediate Use Today)" },
  { feature: "Pre-Authorizations / Denials", traditionalInsurance: "Frequent denials & paper delays", comfortPlan: "Guaranteed (No Denials Ever)" },
  { feature: "Cosmetic Procedures (Whitening/Veneers)", traditionalInsurance: "Excluded (0% coverage)", comfortPlan: "20% OFF Included" },
  { feature: "Sedation Dentistry", traditionalInsurance: "Rarely covered", comfortPlan: "20% OFF Included" },
  { feature: "Pre-Existing Conditions Exclusion", traditionalInsurance: "Often excluded (e.g. missing tooth)", comfortPlan: "100% Eligible With No Penalties" }
];
