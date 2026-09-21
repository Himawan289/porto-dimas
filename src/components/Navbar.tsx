import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Download, 
  Mail, 
  Menu, 
  X, 
  Sparkles, 
  FileText, 
  Check, 
  MapPin, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface NavbarProps {
  profile: ProfileInfo;
  onOpenRecruiterView: () => void;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenRecruiterView,
  onDownloadResume
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showTopAnnouncement, setShowTopAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Magang', href: '#magang' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Kompetensi', href: '#kompetensi' },
    { label: 'Sertifikat', href: '#sertifikat' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak', href: '#kontak' }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col"
    >
      {/* Top Heading Announcement Bar */}
      {showTopAnnouncement && (
        <div 
          id="top-heading-announcement"
          className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800 flex items-center justify-between"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[10px] tracking-wide shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OPEN TO WORK
              </span>
              <span className="truncate text-slate-300">
                <strong className="text-white font-semibold">Respati Himawan, S.Kom.</strong> — Lulusan Cum Laude UGM (IPK 3.88) • Terbuka untuk Penempatan Full-Time & Remote
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${profile.email}`}
                className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium hover:underline text-[11px]"
              >
                <span>Kirim Undangan Wawancara</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => setShowTopAnnouncement(false)}
                className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
                title="Tutup pengumuman"
                aria-label="Tutup pemberitahuan"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Heading / Logo */}
          <a
            id="navbar-brand-logo"
            href="#"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-2xs group-hover:bg-indigo-600 transition-colors">
              RH
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight flex items-center gap-1.5 leading-tight">
                {profile.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Tersedia untuk pekerjaan baru" />
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline-block leading-tight">
                {profile.title} • UGM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Recruiter Quick Mode Button */}
            <button
              id="navbar-recruiter-mode-btn"
              type="button"
              onClick={onOpenRecruiterView}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-all active:scale-95"
              title="Ringkasan 60 detik khusus untuk Recruiter & HR"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Mode Rekruter</span>
            </button>

            {/* Download CV Button */}
            <button
              id="navbar-download-cv-btn"
              type="button"
              onClick={onDownloadResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all shadow-2xs active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Unduh CV</span>
            </button>

            {/* Direct Email / Contact CTA */}
            <a
              id="navbar-direct-email-btn"
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-xs active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hubungi</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenRecruiterView}
              className="p-1.5 text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rekruter</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-dropdown-menu" className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Unduh CV / Resume Lengkap</span>
            </button>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4 text-slate-600" />}
              <span>{copiedEmail ? 'Email Berhasil Disalin!' : `Salin Email (${profile.email})`}</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg text-center"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
