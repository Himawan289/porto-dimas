import React, { useState } from 'react';
import { 
  certificatesData, 
  internshipsData, 
  profileData, 
  projectsData, 
  skillCategoriesData, 
  testimonialsData 
} from './data/portfolioData';
import { Certificate, Testimonial } from './types';
import { downloadDigitalCertificate } from './utils/certificateGenerator';
import { printOrDownloadResume } from './utils/resumeGenerator';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveBio } from './components/InteractiveBio';
import { InternshipSection } from './components/InternshipSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { RecruiterQuickView } from './components/RecruiterQuickView';
import { Footer } from './components/Footer';
import { CheckCircle2, Download, X } from 'lucide-react';

export default function App() {
  const [profile] = useState(profileData);
  const [projects] = useState(projectsData);
  const [internships] = useState(internshipsData);
  const [skillCategories] = useState(skillCategoriesData);
  const [certificates] = useState(certificatesData);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);

  const [selectedCertificateModal, setSelectedCertificateModal] = useState<Certificate | null>(null);
  const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; subtitle: string } | null>(null);

  const handleDownloadCertificate = (cert: Certificate) => {
    downloadDigitalCertificate(cert, profile.name);
    setToastMessage({
      title: 'Sertifikat Digital Berhasil Diunduh!',
      subtitle: `${cert.title} (${cert.credentialId}) telah tersimpan dalam format gambar definisi tinggi.`
    });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleDownloadResume = () => {
    printOrDownloadResume(profile, projects, internships, skillCategories, certificates);
    setToastMessage({
      title: 'Curriculum Vitae Siap Dicetak / Disimpan!',
      subtitle: 'Jendela dokumen profesional ATS-friendly telah dibuka untuk disimpan ke format PDF.'
    });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials((prev) => [newTestimonial, ...prev]);
    setToastMessage({
      title: 'Rekomendasi Berhasil Ditambahkan!',
      subtitle: `Terima kasih ${newTestimonial.name}, testimoni Anda telah dipublikasikan di portofolio.`
    });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        profile={profile}
        onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & Foto Diri */}
        <Hero
          profile={profile}
          onDownloadResume={handleDownloadResume}
          onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
        />

        {/* 2. Biografi Singkat & Interaktif (Kenali Saya Lebih Dalam) */}
        <InteractiveBio profile={profile} />

        {/* 3. Pengalaman Magang Industri (MSIB & Software House) */}
        <InternshipSection
          internships={internships}
          certificates={certificates}
          onViewCertificate={(cert) => setSelectedCertificateModal(cert)}
          onDownloadCertificate={handleDownloadCertificate}
        />

        {/* 4. Daftar Proyek Kuliah, Skripsi & Magang */}
        <ProjectsSection projects={projects} />

        {/* 5. Fitur Kompetensi Teknis */}
        <SkillsSection
          skillCategories={skillCategories}
          certificates={certificates}
          onViewCertificate={(cert) => setSelectedCertificateModal(cert)}
        />

        {/* 6. Sertifikat Digital yang Dapat Diunduh Langsung */}
        <CertificatesSection
          certificates={certificates}
          onDownloadCertificate={handleDownloadCertificate}
          selectedCertificateModal={selectedCertificateModal}
          onOpenModal={(cert) => setSelectedCertificateModal(cert)}
          onCloseModal={() => setSelectedCertificateModal(null)}
        />

        {/* 7. Bagian Testimoni & Rekomendasi Interaktif */}
        <TestimonialsSection
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        {/* 8. Kontak Langsung (Email & Sosial Media) */}
        <ContactSection profile={profile} />
      </main>

      {/* Recruiter Quick Mode 60-Second TL;DR Modal */}
      <RecruiterQuickView
        isOpen={isRecruiterViewOpen}
        onClose={() => setIsRecruiterViewOpen(false)}
        profile={profile}
        topProjects={projects}
        internships={internships}
        certificates={certificates}
        onDownloadResume={handleDownloadResume}
      />

      {/* Footer */}
      <Footer profile={profile} onDownloadResume={handleDownloadResume} />

      {/* Subtle floating notification toast */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold">{toastMessage.title}</div>
            <div className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
              {toastMessage.subtitle}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
