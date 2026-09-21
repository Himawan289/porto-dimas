import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Copy, 
  Check, 
  Calendar, 
  Award, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
  onDownload: (cert: Certificate) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onDownload
}) => {
  const [copiedId, setCopiedId] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 shadow-xs"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Proof Image Preview */}
        <div className="relative aspect-16/10 bg-slate-950 overflow-hidden">
          <img
            src={certificate.previewImage}
            alt={certificate.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Kredensial Terverifikasi</span>
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              {certificate.issuer}
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-snug">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">Lembaga Penerbit:</span>
              <span className="font-bold text-slate-800 text-sm">{certificate.issuer}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Tanggal Penerbitan:</span>
              <span className="font-bold text-slate-800 text-sm">
                {certificate.issueDate} {certificate.expiryDate && `(s/d ${certificate.expiryDate})`}
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-slate-400 font-medium block mb-1">Nomor ID Kredensial:</span>
              <div className="flex items-center gap-2">
                <code className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs sm:text-sm">
                  {certificate.credentialId}
                </code>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 shadow-2xs"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? 'Tersalin' : 'Salin ID'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Deskripsi & Standar Evaluasi
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Validated Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Kompetensi & Keahlian yang Divalidasi:
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Honor / Distinction */}
          {certificate.scoreOrHonor && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-800 block">Predikat / Nilai:</span>
                <span className="text-xs font-bold text-amber-950">{certificate.scoreOrHonor}</span>
              </div>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verifikasi di Situs Resmi</span>
            </a>

            <button
              type="button"
              onClick={() => onDownload(certificate)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Sertifikat Digital (PNG/PDF)</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
