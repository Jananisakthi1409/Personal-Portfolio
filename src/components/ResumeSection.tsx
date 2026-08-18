import React from 'react';
import { FileText, Eye, Sparkles, Printer } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume-section" className="py-28 bg-[#ffffff] relative border-t border-[#ede4db]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#ffffff] via-[#fbf0ec] to-[#faf8f5] border border-[#e5c9c5] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffffff] border border-[#ede4db] text-xs font-semibold text-[#4a1521]">
                <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight">
                CURIOUS ABOUT <br />
                <span className="text-gradient-burgundy">
                  THE FULL STORY?
                </span>
              </h2>

              <p className="text-[#44403c] text-sm sm:text-base leading-relaxed">
                Review complete academic transcripts, technical project specifications, and professional credentials formatted for standard engineering ATS screening.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3.5 rounded-2xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] font-semibold text-sm shadow-md shadow-[#4a1521]/15 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View ATS Resume</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="px-5 py-3.5 rounded-2xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#1c1917] hover:text-[#4a1521] border border-[#ede4db] text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <Printer className="w-4 h-4 text-[#b8686c]" />
                  <span>Save / Print PDF</span>
                </button>
              </div>
            </div>

            {/* Right Mini Document Preview */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenResume}
                className="group cursor-pointer p-6 rounded-2xl bg-[#ffffff] border border-[#ede4db] hover:border-[#b8686c] shadow-xs hover:shadow-md transition-all space-y-4 relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#f5ece4] text-xs font-mono text-[#78716c]">
                  <span className="text-[#1c1917] font-bold">{personalInfo.name}</span>
                  <span className="text-[#4a1521] font-semibold">ATS Verified</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#57534e] font-mono">
                  <div className="text-[#4a1521] font-bold">
                    EDUCATION: SKCT • B.Tech IT (CGPA 8.36)
                  </div>
                  <div className="text-[#292524]">
                    CORE: Spring Boot, React, MySQL, AWS, LeetCode DSA
                  </div>
                  <div className="text-[#78716c] line-clamp-2">
                    PROJECTS: South Trails, IoT Smart Waste Detection, Legal Case Management System
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#4a1521] group-hover:text-[#380d16]">
                  <span>Open resume document preview →</span>
                  <FileText className="w-4 h-4 text-[#b8686c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
