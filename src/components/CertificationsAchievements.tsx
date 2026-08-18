import React from 'react';
import {
  Award,
  Trophy,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export const CertificationsAchievements: React.FC = () => {
  return (
    <section id="certifications" className="py-28 bg-[#faf8f5] relative border-t border-[#ede4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Industry Certifications */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
              <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
              <span>Industry Validations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight">
              CERTIFICATIONS
            </h2>
            <p className="text-[#57534e] text-sm sm:text-base">
              Verified professional credentials in enterprise development, cloud architecture, networking, and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ede4db] hover:border-[#b8686c] transition-all space-y-4 shadow-xs"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-2xl bg-[#fbf0ec] text-[#4a1521]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#faf8f5] border border-[#ede4db] text-xs font-mono text-[#4a1521] font-bold">
                    {cert.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917]">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-mono text-[#b8686c] mt-1 font-medium">
                    {cert.domain}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Achievements & LeetCode Spotlight */}
        <div className="space-y-12 pt-8 border-t border-[#ede4db]">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
              <Trophy className="w-3.5 h-3.5 text-[#b8686c]" />
              <span>Competency Milestones</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] tracking-tight">
              KEY ACHIEVEMENTS
            </h2>
            <p className="text-[#57534e] text-sm sm:text-base">
              Consistent problem solving, competitive participation, and skill mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#ede4db] hover:border-[#b8686c] transition-all space-y-4 shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#4a1521] font-bold uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-[#b8686c]" />
                  <span>{ach.category}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1c1917]">
                  {ach.title}
                </h3>

                <p className="text-xs text-[#57534e] leading-relaxed">
                  {ach.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-[#faf8f5] border border-[#ede4db] text-[11px] font-mono text-[#78716c]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
