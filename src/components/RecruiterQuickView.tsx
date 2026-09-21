import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  ExternalLink, 
  Copy, 
  Check,
  ShieldCheck
} from 'lucide-react';
import { ProfileInfo, Project, Internship, Certificate } from '../types';

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  topProjects: Project[];
  internships: Internship[];
  certificates: Certificate[];
  onDownloadResume: () => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({
  isOpen,
  onClose,
  profile,
  topProjects,
  internships,
  certificates,
  onDownloadResume
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      id="recruiter-quick-view-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Mode Rekruter (Ringkasan 60 Detik)
              </h3>
              <p className="text-[11px] text-slate-500">
                Informasi penting dirangkum ringkas untuk Talent Acquisition & Hiring Manager.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Quick Profile Bio */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-xl object-cover border border-slate-200"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900">{profile.name}</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                  Open to Work
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {profile.title} • Lulusan {profile.university} (IPK {profile.gpa})
              </p>
              <div className="text-[11px] text-slate-400 mt-1">
                Lokasi: {profile.location}
              </div>
            </div>
          </div>

          {/* Quick Highlights 3 Bullets */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              3 Fakta Kunci Kandidat:
            </h5>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Lulus Cum Laude UGM (3.88)</strong> dan Top 10% Distinction Graduate Bangkit Academy Google-GoTo-Traveloka.</span>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 flex items-start gap-2">
                <Briefcase className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Pengalaman Magang 6 Bulan di PT Telkom Indonesia</strong>, berkontribusi langsung pada portal B2B enterprise.</span>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs text-slate-800 flex items-start gap-2">
                <Award className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Sertifikasi Internasional Resmi</strong> Google Cloud Certified Associate Cloud Engineer & Dicoding Front-End Expert.</span>
              </div>
            </div>
          </div>

          {/* Core Tech Stack */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Core Tech Stack:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Google Cloud Platform', 'Docker', 'RESTful API', 'Jest'].map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Top 2 Projects Preview */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Proyek Paling Relevan:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topProjects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-3 bg-white border border-slate-200 rounded-xl">
                  <div className="text-[10px] font-semibold text-indigo-600 uppercase">{proj.categoryLabel}</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">{proj.title}</div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">{proj.description}</div>
                  {proj.metrics && proj.metrics[0] && (
                    <div className="mt-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                      {proj.metrics[0].label}: {proj.metrics[0].value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <div className="text-xs font-bold">Siap Mengatur Sesi Wawancara?</div>
              <div className="text-[11px] text-slate-400">{profile.email}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                {copiedEmail ? 'Email Tersalin' : 'Salin Email'}
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors"
              >
                Kirim Tawaran
              </a>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onDownloadResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Unduh Resume / CV (PDF)</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
