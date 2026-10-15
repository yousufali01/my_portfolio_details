import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiSparkles,
  HiDownload,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiPhone,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import profileData from "../data/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glow Accents */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introductions & Action Buttons (7 cols) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{profileData.statusBadge}</span>
          </div>

          {/* Headline & Name */}
          <div className="space-y-3">
            <p className="text-slate-400 font-mono text-sm sm:text-base flex items-center gap-2">
              <span className="text-cyan-400 font-bold">&gt;</span> Hello world, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {profileData.fullName}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {profileData.designation}
            </h2>
          </div>

          {/* Academic & Recognition Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2 w-fit">
              <HiOutlineAcademicCap className="text-cyan-400 text-lg shrink-0" />
              <span>
                <strong>B.Sc. in CSE (2nd Yr, 6th Trimester)</strong> at{" "}
                <span className="text-white font-medium">UIU</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-medium">
                Diploma (4 Yrs, GPA 3.48)
              </span>
            </div>

            <a
              href="#achievements"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-950/70 to-yellow-950/70 hover:from-amber-900/80 hover:to-yellow-900/80 border border-amber-500/40 hover:border-amber-400 text-amber-300 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">🏆</span>
              <span>
                <strong>UIU Hack Day 2026 Champion</strong> (Team 405 Found)
              </span>
              <span className="text-amber-400/80 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>

          {/* Professional Introduction / Headline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I build modern, responsive, and secure full-stack web applications with{" "}
            <span className="text-cyan-300 font-semibold">React.js</span>,{" "}
            <span className="text-cyan-300 font-semibold">Next.js</span>,{" "}
            <span className="text-cyan-300 font-semibold">TypeScript</span>, and{" "}
            <span className="text-cyan-300 font-semibold">Node.js</span>.
            Dedicated to writing maintainable code, solving practical real-world problems, and exploring cybersecurity principles.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* CTA 1: View My Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <span>View My Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* CTA 2: Download Resume PDF */}
            <a
              href={profileData.contact.resumePdfUrl}
              download="Md_Yousuf_Ali_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-cyan-500/40 hover:border-cyan-400 px-6 py-3.5 rounded-xl font-bold shadow-md transition-all duration-300 text-sm sm:text-base group"
            >
              <HiDownload className="text-lg text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* CTA 3: View Interactive Resume */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-400 px-3 py-3.5 transition"
            >
              <HiOutlineDocumentText className="text-base" />
              <span>View Web CV &rarr;</span>
            </Link>

            {/* Social Profile Icon Buttons & Phone */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Md. Yousuf Ali GitHub Profile"
                title="GitHub: yousufali01"
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition shadow-xs"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Md. Yousuf Ali LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition shadow-xs"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                aria-label="Call Md. Yousuf Ali"
                title={`Call ${profileData.contact.phone}`}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition shadow-xs"
              >
                <HiPhone className="text-xl" />
              </a>
            </div>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-6 border-t border-slate-800/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-cyan-400" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <SiNextdotjs className="text-white text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <FaReact className="text-cyan-400 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <SiTypescript className="text-blue-400 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <FaNodeJs className="text-emerald-400 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <SiMongodb className="text-emerald-500 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800">
                <SiTailwindcss className="text-teal-400 text-base" /> Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Photo Card with Genuine User Photo (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#131d36] to-[#0d1629] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>

            {/* Profile Avatar / Photo Container */}
            <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 mb-6 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-[#0d1629]">
                <img
                  src={profileData.profilePhoto}
                  alt={profileData.fullName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Online Pulse Indicator */}
              <div className="absolute bottom-3 right-3 bg-emerald-500 w-6 h-6 rounded-full border-3 border-[#0d1629] shadow-md flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>
            </div>

            {/* Profile Card Info */}
            <div className="text-center space-y-1 mb-5">
              <h3 className="text-2xl font-bold text-white">{profileData.fullName}</h3>
              <p className="text-sm text-cyan-400 font-semibold">
                {profileData.designation}
              </p>
              <p className="text-xs text-slate-400">
                {profileData.currentInstitution}
              </p>
            </div>

            {/* Profile Terminal Snippet */}
            <div className="bg-[#090e1a] rounded-xl border border-slate-800 p-4 text-left font-mono text-xs text-slate-300 space-y-1 overflow-x-auto">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-2">yousuf_profile.json</span>
              </div>
              <p><span className="text-cyan-400">"cell"</span>: <span className="text-emerald-400">"+88 {profileData.contact.phoneDisplay}"</span>,</p>
              <p><span className="text-cyan-400">"degree"</span>: <span className="text-yellow-300">"B.Sc. in CSE @ UIU"</span>,</p>
              <p><span className="text-cyan-400">"diploma"</span>: <span className="text-purple-400">"4 Years (GPA 3.48)"</span>,</p>
              <p><span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"Available for Hire"</span></p>
            </div>

            {/* Quick Contact Micro Footer */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <HiPhone className="text-cyan-400" /> {profileData.contact.phoneDisplay}
              </span>
              <a
                href={profileData.contact.resumePdfUrl}
                download="Md_Yousuf_Ali_Resume.pdf"
                className="text-cyan-400 hover:underline font-medium"
              >
                Resume PDF &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;