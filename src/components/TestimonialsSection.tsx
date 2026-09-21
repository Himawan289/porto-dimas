import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  Quote, 
  ShieldCheck, 
  Star, 
  UserCheck, 
  Plus, 
  X, 
  Check, 
  Sparkles,
  Building2
} from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onAddTestimonial: (testi: Testimonial) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onAddTestimonial
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    organization: '',
    relationship: 'Mentor Magang' as Testimonial['relationship'],
    content: '',
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const filters = [
    { id: 'all', label: 'Semua Rekomendasi' },
    { id: 'Dosen Pembimbing', label: 'Dosen Pembimbing' },
    { id: 'Mentor Magang', label: 'Mentor Magang' },
    { id: 'Tech Lead', label: 'Tech Lead & PM' },
    { id: 'Rekan Proyek', label: 'Rekan Proyek' },
  ];

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter((t) => t.relationship === activeFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name.trim() || !newTestimonial.content.trim()) return;

    const added: Testimonial = {
      id: `testi-${Date.now()}`,
      name: newTestimonial.name,
      role: newTestimonial.role || 'Professional Colleague',
      organization: newTestimonial.organization || 'Tech Industry Partner',
      relationship: newTestimonial.relationship,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      content: newTestimonial.content,
      date: 'Baru saja',
      verified: true,
      rating: 5
    };

    onAddTestimonial(added);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowAddModal(false);
      setNewTestimonial({
        name: '',
        role: '',
        organization: '',
        relationship: 'Mentor Magang',
        content: '',
      });
    }, 1500);
  };

  return (
    <section id="testimoni" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-purple-600" />
              <span>Testimoni & Rekomendasi Kolega</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Apa Kata Mentor, Dosen & Rekan Tim
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Validasi karakter, kedisiplinan kerja, dan kualitas teknis dari para profesional yang pernah membimbing serta berkolaborasi langsung bersama saya.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Tulis Testimoni / Endorsement</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((testi) => (
            <div
              key={testi.id}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Avatar, Name, Relationship */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {testi.name}
                        </h3>
                        {testi.verified && (
                          <span title="Rekomendasi Terverifikasi">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {testi.role}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        <span>{testi.organization}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-indigo-700 text-[11px] font-semibold shrink-0">
                    {testi.relationship}
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(testi.rating || 5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{testi.content}"
                </p>
              </div>

              {/* Date Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>Diberikan pada: {testi.date}</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <UserCheck className="w-3 h-3" />
                  <span>Koneksi Terkonfirmasi</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Tulis Rekomendasi Profesional
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Terima Kasih!</h4>
                <p className="text-xs text-slate-500">Rekomendasi Anda telah berhasil ditambahkan ke portofolio ini.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap & Gelar *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso, S.T., M.Kom"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Jabatan / Peran
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      placeholder="Contoh: Tech Lead / Dosen"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Instansi / Perusahaan
                    </label>
                    <input
                      type="text"
                      value={newTestimonial.organization}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, organization: e.target.value })}
                      placeholder="Contoh: PT Telkom / UGM"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Hubungan Kerja Sama
                  </label>
                  <select
                    value={newTestimonial.relationship}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, relationship: e.target.value as Testimonial['relationship'] })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden bg-white"
                  >
                    <option value="Mentor Magang">Mentor Magang</option>
                    <option value="Dosen Pembimbing">Dosen Pembimbing</option>
                    <option value="Tech Lead">Tech Lead / PM</option>
                    <option value="Rekan Proyek">Rekan Proyek / Mahasiswa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pesan Rekomendasi / Kesan Kerja Sama *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newTestimonial.content}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                    placeholder="Ceritakan pengalaman Anda bekerja sama dengan Respati..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
                  >
                    Simpan Rekomendasi
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
