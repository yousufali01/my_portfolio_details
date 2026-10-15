import { Link } from "react-router-dom";
import { FaTrophy, FaGithub, FaUsers, FaMedal } from "react-icons/fa";
import {
  HiExternalLink,
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineCurrencyBangladeshi,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import silentTalkImg from "../assets/projects/silent-talk.png";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <FaTrophy className="text-amber-400 text-sm" />
          <span>Honors &amp; Recognition</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Achievement &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            Recognition
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          Celebrating competitive milestones, university hackathon victories, and
          practical assistive innovations engineered to deliver real-world social impact.
        </p>
      </div>

      {/* Main Spotlight Feature Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#131d36] to-[#0f172a] border border-amber-500/30 hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-amber-500/5 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600"></div>

        <div className="p-6 sm:p-8 lg:p-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Showcase (Screenshot & Floating Badges) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src={silentTalkImg}
                  alt="Silent Talk Universal Sign Language - UIU Hack Day 2026 Champion Project Interface"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Champion Banner Pill Overlay */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 border border-amber-300">
                  <FaTrophy className="text-sm" />
                  <span>UIU HACK DAY 2026 CHAMPION</span>
                </div>

                {/* Live Verified Tag */}
                <div className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live on Netlify</span>
                </div>

                {/* Bottom Overlay Info Bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono text-cyan-300 font-semibold">
                    Universal Communication · Deaf · Blind · Normal
                  </span>
                  <span className="text-amber-400 font-bold">Prize: BDT 5,000</span>
                </div>
              </div>

              {/* Quick Achievement Stats Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-amber-400 font-extrabold text-sm sm:text-base flex items-center justify-center gap-1">
                    <FaTrophy /> 1st Place
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Champion &amp; Best Idea</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-emerald-400 font-extrabold text-sm sm:text-base flex items-center justify-center gap-1">
                    <HiOutlineCurrencyBangladeshi className="text-lg" /> 5,000 BDT
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Prize Money</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-cyan-400 font-extrabold text-sm sm:text-base flex items-center justify-center gap-1">
                    <FaUsers /> 405 Found
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Winning Team</div>
                </div>
              </div>
            </div>

            {/* Right Column: Award Narrative, Highlights & Action Buttons */}
            <div className="lg:col-span-6 space-y-6">
              {/* Event Badge */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/40 px-3 py-1 rounded-lg">
                    <FaMedal className="text-amber-400" />
                    <span>United International University</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    UIU Hack Day 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  UIU Hack Day 2026 Champion &amp; Best Idea Award
                </h3>

                <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                  Project: Silent Talk — Universal Sign Language
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Awarded <strong className="text-amber-300">1st Place Champion</strong> and the{" "}
                <strong className="text-amber-300">Best Idea Award</strong> (BDT 5,000 Prize) at{" "}
                <strong>UIU Hack Day 2026</strong> as part of team{" "}
                <span className="text-cyan-300 font-mono font-bold">405 Found</span>.
                Silent Talk breaks through traditional barriers to allow tri-directional
                interaction between deaf, blind, and non-disabled users through structured visual symbols,
                integrated voice recognition, and real-time speech synthesis.
              </p>

              {/* Award Highlights */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <HiOutlineSparkles className="text-amber-400 text-sm" />
                  <span>Key Recognition Highlights</span>
                </h4>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 mt-0.5 shrink-0">🏆</span>
                    <span>
                      <strong>Champion &amp; Best Idea Award:</strong> Recognized by faculty and judges
                      for the most impactful assistive software architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-0.5 shrink-0">💰</span>
                    <span>
                      <strong>BDT 5,000 Cash Prize:</strong> Awarded for technical execution,
                      live prototyping reliability, and pitch presentation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5 shrink-0">👥</span>
                    <span>
                      <strong>Team &quot;405 Found&quot;:</strong> Spearheaded frontend development,
                      symbol composer mechanics, and speech API integration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-indigo-400 mt-0.5 shrink-0">♿</span>
                    <span>
                      <strong>Assistive Tri-Directional UX:</strong> Deaf (visual symbols) ↔ Blind
                      (voice commands) ↔ Non-disabled (text &amp; audio).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                {/* Button 1: Live Demo */}
                <a
                  href="https://cozy-mousse-23d324.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <HiOutlineLightningBolt className="text-base" />
                  <span>Launch Live Demo</span>
                  <HiExternalLink className="text-sm" />
                </a>

                {/* Button 2: GitHub Repository */}
                <a
                  href="https://github.com/yousufali01/Silent-talk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400 px-4 py-2.5 rounded-xl text-sm font-semibold transition"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub Repository</span>
                  <HiExternalLink className="text-xs text-slate-400" />
                </a>

                {/* Button 3: Project Details Page Link */}
                <Link
                  to="/projects/silent-talk"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 px-3 py-2.5 transition"
                >
                  <span>Read Full Project Case Study</span>
                  <HiArrowRight className="text-xs" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
