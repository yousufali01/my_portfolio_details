import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaGraduationCap, FaAward, FaBuilding } from "react-icons/fa";
import profileData from "../data/profile";

const educationList = [
  {
    degree: profileData.currentDegree,
    institution: profileData.currentInstitution,
    location: "Dhaka, Bangladesh",
    statusBadge: "Currently Studying • 2nd Year 6th Trimester",
    badgeColor: "bg-cyan-950/80 text-cyan-300 border-cyan-500/40",
    description:
      "Enrolled in a comprehensive computer science curriculum focused on software engineering paradigms, computational algorithms, relational database architectures, and modern web application development.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Applications",
      "Software Engineering & Architecture",
      "Operating Systems & Computer Networks",
      "Discrete Mathematics",
    ],
    highlights: [
      "Translating computer science principles into practical web applications",
      "Active participant in laboratory software projects and peer code walkthroughs",
    ],
  },
  {
    degree: profileData.diplomaQualification,
    institution: `${profileData.diplomaInstitution} (${profileData.diplomaBoard})`,
    location: "Dhaka, Bangladesh",
    statusBadge: `Passed in ${profileData.diplomaPassingYear} • Result: ${profileData.diplomaResult}`,
    badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-500/40",
    duration: profileData.diplomaDuration,
    description:
      "Completed a rigorous 4-year Diploma in Engineering in Computer Technology under the Bangladesh Technical Education Board (BTEB), establishing an intensive practical foundation in computer programming, hardware, and networking.",
    coursework: [
      "Structured Programming in C",
      "Object-Oriented Programming with C++",
      "Web Development (HTML, CSS, JavaScript)",
      "Relational Database Systems & SQL",
      "Data Communication & Networking",
      "Microprocessor & System Architecture",
    ],
    highlights: [
      `Graduated with a strong academic standing of GPA 3.48 out of 4.00 (${profileData.diplomaDuration})`,
      "Certified by the Bangladesh Technical Education Board (BTEB)",
    ],
  },
];

const practicalCredentials = [
  {
    icon: FaBuilding,
    title: "Industrial Training (3 Months)",
    org: profileData.industrialTraining.organization,
    location: profileData.industrialTraining.address,
    desc: "Completed 3 months of practical industrial training gaining valuable exposure to professional software workflows, enterprise environments, and collaborative delivery.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Full-Stack Web Practice",
    org: "Self-Directed Project Engineering",
    location: "Independent & UIU Labs",
    desc: "Engineered production web projects including Bazar-Dor and FitLog utilizing Next.js, React.js, Tailwind CSS, REST APIs, and Vercel cloud deployments.",
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Web Security & Authentication",
    org: "Cybersecurity Exploration",
    location: "Continuous Study",
    desc: "Active research and practice in authentication protocols (JWT, session management), input sanitization, and OWASP defense-in-depth principles.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-cyan-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Qualifications</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          My verified academic trajectory spanning a 4-year technical diploma in Computer Technology at Shyamoli Ideal Polytechnic Institute and undergraduate CSE studies at UIU.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-cyan-400" />
            <span>Formal Education History</span>
          </h3>

          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1.5">
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-slate-500" />
                        {edu.location}
                      </span>
                      {edu.duration && (
                        <span>• Duration: {edu.duration}</span>
                      )}
                    </div>
                  </div>

                  <span className={`inline-block border text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${edu.badgeColor}`}>
                    {edu.statusBadge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <HiOutlineBookOpen className="text-cyan-400 text-sm" />
                    Key Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Industrial Training & Credentials (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <FaAward className="text-cyan-400" />
            <span>Practical Credentials</span>
          </h3>

          <div className="space-y-4">
            {practicalCredentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0f172a] rounded-2xl border border-slate-800 p-5 shadow-xs hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                      <Icon className="text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-400">
                        {item.org}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

            {/* Resume Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#111e3b] to-[#0a1329] border border-cyan-500/25 text-white shadow-md">
              <h4 className="font-bold text-sm mb-1.5 flex items-center gap-1.5">
                <HiOutlineSparkles className="text-cyan-400" />
                Verified Resume Available
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Download my official curriculum vitae PDF with complete academic history, industrial training, and personal details.
              </p>
              <a
                href={profileData.contact.resumePdfUrl}
                download="Md_Yousuf_Ali_Resume.pdf"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition shadow-sm"
              >
                Download Resume (PDF) &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
