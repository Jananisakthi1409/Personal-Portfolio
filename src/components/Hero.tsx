import React from 'react';
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Sparkles,
  ChevronRight,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { InteractiveOrb } from './InteractiveOrb';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiterSnapshot: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenRecruiterSnapshot
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-[#fbeee9] via-[#f7e3de] to-[#faf8f5] blur-[100px] rounded-full pointer-events-none opacity-80" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#f3d5d8]/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Fashion Luxury Editorial Intro */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#ede4db] shadow-xs text-xs font-mono text-[#4a1521]">
              <span className="w-2 h-2 rounded-full bg-[#b8686c] animate-pulse inline-block" />
              <span className="font-semibold">Placements & Software Engineering Roles</span>
              <span className="text-[#d4c5b9]">|</span>
              <span className="text-[#78716c]">SKCT • CGPA 8.36</span>
            </div>

            {/* Editorial Giant Headline */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#b8686c]">
                JANANI S.
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#1c1917] tracking-tight leading-[1.06]">
                DESIGNING. <br />
                <span className="text-gradient-burgundy">
                  BUILDING.
                </span> <br />
                SOLVING.
              </h1>
            </div>

            {/* Role & Statement strictly from Resume */}
            <div className="space-y-3 max-w-2xl">
              <div className="text-sm sm:text-base font-semibold text-[#4a1521] tracking-wide">
                B.Tech IT Student • Software Developer • Problem Solver • Builder
              </div>
              <p className="text-sm sm:text-base text-[#44403c] font-normal leading-relaxed">
                Information Technology undergraduate at <strong className="text-[#1c1917] font-semibold">Sri Krishna College of Technology</strong> (CGPA 8.36) and AI/ML Intern. Architecting scalable full-stack applications with <span className="text-[#4a1521] font-semibold">Spring Boot</span>, <span className="text-[#4a1521] font-semibold">React</span>, <span className="text-[#4a1521] font-semibold">MySQL</span>, and <span className="text-[#4a1521] font-semibold">AWS</span>.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-sm font-semibold shadow-lg shadow-[#4a1521]/15 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-2xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#1c1917] hover:text-[#4a1521] border border-[#ede4db] text-sm font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#b8686c]" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenRecruiterSnapshot}
                className="px-4 py-3.5 rounded-2xl bg-[#fbf0ec] hover:bg-[#f7e3de] border border-[#e5c9c5] text-[#4a1521] text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#b8686c]" />
                <span className="hidden sm:inline">Recruiter 30s Fast Track</span>
                <span className="sm:hidden">30s Fast Track</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="pt-4 border-t border-[#ede4db] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#78716c]">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] border border-[#ede4db] text-[#4a1521] hover:text-[#380d16] flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5 text-[#4a1521]" />
                  <span>github.com/{personalInfo.socials.githubUser}</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] border border-[#ede4db] text-[#4a1521] hover:text-[#380d16] flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#4a1521]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-[#78716c]">
                <MapPin className="w-3.5 h-3.5 text-[#b8686c]" />
                <span>{personalInfo.socials.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Abstract Visual Constellation */}
          <div className="lg:col-span-5">
            <InteractiveOrb />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-[#8c827a] hover:text-[#4a1521] transition-colors"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#b8686c]" />
      </a>
    </section>
  );
};
