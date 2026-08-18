import React from 'react';
import { Github, Linkedin, Mail, ShieldCheck, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ffffff] border-t border-[#ede4db] text-[#57534e] font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#ede4db]">
          {/* Brand and Summary */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif text-lg font-bold text-[#1c1917] tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#fbf0ec] text-[#4a1521] border border-[#e5c9c5] font-semibold">
                B.Tech IT '27
              </span>
            </div>
            <p className="text-xs text-[#78716c]">
              {personalInfo.college} • CGPA {personalInfo.cgpa}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-[#4a1521] hover:bg-[#fbf0ec] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-[#4a1521] hover:bg-[#fbf0ec] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-[#4a1521] hover:bg-[#fbf0ec] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#faf8f5] hover:bg-[#fbf0ec] border border-[#ede4db] text-[#4a1521] transition-colors cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Micro Copy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716c]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#b8686c]" />
            <span>Curated strictly from verified resume data. No fabricated content.</span>
          </div>

          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
