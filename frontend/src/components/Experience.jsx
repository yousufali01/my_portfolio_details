import {
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineCode,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaShieldAlt, FaBuilding } from "react-icons/fa";
import profileData from "../data/profile";

const developmentMilestones = [
  {
    role: "Industrial Trainee / Engineering Intern",
    context: profileData.industrialTraining.organization,
    location: profileData.industrialTraining.address,
    duration: profileData.industrialTraining.duration,
    type: "Verified Industrial Training",
    badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
    summary:
      "Completed a 3-month intensive practical industrial training program at Genuity System Ltd., experiencing real-world software operational procedures, enterprise environments, and collaborative workflows.",
    activities: [
      "Acquired hands-on familiarity with professional software development life cycle (SDLC) and team practices.",
      "Gained practical exposure to telecommunication and software systems, enterprise networking, and server environments.",
      "Collaborated with senior engineers, adhering to technical specifications, debugging tasks, and system documentation.",
    ],
    technologies: ["Software Systems", "Enterprise Networks", "System Operations", "Collaboration"],
  },
  {
    role: "Full-Stack Web App Builder & Project Lead",
    context: "Personal & Academic Portfolio Projects",
    location: "Dhaka, Bangladesh",
    duration: "2020 – Present",
    type: "Hands-on Project Engineering",
    badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40",
    summary:
      "Architected, built, and deployed responsive modern web applications solving daily problems, emphasizing clean modular code, responsive interfaces, and performant state management.",
    activities: [
      "Engineered Silent Talk, an award-winning assistive communication web app winning Champion & Best Idea Award at UIU Hack Day 2026 with Team 405 Found.",
      "Built Bazar-Dor, a live Bangla grocery price tracking web application with localized ticker updates and 8+ commodity categories deployed on Vercel.",
      "Engineered FitLog, a dark-themed fitness workout companion featuring 12+ lift directories, plan generation, and multi-criteria sorting using Next.js and Context API.",
      "Designed Bangla News 24, a responsive Bangla digital news portal with real-time breaking news ticker, categorized feeds, and top-read story rankings.",
      "Maintained clean Git version control workflows, semantic commits, and component-driven front-end structures.",
    ],
    technologies: ["React.js", "Web Speech API", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Netlify", "Vercel"],
  },
  {
    role: "Computer Science Undergraduate Lab Developer",
    context: "United International University (UIU) Software Labs",
    location: "Dhaka, Bangladesh",
    duration: "2nd Year 6th Trimester (Current)",
    type: "Academic Software Labs",
    badgeColor: "bg-blue-950/80 text-blue-300 border-blue-500/40",
    summary:
      "Actively developing software solutions and solving algorithmic problems as part of university computer science and engineering coursework.",
    activities: [
      "Implemented fundamental data structures and algorithmic routines to evaluate computational time/space complexity.",
      "Modeled relational database schemas, crafted complex SQL queries, and practiced transaction integrity.",
      "Applied Object-Oriented Software Engineering principles (modularity, encapsulation, separation of concerns).",
      "Collaborated with peers during lab sessions, conducting code walkthroughs and debugging sessions.",
    ],
    technologies: ["Data Structures", "Algorithms", "DBMS", "OOP", "C++", "JavaScript"],
  },
  {
    role: "Diploma in Computer Technology Practical Training",
    context: "Shyamoli Ideal Polytechnic Institute (BTEB)",
    location: "Dhaka, Bangladesh",
    duration: "4 Years (2020 – 2024)",
    type: "Technical Engineering Foundations",
    badgeColor: "bg-purple-950/80 text-purple-300 border-purple-500/40",
    summary:
      "Graduated with a 3.48 / 4.00 GPA across a 4-year technical diploma curriculum, building fundamental engineering, programming, and hardware capabilities.",
    activities: [
      "Completed foundational programming labs in C and C++, understanding memory, pointers, and structured control flow.",
      "Gained hands-on competency in basic web development (HTML5, CSS3, DOM manipulation).",
      "Learned network protocols, IP subnetting, hardware diagnostics, and computer system architectures.",
    ],
    technologies: ["C", "C++", "HTML5", "CSS3", "Networking", "Computer Systems"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Strong Full-Stack Foundation",
    desc: "Proficient in modern React, Next.js, TypeScript, and Node.js with component-driven architecture and clean code habits.",
  },
  {
    icon: FaBuilding,
    title: "Practical Industrial Exposure",
    desc: "3 months of formal industrial training at Genuity System Ltd., bringing familiarity with enterprise processes.",
  },
  {
    icon: FaShieldAlt,
    title: "Security Conscious",
    desc: "Fascinated by cybersecurity, authentication flows, data sanitization, and writing secure, resilient software.",
  },
  {
    icon: FaHandsHelping,
    title: "Collaborative Team Player",
    desc: "Respectful communicator, eager to learn from senior engineers, take constructive feedback, and grow with the team.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-cyan-400 text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Experience &amp; Milestones</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          A verifiable record of my 3-month industrial training at Genuity System Ltd., practical full-stack project building, and university software labs.
        </p>
      </div>

      {/* Development Milestones Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {developmentMilestones.map((exp, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm hover:border-cyan-500/30 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {exp.context} • <span className="text-slate-400">{exp.location}</span>
                </p>
              </div>

              {exp.duration && (
                <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg shrink-0">
                  {exp.duration}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {exp.summary}
            </p>

            {/* Activities list */}
            <ul className="space-y-2 mb-5">
              {exp.activities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <HiOutlineCheckCircle className="text-cyan-400 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-slate-400 mr-1 flex items-center gap-1">
                <HiOutlineCode className="text-cyan-400" /> Stack:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What I Bring Callout Card */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#0c1322] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            What I Bring to Your Engineering Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Qualities, training, and dedication I deliver as a junior web developer and UIU CSE student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
