import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineCode,
  HiOutlineCheckCircle,
  HiDownload,
  HiPhone,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import profileData from "../data/profile";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-cyan-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          A glimpse into my academic journey, practical industrial training, passion for full-stack engineering, and cybersecurity enthusiasm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Academic Credentials & Key Stats (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0f172a]/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Ambient Accent Glow */}
            <div className="w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/20 shrink-0">
                <img
                  src={profileData.profilePhoto}
                  alt={profileData.fullName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.fullName}</h3>
                <p className="text-sm font-medium text-cyan-400">{profileData.designation}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>{profileData.contact.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <HiPhone /> {profileData.contact.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Specs List */}
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80 gap-3">
                <span className="flex items-center gap-2 text-slate-400 shrink-0">
                  <HiOutlineAcademicCap className="text-cyan-400 text-base" /> Current Degree:
                </span>
                <span className="font-medium text-white text-right">
                  B.Sc. in CSE (2nd Yr, 6th Trimester) @ UIU
                </span>
              </div>

              <div className="flex items-start justify-between py-1.5 border-b border-slate-800/80 gap-3">
                <span className="flex items-center gap-2 text-slate-400 shrink-0">
                  <FaLaptopCode className="text-cyan-400 text-base" /> Diploma:
                </span>
                <span className="font-medium text-white text-right">
                  4-Year Computer Technology (2024)
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineSparkles className="text-cyan-400 text-base" /> Diploma Result:
                </span>
                <span className="font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded text-xs">
                  {profileData.diplomaResult}
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineSparkles className="text-cyan-400 text-base" /> Industrial Training:
                </span>
                <span className="font-semibold text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded text-xs">
                  Genuity System Ltd. (3 Mos)
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <span className="text-amber-400 text-sm">🏆</span> Hackathon:
                </span>
                <span className="font-bold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded text-xs">
                  UIU Hack Day &apos;26 Champion
                </span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineShieldCheck className="text-cyan-400 text-base" /> Security Focus:
                </span>
                <span className="font-semibold text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded text-xs">
                  Auth &amp; Secure Web Dev
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-800 text-center">
              {profileData.stats.map((stat) => (
                <div key={stat.label} className="p-2 bg-slate-900/80 rounded-xl border border-slate-800/80">
                  <span className="block text-xl font-black text-cyan-400">{stat.value}</span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight block mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Interests Highlights */}
          <div className="bg-[#0f172a]/90 rounded-2xl border border-slate-800 p-6 shadow-md">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <HiOutlineCode className="text-cyan-400 text-base" />
              Programming Interests
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {profileData.programmingInterests.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Personality Highlights (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Bridging computing fundamentals with practical, responsive web solutions.
            </h3>
            
            {profileData.aboutNarrative.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Personality & Work Philosophy Grid */}
          <div className="pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <HiOutlineSparkles className="text-cyan-400" /> Key Attributes &amp; Mindset
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profileData.personalityTraits.map((trait) => (
                <div
                  key={trait.title}
                  className="p-4 rounded-xl bg-[#0f172a] border border-slate-800/90 shadow-xs flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                >
                  <HiOutlineCheckCircle className="text-lg text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">{trait.title}</h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">{trait.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={profileData.contact.resumePdfUrl}
              download="Md_Yousuf_Ali_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-cyan-500/20 transition-all duration-300"
            >
              <HiDownload className="text-lg" />
              <span>Download Resume PDF</span>
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <HiOutlineSparkles className="text-base text-cyan-400" />
              <span>View Web CV</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 px-3 py-3 transition"
            >
              <FaRocket className="text-sm text-cyan-400" />
              <span>Let's Work Together &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
