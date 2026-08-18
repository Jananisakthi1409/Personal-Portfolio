import React from 'react';
import { Trophy, Terminal, Award, Lightbulb, CheckCircle2, Code2, ArrowUpRight, Flame } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-900/50 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Problem Solving</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Coding Profile
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Active involvement in competitive problem solving, hackathons, ideathons, and technical presentations.
          </p>
        </div>

        {/* Highlight Banner / Spotlight Card on LeetCode & DSA */}
        <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
                <Flame className="w-3.5 h-3.5" />
                <span>LeetCode & DSA Practice</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Active Algorithmic Problem Solver
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated problem solver practicing Data Structures and Algorithms with a focus on optimal time & space complexity, pattern recognition, and scalable coding in Java and C++.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-blue-300 font-mono">
                  Data Structures
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono">
                  Algorithms
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-emerald-300 font-mono">
                  Java & C++
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-purple-300 font-mono">
                  LeetCode Practice
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-white">Problem Solving</div>
              <div className="text-xs text-slate-400 mt-0.5">Foundational DSA Competency</div>
              <div className="mt-3 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
                ● Active Practice
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                  {ach.iconName === 'Terminal' && <Terminal className="w-5 h-5 text-amber-400" />}
                  {ach.iconName === 'Trophy' && <Trophy className="w-5 h-5 text-purple-400" />}
                  {ach.iconName === 'Award' && <Award className="w-5 h-5 text-emerald-400" />}
                </div>

                <h4 className="text-base font-bold text-white">
                  {ach.title}
                </h4>

                <p className="text-xs text-blue-400 font-medium">
                  {ach.category}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-850 flex flex-wrap gap-1.5">
                {ach.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
