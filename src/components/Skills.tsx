import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  BarChart3,
  Cpu,
  CheckCircle,
  Terminal,
  Search,
  Filter
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-rose-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const hasMatchingSkill = cat.skills.some(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          (s.tag && s.tag.toLowerCase().includes(query))
      );
      const matchesCategoryName = cat.title.toLowerCase().includes(query);
      return hasMatchingSkill || matchesCategoryName;
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Directly mapped from my resume across programming, full-stack frameworks, cloud infrastructure, and data analytics.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Search skill (e.g. Java, AWS, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges List */}
                <div className="space-y-2.5">
                  {category.skills
                    .filter((skill) => {
                      if (!searchQuery.trim()) return true;
                      const q = searchQuery.toLowerCase();
                      return (
                        skill.name.toLowerCase().includes(q) ||
                        (skill.tag && skill.tag.toLowerCase().includes(q))
                      );
                    })
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        {skill.tag && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Highlight Banner on Resume Skills */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/60 to-indigo-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">
              Data Structures & Algorithmic Problem Solving
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Active problem solving on LeetCode with strong focus on Java & C++ implementations.
            </p>
          </div>
          <a
            href="#achievements"
            className="px-4 py-2 rounded-lg bg-blue-600/90 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shrink-0"
          >
            View DSA Profile & Achievements
          </a>
        </div>
      </div>
    </section>
  );
};
