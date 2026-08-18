import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Janani,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#faf8f5] relative border-t border-[#ede4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Powerful Closing Statement & Real Contact Cards */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
                <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#1c1917] tracking-tight leading-[1.08]">
                LET'S BUILD <br />
                <span className="text-gradient-burgundy">
                  SOMETHING GREAT.
                </span>
              </h2>
              <p className="text-[#57534e] text-base sm:text-lg leading-relaxed max-w-xl">
                I am actively preparing for software development placements and engineering opportunities. Reach out directly for project collaborations, technical discussions, or recruitment conversations.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ede4db] flex items-center justify-between gap-4 group hover:border-[#b8686c] transition-all shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#fbf0ec] text-[#4a1521]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#78716c]">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${personalInfo.socials.email}`}
                      className="text-sm sm:text-base font-bold text-[#1c1917] hover:text-[#4a1521] transition-colors"
                    >
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fbf0ec] text-xs font-mono text-[#4a1521] border border-[#ede4db] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#2e7d32]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border border-[#ede4db] flex items-center justify-between gap-4 group hover:border-[#b8686c] transition-all shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#fbf0ec] text-[#4a1521]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#78716c]">PHONE NUMBER</div>
                    <a
                      href={`tel:${personalInfo.socials.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm sm:text-base font-bold text-[#1c1917] hover:text-[#4a1521] transition-colors"
                    >
                      {personalInfo.socials.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#fbf0ec] text-xs font-mono text-[#4a1521] border border-[#ede4db] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#2e7d32]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#ffffff] border border-[#ede4db] hover:border-[#b8686c] transition-all flex items-center justify-between group shadow-xs"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c1917] group-hover:text-[#4a1521]">
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#78716c] group-hover:text-[#4a1521]" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#ffffff] border border-[#ede4db] hover:border-[#b8686c] transition-all flex items-center justify-between group shadow-xs"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c1917] group-hover:text-[#4a1521]">
                    <Linkedin className="w-4 h-4 text-[#4a1521]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#78716c] group-hover:text-[#4a1521]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#ffffff] border border-[#ede4db] shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#f5ece4]">
                <div className="flex items-center gap-2 text-[#1c1917] font-serif font-bold text-base">
                  <MessageSquare className="w-4 h-4 text-[#b8686c]" />
                  <span>Send Direct Message</span>
                </div>
                <span className="text-[11px] font-mono text-[#78716c]">
                  Transmits to verified inbox
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#fbf0ec] border border-[#e5c9c5] text-center space-y-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-8 h-8 text-[#2e7d32] mx-auto" />
                  <h4 className="font-serif text-base font-bold text-[#1c1917]">Message Prepared!</h4>
                  <p className="text-xs text-[#57534e]">
                    Your local email client has opened with the pre-filled dispatch for Janani Sathyamoorthy.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-[#4a1521] underline font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#78716c]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ede4db] focus:border-[#4a1521] focus:outline-none text-[#1c1917] text-xs font-sans placeholder-[#a8a29e] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#78716c]">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ede4db] focus:border-[#4a1521] focus:outline-none text-[#1c1917] text-xs font-sans placeholder-[#a8a29e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#78716c]">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Technical Collaboration / Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ede4db] focus:border-[#4a1521] focus:outline-none text-[#1c1917] text-xs font-sans placeholder-[#a8a29e] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#78716c]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or opportunity details here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#ede4db] focus:border-[#4a1521] focus:outline-none text-[#1c1917] text-xs font-sans placeholder-[#a8a29e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-xs sm:text-sm font-semibold shadow-md shadow-[#4a1521]/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Janani</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
