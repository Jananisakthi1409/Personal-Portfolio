import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsGraph } from './components/SkillsGraph';
import { Projects } from './components/Projects';
import { TerminalSection } from './components/TerminalSection';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { CertificationsAchievements } from './components/CertificationsAchievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRecruiterDrawerOpen, setIsRecruiterDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] font-sans selection:bg-[#fbf0ec] selection:text-[#4a1521] relative overflow-x-hidden">
      {/* Custom Refined Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Top Luxury Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterSnapshot={() => setIsRecruiterDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiterSnapshot={() => setIsRecruiterDrawerOpen(true)}
        />
        <About />
        <SkillsGraph />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <TerminalSection />
        <Experience />
        <Education />
        <CertificationsAchievements />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <RecruiterDrawer
        isOpen={isRecruiterDrawerOpen}
        onClose={() => setIsRecruiterDrawerOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
};

export default App;
