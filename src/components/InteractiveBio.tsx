import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Code2, 
  GraduationCap, 
  Layers, 
  MessageSquare, 
  Sparkles, 
  Terminal, 
  UserCheck, 
  Zap,
  HelpCircle
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface InteractiveBioProps {
  profile: ProfileInfo;
}

export const InteractiveBio: React.FC<InteractiveBioProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'principles' | 'faq'>('bio');

  const recruiterFaqs = [
    {
      q: 'Kapan saya dapat mulai bekerja secara penuh waktu?',
      a: 'Saya telah menyelesaikan seluruh masa studi dan sidang sarjana, sehingga dapat segera bergabung (Immediately Available) tanpa ikatan dinas aktif.'
    },
    {
      q: 'Apakah bersedia ditempatkan On-site / Hybrid di Jakarta?',
      a: 'Sangat bersedia. Saya berdomisili fleksibel antara Jakarta dan Yogyakarta serta siap untuk skema kerja On-site, Hybrid, maupun Remote.'
    },
    {
      q: 'Peran apa yang paling sesuai dengan keahlian utama saya?',
      a: 'Software Engineer, Full-Stack Developer, Frontend Engineer (React/TypeScript), atau Backend Engineer (Node.js/PostgreSQL).'
    },
    {
      q: 'Bagaimana pendekatan saya dalam menghadapi code review atau feedback?',
      a: 'Bagi saya, code review adalah katalis peningkatan mutu sistem. Saya menyambut masukan teknis dengan keterbukaan, mendiskusikan trade-off solusi, dan menjunjung tinggi konsistensi basis kode.'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Kenali Saya Lebih Dalam</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Biografi Singkat, Filosofi Rekayasa & Rekam Jejak
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Eksplorasi latar belakang akademik, prinsip kerja, serta etos kerja saya melalui navigasi interaktif berikut.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs max-w-2xl mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('bio')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'bio'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Cerita & Biografi</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Perjalanan Kuliah</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('principles')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'principles'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Prinsip Kerja</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'faq'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>FAQ Rekruter</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          
          {/* 1. BIOGRAPHY TAB */}
          {activeTab === 'bio' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>{profile.aboutStory.title}</span>
                </h3>
                {profile.aboutStory.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}

                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Bahasa:</span> Bahasa Indonesia (Native), English (Professional Working)
                  </div>
                  <div className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Minat Khusus:</span> Distributed Systems, Cloud Architecture, Modern Web
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ringkasan Kunci Diri
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-indigo-100 text-indigo-700 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Latar Belakang</div>
                      <div className="text-sm font-semibold text-slate-900">{profile.university} (S1 Ilmu Komputer)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Predikat Kelulusan</div>
                      <div className="text-sm font-semibold text-slate-900">IPK {profile.gpa} (Dengan Pujian)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-blue-100 text-blue-700 mt-0.5">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Spesialisasi Teknis</div>
                      <div className="text-sm font-semibold text-slate-900">Full-Stack Web (React, Node, Cloud)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-amber-100 text-amber-800 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Kesiapan Kerja</div>
                      <div className="text-sm font-semibold text-slate-900">Siap Kerja Segera (Full-Time)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Riwayat Pendidikan & Prestasi Akademik
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Fondasi teori ilmu komputer yang kuat dikombinasikan dengan pelatihan industri berstandar global.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.educationMilestones.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
                          {edu.year}
                        </span>
                        <span className="text-xs font-bold text-indigo-600">
                          {idx === 0 ? 'Pendidikan Formal' : 'Program Flagship Kampus Merdeka'}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium mb-4">
                        {edu.institution}
                      </p>

                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Sorotan Utama:
                        </div>
                        <ul className="space-y-1.5">
                          {edu.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                              <span className="text-indigo-500 font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. PRINCIPLES TAB */}
          {activeTab === 'principles' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Prinsip Kerja & Standar Rekayasa
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Nilai inti yang saya pegang teguh saat merancang kode, berkolaborasi dalam tim, dan merilis perangkat lunak.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {profile.principles.map((pr, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                      {idx === 0 && <Code2 className="w-5 h-5" />}
                      {idx === 1 && <Zap className="w-5 h-5" />}
                      {idx === 2 && <BookOpen className="w-5 h-5" />}
                      {idx === 3 && <MessageSquare className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {pr.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pr.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. FAQ RECRUITER TAB */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Pertanyaan Kerap Ditanyakan Rekruter & Hiring Manager
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Informasi cepat seputar ketersediaan, komitmen kerja, dan kesesuaian budaya kerja tim Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recruiterFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60"
                  >
                    <div className="text-sm font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">Q:</span>
                      <span>{faq.q}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 border-l-2 border-indigo-200">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
