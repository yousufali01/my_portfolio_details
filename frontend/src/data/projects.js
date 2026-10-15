import silentTalkImg from "../assets/projects/silent-talk.png";
import bazarDorImg from "../assets/projects/bazar-dor.svg";
import fitlogImg from "../assets/projects/fitlog.svg";
import banglaNews24Img from "../assets/projects/bangla-news-24.png";

export const projects = [
  {
    id: 1,
    slug: "silent-talk",
    title: "Silent Talk — Universal Sign Language",
    subtitle: "Universal Assistive Communication for Deaf, Blind & Non-Disabled People",
    category: "Assistive Tech & Universal Accessibility",
    featured: true,
    award: "UIU Hack Day 2026 Champion & Best Idea Award",
    prize: "BDT 5,000",
    team: "405 Found",
    image: silentTalkImg,
    live: "https://cozy-mousse-23d324.netlify.app/",
    liveVerified: true,
    github: "https://github.com/yousufali01/Silent-talk",
    githubVerified: true,
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Web Speech API (Speech Recognition)",
      "SpeechSynthesis (Text-to-Speech)",
      "Tailwind CSS",
      "Assistive UX Design",
      "Netlify"
    ],
    purpose:
      "Eliminates systemic communication barriers by enabling intuitive, tri-directional conversation between deaf, blind, and non-disabled individuals without requiring prior sign language knowledge.",
    targetUsers:
      "Deaf or hard-of-hearing individuals, visually impaired / blind users, non-disabled family members, healthcare workers, and emergency responders.",
    description:
      "Silent Talk is an award-winning assistive web platform built at UIU Hack Day 2026, winning 1st Place Champion & Best Idea Award with Team 405 Found. The application introduces a unified multimodal communication interface: Deaf users compose visual messages using structured symbol blocks (WHO → WHAT → WHERE/WHEN) with quick emergency phrases and emotion color tags; Blind users interact via voice input and speech synthesis; and non-disabled users can read real-time translations and reply with text or voice.",
    keyFeatures: [
      "Universal Symbol-Based Message Composer (WHO, WHAT, WHERE/WHEN structured blocks for rapid communication)",
      "One-Touch Emergency Quick Phrases ('Need help here', 'Food now', 'Ambulance' with SOS indicators)",
      "Integrated Speech-to-Text Voice Recognition for blind and verbal users ('Start speaking' interface)",
      "Text-to-Speech (TTS) Audio Playback bridging non-verbal symbol sentences to spoken words",
      "Emotion-Color Coding (Red, Orange, Yellow, Blue, Green) to convey urgency, sentiment, and emotional tone",
      "High-Contrast Accessible Dark Theme with secret mode toggle and optimized tap targets",
      "Cloud Deployment on Netlify with verified real-time browser audio APIs"
    ],
    challenges: [
      "Architecting a seamless bidirectional state flow between non-verbal symbol selections and natural-sounding speech synthesis",
      "Managing cross-browser Web Speech API permissions, microphone states, and recognition lifecycles under hackathon time limits",
      "Designing an ultra-accessible cognitive UI layout suitable for emergency situations where users cannot type or hear"
    ],
    future: [
      "Computer-vision sign language gesture detection using webcam and MediaPipe hands",
      "Offline progressive web app (PWA) caching for critical emergency use in network dead-zones",
      "Multi-language and local Bangla sign dialect expansion with localized voice models"
    ]
  },
  {
    id: 2,
    slug: "bazar-dor",
    title: "Bazar-Dor",
    subtitle: "Bangla Daily Grocery Market Price Tracker",
    category: "Full-Stack Web Application",
    featured: true,
    image: bazarDorImg,
    live: "https://bazar-dor-three-xi.vercel.app",
    liveVerified: true,
    github: "https://github.com/yousufali01/Bazar-Dor",
    githubVerified: true,
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "daisyUI",
      "JavaScript (ES6+)",
      "Vercel"
    ],
    purpose:
      "Provides transparent daily market rates for essential household commodities across Bangladesh, mitigating price uncertainty for everyday grocery shoppers.",
    targetUsers:
      "Bangladeshi consumers, household grocery planners, and market researchers looking for reliable, categorized daily prices.",
    description:
      "A modern, high-performance web application tailored for Bangladeshi consumers to browse, track, and monitor daily fluctuating market prices of essential groceries including rice, lentils, edible oils, seasonal vegetables, fresh fish, and meat.",
    keyFeatures: [
      "Dynamic Daily Price Ticker with percentage increases (▲) and decreases (▼)",
      "Categorized Browsing across 8+ essential commodity sections (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা)",
      "Instant Market Search & Filter for rapid product and commodity lookup",
      "Clean UI featuring localized Bangla typography and daisyUI component elements",
      "Vercel cloud deployment with optimized server-side rendering and asset delivery"
    ],
    challenges: [
      "Rendering crisp Bangla typography with proper font fallbacks across diverse browser engines",
      "Creating an infinitely scrolling horizontal live price ticker without stutter or high CPU usage",
      "Ensuring fluid mobile responsiveness for dense price and category tables on budget smartphones"
    ],
    future: [
      "Historical price analytics charts to observe seasonal inflation trends over 30 and 90 days",
      "User SMS or Web-push price alerts when targeted commodities drop below specified thresholds",
      "Crowdsourced consumer price feedback and community market verification"
    ]
  },
  {
    id: 3,
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Routine Planning Companion",
    category: "Fitness & Health Web Application",
    featured: true,
    image: fitlogImg,
    live: "https://assignment-6-yousuf19.vercel.app",
    liveVerified: true,
    github: "https://github.com/yousufali01/FitLog",
    githubVerified: false, // Configurable candidate repository
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Lucide Icons",
      "Context API",
      "Vercel"
    ],
    purpose:
      "Empowers gym-goers and fitness enthusiasts to plan, structure, and track their workout regimens with a distraction-free, high-contrast dark fitness companion.",
    targetUsers:
      "Strength athletes, fitness enthusiasts, and gym beginners looking for structured workout directories, instructions, and session planning.",
    description:
      "FitLog is a dark-themed, no-nonsense gym companion that offers a library of 12+ fundamental compound and isolation lifts covering every major muscle group (Chest, Back, Legs, Shoulders, Arms, Core) with calorie estimations, difficulty badges, and custom day-to-day plan creation.",
    keyFeatures: [
      "Curated 12-Lift Exercise Library covering Chest, Back, Legs, Shoulders, Arms, and Core",
      "Interactive Multi-criteria Sorting by Duration, Estimated Calories, and Community Rating",
      "Custom 'My Plan' builder with real-time saved workout state counter in the navigation bar",
      "Detailed step-by-step lift instructions, equipment requirements, and rep/set recommendations",
      "High-contrast dark aesthetic (#0A0A0A) with electric lime accents (#CCFF00) optimized for gym floor use"
    ],
    challenges: [
      "Managing persistent state between the global workout library and user's 'My Plan' session with Context API",
      "Designing responsive high-contrast cards that remain clearly readable under harsh gym lighting",
      "Structuring multi-attribute sorting (duration, calories, rating) without client-side UI lag"
    ],
    future: [
      "Rest timer integration with audio cues between active exercise sets",
      "Interactive video demonstrations for complex compound lift mechanics",
      "Exportable routine summary and weekly progressive overload analytics"
    ]
  },
  {
    id: 4,
    slug: "bangla-news-24",
    title: "Bangla News 24",
    subtitle: "Bangla Digital News Portal & Breaking News Ticker",
    category: "Media & News Web Application",
    featured: true,
    image: banglaNews24Img,
    live: "https://news-the-time.vercel.app",
    liveVerified: false, // Candidate URL / Editable placeholder
    github: "https://github.com/yousufali01/Bangla-News-24",
    githubVerified: false, // Candidate URL / Editable placeholder
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "REST API",
      "JavaScript (ES6+)",
      "Vercel"
    ],
    purpose:
      "Delivers timely, categorized Bangla news updates and breaking bulletins with an intuitive, distraction-free digital newspaper reading experience.",
    targetUsers:
      "Bengali-speaking readers interested in instant national, international, politics, economy, health, sports, and technology news coverage.",
    description:
      "Bangla News 24 is a modern Bangla digital news portal designed to deliver rapid journalistic updates, categorized news sections (হোম, রাজনীতি, বিশ্ব, অর্থনীতি, স্বাস্থ্য, খেলা, প্রযুক্তি), top-read trending rankings, and real-time breaking news tickers in a clean, high-readability newspaper layout.",
    keyFeatures: [
      "Real-time Breaking News Ticker (সর্বশেষ সংবাদ) showcasing live bulletin headlines",
      "Categorized News Exploration across Politics (রাজনীতি), World (বিশ্ব), Economy (অর্থনীতি), Health & Tech",
      "Lead Story Feature with high-resolution journalism imagery, reporter attribution, and timestamps",
      "Top 10 Most-Read Articles ranking sidebar (সর্বাধিক পঠিত) with instant story navigation",
      "Curated Editor's Choice Grid (নির্বাচিত খবর) with accessible Bangla typography"
    ],
    challenges: [
      "Optimizing editorial image loading performance and layout shifts (CLS) on mobile connections",
      "Implementing an accessible, non-intrusive animated breaking news ticker bar",
      "Structuring modular article components for rapid CMS or REST API pluggability"
    ],
    future: [
      "Headless CMS integration (e.g. Sanity or Strapi) for real-time editorial publishing",
      "Text-to-speech Bangla audio news reader for hands-free listening",
      "Dark mode reader toggle with adjustable font scaling"
    ]
  }
];

export default projects;
