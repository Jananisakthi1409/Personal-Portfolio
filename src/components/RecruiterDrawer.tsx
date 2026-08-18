import React, { useState } from 'react';
import {
  Sparkles,
  X,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  Code2,
  Award
} from 'lucide-react';
import { personalInfo, projects, experiences, certifications } from '../data/portfolioData';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div
      id="recruiter-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1c1917]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="recruiter-modal-card"
        className="relative w-full max-w-2xl bg-[#ffffff] border border-[#ede4db] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#1c1917] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#faf8f5] border-b border-[#ede4db] shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#fbf0ec] text-[#4a1521]">
              <Sparkles className="w-4 h-4 text-[#b8686c]" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold text-[#1c1917] flex items-center gap-2">
                30-Second Recruiter Fast Track
              </h3>
              <p className="text-[11px] text-[#78716c]">
                Essential candidate overview • Verified from Resume
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#78716c] hover:text-[#1c1917] hover:bg-[#fbf0ec] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Identity & Contact Quick Action Bar */}
          <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1c1917]">
                {personalInfo.name}
              </h4>
              <p className="text-xs font-semibold text-[#4a1521]">
                B.Tech Information Technology (2023–2027) • Sri Krishna College of Technology
              </p>
              <div className="flex items-center gap-3 text-xs text-[#78716c] mt-1">
                <span className="text-[#4a1521] font-bold">CGPA: 8.36 / 10</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#b8686c]" />
                  {personalInfo.socials.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleCopy(personalInfo.socials.email, 'email')}
                className="px-3 py-1.5 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-xs font-medium text-[#1c1917] flex items-center gap-1.5 border border-[#ede4db] cursor-pointer shadow-2xs"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#2e7d32]" /> : <Mail className="w-3.5 h-3.5 text-[#b8686c]" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <button
                onClick={() => handleCopy(personalInfo.socials.phone, 'phone')}
                className="px-3 py-1.5 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-xs font-medium text-[#1c1917] flex items-center gap-1.5 border border-[#ede4db] cursor-pointer shadow-2xs"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#2e7d32]" /> : <Phone className="w-3.5 h-3.5 text-[#b8686c]" />}
                <span>{copiedPhone ? 'Phone Copied!' : 'Copy Phone'}</span>
              </button>
            </div>
          </div>

          {/* Core Stack Matrix */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#4a1521] mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#b8686c]" />
              <span>Core Tech Stack</span>
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT Security', 'AWS (EC2/S3)', 'Docker', 'C++', 'Python', 'Supabase', 'Selenium', 'LeetCode DSA'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#faf8f5] border border-[#ede4db] text-xs font-mono text-[#4a1521] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Top 3 Projects Summary */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#4a1521] mb-2">
              Key Projects
            </h5>
            <div className="space-y-2.5">
              {projects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-2xl bg-[#faf8f5] border border-[#ede4db]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1c1917]">
                    <span>{p.title}</span>
                    <span className="text-[11px] font-mono text-[#b8686c]">{p.category}</span>
                  </div>
                  <p className="text-xs text-[#57534e] mt-1">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-mono text-[#78716c] mt-1.5">
                    Stack: {p.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Snapshot */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#4a1521] mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#b8686c]" />
              <span>Recent Internship</span>
            </h5>
            {experiences.map((exp) => (
              <div key={exp.id} className="p-3.5 rounded-2xl bg-[#faf8f5] border border-[#ede4db] text-xs">
                <div className="flex items-center justify-between font-bold text-[#1c1917]">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-[#4a1521] font-mono">{exp.duration}</span>
                </div>
                <p className="text-[#57534e] mt-1">
                  MERN Stack & AI-driven application development, REST API design, data processing, and model integration.
                </p>
              </div>
            ))}
          </div>

          {/* 4 Industry Certifications */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#4a1521] mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#b8686c]" />
              <span>Industry Certifications</span>
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede4db]">
                  <div className="font-bold text-[#1c1917]">{c.name}</div>
                  <div className="text-[11px] text-[#78716c]">{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#faf8f5] border-t border-[#ede4db] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#4a1521] hover:bg-[#fbf0ec]"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#4a1521] hover:bg-[#fbf0ec]"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="px-4 py-2 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-xs font-semibold text-[#faf8f5] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Full ATS Resume PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
