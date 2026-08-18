import React from 'react';
import {
  Sparkles,
  Code2,
  Database,
  Cloud,
  Terminal,
  ShieldCheck,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#ffffff] relative border-t border-[#ede4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
          <span>Editorial Profile</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight leading-[1.12]">
              THE PERSON <br />
              <span className="text-gradient-burgundy">
                BEHIND THE CODE.
              </span>
            </h2>

            <div className="space-y-4 text-[#44403c] text-base sm:text-lg leading-relaxed">
              <p>
                I am an Information Technology undergraduate at <strong className="text-[#1c1917] font-semibold">Sri Krishna College of Technology, Coimbatore</strong> (2023–2027), holding a consistent academic standing of <strong className="text-[#4a1521] font-semibold">8.36 CGPA</strong>. My development philosophy pairs analytical rigor with clean, modular software design.
              </p>

              <p>
                As an <strong className="text-[#1c1917] font-semibold">AI/ML Intern</strong> focusing on AI-Driven Application Development with the MERN Stack, I contribute to backend RESTful API services, database integration, data processing pipelines, and responsive web user experiences.
              </p>

              <p className="text-sm sm:text-base text-[#78716c]">
                Whether architecting role-based JWT access control in Spring Boot, modeling relational schemas in MySQL, or sharpening algorithmic problem solving on LeetCode with Java and C++, I build software that is robust, maintainable, and built for production.
              </p>
            </div>

            {/* Core Technical Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5 hover:border-[#d9c2b0] transition-colors">
                <div className="flex items-center gap-2 text-[#4a1521] text-sm font-semibold">
                  <Code2 className="w-4 h-4 text-[#b8686c]" />
                  <span>Full-Stack Engineering</span>
                </div>
                <p className="text-xs text-[#78716c] leading-relaxed">
                  End-to-end web applications combining React interfaces with Spring Boot microservices.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5 hover:border-[#d9c2b0] transition-colors">
                <div className="flex items-center gap-2 text-[#4a1521] text-sm font-semibold">
                  <Database className="w-4 h-4 text-[#b8686c]" />
                  <span>Databases & Security</span>
                </div>
                <p className="text-xs text-[#78716c] leading-relaxed">
                  Relational MySQL modeling, Supabase cloud queries, and stateless JWT authorization tiers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5 hover:border-[#d9c2b0] transition-colors">
                <div className="flex items-center gap-2 text-[#4a1521] text-sm font-semibold">
                  <Cloud className="w-4 h-4 text-[#c59b27]" />
                  <span>Cloud & DevOps</span>
                </div>
                <p className="text-xs text-[#78716c] leading-relaxed">
                  AWS fundamentals (EC2, S3), Docker containerization, and RESTful API deployment.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ede4db] space-y-1.5 hover:border-[#d9c2b0] transition-colors">
                <div className="flex items-center gap-2 text-[#4a1521] text-sm font-semibold">
                  <Terminal className="w-4 h-4 text-[#8e3d43]" />
                  <span>Algorithmic Thinking</span>
                </div>
                <p className="text-xs text-[#78716c] leading-relaxed">
                  Active problem solving in Data Structures and Algorithms with optimal time and space complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Stat Cards & Verified Metrics */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Academic Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#ffffff] to-[#fbf0ec] border border-[#e5c9c5] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#b8686c] font-semibold">
                <span>ACADEMIC FOUNDATION</span>
                <span>2023 – 2027</span>
              </div>
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#4a1521] tracking-tight">
                  8.36 <span className="text-base text-[#78716c] font-sans font-normal">/ 10 CGPA</span>
                </div>
                <div className="text-sm font-bold text-[#1c1917] mt-1.5">
                  B.Tech in Information Technology
                </div>
                <div className="text-xs text-[#78716c] mt-0.5">
                  Sri Krishna College of Technology, Coimbatore
                </div>
              </div>
            </div>

            {/* School Education Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#faf8f5] border border-[#ede4db] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#78716c]">
                <span>HIGHER SECONDARY (HSC)</span>
                <span className="text-[#4a1521] font-bold">85.33%</span>
              </div>
              <div className="text-sm font-semibold text-[#1c1917]">
                RCG Girls Higher Secondary School
              </div>
              <div className="text-xs text-[#78716c]">
                Graduated with distinction in core science and mathematics streams.
              </div>
            </div>

            {/* Micro Quick Stats */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#ede4db] text-center space-y-1">
                <div className="font-serif text-3xl font-bold text-[#4a1521]">4</div>
                <div className="text-xs font-semibold text-[#1c1917]">Certifications</div>
                <div className="text-[11px] text-[#78716c]">Oracle, AWS, Cisco, Deloitte</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#ede4db] text-center space-y-1">
                <div className="font-serif text-3xl font-bold text-[#4a1521]">MERN</div>
                <div className="text-xs font-semibold text-[#1c1917]">Internship</div>
                <div className="text-[11px] text-[#78716c]">AI/ML Applications (2026)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
