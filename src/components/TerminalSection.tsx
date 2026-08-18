import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Copy, Check } from 'lucide-react';
import { personalInfo, projects, experiences, skillCategories, educationList, certifications } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-[#d6d3d1]">
          <div><strong className="text-white">{personalInfo.name}</strong></div>
          <div className="text-[#f7c5cc] font-medium">{personalInfo.role}</div>
          <div className="text-[#a8a29e]">{personalInfo.college} (CGPA: {personalInfo.cgpa})</div>
        </div>
      )
    },
    {
      command: 'stack --core',
      output: (
        <div className="space-y-1 text-[#d6d3d1]">
          <div><span className="text-[#e5c9c5] font-semibold">Backend:</span> Java, Spring Boot, REST APIs, JWT Security</div>
          <div><span className="text-[#fbeee9] font-semibold">Frontend:</span> React.js, HTML5, CSS3, JavaScript</div>
          <div><span className="text-[#c59b27] font-semibold">Database & Cloud:</span> MySQL, Supabase, AWS (EC2, S3), Docker</div>
          <div><span className="text-[#d8b4e2] font-semibold">Problem Solving:</span> LeetCode DSA (Java, C++)</div>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const quickCommands = [
    'help',
    'whoami',
    'stack',
    'projects',
    'experience',
    'education',
    'certifications',
    'contact',
    'clear'
  ];

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-[#d6d3d1]">
            <div className="text-[#fbeee9] font-bold">Available System Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
              <div><code className="text-[#c59b27]">whoami</code> - Profile info</div>
              <div><code className="text-[#c59b27]">stack</code> - Tech competencies</div>
              <div><code className="text-[#c59b27]">projects</code> - Built applications</div>
              <div><code className="text-[#c59b27]">experience</code> - AI/ML internship</div>
              <div><code className="text-[#c59b27]">education</code> - Degree & HSC</div>
              <div><code className="text-[#c59b27]">certifications</code> - 4 Credentials</div>
              <div><code className="text-[#c59b27]">contact</code> - Reach out</div>
              <div><code className="text-[#c59b27]">clear</code> - Reset screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 text-[#d6d3d1]">
            <div><strong className="text-white">{personalInfo.name}</strong></div>
            <div className="text-[#f7c5cc]">{personalInfo.role}</div>
            <div className="text-[#a8a29e]">{personalInfo.college} • {personalInfo.batch}</div>
            <div className="text-[#fbeee9] font-semibold">Current CGPA: {personalInfo.cgpa}</div>
            <p className="text-xs text-[#a8a29e] pt-1">{personalInfo.summary}</p>
          </div>
        );
        break;

      case 'stack':
        outputNode = (
          <div className="space-y-1.5 text-[#d6d3d1] text-xs">
            <div><strong className="text-[#c59b27]">Languages:</strong> Java, C++, JavaScript, Python</div>
            <div><strong className="text-[#fbeee9]">Frontend:</strong> React.js, HTML5, CSS3</div>
            <div><strong className="text-[#e5c9c5]">Backend:</strong> Spring Boot, REST APIs, JWT, Node.js/Express</div>
            <div><strong className="text-[#f7c5cc]">Databases:</strong> MySQL, Supabase</div>
            <div><strong className="text-[#c59b27]">Cloud & Tools:</strong> AWS (EC2/S3), Docker, Git, Postman, VS Code, Selenium</div>
            <div><strong className="text-[#d8b4e2]">Analytics:</strong> Excel, Data Visualization, Data Cleaning, EDA</div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-[#d6d3d1] text-xs">
            {projects.map((p, i) => (
              <div key={p.id} className="p-2 rounded-xl bg-[#292524] border border-[#44403c]">
                <div className="text-white font-bold">[0{i + 1}] {p.title}</div>
                <div className="text-[#e5c9c5] font-mono">Stack: {p.techStack.join(', ')}</div>
                <div className="text-[#a8a29e]">{p.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
      case 'internship':
        outputNode = (
          <div className="space-y-1.5 text-[#d6d3d1] text-xs">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="font-bold text-white">{exp.role} — {exp.company}</div>
                <div className="text-[#fbeee9] font-mono">{exp.duration} • {exp.location}</div>
                <div className="text-[#a8a29e] mt-1">{exp.description[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-2 text-[#d6d3d1] text-xs">
            {educationList.map((edu) => (
              <div key={edu.id}>
                <div className="font-bold text-white">{edu.institution}</div>
                <div className="text-[#a8a29e]">{edu.degree} ({edu.duration})</div>
                <div className="text-[#fbeee9] font-mono">{edu.scoreLabel}: {edu.scoreValue}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certifications':
        outputNode = (
          <div className="space-y-1 text-[#d6d3d1] text-xs">
            {certifications.map((c) => (
              <div key={c.id}>
                <span className="text-[#e5c9c5] font-bold">✓ {c.name}</span>
                <span className="text-[#a8a29e]"> ({c.issuer}) — {c.domain}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-[#d6d3d1] text-xs">
            <div>Email: <a href={`mailto:${personalInfo.socials.email}`} className="text-[#e5c9c5] hover:underline">{personalInfo.socials.email}</a></div>
            <div>Phone: <span className="text-[#fbeee9]">{personalInfo.socials.phone}</span></div>
            <div>GitHub: <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-[#e5c9c5] hover:underline">{personalInfo.socials.github}</a></div>
            <div>LinkedIn: <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#e5c9c5] hover:underline">{personalInfo.socials.linkedin}</a></div>
            <div>Location: {personalInfo.socials.location}</div>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-[#f7c5cc] text-xs">
            Command not recognized: <code className="text-white">"{cleanCmd}"</code>. Type <code className="text-[#c59b27] font-bold">help</code> to list available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="developer-terminal" className="py-24 bg-[#faf8f5] relative border-t border-[#ede4db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fbf0ec] border border-[#e5c9c5] text-xs font-semibold text-[#4a1521]">
            <Sparkles className="w-3.5 h-3.5 text-[#b8686c]" />
            <span>Interactive Developer Moment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] tracking-tight">
            DEVELOPER CONSOLE
          </h2>
          <p className="text-[#57534e] text-xs sm:text-sm">
            Query candidate qualifications, stack architecture, and project implementations directly through an interactive bash terminal.
          </p>
        </div>

        {/* Quick Command Action Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <span className="text-xs font-mono text-[#78716c] mr-1">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-xl bg-[#ffffff] hover:bg-[#fbf0ec] text-[#4a1521] border border-[#ede4db] text-xs font-mono transition-colors cursor-pointer shadow-2xs"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Card (Luxury Dark Shell) */}
        <div className="bg-[#1c1917] border border-[#44403c] rounded-3xl shadow-xl overflow-hidden font-mono text-xs">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#292524] border-b border-[#44403c] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#b8686c] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#c59b27] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#5e1d2c] inline-block" />
              <span className="text-[#a8a29e] text-xs font-bold ml-2">janani@skct-developer:~</span>
            </div>
            <div className="text-[11px] text-[#78716c] flex items-center gap-2">
              <span>BASH 5.2</span>
              <span>•</span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="p-6 space-y-4 max-h-[380px] overflow-y-auto">
            <div className="text-[#78716c] text-[11px] pb-2 border-b border-[#292524]">
              Type <span className="text-[#c59b27] font-bold">help</span> or click the quick pills above to inspect.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[#e5c9c5] font-bold">janani@portfolio:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Interactive Command Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="px-5 py-3.5 bg-[#292524]/70 border-t border-[#44403c] flex items-center gap-2"
          >
            <span className="text-[#e5c9c5] font-bold">janani@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command (e.g. whoami, stack, projects, contact)..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-[#78716c] text-xs font-mono"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-xl bg-[#4a1521] hover:bg-[#380d16] text-[#faf8f5] text-[11px] font-semibold transition-colors cursor-pointer"
            >
              Run ↵
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
