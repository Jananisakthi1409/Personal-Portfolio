import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Sparkles,
  FolderGit2,
  ArrowUpRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories, projects } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsGraph: React.FC = () => {
  const allSkills: SkillItem[] = skillCategories.flatMap((cat) => cat.skills);
  const [activeSkill, setActiveSkill] = useState<SkillItem>(allSkills[0]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  // Find projects where activeSkill is used
  const relatedProjects = projects.filter((p) =>
    activeSkill.usedInProjects?.includes(p.id)
  );

  const isUsedInInternship = activeSkill.usedInProjects?.includes('exp-1');

  return (
    <section id="skills" className="py-28 bg-[#faf8f5] relative border-t border-[#ede4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill & Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Recruiter-Friendly Ecosystem</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight">
            CONNECTING <br />
            <span className="text-gradient-burgundy">
              SKILLS TO SYSTEMS.
            </span>
          </h2>
          <p className="text-[#57534e] text-sm sm:text-base max-w-2xl mx-auto">
            Hover or select any technology below to instantly inspect its architecture role, verified competency tier, and exact implementation in real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Skill Categories Matrix */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((cat, catIdx) => (
              <div
                key={cat.title}
                className="p-5 sm:p-6 rounded-3xl bg-[#ffffff] border border-[#ede4db] shadow-xs space-y-3.5 transition-all hover:border-[#d9c2b0]"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#f5ece4]">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#4a1521]">
                    {cat.title}
                  </span>
                  <span className="text-[11px] font-mono text-[#8c827a]">
                    {cat.skills.length} competencies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkill.name === skill.name;
                    const hasProjects = skill.usedInProjects && skill.usedInProjects.length > 0;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setActiveSkill(skill)}
                        onMouseEnter={() => setActiveSkill(skill)}
                        className={`group px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center gap-2 border cursor-pointer ${
                          isSelected
                            ? 'bg-[#4a1521] text-[#faf8f5] border-[#4a1521] shadow-md shadow-[#4a1521]/15 scale-[1.03]'
                            : 'bg-[#faf8f5] text-[#292524] border-[#ede4db] hover:border-[#b8686c] hover:bg-[#fbf0ec] hover:text-[#4a1521]'
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected
                              ? 'bg-[#f7e3de]'
                              : hasProjects
                              ? 'bg-[#b8686c]'
                              : 'bg-[#d4c5b9]'
                          }`}
                        />
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                              isSelected
                                ? 'bg-[#5e1d2c] text-[#fbf0ec]'
                                : 'bg-[#ede4db] text-[#78716c]'
                            }`}
                          >
                            {skill.tag}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Live Technology Inspector */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ede4db] shadow-md space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#f5ece4]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#b8686c]">
                    {activeSkill.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mt-0.5">
                    {activeSkill.name}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-mono font-semibold text-[#4a1521]">
                  {activeSkill.level || 'Proficient'}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716c]">
                  Competency Context
                </div>
                <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed bg-[#faf8f5] p-4 rounded-2xl border border-[#ede4db]">
                  {activeSkill.description ||
                    'Verified technical capability from academic coursework and practical engineering projects.'}
                </p>
              </div>

              {/* Implementation in Real Projects */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] flex items-center justify-between">
                  <span>Applied In Real Work</span>
                  <span className="text-[#4a1521] font-bold">
                    {relatedProjects.length + (isUsedInInternship ? 1 : 0)} Reference(s)
                  </span>
                </div>

                {relatedProjects.length === 0 && !isUsedInInternship ? (
                  <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] text-xs text-[#78716c] space-y-1">
                    <p className="font-semibold text-[#1c1917]">
                      Academic & Algorithmic Foundation
                    </p>
                    <p>
                      Practiced extensively in coursework at Sri Krishna College of Technology and DSA problem solving.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {relatedProjects.map((p) => (
                      <a
                        key={p.id}
                        href="#projects"
                        className="block p-3.5 rounded-2xl bg-[#faf8f5] border border-[#ede4db] hover:border-[#b8686c] hover:bg-[#fbf0ec] transition-all group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#1c1917] group-hover:text-[#4a1521]">
                          <span className="flex items-center gap-1.5">
                            <FolderGit2 className="w-3.5 h-3.5 text-[#b8686c]" />
                            {p.title}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#78716c] group-hover:text-[#4a1521]" />
                        </div>
                        <p className="text-[11px] text-[#78716c] mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </a>
                    ))}

                    {isUsedInInternship && (
                      <a
                        href="#experience"
                        className="block p-3.5 rounded-2xl bg-[#faf8f5] border border-[#e5c9c5] hover:border-[#b8686c] transition-all group"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-[#4a1521]">
                          <span>AI/ML Intern — MERN Applications</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fbf0ec]">
                            Feb–Jun 2026
                          </span>
                        </div>
                        <p className="text-[11px] text-[#78716c] mt-1">
                          Applied in model workflows, RESTful services, and database integration.
                        </p>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
