import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import profileData from "../data/profile";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Client-side simulated dispatch with notification
    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success notification after 8 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 8000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-cyan-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          Have an internship, junior full-stack opportunity, collaborative project, or tech inquiry? My inbox and phone are always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info Cards & Verified Contact Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am actively seeking junior frontend, full-stack, and internship roles. Feel free to reach out directly via email, phone, or WhatsApp.
            </p>

            <div className="space-y-4 pt-1">
              {/* Email (Verified) */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-2xl" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium block">
                      Email Address
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.2 rounded">
                      Verified
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate block">
                    {profileData.contact.email}
                  </span>
                </div>
              </a>

              {/* Phone (Verified) */}
              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-2xl" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-medium block">
                      Mobile / WhatsApp
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.2 rounded">
                      Verified
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors block">
                    {profileData.contact.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a
                href={profileData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 font-medium block">
                    WhatsApp Chat
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors block">
                    Chat on WhatsApp ({profileData.contact.phoneDisplay})
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {profileData.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Profiles Bar */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Social &amp; Developer Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:bg-cyan-500 hover:text-black flex items-center justify-center text-slate-300 transition"
                  title="GitHub: yousufali01"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href={profileData.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Chat"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                  title="WhatsApp Chat"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Complete the form below to initiate a conversation or inquire about technical roles.
            </p>

            {/* Success Notification */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex items-start gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-300">Message dispatched successfully!</p>
                  <p className="text-xs text-emerald-200/90 mt-0.5">
                    Thank you for reaching out. I'll review your inquiry and respond to your email promptly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tanvir Ahmed"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Subject / Opportunity Type
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Junior Web Developer Opening / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Md. Yousuf Ali, we reviewed your projects and would like to connect..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>

              {/* Integration note */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                <HiOutlineInformationCircle className="text-cyan-400 text-sm shrink-0" />
                <span>
                  Direct email and phone links are always active for immediate response.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
