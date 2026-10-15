import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode,
  HiLightBulb,
  HiShieldCheck,
  HiCheckCircle,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by id (numeric) or slug (with legacy alias support)
  const project = projects.find(
    (p) =>
      p.id === parseInt(id) ||
      p.slug === id ||
      (id === "news-the-time" && p.slug === "bangla-news-24")
  );

  // Set page title dynamically
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Md. Yousuf Ali Project Details`;
    } else {
      document.title = `Project Not Found | Md. Yousuf Ali Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md bg-[#0f172a] p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-800">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-3xl">
            🔍
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#0a0f1d] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition cursor-pointer"
          >
            <HiArrowLeft className="text-base" /> Back
          </button>

          <Link
            to="/#projects"
            className="text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-400 transition"
          >
            View All Projects &rarr;
          </Link>
        </div>

        {/* Project Card Container */}
        <article className="bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Main Visual Header Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-lg aspect-video bg-slate-900">
            <img
              src={project.image}
              alt={`${project.title} Interface Screenshot`}
              className="w-full h-full object-cover object-top"
            />
            {project.category && (
              <span className="absolute top-4 left-4 bg-[#0a0f1d]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-lg">
                {project.category}
              </span>
            )}
            {project.liveVerified && (
              <span className="absolute top-4 right-4 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Verified Operational Live
              </span>
            )}
          </div>

          {/* Hackathon Achievement Banner */}
          {project.award && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-yellow-950/40 to-slate-900 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-amber-500/5">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400 shrink-0 shadow-inner">
                  🏆
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    UIU Hack Day 2026 Competitive Victory
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {project.award}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs">
                    {project.team && (
                      <span className="text-amber-300 font-semibold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                        Team: {project.team}
                      </span>
                    )}
                    {project.prize && (
                      <span className="text-emerald-300 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                        Prize: {project.prize}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <a
                href="/#achievements"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 px-4 py-2.5 rounded-xl transition shrink-0 self-start sm:self-center"
              >
                <span>View Hackathon Honors &rarr;</span>
              </a>
            </div>
          )}

          {/* Title & Headline */}
          <div className="space-y-2 border-b border-slate-800/80 pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300"
              >
                <HiOutlineGlobeAlt className="text-lg" />
                <span>Visit Live Application</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 px-6 py-3 rounded-xl font-semibold shadow-sm transition"
              >
                <FaGithub className="text-lg" />
                <span>GitHub Repository</span>
                <HiExternalLink className="text-sm text-slate-400" />
              </a>
            )}

            {!project.liveVerified && (
              <span className="text-xs text-amber-400 bg-amber-950/40 border border-amber-800/50 px-3 py-1 rounded-lg">
                Notice: Candidate / Unverified URL
              </span>
            )}
          </div>

          {/* A. Project Overview & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiOutlineSparkles className="text-cyan-400 text-lg" />
                Project Purpose
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.purpose}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiShieldCheck className="text-cyan-400 text-lg" />
                Target Audience &amp; Users
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.targetUsers}
              </p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Detailed Description</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* B. Technology Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <HiCode className="text-cyan-400 text-base" /> Technologies Used &amp; Architecture
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-900 text-cyan-300 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* C. Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-4 p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiCheckCircle className="text-emerald-400 text-xl" />
                Key Implemented Features
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 mt-0.5">✔</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* D. Development Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiShieldCheck className="text-cyan-400 text-xl" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 mt-0.5">▸</span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* G. Future Roadmap & Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-6 sm:p-7 rounded-2xl bg-cyan-950/30 border border-cyan-500/20">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <HiLightBulb className="text-amber-400 text-xl" />
                Future Roadmap &amp; Planned Enhancements
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.future.map((enhancement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5">✦</span>
                    <span className="leading-relaxed">{enhancement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition"
            >
              <HiArrowLeft /> Return to Projects Section
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline"
            >
              View Full Developer Resume &rarr;
            </Link>
          </div>

        </article>
      </div>
    </main>
  );
};

export default ProjectDetails;
