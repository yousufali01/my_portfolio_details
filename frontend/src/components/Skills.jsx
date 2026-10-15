import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  VscVscode,
} from "react-icons/vsc";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineTerminal,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend", icon: HiOutlineServer },
  { id: "database", name: "Databases", icon: HiOutlineDatabase },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
  { id: "security", name: "Security & Interests", icon: HiOutlineShieldCheck },
];

const skillsData = [
  // 1. Frontend Development
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
    description: "Component architecture, Hooks (useState, useEffect, useMemo), Context API, Custom Hooks.",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-white",
    bg: "bg-white/10 border-white/20",
    description: "Server/Client Components, App Router, SSR, SSG, dynamic routing, and fast performance.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    description: "Static typing, Interfaces, Type inference, Generics, and robust code refactoring.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/30",
    description: "Modern ES6+ syntax, Promises, Async/Await, Array methods, Event loop, and DOM manipulation.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
    description: "Utility-first styling, responsive fluid design, dark mode tokens, and custom animation layers.",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    description: "Semantic document structure, web accessibility standards (a11y), forms, and SEO best practices.",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    description: "Flexbox, CSS Grid layouts, media queries, CSS variables, transitions, and keyframe animations.",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: SiBootstrap,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    description: "Grid system, prebuilt UI components, responsive utilities, and modal overlays.",
  },

  // 2. Backend Development
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    description: "Event-driven runtime environment, asynchronous file I/O, npm ecosystem, and server scripts.",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-slate-200",
    bg: "bg-slate-500/10 border-slate-500/30",
    description: "Server routing, custom middleware pipelines, error handling, and request-response lifecycle.",
  },
  {
    name: "REST API Development",
    category: "backend",
    icon: HiOutlineCode,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
    description: "Designing RESTful endpoints (GET, POST, PUT, DELETE), JSON payload parsing, and API integration.",
  },

  // 3. Database & Data Management
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    description: "NoSQL document storage, database schema design, CRUD operations, indexing, and query filters.",
  },
  {
    name: "Mongoose",
    category: "database",
    icon: HiOutlineDatabase,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/30",
    description: "Schema modeling, data validation, middleware hooks, populate references, and model querying.",
  },
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    description: "Relational database modeling, SQL queries, table joins, foreign keys, and transaction integrity.",
  },

  // 4. Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/30",
    description: "Version control, branching workflows, clean commit practices, pull requests, and collaboration.",
  },
  {
    name: "Visual Studio Code",
    category: "tools",
    icon: VscVscode,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    description: "Primary development IDE, debugging tools, extensions, linting, and workspace configuration.",
  },
  {
    name: "Vercel",
    category: "tools",
    icon: SiVercel,
    color: "text-white",
    bg: "bg-white/10 border-white/20",
    description: "Cloud serverless deployments, CI/CD auto-builds, preview URLs, and environment variables.",
  },
  {
    name: "Netlify",
    category: "tools",
    icon: SiNetlify,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
    description: "Static and Jamstack hosting, DNS management, continuous integration, and edge functions.",
  },

  // 5. Additional Interests & Security
  {
    name: "Cybersecurity",
    category: "security",
    icon: FaShieldAlt,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
    description: "Understanding common web vulnerabilities (XSS, CSRF, Injection), security posture, and defense fundamentals.",
  },
  {
    name: "Authentication & Authorization",
    category: "security",
    icon: FaLock,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    description: "Token-based authentication (JWT), session cookies, password hashing (bcrypt), and role-based access.",
  },
  {
    name: "Secure Web Application Dev",
    category: "security",
    icon: HiOutlineShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    description: "Input sanitization, HTTPS enforcement, secure headers, CORS policies, and sensitive environment data handling.",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineCode className="text-cyan-400 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          The programming languages, frameworks, database systems, developer tools, and security concepts I actively leverage to build high-performance web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 p-5 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Card Footer Micro Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Active Stack
                </span>
                <span>Verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
