import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 bg-[#ffffff] relative border-t border-[#ede4db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Practical Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight">
            INDUSTRY INTERNSHIP
          </h2>
          <p className="text-[#57534e] text-sm sm:text-base">
            Hands-on software development workflows, API design, and AI application integration.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-[#e5c9c5] space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#ffffff] border-2 border-[#4a1521] group-hover:scale-125 transition-transform shadow-xs" />

              <div className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-[#ede4db] shadow-xs space-y-6 hover:border-[#b8686c] transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#ede4db]">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b8686c]">
                      {exp.type}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917] mt-1">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#4a1521]">
                      {exp.company} • <span className="text-[#78716c] font-normal">{exp.focus}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#78716c]">
                    <div className="flex items-center gap-1.5 text-[#1c1917] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#b8686c]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#b8686c]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#78716c]">
                    Key Engineering Contributions:
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#44403c]">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#b8686c] shrink-0 mt-1" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-[#ede4db] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#78716c] mr-2">Stack:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-[#ffffff] border border-[#ede4db] text-xs font-mono text-[#4a1521] font-medium shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
