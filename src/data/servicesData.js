export const SERVICES_CATEGORIES = [
  {
    id: "restorative",
    name: "Restorative Dentistry",
    tagline: "Rebuilding strength, function, and natural aesthetics",
    description: "State-of-the-art restorative solutions designed with biocompatible ceramics and precision digital engineering to restore your bite and oral health.",
    icon: "ShieldCheck",
    services: [
      {
        id: "crowns-bridges",
        title: "Crowns and Bridges",
        shortDesc: "Custom handcrafted porcelain and zirconia crowns designed to fortify damaged teeth or bridge gaps with natural brilliance.",
        fullDesc: "Our clinic utilizes digital optical impressions and in-house CAD/CAM ceramic milling to deliver perfectly contoured, monolithic zirconia and e.max porcelain crowns. Designed to match the exact shade, translucency, and anatomy of your natural dentition.",
        benefits: ["Same-day digital scanning with zero goopy impression trays", "High-strength monolithic zirconia offering 10+ year longevity", "Seamless margin fit preventing bacterial microleakage", "Natural light reflection matching surrounding enamel"],
        time: "1 - 2 visits",
        warranty: "10-Year Clinical Warranty",
        financing: "From $89/mo with CareCredit",
        suitableFor: ["Heavily broken or cracked teeth", "Replacing old failing metal margins", "Bridging 1-3 missing teeth"]
      },
      {
        id: "dental-fillings",
        title: "Dental Fillings (Composite Resin)",
        shortDesc: "100% mercury-free, shade-matched composite fillings bonded micro-mechanically for conservative tooth preservation.",
        fullDesc: "We exclusively practice biomimetic dentistry using nanohybrid composite resins that expand and contract identically to natural tooth enamel. Say goodbye to dark silver amalgams and hello to completely undetectable restorations.",
        benefits: ["100% biocompatible, BPA-free, and mercury-free", "Chemically bonds to tooth structure, requiring minimal drilling", "Hardened instantly with high-intensity curing LED light", "Invisible margins that blend seamlessly with your smile"],
        time: "45 minutes",
        warranty: "5-Year Guarantee",
        financing: "Covered 80-100% by most PPO insurances",
        suitableFor: ["New dental decay cavities", "Chipped enamel edges", "Replacing worn amalgam restorations"]
      },
      {
        id: "root-canal-treatment",
        title: "Root Canal Treatment",
        shortDesc: "Gentle, painless endodontic therapy utilizing 3D apex locators and rotary micro-instruments to save natural teeth.",
        fullDesc: "Modern root canal therapy at Comfort Dental Clinic is as comfortable as getting a standard filling. By using high-precision digital apex locators, nickel-titanium rotary systems, and soothing warm biocompatible gutta-percha seals, we eliminate deep tooth infection while safeguarding your natural tooth root.",
        benefits: ["Immediate relief from throbbing pulpal tooth pain", "Relaxing comfort options including laughing gas and oral sedation", "Preserves natural jawbone structure and adjacent tooth alignment", "Completed typically in a single, stress-free appointment"],
        time: "60 - 90 minutes",
        warranty: "Lifetime root preservation goal",
        financing: "Flexible monthly payment plans available",
        suitableFor: ["Severe toothache sensitive to hot/cold", "Deep dental decay reaching the nerve", "Abscessed or infected root tip"]
      },
      {
        id: "dental-implants",
        title: "Dental Implants",
        shortDesc: "The premier gold standard for permanent tooth replacement, engineered with medical-grade titanium and lifelike porcelain.",
        fullDesc: "Restore 100% of your biting force and smiling confidence. Our surgical suite features 3D Cone Beam CT-guided implant planning, ensuring sub-millimeter precision placement. Whether replacing a single tooth, multiple teeth, or anchoring an entire arch, our implants fuse permanently with your jawbone.",
        benefits: ["Prevents irreversible facial bone loss and hollow cheeks", "Look, chew, and floss just like natural teeth", "No grinding down of adjacent healthy teeth", "Over 98.7% long-term clinical success rate"],
        time: "3 - 6 months total process",
        warranty: "Lifetime Structural Warranty on Implants",
        financing: "Starting from $149/mo with 0% APR options",
        suitableFor: ["Single or multiple missing teeth", "Failing bridge replacements", "Stabilizing loose or uncomfortable dentures"]
      },
      {
        id: "dentures",
        title: "Dentures & Implant Overdentures",
        shortDesc: "Ultra-natural custom dentures designed with modern aesthetics and optional implant lock-in stabilization.",
        fullDesc: "Forget outdated, loose-fitting plastic plates. We craft bespoke cosmetic full and partial dentures calibrated to your facial golden ratio. For supreme security, we offer snap-in implant overdentures and All-on-4 fixed hybrid bridges that never slip, click, or require messy adhesives.",
        benefits: ["Facial contour support eliminating collapsed lip lines", "Custom-shaded gum textures and lifelike tooth gradation", "Snap-in implant options for zero slipping while dining", "Hypoallergenic and lightweight medical acrylics"],
        time: "3 - 4 appointments",
        warranty: "5-Year Craftsmanship Guarantee",
        financing: "From $119/mo",
        suitableFor: ["Complete or extensive tooth loss", "Upgrading old slipping dentures", "Patients seeking affordable full-arch restoration"]
      },
      {
        id: "tooth-perforation-repair",
        title: "Tooth Perforation Repair",
        shortDesc: "Specialized micro-surgical sealing using mineral trioxide aggregate (MTA) to rescue compromised tooth roots.",
        fullDesc: "Accidental or pathological root perforations historically resulted in tooth loss. Dr. Vance and our endodontic specialists utilize surgical dental microscopes and bioactive bioceramic materials (MTA) that stimulate natural cementum and bone regrowth to seal perforations and rescue your natural tooth.",
        benefits: ["Salvages teeth previously deemed non-restorable", "Bioceramic cement induces cementogenesis and bone healing", "Performed under high-magnification surgical operating microscopes", "Eliminates chronic periodontal inflammation"],
        time: "60 minutes",
        warranty: "Case-by-case prognosis evaluation",
        financing: "Customizable treatment financing",
        suitableFor: ["Roots perforated during previous root canal treatments", "Internal or external root resorption", "Deep subgingival decay near the pulp chamber"]
      }
    ]
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    tagline: "Curating radiant, natural, runway-ready smiles",
    description: "Transform your smile with bespoke cosmetic artistry. We balance color harmony, tooth proportion, and facial aesthetics to reveal your most captivating self.",
    icon: "Sparkles",
    services: [
      {
        id: "teeth-whitening",
        title: "Professional Teeth Whitening",
        shortDesc: "In-office Philips Zoom! WhiteSpeed laser whitening brightening your smile up to 8 shades in just 45 minutes.",
        fullDesc: "Eliminate years of coffee, tea, red wine, and tobacco stains safely and painlessly. Our clinical whitening combines advanced blue LED light accelerator technology with desensitizing ACP (amorphous calcium phosphate) to maximize brilliance while protecting enamel comfort.",
        benefits: ["Brightens teeth up to 8 full shades in a single visit", "Enamel-safe pH balanced formula with built-in anti-sensitivity", "Includes complimentary custom take-home maintenance kit", "Dramatic, immediate confidence boost for special occasions"],
        time: "45 - 60 minutes",
        warranty: "Brilliance touch-up plan available",
        financing: "Starting at $299 complete package",
        suitableFor: ["Extrinsic yellowing and dietary stains", "Smiles preparing for weddings, interviews, and public speaking", "Patients wanting quick, noticeable rejuvenation"]
      },
      {
        id: "cosmetic-dentistry-general",
        title: "Cosmetic Dentistry & Aesthetic Bonding",
        shortDesc: "Artistic direct composite sculpting and micro-contouring to repair chips, close gaps, and enhance tooth symmetry.",
        fullDesc: "For patients seeking immediate aesthetic improvements without invasive enamel reduction, our dental artists apply layers of micro-hybrid composite resin, sculpting flawless margins in real time. Perfect for fixing minor imperfections, edge wear, and dark interdental triangles.",
        benefits: ["Completed in a single painless visit with zero anesthesia needed", "Zero irreversible tooth enamel removal", "Infinitely repairable and polished to high luster", "Significantly more affordable than full porcelain restorations"],
        time: "30 - 60 minutes per tooth",
        warranty: "3-Year Clinical Assurance",
        financing: "From $49/mo",
        suitableFor: ["Chipped front incisors", "Small gaps (diastemas) between teeth", "Uneven tooth lengths or jagged edges"]
      },
      {
        id: "smile-transformations",
        title: "Smile Transformations & Porcelain Veneers",
        shortDesc: "Handcrafted wafer-thin master ceramics customized to create the Hollywood-tier smile you have always envisioned.",
        fullDesc: "Experience bespoke smile architecture. Using 3D Digital Smile Design (DSD), you preview and test-drive your new smile before any physical work begins. Master dental ceramists sculpt ultra-thin feldspathic and lithium disilicate veneers that resist staining and illuminate with breathtaking realism.",
        benefits: ["Full digital 3D smile preview before treatment begins", "Stain-resistant glass-ceramic reflecting lifelike depth", "Corrects alignment, spacing, color, and shape simultaneously", "Engineered to complement your unique facial proportions"],
        time: "2 - 3 visits over 2 weeks",
        warranty: "10-Year Aesthetic Warranty",
        financing: "Financing from $199/mo",
        suitableFor: ["Severely stained or tetracycline-discolored teeth", "Worn down, short, or aging smiles", "Crooked or irregular teeth without years of braces"]
      }
    ]
  },
  {
    id: "preventive",
    name: "Preventive Dentistry",
    tagline: "Proactive care for lifelong dental wellness",
    description: "Guard your radiant smile and overall cardiovascular health with thorough, gentle preventive protocols tailored to your biological profile.",
    icon: "HeartHandshake",
    services: [
      {
        id: "dental-examinations",
        title: "Comprehensive Dental Examinations",
        shortDesc: "In-depth oral health evaluations featuring high-definition intraoral cameras and oral cancer velocity screenings.",
        fullDesc: "Every exam at Comfort Dental Clinic is an educational, transparent partnership. We assess gum pocket depth, bite balance, airway health, joint mobility (TMJ), and screen soft tissues with fluorescent oral cancer visualization technology.",
        benefits: ["High-resolution intraoral camera tour displayed on overhead screen", "Life-saving early VELscope oral cancer detection protocol", "Airway and sleep apnea anatomical screening", "Personalized oral microbiome care roadmap"],
        time: "45 minutes",
        warranty: "Included in routine checkup",
        financing: "100% covered by preventive dental insurance",
        suitableFor: ["All adults and children every 6 months", "New patients establishing an Oklahoma dental home", "Patients experiencing jaw tension or gum tenderness"]
      },
      {
        id: "digital-x-rays",
        title: "Ultra-Low Radiation Digital X-Rays",
        shortDesc: "Next-generation Green Cone Beam 3D CT and HD digital bitewings with 90% less radiation than legacy film.",
        fullDesc: "Patient safety is paramount. Our cutting-edge digital radiography emits up to 90% less radiation than conventional dental film while producing instant, ultra-sharp diagnostic images. AI-assisted radiograph diagnostics pinpoint micro-cavities between teeth long before they cause discomfort.",
        benefits: ["Up to 90% radiation reduction compared to traditional X-rays", "Instant visual rendering on HD monitors for patient review", "AI-assisted diagnostics highlighting subtle enamel demineralization", "Eco-friendly, chemical-free digital archiving"],
        time: "5 minutes",
        warranty: "Diagnostic Standard",
        financing: "Fully covered under preventive benefits",
        suitableFor: ["Routine yearly screening", "Pre-implant bone density evaluation", "Detecting hidden decay under fillings or crowns"]
      },
      {
        id: "professional-cleanings",
        title: "Professional Dental Cleanings (Prophylaxis)",
        shortDesc: "Gentle ultrasonic piezo scaling followed by luxury polishing and warm herbal rinse therapy.",
        fullDesc: "Experience the gentlest dental cleaning of your life. Our registered dental hygienists utilize Swiss-engineered EMS AirFlow technology to lift biofilm, tartar (calculus), and stubborn stains without painful scraping. Feel the smooth, squeaky-clean glass texture across your teeth.",
        benefits: ["Pain-free ultrasonic micro-vibrations dissolve hardened calculus", "Subgingival airflow polishing gently clears bacterial biofilm", "Freshens breath and reduces systemic cardiovascular inflammation markers", "Finished with soothing organic peppermint polishing paste"],
        time: "45 - 60 minutes",
        warranty: "6-Month Recall Standard",
        financing: "$0 copay with most PPO plans",
        suitableFor: ["Patients due for regular hygiene every 6 months", "Coffee, tea, and tobacco stain removal", "Maintaining healthy pink gingival tissues"]
      },
      {
        id: "fluoride-treatments",
        title: "Medical-Grade Fluoride Treatments",
        shortDesc: "High-potency remineralizing varnish providing 6 months of continuous acid and sensitivity resistance.",
        fullDesc: "Safeguard your teeth against acid erosion and cold sensitivity. Our fast-setting medical fluoride varnish delivers bioavailable calcium and phosphate ions directly into micro-porous enamel crystals, reversing early demineralization.",
        benefits: ["Immediate reduction of hot/cold tooth sensitivity", "Strengthens enamel resistance against sugar and acidic foods", "Fast-drying, transparent lacquer that doesn't restrict eating or drinking", "Recommended for adults with receding gums or exposed roots"],
        time: "5 minutes",
        warranty: "Lasts up to 6 months",
        financing: "$35 add-on or covered by insurance",
        suitableFor: ["Patients with root sensitivity", "High-caries risk individuals", "Patients undergoing orthodontic treatment"]
      },
      {
        id: "dental-sealants",
        title: "BPA-Free Dental Sealants",
        shortDesc: "Ultra-thin protective resin shields sealing deep fissures and pits on chewing surfaces against food debris.",
        fullDesc: "The chewing surfaces of back molars harbor microscopic pits that toothbrush bristles cannot reach. Our medical-grade, BPA-free clear sealants flow effortlessly into these grooves, creating a smooth, impervious barrier that locks out food particles and bacteria.",
        benefits: ["Reduces molar cavity risk by over 80% according to the CDC", "Painless application with zero drilling and zero needles", "Invisible or natural tooth-colored appearance", "Durable protection lasting up to 5 to 8 years"],
        time: "15 minutes",
        warranty: "3-Year Inspection and Touch-Up",
        financing: "Often 100% covered for children & adolescents",
        suitableFor: ["Children with newly erupted permanent molars", "Adults with deep, prone occlusal pits", "Preventing costly future fillings"]
      }
    ]
  },
  {
    id: "orthodontics",
    name: "Orthodontics & Specialty",
    tagline: "Harmonizing alignment, bite, and tranquil comfort",
    description: "Modern orthodontic mechanics and board-certified sedation dentistry tailored to align smiles smoothly and conquer dental anxiety forever.",
    icon: "Stethoscope",
    services: [
      {
        id: "all-types-of-braces",
        title: "All Types of Braces & Clear Aligners",
        shortDesc: "Invisalign Platinum Elite clear aligners, aesthetic ceramic braces, and low-friction Damon self-ligating brackets.",
        fullDesc: "Straightening your teeth is not just about aesthetics—it creates an optimal bite and simplifies flossing to prevent gum disease. We provide Invisalign virtually invisible aligners, crystal-clear ceramic brackets, and high-efficiency Damon self-ligating metal braces for adults and teens.",
        benefits: ["Invisalign removable trays: eat whatever you like with no food restrictions", "Aesthetic ceramic brackets blend invisibly against your teeth", "Accelerated treatment protocols reducing duration by up to 30%", "Digital 3D ClinCheck software shows your final result before starting"],
        time: "6 - 18 months average",
        warranty: "Post-treatment retention guarantee",
        financing: "Low down payment, from $99/mo 0% interest",
        suitableFor: ["Crowding, overlapping, or rotated teeth", "Overbites, underbites, crossbites, and open bites", "Adults seeking discreet smile realignment"]
      },
      {
        id: "mini-implants",
        title: "Mini Implants (Mini Dental Implants)",
        shortDesc: "Minimally invasive, narrow-diameter implant posts ideal for anchoring loose dentures and narrow bone spaces.",
        fullDesc: "Mini Dental Implants (MDIs) are approximately half the diameter of standard implants. They can be placed in a single visit with minimal surgery and no bone grafting, providing instantaneous rock-solid anchorage for loose lower dentures or replacing single narrow teeth.",
        benefits: ["Ideal for patients told they have 'too little bone' for traditional implants", "Virtually zero recovery downtime with immediate denture lock-in", "No bone grafting or surgical flap elevation needed", "Significantly more affordable than traditional large implants"],
        time: "Single 60-minute visit",
        warranty: "5-Year Clinical Guarantee",
        financing: "From $79/mo",
        suitableFor: ["Unstable, floating lower dentures", "Narrow front lower incisor gaps", "Elderly or medically compromised patients seeking gentle surgery"]
      },
      {
        id: "sedation-dentistry",
        title: "Sedation Dentistry (Anxiety-Free)",
        shortDesc: "Nitrous oxide, conscious oral sedation, and IV twilight sedation to eliminate dental fear completely.",
        fullDesc: "If past dental trauma or anxiety has kept you away from the dentist, our gentle sedation protocols will change your life. Enter a state of peaceful, dreamlike tranquility while our team completes multiple treatments in one comfortable visit.",
        benefits: ["Completely dissolves dental phobia, gag reflexes, and sound sensitivity", "Little to no memory of the procedure afterwards", "Enables complex multi-procedure treatments in a single appointment", "Monitored continuously with medical hospital-grade vitals telemetry"],
        time: "Duration of procedure",
        warranty: "Administered by certified sedation clinicians",
        financing: "Sedation packages available",
        suitableFor: ["Severe dental fear or anxiety", "Sensitive gag reflex or difficulty getting numb", "Patients undergoing extensive surgical or restorative work"]
      },
      {
        id: "specialty-dental-services",
        title: "Specialty Dental Services (TMJ & Sleep)",
        shortDesc: "Targeted neuromuscular TMJ headache therapy, laser gum recontouring, and custom sleep apnea oral appliances.",
        fullDesc: "Our practice goes far beyond ordinary fillings. We deliver non-invasive oral appliance therapy for sleep apnea and chronic snoring (CPAP alternative), Botox and night guards for TMJ jaw tension, and soft-tissue diode laser therapies for tongue-tie and gummy smiles.",
        benefits: ["Restful sleep without bulky, noisy CPAP masks", "Relief from chronic morning jaw tension and migraine headaches", "Minimally invasive laser gum aesthetics with zero stitches", "Interdisciplinary coordination with Oklahoma sleep physicians"],
        time: "Custom protocols",
        warranty: "Quality appliance warranty",
        financing: "Medical and dental insurance coordination",
        suitableFor: ["Snoring or mild-to-moderate obstructive sleep apnea", "Clenching, grinding (bruxism), and clicking jaw joints", "Excessive gingival display (gummy smile)"]
      }
    ]
  },
  {
    id: "emergency",
    name: "Emergency Dentistry",
    tagline: "Prompt, compassionate relief when you need it most",
    description: "Dental emergencies never wait for office hours. We offer priority same-day emergency appointments, instant pain relief, and 24/7 patient triage.",
    icon: "AlertCircle",
    services: [
      {
        id: "emergency-consultations",
        title: "Emergency Dental Consultations",
        shortDesc: "Priority same-day emergency triage and diagnostics within minutes of arrival at our Oklahoma City clinic.",
        fullDesc: "When severe dental emergencies strike, our dedicated emergency wing prioritizes your care immediately. We perform rapid 3D imaging, diagnose the root cause of distress, and deliver fast-acting localized comfort to restore peace of mind.",
        benefits: ["Same-day appointments guaranteed for acute trauma and pain", "On-call emergency triage dentist accessible 24/7", "Dedicated emergency suites ready for instant clinical intervention", "Transparent pricing with no exploitative emergency markups"],
        time: "Immediate priority",
        warranty: "Emergency Stabilizing Guarantee",
        financing: "Emergency payment options accepted",
        suitableFor: ["Sudden intense facial or tooth pain", "Traumatic accidents or sports injuries", "New and established patients in acute distress"]
      },
      {
        id: "severe-toothache",
        title: "Severe Toothache Relief",
        shortDesc: "Targeted, rapid pulp nerve de-escalation and pain cessation protocols that stop agonizing ache.",
        fullDesc: "An acute, throbbing toothache can paralyze your day and night. We identify whether the ache stems from pulpitis, cracked cusps, or deep decay, administering targeted long-lasting anesthesia and therapeutic treatments that stop pain in its tracks.",
        benefits: ["Instantaneous pain relief via profound localized anesthesia", "Gentle removal of inflamed or infected nerve tissue", "Prescription of appropriate targeted antibiotics when indicated", "Long-term restorative plan to prevent recurring symptoms"],
        time: "30 - 60 minutes",
        warranty: "Immediate relief focus",
        financing: "Covered by most dental emergency plans",
        suitableFor: ["Throbbing, radiating toothache waking you at night", "Extreme sensitivity lingering after cold or hot liquids", "Pain when chewing or touching the affected tooth"]
      },
      {
        id: "broken-damaged-teeth",
        title: "Broken or Damaged Teeth Repair",
        shortDesc: "Urgent aesthetic and structural bonding, composite splinting, and immediate ceramic restoration.",
        fullDesc: "A chipped, fractured, or split tooth requires rapid intervention to prevent bacterial invasion of the nerve. We re-bond existing tooth fragments or artistically rebuild the natural tooth contour with high-strength composite or immediate CAD/CAM ceramic veneers.",
        benefits: ["Rescues tooth vitality before bacteria reaches the inner pulp", "Flawless aesthetic restoration invisible in normal lighting", "Smoothes jagged sharp edges preventing tongue lacerations", "Emergency same-day provisional crowns available"],
        time: "45 minutes",
        warranty: "Restoration guarantee",
        financing: "Flexible financing options",
        suitableFor: ["Cracked teeth from hard foods or grinding", "Front teeth chipped in athletic injuries", "Old fractured amalgam or filling fractures"]
      },
      {
        id: "dental-infections",
        title: "Dental Infections & Abscesses",
        shortDesc: "Urgent antimicrobial drainage and disinfection to halt spreading facial swelling and fever.",
        fullDesc: "A dental abscess is a serious medical infection that can spread to the jaw, neck, or bloodstream if neglected. We perform gentle sterile drainage, eradicate bacterial colonies, and administer targeted antibiotics to neutralize systemic danger.",
        benefits: ["Immediate relief from dangerous pressure and swelling", "Sterile disinfection of infected periodontal or apical pockets", "Prevents systemic spread to deep fascial spaces", "Preserves adjacent jawbone from infectious erosion"],
        time: "45 - 60 minutes",
        warranty: "Clinical safety protocol",
        financing: "Emergency coverage applicable",
        suitableFor: ["Pimple or boil on the gums with bad taste", "Facial, cheek, or submandibular swelling", "Fever accompanied by intense dental tenderness"]
      },
      {
        id: "urgent-dental-treatment",
        title: "Urgent Trauma & Knocked-Out Teeth",
        shortDesc: "Critical replantation protocols and stabilization splinting for avulsed or displaced teeth.",
        fullDesc: "If a permanent tooth has been knocked out (avulsed), time is of the essence. Replanting within 60 minutes offers the highest chance of periodontal ligament survival. Call our emergency hotline immediately, keep the tooth moist in milk or saliva, and come directly to our clinic.",
        benefits: ["Expert periodontal ligament preservation and replantation", "Flexible micro-splinting securing the tooth during bone re-anchorage", "Comprehensive follow-up radiographic monitoring", "Urgent soft tissue suture repair for associated lip or gum trauma"],
        time: "Stat immediate care",
        warranty: "Trauma recovery protocol",
        financing: "Emergency care financing",
        suitableFor: ["Completely knocked-out permanent teeth", "Teeth knocked loose or pushed out of position", "Heavy bleeding from oral sports or collision trauma"]
      }
    ]
  }
];
