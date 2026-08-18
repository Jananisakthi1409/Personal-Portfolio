import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 bg-[#faf8f5] relative border-t border-[#ede4db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight">
            ACADEMIC FOUNDATION
          </h2>
          <p className="text-[#57534e] text-sm sm:text-base">
            Verified academic milestones and degree programs.
          </p>
        </div>

        <div className="space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ede4db] shadow-xs space-y-4 hover:border-[#b8686c] transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#f5ece4]">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b8686c]">
                    {edu.field || 'General Sciences'}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917] mt-1">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-semibold text-[#4a1521]">
                    {edu.degree}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono">
                  <div className="px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-[#4a1521] font-bold text-sm">
                    {edu.scoreLabel}: {edu.scoreValue}
                  </div>
                  <div className="text-[#78716c] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#b8686c]" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="text-[#78716c] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#b8686c]" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {edu.highlights && (
                <ul className="space-y-2 text-xs sm:text-sm text-[#44403c] pt-1">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8686c] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
