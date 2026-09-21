import React, { useState } from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Clock
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onDownloadResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-white border-t border-slate-800">
      
      {/* Top CTA Banner inside Footer */}
      <div className="border-b border-slate-800/80 py-12 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Peluang Rekrutmen & Kolaborasi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Mari Diskusikan Peluang & Wawancara Kerja
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Saya siap berkontribusi pada pengembangan aplikasi web performa tinggi, sistem backend terstruktur, dan arsitektur cloud untuk perusahaan Anda.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm active:scale-95 flex-1 sm:flex-initial"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Undangan Wawancara</span>
              </a>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-semibold transition-all active:scale-95 flex-1 sm:flex-initial"
              >
                <FileText className="w-4 h-4" />
                <span>Unduh CV / Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Identity & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base tracking-wider shadow-sm">
                RH
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  {profile.name}
                </h3>
                <p className="text-xs text-indigo-400 font-medium">
                  {profile.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Lulusan S1 Teknik Informatika Universitas Gadjah Mada dengan predikat <strong className="text-slate-200">Cum Laude (IPK {profile.gpa})</strong>. Memiliki rekam jejak magang teruji di PT Telkom Indonesia dan keahlian cloud tersertifikasi resmi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Status: Terbuka untuk Kerja Penuh Waktu</span>
            </div>

            {/* Social Links Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-indigo-400 transition-colors"
                title="Email Langsung"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Portofolio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#tentang" className="hover:text-white hover:underline transition-colors block">
                  Tentang Saya & Biografi
                </a>
              </li>
              <li>
                <a href="#magang" className="hover:text-white hover:underline transition-colors block">
                  Pengalaman Magang Industri
                </a>
              </li>
              <li>
                <a href="#proyek" className="hover:text-white hover:underline transition-colors block">
                  Daftar Proyek & Karya
                </a>
              </li>
              <li>
                <a href="#kompetensi" className="hover:text-white hover:underline transition-colors block">
                  Peta Kompetensi Teknis
                </a>
              </li>
              <li>
                <a href="#sertifikat" className="hover:text-white hover:underline transition-colors block">
                  Sertifikat Digital & Unduh
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white hover:underline transition-colors block">
                  Testimoni Dosen & Rekan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white hover:underline transition-colors block">
                  Kontak & Formulir Pesan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Credentials (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kredensial Resmi
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>S1 Teknik Informatika UGM (IPK 3.88)</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Google Cloud Certified ACE</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Distinction Graduate Bangkit</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Dicoding Front-End Web Expert</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>MSIB Batch 5 PT Telkom Indonesia</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Availability (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kontak Langsung
            </h4>

            {/* Email with copy */}
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-[11px] text-slate-400 font-medium">
                Alamat Email Utama:
              </div>
              <div className="text-xs font-mono font-bold text-white break-all">
                {profile.email}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-300" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[11px] font-medium text-indigo-400 hover:underline flex items-center gap-0.5"
                >
                  <span>Buka App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>WIB (GMT+7) • Respons cepat &lt; 24 jam</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Colophon Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">{profile.name}</strong>. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden sm:inline">
              React 18 • TypeScript • Tailwind CSS
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
              title="Kembali ke bagian atas halaman"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
