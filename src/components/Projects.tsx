import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronRight,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { InteractiveProjectSimulator } from './InteractiveProjectSimulator';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeStoryTab, setActiveStoryTab] = useState<Record<string, 'solution' | 'features' | 'architecture'>>({
    'proj-1': 'solution',
    'proj-2': 'solution',
    'proj-3': 'solution'
  });

  return (
    <section id="projects" className="py-28 bg-[#ffffff] relative border-t border-[#ede4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill & Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight">
            CURATED <br />
            <span className="text-gradient-burgundy">
              ENGINEERING WORKS.
            </span>
          </h2>
          <p className="text-[#57534e] text-sm sm:text-base max-w-2xl mx-auto">
            Production-grade web applications, real-time IoT anomaly detection, and secure enterprise backends derived strictly from verified resume achievements.
          </p>
        </div>

        {/* Large Editorial Project Showcases */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const currentTab = activeStoryTab[project.id] || 'solution';
            const projectNumber = `0${index + 1}`;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#faf8f5] border border-[#ede4db] overflow-hidden shadow-xs hover:shadow-md p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[#b8686c]"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#ede4db]">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#4a1521] group-hover:text-[#380d16] transition-colors">
                      {projectNumber}
                    </span>
                    <span className="text-[#d4c5b9]">/</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#ffffff] border border-[#ede4db] text-[#57534e] font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Live Project Button (Only shown if liveUrl is set) */}
                    {Boolean(project.liveUrl && project.liveUrl.trim().length > 0) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* GitHub Code Button (Only shown if githubUrl is set) */}
                    {Boolean(project.githubUrl && project.githubUrl.trim().length > 0) && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#4a1521] border border-[#ede4db] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                      >
                        <Github className="w-3.5 h-3.5 text-[#4a1521]" />
                        <span>View Code</span>
                      </a>
                    )}

                    {/* Case Study Details Trigger */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#1c1917] hover:text-[#4a1521] border border-[#ede4db] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#b8686c] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
                  {/* Left Column: Storytelling & Technical Breakdown */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1c1917] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#b8686c] font-medium mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Interactive Story Tabs */}
                    <div className="flex items-center gap-2 border-b border-[#ede4db] pb-2">
                      {(['solution', 'features', 'architecture'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() =>
                            setActiveStoryTab((prev) => ({
                              ...prev,
                              [project.id]: tab
                            }))
                          }
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                            currentTab === tab
                              ? 'bg-[#4a1521] text-[#faf8f5]'
                              : 'text-[#78716c] hover:text-[#1c1917] hover:bg-[#fbf0ec]'
                          }`}
                        >
                          {tab === 'solution' ? 'Problem & Solution' : tab === 'features' ? 'Key Features' : 'Architecture'}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[140px]">
                      {currentTab === 'solution' && (
                        <div className="space-y-4 animate-in fade-in duration-200">
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold mb-1">
                              The Problem
                            </div>
                            <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                              {project.problemSolved}
                            </p>
                          </div>
                          <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-[#b8686c] font-bold mb-1">
                              The Solution
                            </div>
                            <p className="text-xs sm:text-sm text-[#44403c] leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      )}

                      {currentTab === 'features' && (
                        <div className="space-y-2.5 animate-in fade-in duration-200">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold mb-1">
                            Key Technical Features
                          </div>
                          {project.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403c]">
                              <CheckCircle2 className="w-4 h-4 text-[#b8686c] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {currentTab === 'architecture' && (
                        <div className="space-y-2.5 animate-in fade-in duration-200">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold mb-1">
                            Architectural Highlights
                          </div>
                          {project.architectureHighlights?.map((arch, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-3 rounded-2xl bg-[#ffffff] border border-[#ede4db] text-xs font-mono text-[#292524]"
                            >
                              {arch}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-2">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-xl bg-[#ffffff] border border-[#ede4db] text-xs font-mono text-[#4a1521] font-medium shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Live Visual Simulation */}
                  <div className="lg:col-span-5 h-[340px] sm:h-[360px]">
                    <InteractiveProjectSimulator projectId={project.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
