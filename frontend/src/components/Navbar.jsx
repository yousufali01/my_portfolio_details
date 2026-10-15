import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import profileData from "../data/profile";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Achievements", id: "achievements" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Active section scroll detection on Home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const scrollPosition = window.scrollY + 140;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActive(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-[#0a0f1d]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800"
          : "bg-[#0a0f1d]/75 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group flex items-center gap-2.5"
          aria-label="Md. Yousuf Ali Portfolio Home"
        >
          <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono text-base font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            YA
          </span>
          <span className="flex flex-col">
            <span className="leading-tight font-extrabold bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
              {profileData.fullName}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-wider">
              FULL-STACK DEV
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isLinkActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${
                      isLinkActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
          >
            <FaGithub className="text-lg" />
          </a>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <HiDocumentText className="text-lg" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="lg:hidden text-2xl text-slate-300 hover:text-white p-2 rounded-xl bg-slate-900/80 border border-slate-800 transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden bg-[#0d1629]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] py-6 px-6 opacity-100" : "max-h-0 py-0 px-6 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-2 text-base font-medium rounded-lg px-3 transition ${
                    isLinkActive
                      ? "bg-cyan-500/10 text-cyan-400 font-semibold border-l-2 border-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume and GitHub CTAs */}
          <li className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold shadow-md transition"
            >
              <HiDocumentText className="text-lg" />
              <span>View Full Resume</span>
            </Link>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white py-2.5 rounded-xl text-sm font-semibold transition"
            >
              <FaGithub className="text-lg" />
              <span>GitHub (@yousufali01)</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;