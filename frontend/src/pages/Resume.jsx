import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe, FaBuilding } from "react-icons/fa";
import profileData from "../data/profile";
import projects from "../data/projects";

const Resume = () => {
  useEffect(() => {
    document.title = `${profileData.fullName} — Resume / CV | Full-Stack Developer`;
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070c18] py-10 px-4 sm:px-6 lg:px-8 text-slate-100 font-sans print:bg-white print:py-0 print:px-0 print:text-black">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Download Original PDF Button */}
          <a
            href={profileData.contact.resumePdfUrl}
            download="Md_Yousuf_Ali_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-cyan-500/50 hover:border-cyan-400 px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <HiDownload className="text-lg text-cyan-400" />
            <span>Download Official PDF</span>
          </a>

          {/* Print / Save as PDF Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <HiPrinter className="text-lg" />
            <span>Print View</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-12 print:bg-white print:text-black print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-slate-800 print:border-gray-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight">
                {profileData.fullName}
              </h1>
              <p className="text-base sm:text-lg font-bold text-cyan-400 print:text-blue-700">
                {profileData.designation} | CSE Undergraduate @ UIU
              </p>
              <p className="text-xs sm:text-sm text-slate-400 print:text-gray-600 max-w-xl">
                CSE Student @ UIU • 4-Year Diploma in Computer Tech (GPA 3.48) • Industrial Training at Genuity System Ltd.
              </p>
            </div>

            {/* Profile Photo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-lg shrink-0 print:border-gray-400">
              <img
                src={profileData.profilePhoto}
                alt={profileData.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs text-slate-300 print:text-gray-700 pt-4 border-t border-slate-800/80 print:border-gray-200">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <HiMail className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span className="truncate">{profileData.contact.email}</span>
            </a>

            <a
              href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition font-mono"
            >
              <HiPhone className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>{profileData.contact.phoneDisplay}</span>
            </a>

            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>{profileData.contact.location}</span>
            </div>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaGithub className="text-white print:text-black text-sm shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaLinkedin className="text-blue-400 print:text-blue-700 text-sm shrink-0" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaGlobe className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Career Objective */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-2.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Career Objective
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed text-justify">
            Willing to work hard to achieve organizational goals as well as enrich knowledge in related fields. Seeking a position to explore imagination, creativity, and fulfill the desire to work with dynamic engineering teams in computer science and modern full-stack web development.
          </p>
        </section>

        {/* Section: Educational Qualifications */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Educational Background
          </h2>

          <div className="space-y-4">
            {/* Degree 1: UIU B.Sc. in CSE */}
            <div className="p-3.5 bg-slate-900/60 print:bg-transparent rounded-xl border border-slate-800/80 print:border-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-black text-sm sm:text-base">
                    Bachelor of Science (B.Sc.) in Computer Science and Engineering (CSE)
                  </h3>
                  <p className="text-cyan-400 print:text-blue-700 font-semibold text-xs sm:text-sm">
                    United International University (UIU), Dhaka, Bangladesh
                  </p>
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600 sm:text-right mt-1 sm:mt-0">
                  <span className="font-semibold text-emerald-400 print:text-emerald-700 bg-emerald-950/60 print:bg-gray-100 px-2 py-0.5 rounded">
                    2nd Year 6th Trimester (Currently Studying)
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                <strong className="text-slate-300 print:text-gray-800">Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Database Management Systems, Web Technologies, Software Engineering, Operating Systems.
              </p>
            </div>

            {/* Degree 2: Diploma in Engineering (4 Years) */}
            <div className="p-3.5 bg-slate-900/60 print:bg-transparent rounded-xl border border-slate-800/80 print:border-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm mb-1">
                <div>
                  <h3 className="font-bold text-white print:text-black text-sm sm:text-base">
                    Diploma in Engineering in Computer Technology (4-Year Program)
                  </h3>
                  <p className="text-cyan-400 print:text-blue-700 font-semibold text-xs sm:text-sm">
                    Shyamoli Ideal Polytechnic Institute • Bangladesh Technical Education Board (BTEB)
                  </p>
                </div>
                <div className="text-xs text-slate-400 print:text-gray-600 sm:text-right mt-1 sm:mt-0">
                  <span className="font-bold text-emerald-400 print:text-emerald-700">
                    Result: GPA 3.48 (out of 4.00) • Passing Year: 2024
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                <strong className="text-slate-300 print:text-gray-800">Core Foundations:</strong> Structured Programming in C, OOP with C++, Database Systems &amp; SQL, Web Fundamentals, Data Communication &amp; Networking.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Industrial Training */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Industrial Training
          </h2>
          <div className="p-3.5 bg-slate-900/60 print:bg-transparent rounded-xl border border-slate-800/80 print:border-none flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-white print:text-black text-sm flex items-center gap-2">
                <FaBuilding className="text-cyan-400 print:text-blue-700" />
                Genuity System Ltd., Dhaka
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                Completed 3 months of practical industrial training focused on real-world system workflows, team collaboration, and software procedures.
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-300 print:text-blue-700 bg-cyan-950/80 print:bg-gray-100 px-3 py-1 rounded-lg shrink-0 w-fit">
              Duration: 3 Months
            </span>
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Technical Skills &amp; Computer Efficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-slate-900/80 print:bg-gray-50 rounded-xl border border-slate-800 print:border-gray-200">
              <span className="font-bold text-white print:text-black block mb-1">
                Web Development:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs">
                HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React.js, Next.js, Firebase, Node.js, Express.js, MongoDB, MySQL, GitHub, Netlify, Vercel.
              </p>
            </div>

            <div className="p-3 bg-slate-900/80 print:bg-gray-50 rounded-xl border border-slate-800 print:border-gray-200">
              <span className="font-bold text-white print:text-black block mb-1">
                Programming Languages:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs">
                C, C++, C#, Python, Java, JavaScript, TypeScript.
              </p>
            </div>

            <div className="p-3 bg-slate-900/80 print:bg-gray-50 rounded-xl border border-slate-800 print:border-gray-200">
              <span className="font-bold text-white print:text-black block mb-1">
                Office &amp; Graphics Tools:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs">
                Visual Studio Code, Microsoft Word, Excel, PowerPoint, Adobe Photoshop, Adobe Illustrator.
              </p>
            </div>

            <div className="p-3 bg-slate-900/80 print:bg-gray-50 rounded-xl border border-slate-800 print:border-gray-200">
              <span className="font-bold text-white print:text-black block mb-1">
                Cybersecurity &amp; Practices:
              </span>
              <p className="text-slate-300 print:text-gray-700 leading-relaxed text-xs">
                Web Security Fundamentals, Authentication &amp; Authorization (JWT), Secure Web Development, Responsive UI Design.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Honors & Recognition */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-400 print:bg-yellow-600 rounded-xs"></span>
            Honors &amp; Recognition
          </h2>
          <div className="p-3.5 bg-slate-900/60 print:bg-transparent rounded-xl border border-amber-500/30 print:border-none flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-white print:text-black text-sm flex items-center gap-2">
                <span className="text-amber-400">🏆</span> UIU Hack Day 2026 — Champion &amp; Best Idea Award
              </h3>
              <p className="text-xs text-slate-300 print:text-gray-700 mt-1">
                Project: <strong>Silent Talk</strong> • Crowned 1st Place Champion and Best Idea Award with <strong>Team 405 Found</strong> for developing an accessible universal sign language &amp; speech communication web application (BDT 5,000 Cash Prize).
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-300 print:text-amber-800 bg-amber-950/80 print:bg-amber-100 px-3 py-1 rounded-lg shrink-0 w-fit">
              UIU Hack Day &apos;26
            </span>
          </div>
        </section>

        {/* Section: Practical Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Featured Web Projects
          </h2>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="border-l-2 border-cyan-400 print:border-blue-700 pl-4 py-0.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-normal text-cyan-300 print:text-blue-700 bg-cyan-950/60 print:bg-gray-100 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                    {proj.award && (
                      <span className="text-[11px] font-bold text-amber-300 print:text-amber-800 bg-amber-950/80 print:bg-amber-100 border border-amber-500/40 px-2 py-0.5 rounded flex items-center gap-1">
                        🏆 {proj.award}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-cyan-400 print:text-blue-700">
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        Live Demo <HiExternalLink />
                      </a>
                    )}
                    {proj.github && (
                      <>
                        <span>•</span>
                        <a href={proj.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                          GitHub <HiExternalLink />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Tech Stack: {proj.technologies.join(", ")}
                </p>

                <ul className="mt-1.5 list-disc list-inside text-xs text-slate-300 print:text-gray-700 space-y-1">
                  <li>{proj.description}</li>
                  {proj.keyFeatures.slice(0, 2).map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Communication & Major Traits */}
        <section className="mb-6">
          <h2 className="text-sm font-mono font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 print:bg-blue-700 rounded-xs"></span>
            Communication Skills &amp; Major Traits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 print:text-gray-700">
            <div>
              <span className="font-bold text-white print:text-black block mb-1">
                Communication:
              </span>
              <p>
                <strong>English:</strong> Speaking, reading, writing, and listening.
              </p>
              <p className="mt-0.5">
                <strong>Bengali:</strong> Native fluency.
              </p>
            </div>
            <div>
              <span className="font-bold text-white print:text-black block mb-1">
                Major Traits:
              </span>
              <p>
                Willing to take any challenge, ability to work independently as well as a team member under pressure, dynamic and hardworking with a positive, solutions-oriented attitude.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded PDF Download Banner in Print View */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 print:hidden text-center">
          <p className="text-xs text-slate-400 mb-3">
            Want to download or print the original PDF uploaded to the portal?
          </p>
          <a
            href={profileData.contact.resumePdfUrl}
            download="Md_Yousuf_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-md"
          >
            <HiDownload className="text-lg" />
            <span>Download Uploaded Resume (PDF)</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;
