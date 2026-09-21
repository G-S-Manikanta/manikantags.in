import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry_type: '',
    timeline: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, success: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '801abe3a-94f4-40c6-9858-e8b5c6b0909a',
          subject: `New Engineering Inquiry from ${formData.name} - GS Manikanta Portfolio`,
          from_name: 'GS Manikanta Portfolio Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: formData.inquiry_type,
          timeline: formData.timeline,
          company: formData.company,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          inquiry_type: '',
          timeline: '',
          company: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: result.message || 'Something went wrong. Please try emailing directly or try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'Network error. Please reach out directly to manikantaiyer53@gmail.com.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/60 border border-slate-400/25 text-slate-200 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span>LET'S CONNECT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Get In <span className="gradient-silver-text">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Whether you have a software engineering opportunity, a backend consulting need, or want to discuss scalable system design, I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-card p-6 sm:p-8 rounded-[32px] border border-slate-400/25 shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
                Feel free to connect directly via email, phone, or LinkedIn. I am always open to new challenges and collaborations.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:manikantaiyer53@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-maroon-950/60 border border-slate-400/20 hover:border-slate-300 hover:bg-maroon-900/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Email Me</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 truncate transition-colors">
                      manikantaiyer53@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919880170209"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-maroon-950/60 border border-slate-400/20 hover:border-slate-300 hover:bg-maroon-900/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Direct Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                      +91 98801 70209
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/g-s-manikanta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-maroon-950/60 border border-slate-400/20 hover:border-slate-300 hover:bg-maroon-900/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                        in/g-s-manikanta
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/G-S-Manikanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-maroon-950/60 border border-slate-400/20 hover:border-slate-300 hover:bg-maroon-900/60 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">GitHub Repositories</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                        github.com/G-S-Manikanta
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-maroon-950/60 border border-slate-400/20">
                  <div className="w-11 h-11 rounded-xl bg-slate-200/15 border border-slate-300/30 flex items-center justify-center text-slate-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Current Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-slate-400/5 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Availability Badge Card */}
            <div className="p-6 rounded-[28px] bg-gradient-to-r from-maroon-950/80 via-maroon-900/60 to-zinc-950/30 border border-slate-400/25 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white">Immediate Response Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                I actively review inquiries daily. You can expect a thoughtful response regarding technical requirements or scheduling within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Web3Forms Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-7 sm:p-10 rounded-[36px] border border-slate-400/25 shadow-2xl relative">
              
              {/* Form Intro Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-slate-300" />
                  <span>START A CONVERSATION</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Send an Engineering Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                  Fill in your details below and I'll get back to you promptly.
                </p>
              </div>

              {/* Status Message */}
              {formStatus.submitted && (
                <div
                  className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-xs sm:text-sm ${
                    formStatus.success
                      ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-200'
                      : 'bg-rose-950/80 border border-rose-500/50 text-rose-200'
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="801abe3a-94f4-40c6-9858-e8b5c6b0909a" />
                <input type="hidden" name="subject" value="New Engineering Inquiry - GS Manikanta Portfolio" />
                <input type="hidden" name="from_name" value="GS Manikanta Portfolio Website" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-200">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Tech Lead"
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950/70 border border-slate-400/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-200">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98801 70209"
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950/70 border border-slate-400/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-200">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950/70 border border-slate-400/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-medium text-slate-200">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp / Tech Startup"
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950/70 border border-slate-400/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry_type" className="text-xs font-medium text-slate-200">
                      Inquiry / Engagement Type *
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-slate-400/20 text-white text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    >
                      <option value="" disabled>Select Engagement Type</option>
                      <option value="Full-Time Software Engineer Role">Full-Time Software Engineer Role</option>
                      <option value="Backend & Cloud Architecture Consulting">Backend & Cloud Architecture Consulting</option>
                      <option value="Microservices & REST API Development">Microservices & REST API Development</option>
                      <option value="Database Performance & SQL Tuning">Database Performance & SQL Tuning</option>
                      <option value="CI/CD Automation & DevOps Pipelines">CI/CD Automation & DevOps Pipelines</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Other Engineering Collaboration">Other Engineering Collaboration</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-1.5">
                    <label htmlFor="timeline" className="text-xs font-medium text-slate-200">
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-maroon-950 border border-slate-400/20 text-white text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors"
                    >
                      <option value="" disabled>Select Project Timeline</option>
                      <option value="Immediate (1 - 2 Weeks)">Immediate (1 - 2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="Long Term / Permanent">Long Term / Permanent</option>
                      <option value="Exploratory / Discussion">Exploratory / Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Message / Scope */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-slate-200">
                    Project Scope, Requirements & Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your architectural requirements, backend objectives, tech stack, or engineering position..."
                    className="w-full px-4 py-3 rounded-xl bg-maroon-950/70 border border-slate-400/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button in Platinum / Soft Gray and Maroon */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-200 to-zinc-300 hover:from-white hover:to-slate-200 text-maroon-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(226,232,240,0.25)] hover:shadow-[0_0_35px_rgba(226,232,240,0.45)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-maroon-950 border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Decorative background blur */}
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-maroon-600/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
