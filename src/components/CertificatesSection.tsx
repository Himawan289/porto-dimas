import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  Check, 
  Download, 
  ExternalLink, 
  FileCheck2, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Eye
} from 'lucide-react';
import { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';

interface CertificatesSectionProps {
  certificates: Certificate[];
  onDownloadCertificate: (cert: Certificate) => void;
  selectedCertificateModal: Certificate | null;
  onOpenModal: (cert: Certificate) => void;
  onCloseModal: () => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates,
  onDownloadCertificate,
  selectedCertificateModal,
  onOpenModal,
  onCloseModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Sertifikat' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'web', label: 'Web Engineering' },
    { id: 'competition', label: 'Kompetisi & Hackathon' },
  ];

  const filteredCertificates = selectedCategory === 'all'
    ? certificates
    : certificates.filter((c) => c.category === selectedCategory);

  const handleDownload = (cert: Certificate) => {
    setDownloadingId(cert.id);
    onDownloadCertificate(cert);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <section id="sertifikat" className="py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Bukti Sertifikasi & Pencapaian Digital</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kredensial Terverifikasi & Unduh Langsung
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Setiap keahlian divalidasi oleh lembaga industri terkemuka (Google, AWS, Dicoding, Kemendikbudristek). Klik unduh untuk mendapatkan salinan sertifikat digital resmi.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <span className="font-bold text-slate-900">{certificates.length} Sertifikat Resmi</span> • Terbitan 2023–2024
          </div>
        </div>

        {/* Category Switcher */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => {
            const isDownloading = downloadingId === cert.id;

            return (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Proof Photo / Preview */}
                  <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                    <img
                      src={cert.previewImage}
                      alt={cert.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Issuer Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold tracking-tight shadow-xs">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="p-1 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs" title="Kredensial Sah">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Title & Issue date overlay */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.issueDate}</span>
                      </div>
                      <h3 className="text-sm font-bold line-clamp-1 leading-snug text-white mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Credential ID row */}
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">ID Kredensial:</span>
                      <span className="font-mono font-bold text-slate-800 text-[10px]">{cert.credentialId}</span>
                    </div>

                    {/* Honor/Predikat */}
                    {cert.scoreOrHonor && (
                      <div className="text-[11px] text-amber-700 font-semibold bg-amber-50/70 px-2 py-1 rounded-md border border-amber-100 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span className="truncate">{cert.scoreOrHonor}</span>
                      </div>
                    )}

                    {/* Validated Skills */}
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                        Kompetensi Tervalidasi:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-medium border border-emerald-100"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-medium">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions: Direct Download & View Proof */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => onOpenModal(cert)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 py-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Bukti</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(cert)}
                    disabled={isDownloading}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
                      isDownloading
                        ? 'bg-emerald-600 text-white'
                        : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Mengunduh...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh Sertifikat</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Detail Modal */}
      <CertificateModal
        certificate={selectedCertificateModal}
        onClose={onCloseModal}
        onDownload={onDownloadCertificate}
      />
    </section>
  );
};
