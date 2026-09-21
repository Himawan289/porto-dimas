import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  User, 
  Tag, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="close-project-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-white shadow-xs transition-all"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">Peran / Tanggung Jawab:</span>
              <span className="font-bold text-slate-800">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Periode Pengerjaan:</span>
              <span className="font-bold text-slate-800">{project.period}</span>
            </div>
            {project.courseName && (
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 font-medium block">Konteks Akademik:</span>
                <span className="font-bold text-slate-800">{project.courseName}</span>
              </div>
            )}
          </div>

          {/* Metrics Highlight */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Dampak & Metrik Kunci
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-center">
                    <div className="text-lg sm:text-xl font-extrabold text-indigo-700">{m.value}</div>
                    <div className="text-[11px] font-medium text-slate-600">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Latar Belakang & Deskripsi Proyek
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fitur Utama yang Berhasil Diterapkan</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solution (Very valuable for recruiters!) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Tantangan Rekayasa Teknis:</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Solusi & Pendekatan:</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Teknologi & Dependensi
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-lg transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Kode Sumber di GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold border border-indigo-200 transition-all active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Demo</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              Tutup Modal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
