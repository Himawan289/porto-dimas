import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Tawaran Pekerjaan Full-Time',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'Tawaran Pekerjaan Full-Time',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Kontak & Komunikasi Langsung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mari Terhubung & Diskusikan Peluang
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Saya terbuka untuk diskusi peluang kerja penuh waktu, proyek konsultasi teknologi, maupun sesi wawancara teknis. Silakan hubungi saya melalui saluran langsung di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Cards & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Respons Cepat &lt; 24 Jam
                </span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Alamat Email Utama
              </div>
              <div className="text-base font-bold text-slate-900 mt-0.5 mb-4 select-all">
                {profile.email}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Kirim Email Langsung</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  title="Salin Alamat Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">LinkedIn</div>
                    <div className="text-[11px] text-slate-500">Profil Profesional</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-900">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">GitHub</div>
                    <div className="text-[11px] text-slate-500">Repositori Kode</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">WhatsApp</div>
                    <div className="text-[11px] text-slate-500">Pesan Cepat</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* Telepon Langsung */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Telepon</div>
                    <div className="text-[11px] text-slate-500">{profile.phone}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded"
                  title="Salin Nomor"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Quick Availability Meta Info */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Zona Waktu: GMT+7 (WIB) • Siap Wawancara Daring / Tatap Muka</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Kirim Pesan atau Undangan Wawancara
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Formulir terhubung langsung. Silakan tuliskan informasi singkat perihal lowongan atau proyek Anda.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50/50 rounded-xl border border-emerald-100 p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Pesan Anda Telah Terkirim!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih banyak telah menghubungi saya. Saya akan meninjau pesan Anda dan membalas melalui email secepatnya.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:underline"
                  >
                    <span>Atau kirim salinan lewat aplikasi email Anda</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Anda / Recruiter *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Rian Pratama (Talent Acquisition)"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Perusahaan / Kantor *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nama Perusahaan / Startup
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Contoh: PT FinTech Nusantara"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tujuan Pesan
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden transition-all"
                    >
                      <option value="Tawaran Pekerjaan Full-Time">Pekerjaan Penuh Waktu (Full-Time)</option>
                      <option value="Undangan Wawancara Kerja">Undangan Wawancara Teknis</option>
                      <option value="Proyek Freelance / Kontrak">Proyek Kontrak / Konsultasi</option>
                      <option value="Diskusi & Networking">Diskusi Teknis & Networking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Isi Pesan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan deskripsi peran, kriteria tim, atau pertanyaan yang ingin Anda sampaikan..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden transition-all"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Data Anda aman dan hanya digunakan untuk keperluan komunikasi profesional.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
