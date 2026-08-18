import React from 'react';
import {
  X,
  Github,
  CheckCircle2,
  FolderGit2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { ProjectItem } from '../types';
import { InteractiveProjectSimulator } from './InteractiveProjectSimulator';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1c1917]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl bg-[#ffffff] border border-[#ede4db] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#1c1917] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#faf8f5] border-b border-[#ede4db] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#4a1521] font-bold uppercase">
              {project.category} SPECIFICATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#ffffff] border border-[#ede4db] text-[#78716c] hover:text-[#1c1917] hover:bg-[#fbf0ec] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917]">
              {project.title}
            </h2>
            <p className="text-sm text-[#b8686c] font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Project Visual Simulation Widget */}
          <div className="h-[280px] sm:h-[300px]">
            <InteractiveProjectSimulator projectId={project.id} />
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold">
                The Problem
              </div>
              <p className="text-xs text-[#44403c] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#b8686c] font-bold">
                The Solution
              </div>
              <p className="text-xs text-[#44403c] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold">
              Key Features & Capabilities
            </div>
            <div className="space-y-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44403c]">
                  <CheckCircle2 className="w-4 h-4 text-[#b8686c] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#4a1521] font-bold">
                Architecture Highlights
              </div>
              <div className="space-y-2">
                {project.architectureHighlights.map((arch, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-xs font-mono text-[#292524]">
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-[#faf8f5] border border-[#ede4db] text-xs font-mono text-[#4a1521] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#faf8f5] border-t border-[#ede4db] flex items-center justify-between shrink-0">
          <div className="text-xs font-mono text-[#78716c]">
            Verified Candidate Specification
          </div>
          <div className="flex items-center gap-2">
            {Boolean(project.liveUrl && project.liveUrl.trim().length > 0) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>View Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {Boolean(project.githubUrl && project.githubUrl.trim().length > 0) && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#4a1521] border border-[#ede4db] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4 text-[#4a1521]" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
