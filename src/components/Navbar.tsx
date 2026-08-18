import React, { useState, useEffect } from 'react';
import {
  FileText,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenRecruiterSnapshot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenRecruiterSnapshot
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Terminal', href: '#developer-terminal' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#ede4db] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#4a1521] via-[#b8686c] to-[#c59b27] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Island Navigation */}
      <header
        className={`fixed top-2.5 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#ffffff]/90 hover:bg-[#ffffff] border border-[#ede4db] shadow-sm backdrop-blur-md transition-all group"
          >
            <div className="w-8 h-8 rounded-xl bg-[#4a1521] flex items-center justify-center text-[#faf8f5] font-serif font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              JS
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="font-serif font-bold text-sm text-[#1c1917] tracking-tight block">
                Janani S.
              </span>
              <span className="text-[10px] font-mono text-[#b8686c] font-medium tracking-wide">
                B.Tech IT '27
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-2xl bg-[#ffffff]/90 border border-[#ede4db] shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-[#44403c] hover:text-[#4a1521] hover:bg-[#fbf0ec] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Recruiter Fast-Track Button */}
            <button
              onClick={onOpenRecruiterSnapshot}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-[#fbf0ec] hover:bg-[#f7e3de] border border-[#e5c9c5] text-[#4a1521] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
              <span className="hidden sm:inline">Recruiter 30s Fast Track</span>
              <span className="sm:hidden">Fast Track</span>
            </button>

            {/* View Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-[#4a1521]/15 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#1c1917] hover:bg-[#fbf0ec] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#ffffff] border border-[#ede4db] shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-xs font-medium text-[#44403c] hover:text-[#4a1521] hover:bg-[#fbf0ec]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#ede4db] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-[#44403c] hover:text-[#4a1521]"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-[#44403c] hover:text-[#4a1521]"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="px-3 py-1.5 rounded-xl bg-[#4a1521] text-[#faf8f5] text-xs font-semibold flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full ATS Resume</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
