import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-cyan-400 text-sm" />
          <span>Featured Work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          Explore production-ready web applications built to address real-world needs, demonstrating responsive frontend architecture, clean code, and modern Next.js/React development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group bg-[#0f172a] rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ${
              project.award
                ? "border-amber-500/40 hover:border-amber-400/70 shadow-amber-500/5"
                : "border-slate-800 hover:border-cyan-500/40"
            }`}
          >
            {/* Card Thumbnail / Screenshot */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800">
              <img
                src={project.image}
                alt={`${project.title} - ${project.subtitle}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.award ? (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-[11px] px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 border border-amber-300">
                  <span>🏆</span>
                  <span>{project.award}</span>
                </div>
              ) : (
                project.category && (
                  <span className="absolute top-3 left-3 bg-[#0a0f1d]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[11px] font-medium px-2.5 py-1 rounded-lg shadow-sm">
                    {project.category}
                  </span>
                )
              )}
              {project.liveVerified && (
                <span className="absolute top-3 right-3 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified Live
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-0.5">
                    {project.subtitle}
                  </p>

                  {project.team && (
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded">
                        Team: {project.team}
                      </span>
                      {project.prize && (
                        <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">
                          Prize: {project.prize}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.slug || project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group/link"
                >
                  <span>View Details</span>
                  <HiArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Source Code`}
                      title={project.githubVerified ? "Verified GitHub Repository" : "Configurable Repository Candidate"}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition shadow-sm"
                    >
                      <span>Live Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Callout Bar */}
      <div className="mt-14 p-6 rounded-2xl bg-[#0f172a] border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <HiShieldCheck className="text-cyan-400 text-base" /> More Experiments &amp; Code
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Explore daily repositories, lab assignments, and full source code on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/yousufali01"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white text-xs font-semibold transition shrink-0"
        >
          <FaGithub className="text-base" />
          <span>github.com/yousufali01</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
