import React from 'react';
import {
  X,
  Printer,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import {
  personalInfo,
  experiences,
  projects,
  educationList,
  certifications,
  achievements
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1c1917]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#ffffff] border border-[#ede4db] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#faf8f5] border-b border-[#ede4db] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#4a1521] font-bold">
              CURRICULUM VITAE // ATS FORMAT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#57534e] hover:text-[#1c1917] hover:bg-[#fbf0ec] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet (Classic Clean Black/Charcoal on White for ATS) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#ffffff] text-[#1c1917] font-sans space-y-7 text-sm select-text">
          {/* Header */}
          <div className="border-b border-[#ede4db] pb-6 text-center space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-[#4a1521]">
              {personalInfo.role} • {personalInfo.degree}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#57534e] pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#b8686c]" /> {personalInfo.socials.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#b8686c]" /> {personalInfo.socials.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#b8686c]" /> {personalInfo.socials.location}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#4a1521] pt-1">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub: {personalInfo.socials.githubUser}
              </a>
              <span>•</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn: {personalInfo.socials.linkedinUser}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#1c1917] text-sm">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-[#4a1521]">{edu.scoreLabel}: {edu.scoreValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#78716c]">
                    <span>{edu.degree}</span>
                    <span className="font-mono">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#44403c]">
              <div><strong className="text-[#1c1917]">Programming Languages:</strong> Java, C++, JavaScript, Python</div>
              <div><strong className="text-[#1c1917]">Frontend:</strong> React.js, HTML5, CSS3</div>
              <div><strong className="text-[#1c1917]">Backend & APIs:</strong> Spring Boot, REST APIs, JWT Security, Express.js</div>
              <div><strong className="text-[#1c1917]">Databases:</strong> MySQL, Supabase</div>
              <div><strong className="text-[#1c1917]">Cloud & DevOps:</strong> AWS (EC2, S3), Docker</div>
              <div><strong className="text-[#1c1917]">Tools & Testing:</strong> Git, GitHub, Postman, Selenium, VS Code</div>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Internship Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="text-xs space-y-1.5">
                <div className="flex items-center justify-between font-bold text-[#1c1917] text-sm">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-[#4a1521]">{exp.duration}</span>
                </div>
                <div className="text-[#78716c] font-mono text-[11px]">
                  Focus: {exp.focus} • {exp.location}
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#44403c] text-xs">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Academic & Engineering Projects */}
          <div className="space-y-3.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-1.5">
                <div className="flex items-center justify-between font-bold text-[#1c1917] text-sm">
                  <span>{proj.title}</span>
                  <span className="font-mono text-[#78716c]">{proj.category}</span>
                </div>
                <div className="text-[11px] font-mono text-[#4a1521]">
                  Tech Stack: {proj.techStack.join(', ')}
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#44403c] text-xs">
                  {proj.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4a1521] pb-1 border-b border-[#ede4db]">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#44403c]">
              {certifications.map((c) => (
                <div key={c.id}>
                  • <strong className="text-[#1c1917]">{c.name}</strong> — {c.issuer}
                </div>
              ))}
              {achievements.map((a) => (
                <div key={a.id}>
                  • <strong className="text-[#1c1917]">{a.title}:</strong> {a.category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
