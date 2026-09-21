import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Workflow,
  Award,
  ChevronRight
} from 'lucide-react';
import { SkillCategory, Certificate } from '../types';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  certificates: Certificate[];
  onViewCertificate: (cert: Certificate) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillCategories,
  certificates,
  onViewCertificate
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const filteredCategories = activeCategoryId === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategoryId);

  return (
    <section id="kompetensi" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Kompetensi Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keahlian Teruji & Terstandarisasi Industri
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tingkat kemahiran pada setiap teknologi diverifikasi melalui pengerjaan proyek riil di perkuliahan, magang industri, dan sertifikasi kredensial resmi.
          </p>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategoryId === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            Semua Kompetensi
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategoryId === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Categories and Skill Progress Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {category.skills.length} Keahlian
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List in this Category */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const linkedCert = skill.relatedCertId
                      ? certificates.find((c) => c.id === skill.relatedCertId)
                      : undefined;

                    return (
                      <div key={sIdx} className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-slate-800">
                              {skill.name}
                            </span>
                            {skill.isKeySkill && (
                              <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-semibold border border-indigo-100">
                                Core
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-400">
                              {skill.years}
                            </span>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                              skill.level === 'Expert' 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                : skill.level === 'Advanced'
                                ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              skill.level === 'Expert'
                                ? 'bg-emerald-500'
                                : skill.level === 'Advanced'
                                ? 'bg-indigo-600'
                                : 'bg-blue-400'
                            }`}
                            style={{ width: `${skill.levelPercentage}%` }}
                          />
                        </div>

                        {/* Linked Certificate indicator */}
                        {linkedCert && (
                          <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500 flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Validasi: {linkedCert.issuer}</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => onViewCertificate(linkedCert)}
                              className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5"
                            >
                              <span>Lihat Sertifikat</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
