import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, Download, ExternalLink, MapPin, Award, UserCheck } from 'lucide-react';
import { Internship, Certificate } from '../types';

interface InternshipSectionProps {
  internships: Internship[];
  certificates: Certificate[];
  onViewCertificate: (cert: Certificate) => void;
  onDownloadCertificate: (cert: Certificate) => void;
}

export const InternshipSection: React.FC<InternshipSectionProps> = ({
  internships,
  certificates,
  onViewCertificate,
  onDownloadCertificate
}) => {
  return (
    <section id="magang" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Pengalaman Magang Industri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kontribusi Nyata di Ekosistem Teknologi
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Pengalaman langsung bekerja dalam tim rekayasa perangkat lunak skala enterprise dan software house, mematuhi standar SDLC profesional.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 self-start md:self-auto">
            <span className="font-bold text-slate-900">{internships.length} Pengalaman Industri</span> • Semua bersertifikat resmi
          </div>
        </div>

        {/* Timeline / Cards */}
        <div className="space-y-8">
          {internships.map((intern, index) => {
            const matchedCert = certificates.find((c) => c.id === intern.certificateRefId);

            return (
              <div
                key={intern.id}
                className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                {/* Header row: Role, Company & Period */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm group-hover:bg-indigo-600 transition-colors">
                      {intern.company.charAt(3) === 'T' ? 'TI' : intern.company.charAt(0)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
                          {intern.type}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {intern.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {intern.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{intern.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start lg:self-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{intern.period}</span>
                    </div>

                    {matchedCert && (
                      <button
                        type="button"
                        onClick={() => onViewCertificate(matchedCert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-colors active:scale-95"
                      >
                        <Award className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Bukti Sertifikat</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Body: Description and Key Achievements */}
                <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {intern.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Pencapaian & Dampak Utama (Key Deliverables):</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {intern.keyAchievements.map((ach, achIdx) => (
                          <li key={achIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar / Meta info */}
                  <div className="lg:col-span-4 bg-slate-50 rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Teknologi yang Digunakan:
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {intern.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {intern.mentorName && (
                      <div className="pt-4 border-t border-slate-200/70">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Mentor & Penilai Kinerja:
                        </div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{intern.mentorName}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer action for certificate download */}
                {matchedCert && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="text-slate-500 flex items-center gap-1.5">
                      <span className="font-semibold text-slate-700">Nomor Kredensial:</span>
                      <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 text-[11px]">
                        {matchedCert.credentialId}
                      </code>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onViewCertificate(matchedCert)}
                        className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1"
                      >
                        <span>Lihat Dokumen Validasi</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDownloadCertificate(matchedCert)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                      >
                        <Download className="w-3 h-3" />
                        <span>Unduh Sertifikat</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
