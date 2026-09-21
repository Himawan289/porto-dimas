import React, { useState } from 'react';
import { 
  ArrowDown, 
  Check, 
  Copy, 
  Download, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Camera
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface HeroProps {
  profile: ProfileInfo;
  onDownloadResume: () => void;
  onOpenRecruiterView: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onDownloadResume,
  onOpenRecruiterView
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  const sampleAvatars = [
    { label: 'Foto Formal Tech', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
    { label: 'Foto Studio Profesional', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
    { label: 'Foto Casual Developer', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      setShowAvatarOptions(false);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-white"
    >
      {/* Subtle modern geometric background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.status}</span>
            </div>

            {/* Main Greeting & Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Halo, saya <span className="text-indigo-600 underline decoration-indigo-300 decoration-2 underline-offset-4">{profile.name}</span>.
              <br />
              <span className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-bold">
                {profile.title}
              </span>
            </h1>

            {/* University & Degree Subhead */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
              Lulusan <span className="font-semibold text-slate-800">{profile.major}</span> dari{' '}
              <span className="font-semibold text-slate-800">{profile.university}</span> (IPK {profile.gpa}). Berpengalaman dalam merancang sistem web berskala, REST API terstruktur, dan arsitektur frontend performa tinggi.
            </p>

            {/* Quick Location & Availability */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                {profile.location}
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Predikat Cum Laude
              </span>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                id="hero-explore-projects-btn"
                href="#proyek"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-98"
              >
                <span>Lihat Proyek & Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-download-cv-btn"
                type="button"
                onClick={onDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 shadow-2xs transition-all active:scale-98"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Unduh CV / Resume (PDF)</span>
              </button>

              <button
                id="hero-recruiter-mode-btn"
                type="button"
                onClick={onOpenRecruiterView}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-sm border border-indigo-200 transition-all active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Ringkasan Rekruter</span>
              </button>
            </div>

            {/* Direct Contact Links Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-slate-100 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">
                Kontak Langsung:
              </span>

              {/* Email direct mailto & copy */}
              <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50/80 p-1 text-xs">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-white transition-colors"
                  title="Salin alamat email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors shadow-2xs"
              >
                <Github className="w-3.5 h-3.5 text-slate-900" />
                <span>GitHub</span>
              </a>

              {/* WhatsApp */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 text-emerald-800 text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Card & Key Statistics (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-white p-3 border border-slate-200 shadow-xl shadow-slate-200/50">
                {/* Photo container */}
                <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img
                    id="hero-profile-image"
                    src={avatarUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  />

                  {/* Top Badge: Verified Developer */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Terverifikasi UGM & MSIB</span>
                  </div>

                  {/* Bottom overlay: Change photo toggle */}
                  <div className="absolute bottom-3 right-3">
                    <button
                      type="button"
                      onClick={() => setShowAvatarOptions(!showAvatarOptions)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-800 text-xs font-medium flex items-center gap-1.5 shadow-sm hover:bg-white transition-all"
                      title="Ganti atau unggah foto diri"
                    >
                      <Camera className="w-3.5 h-3.5 text-slate-600" />
                      <span>Ganti Foto</span>
                    </button>
                  </div>
                </div>

                {/* Photo customization dropdown */}
                {showAvatarOptions && (
                  <div className="absolute bottom-16 right-3 left-3 bg-white rounded-xl p-3 border border-slate-200 shadow-xl z-20 animate-in fade-in zoom-in-95 duration-150">
                    <p className="text-xs font-semibold text-slate-800 mb-2">Pilih Foto Diri:</p>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {sampleAvatars.map((av, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setAvatarUrl(av.url);
                            setShowAvatarOptions(false);
                          }}
                          className="flex flex-col items-center gap-1 p-1 rounded-lg border border-slate-200 hover:border-indigo-500 transition-colors"
                        >
                          <img src={av.url} alt={av.label} className="w-12 h-12 object-cover rounded-md" />
                          <span className="text-[10px] text-slate-600 line-clamp-1">{av.label}</span>
                        </button>
                      ))}
                    </div>
                    <label className="block w-full text-center py-1.5 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-dashed border-slate-300 cursor-pointer">
                      <span>Unggah File Foto Sendiri</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleCustomPhotoUpload} />
                    </label>
                  </div>
                )}

                {/* Name caption below photo */}
                <div className="p-3 text-center border-t border-slate-100 mt-2">
                  <h2 className="text-base font-bold text-slate-900">{profile.name}</h2>
                  <p className="text-xs text-slate-500">{profile.title} • {profile.university}</p>
                </div>
              </div>

              {/* Floating Quick Stats Pills around portrait */}
              <div className="grid grid-cols-2 gap-3 mt-4 w-full">
                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-bold text-slate-900 tracking-tight">3.88</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">IPK Cum Laude</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-bold text-indigo-600 tracking-tight">2 Magang</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Industri & B2B</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-bold text-slate-900 tracking-tight">5+ Proyek</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Web & Capstone</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-xl font-bold text-emerald-600 tracking-tight">6 Sertifikat</div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Unduh Langsung</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
