import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import profileData from "../data/profile";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070c18] border-t border-slate-800/90 text-slate-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-3.5">
            <Link
              to="/"
              className="text-xl font-extrabold text-white flex items-center gap-2.5"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono text-sm font-bold shadow-xs">
                YA
              </span>
              <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                {profileData.fullName}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Web Developer and CSE Undergraduate at United International University (UIU). Committed to building responsive, secure, and user-centered web applications with React, Next.js, and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs text-slate-300 font-medium">
                Open to Junior Full-Stack / Frontend Opportunities &amp; Internships
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-cyan-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-cyan-400 transition">
                  Technical Arsenal
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-cyan-400 transition">
                  Education
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-cyan-400 transition">
                  Practical Journey
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-cyan-400 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-cyan-400 font-semibold hover:underline">
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social Profiles */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-400">
              Feel free to connect or drop a message anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-cyan-500 hover:text-black flex items-center justify-center text-slate-300 transition"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                aria-label="Send Direct Email"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-rose-600 hover:text-white flex items-center justify-center text-slate-300 transition"
              >
                <HiMail className="text-lg" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 {profileData.fullName}. Designed &amp; Engineered with React 19, Next.js standards &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
