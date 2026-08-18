import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-950 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Industry-recognized credentials earned from Oracle, AWS, Cisco, and Deloitte validating domain expertise in cloud, enterprise frameworks, networking, and analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Verified Credential
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mt-0.5">
                    {cert.domain}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Completed</span>
                </div>
                <span className="text-slate-500">Certified Candidate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
