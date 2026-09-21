import { Certificate, Internship, ProfileInfo, Project, SkillCategory, Testimonial } from '../types';

export const profileData: ProfileInfo = {
  name: 'Respati Himawan',
  nickname: 'Respati',
  title: 'Full-Stack Software Engineer',
  headline: 'Membangun aplikasi web performa tinggi dengan arsitektur bersih, skalabel, dan pengalaman pengguna yang intuitif.',
  location: 'Jakarta & Yogyakarta, Indonesia (Tersedia Relokasi / Remote)',
  email: 'respatihimawan@gmail.com',
  phone: '+62 812-3456-7890',
  whatsapp: 'https://wa.me/6281234567890',
  linkedin: 'https://linkedin.com/in/respatihimawan',
  github: 'https://github.com/respatihimawan',
  gpa: '3.88 / 4.00 (Cum Laude)',
  university: 'Universitas Gadjah Mada',
  major: 'S1 Ilmu Komputer / Teknik Informatika',
  graduationYear: '2024',
  status: 'Tersedia untuk Pekerjaan Penuh Waktu (Open to Work)',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  aboutStory: {
    title: 'Rekayasa Perangkat Lunak Berorientasi Solusi Nyata',
    paragraphs: [
      'Halo! Saya Respati Himawan, seorang Software Engineer yang berfokus pada pengembangan aplikasi web modern end-to-end, perancangan REST API terstruktur, serta optimasi performa sistem. Ketertarikan saya pada dunia pemrograman dimulai sejak semester pertama kuliah, di mana saya terpesona bagaimana logika kode dapat menyelesaikan masalah riil ribuan pengguna.',
      'Sepanjang masa studi di perkuliahan hingga menyelesaikan program magang intensif di industri teknologi nasional, saya selalu memprioritaskan "Clean Code", efisiensi komputasi, dan modularitas arsitektur. Pengalaman magang mengajarkan saya pentingnya kolaborasi lintas disiplin (Product Manager, UI/UX Designer, QA) serta penerapan metodologi Agile/Scrum dalam pengiriman fitur bernilai tinggi.',
      'Kini saya siap berkontribusi secara penuh waktu di tim rekayasa perangkat lunak yang berorientasi pada inovasi, tantangan teknis, dan kultur belajar berkelanjutan.'
    ]
  },
  principles: [
    {
      title: 'Maintainable & Scalable Code',
      description: 'Menulis kode yang bersih, terdokumentasi, dan mudah dipelihara oleh anggota tim masa depan menggunakan standar industri.',
      icon: 'Code2'
    },
    {
      title: 'User-Centric Performance',
      description: 'Mengutamakan kecepatan muat (Core Web Vitals), aksesibilitas, dan responsivitas pada setiap perangkat pengguna.',
      icon: 'Zap'
    },
    {
      title: 'Continuous Growth & Humility',
      description: 'Selalu haus mempelajari teknologi mutakhir, terbuka terhadap kritik konstruktif melalui Code Review, dan aktif berbagi pengetahuan.',
      icon: 'BookOpen'
    },
    {
      title: 'Reliable Communication',
      description: 'Berkomunikasi secara transparan dan proaktif, baik dalam sesi stand-up harian, sinkronisasi sprint, maupun koordinasi asinkron.',
      icon: 'MessageSquareCheck'
    }
  ],
  educationMilestones: [
    {
      year: '2020 – 2024',
      degree: 'Sarjana Ilmu Komputer (S.Kom)',
      institution: 'Universitas Gadjah Mada (UGM)',
      highlights: [
        'Predikat Kelulusan: Dengan Pujian (Cum Laude) dengan IPK 3.88 / 4.00',
        'Fokus Riset Skripsi: Arsitektur Microservices untuk Platform Pengolahan Data Skala Besar',
        'Asisten Dosen untuk Mata Kuliah Pemrograman Berorientasi Objek & Basis Data Lanjut',
        'Ketua Divisi Riset & Pengembangan Himpunan Mahasiswa Ilmu Komputer'
      ]
    },
    {
      year: '2023',
      degree: 'Studi Independen Bersertifikat – Cloud Computing Path',
      institution: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      highlights: [
        'Lulus dengan predikat Top 10% Distinction Graduate',
        'Menyelesaikan Capstone Project berbasis Google Cloud Platform (GCP)',
        'Sertifikasi Resmi Google Cloud Certified Associate Cloud Engineer'
      ]
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Edura: Sistem Manajemen Kampus & Portal Akademik Modern',
    category: 'capstone',
    categoryLabel: 'Proyek Skripsi / Capstone',
    subtitle: 'Platform web manajemen portal perkuliahan, bimbingan tugas akhir, dan arsip repositori ilmiah terintegrasi.',
    description: 'Aplikasi portal akademik yang menghubungkan 2,500+ mahasiswa dan dosen pembimbing dengan fitur jadwal real-time, pengunggahan berkas skripsi otomatis, dan sistem notifikasi.',
    longDescription: 'Proyek capstone ini dirancang untuk mengatasi inefisiensi birokrasi bimbingan akademik manual. Sistem mengimplementasikan arsitektur RESTful API dengan otentikasi JWT berbasis peran (Role-Based Access Control) untuk Mahasiswa, Dosen Pembimbing, dan Tata Usaha. Dilengkapi fitur unggah dokumen terenkripsi ke Cloud Storage serta notifikasi email otomatis.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    period: 'Februari 2024 – Juli 2024',
    role: 'Lead Full-Stack Developer & System Architect',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Google Cloud Storage'],
    metrics: [
      { label: 'Waktu Proses Bimbingan', value: 'Turun 65%' },
      { label: 'Pengguna Aktif Teruji', value: '2,500+ User' },
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'Test Coverage', value: '88% Unit Tests' }
    ],
    features: [
      'Dashboard analitik progress skripsi interaktif untuk mahasiswa dan dosen',
      'Pelacak revisi dokumen dengan audit trail dan komentar inline per baris',
      'Penjadwalan sidang seminar hasil terintegrasi dengan Google Calendar API',
      'Role-based access control (Mahasiswa, Dosen Penguji, Koordinator Prodi)'
    ],
    challenges: 'Menghindari race condition saat ratusan mahasiswa serentak mengunggah berkas revisi dan memilih slot jadwal sidang pada jam yang sama.',
    solution: 'Menerapkan database transaction locks di PostgreSQL dan Redis BullMQ message queue untuk memproses antrian berkas serta penjadwalan tanpa hambatan server.',
    githubUrl: 'https://github.com/respatihimawan/edura-academic-system',
    liveUrl: 'https://edura-demo.respatihimawan.dev',
    courseName: 'Tugas Akhir / Skripsi Sarjana',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'TalentPulse: Dashboard Analitik Rekrutmen & Pelacak Lamaran',
    category: 'internship',
    categoryLabel: 'Proyek Magang Industri',
    subtitle: 'Alat internal pelacak kandidat talenta (ATS) dengan integrasi automasi penilaian teknis.',
    description: 'Membangun modul analitik rekrutmen perusahaan untuk memvisualisasikan funnel kandidat, evaluasi coding challenge, dan pembuatan tawaran kerja terotomasi.',
    longDescription: 'Selama masa magang, saya dipercaya memimpin perombakan modul Applicant Tracking System (ATS) internal. Proyek ini memangkas waktu screening HR dari 7 hari menjadi rata-rata 2 hari dengan menyediakan filter cepat berdasarkan skor tes teknis, rekam jejak portofolio, dan evaluasi pewawancara.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    period: 'Agustus 2023 – Desember 2023',
    role: 'Software Engineer Intern (Frontend & API Integration)',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Recharts', 'Jest', 'GitLab CI/CD'],
    metrics: [
      { label: 'Efisiensi Screening HR', value: 'Naik 4x Lipat' },
      { label: 'Latency Data Fetching', value: 'Turun 42%' },
      { label: 'Kandidat Terproses', value: '15,000+ Berkas' }
    ],
    features: [
      'Visualisasi hiring funnel interaktif dengan filter multi-parameter dinamis',
      'Kanban board drag-and-drop kandidat antar tahap interview',
      'Sistem export laporan rekrutmen instan ke spreadsheet dan PDF',
      'Integrasi webhook ke Slack untuk notifikasi kandidat baru'
    ],
    challenges: 'Dataset kandidat yang besar (10,000+ baris) menyebabkan lag rendering pada tabel dan diagram browser.',
    solution: 'Mengimplementasikan virtualized list scrolling (TanStack Virtual) dan pagination sisi server dengan query caching React Query.',
    githubUrl: 'https://github.com/respatihimawan/talentpulse-dashboard',
    courseName: 'PT Teknologi Digital Nusantara (Magang)',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'MediLog: E-Prescription & Rekam Medis Klinik Terdesentralisasi',
    category: 'college',
    categoryLabel: 'Proyek Kuliah Rekayasa Web',
    subtitle: 'Sistem informasi klinik dokter umum berbasis web untuk pencatatan resep obat digital.',
    description: 'Aplikasi klinik terpadu untuk pencatatan rekam medis elektronik pasien, inventory stok apotek, dan pencetakan resep digital ber-barcode.',
    longDescription: 'Dikembangkan sebagai proyek semester akhir untuk mata kuliah Rekayasa Perangkat Lunak Lanjut dalam tim beranggotakan 4 mahasiswa. Berhasil mendapatkan predikat Nilai A dengan pujian dari dosen penilai karena kelengkapan dokumentasi SDLC, testing, dan kepatuhan standar medis.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    period: 'September 2023 – Desember 2023',
    role: 'Full-Stack Developer & Database Designer',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'Swagger API'],
    metrics: [
      { label: 'Nilai Proyek', value: 'Nilai A (96/100)' },
      { label: 'Modul Selesai', value: '6 Modul Utama' },
      { label: 'Waktu Input Resep', value: '< 45 Detik' }
    ],
    features: [
      'Pencarian riwayat rekam medis pasien dengan indeks fuzzy search cepat',
      'Peringatan otomatis jika obat resep memiliki kontraindikasi alergi pasien',
      'Generator QR Code untuk validasi keaslian resep dokter di apotek',
      'Laporan stok obat otomatis dengan threshold restock reminder'
    ],
    challenges: 'Menjaga keamanan data privasi medis pasien serta kepatuhan struktur database relasional normalisasi tingkat ketiga (3NF).',
    solution: 'Menerapkan enkripsi AES-256 pada field sensitif (NIK, riwayat diagnosis) dan skema database relasional dengan Prisma ORM yang ketat.',
    githubUrl: 'https://github.com/respatihimawan/medilog-clinic-system',
    courseName: 'Mata Kuliah Rekayasa Perangkat Lunak Lanjut',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'SakuCerdas: Asisten Manajemen Finansial Mahasiswa Mandiri',
    category: 'personal',
    categoryLabel: 'Proyek Mandiri & Kompetisi',
    subtitle: 'Aplikasi web pencatat pengeluaran harian mahasiswa dengan rekomendasi penghematan cerdas.',
    description: 'Membantu mahasiswa mengelola uang saku bulanan, memproyeksikan sisa anggaran harian, dan mendeteksi kategori pemborosan secara visual.',
    longDescription: 'Berawal dari keluhan rekan-rekan asrama mengenai sulitnya mengatur anggaran makan dan bayar kos. Aplikasi ini dirancang dengan antarmuka mobile-friendly, input cepat <10 detik, dan grafik perbandingan tren pengeluaran mingguan.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    period: 'Mei 2023 – Juli 2023',
    role: 'Solo Creator & Developer',
    technologies: ['React', 'TypeScript', 'IndexedDB', 'Chart.js', 'Tailwind CSS', 'PWA (Progressive Web App)'],
    metrics: [
      { label: 'Juara 2', value: 'Inovasi App Mahasiswa' },
      { label: 'Pengguna Aktif', value: '450+ Mahasiswa' },
      { label: 'Dukungan Offline', value: '100% PWA Support' }
    ],
    features: [
      'Dapat diinstal di smartphone (PWA) dan digunakan secara offline tanpa internet',
      'Smart budgeting calculator: alokasi 50/30/20 yang disesuaikan untuk mahasiswa',
      'Fitur split bill instan dengan format teks ramah WhatsApp',
      'Export riwayat transaksi bulanan ke format CSV/Excel'
    ],
    challenges: 'Memastikan aplikasi tetap berfungsi mulus di perangkat smartphone entry-level dengan koneksi internet kampus yang tidak stabil.',
    solution: 'Memanfaatkan teknologi Service Workers dan caching IndexedDB lokal dengan sinkronisasi background saat internet kembali tersedia.',
    githubUrl: 'https://github.com/respatihimawan/sakucerdas-budgeting',
    liveUrl: 'https://sakucerdas.vercel.app',
    courseName: 'Kompetisi Inovasi Perangkat Lunak Kampus 2023',
    featured: false
  },
  {
    id: 'proj-5',
    title: 'DevCollab: Real-Time Markdown Notes & Code Snippet Sharing',
    category: 'college',
    categoryLabel: 'Proyek Kuliah Jaringan & Sistem Terdistribusi',
    subtitle: 'Editor catatan kolaboratif real-time multi-user dengan syntax highlighting.',
    description: 'Platform kolaborasi catatan kuliah bersama secara live menggunakan WebSockets dengan sistem conflict resolution berbasis operational transformation sederhana.',
    longDescription: 'Dibuat untuk memfasilitasi kerja kelompok mahasiswa dalam menyusun laporan laboratorium dan catatan coding bersama. Pengguna dapat melihat kursor pengguna lain yang sedang mengetik secara bersamaan.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    period: 'Maret 2023 – Juni 2023',
    role: 'Backend & WebSocket Specialist',
    technologies: ['Node.js', 'Socket.io', 'React', 'Monaco Editor', 'Redis', 'Docker'],
    metrics: [
      { label: 'Sync Latency', value: '< 25ms' },
      { label: 'Concurrent Users', value: '50+ per Room' },
      { label: 'Nilai Proyek', value: 'A (Top Tier)' }
    ],
    features: [
      'Sinkronisasi ketikan teks instan antar tab/perangkat',
      'Dukungan Markdown preview live dan rendering syntax kode 15+ bahasa',
      'Room privat dengan password dan sistem permission (Viewer vs Editor)',
      'Simpan riwayat versi revisi per 5 menit'
    ],
    challenges: 'Mencegah tumpang tindih data (race conditions) ketika dua user mengetik di baris yang sama secara simultan.',
    solution: 'Menerapkan operational diffing algorithm dan pub/sub channel Redis untuk broadcast perubahan ke client yang relevan.',
    githubUrl: 'https://github.com/respatihimawan/devcollab-realtime',
    courseName: 'Mata Kuliah Sistem Terdistribusi',
    featured: false
  }
];

export const internshipsData: Internship[] = [
  {
    id: 'intern-1',
    company: 'PT Telkom Indonesia (Persero) Tbk',
    companyLogo: 'Telkom',
    role: 'Software Engineer Intern – Digital Services Division',
    type: 'Program Magang Industri Bersertifikat (MSIB)',
    location: 'Bandung / Hybrid',
    period: 'Agustus 2023 – Januari 2024 (6 Bulan)',
    description: 'Terlibat dalam pengembangan dan pemeliharaan platform portal enterprise layanan B2B Telkom. Bertanggung jawab atas migrasi komponen antarmuka lama ke React 18, peningkatan kecepatan query API, dan penulisan unit test.',
    keyAchievements: [
      'Mengembangkan 12+ modul dashboard analitik pelanggan korporasi menggunakan React, TypeScript, dan Tailwind CSS.',
      'Mengurangi load time halaman monitoring tagihan enterprise sebesar 38% melalui implementasi lazy loading dan query memoization.',
      'Menulis lebih dari 65+ unit test dan integration test menggunakan Jest & React Testing Library, meningkatkan test coverage modul hingga 82%.',
      'Berkolaborasi erat dalam sprint 2 mingguan dengan Senior Engineer, UI/UX Designer, dan Product Owner.'
    ],
    techStack: ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'RESTful API', 'Jest', 'GitLab CI/CD', 'Jira'],
    mentorName: 'Budi Prasetyo, S.T., M.Kom (Lead Software Architect)',
    certificateRefId: 'cert-1'
  },
  {
    id: 'intern-2',
    company: 'Nusantara Logic Solusindo',
    companyLogo: 'Nusantara',
    role: 'Junior Web Developer Intern',
    type: 'Magang Kerja Praktik Mandiri',
    location: 'Yogyakarta / On-site',
    period: 'Juni 2023 – Agustus 2023 (3 Bulan)',
    description: 'Membantu tim konsultan IT software house dalam membangun aplikasi e-commerce UMKM dan sistem inventori pergudangan untuk klien retail regional.',
    keyAchievements: [
      'Merancang skema database PostgreSQL untuk 3 proyek klien dengan relasi transaksi e-commerce yang teroptimasi.',
      'Mengintegrasikan payment gateway Midtrans (Virtual Account, QRIS, e-Wallet) dengan webhook status pembayaran otomatis.',
      'Menyusun dokumentasi endpoint API interaktif menggunakan Swagger / OpenAPI spec untuk memudahkan konsumsi oleh mobile developer.'
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Midtrans API', 'Docker', 'Postman'],
    mentorName: 'Arya Wicaksono (Senior Full-Stack Consultant)',
    certificateRefId: 'cert-4'
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    description: 'Pengembangan antarmuka web modern dengan fokus pada performa, aksesibilitas, dan arsitektur komponen terstruktur.',
    skills: [
      { name: 'React.js', level: 'Expert', levelPercentage: 92, years: '3 Tahun', isKeySkill: true, relatedCertId: 'cert-2' },
      { name: 'TypeScript', level: 'Expert', levelPercentage: 90, years: '2.5 Tahun', isKeySkill: true, relatedCertId: 'cert-2' },
      { name: 'Tailwind CSS', level: 'Expert', levelPercentage: 95, years: '3 Tahun', isKeySkill: true },
      { name: 'Next.js', level: 'Advanced', levelPercentage: 85, years: '2 Tahun', isKeySkill: true },
      { name: 'State Management (Redux/Zustand)', level: 'Advanced', levelPercentage: 86, years: '2.5 Tahun' },
      { name: 'HTML5 / Semantic Web & Accessibility', level: 'Expert', levelPercentage: 95, years: '4 Tahun' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend, API & Database',
    description: 'Perancangan layanan API andal, keamanan transaksi data, dan pemodelan skema database relasional maupun non-relasional.',
    skills: [
      { name: 'Node.js & Express', level: 'Expert', levelPercentage: 90, years: '3 Tahun', isKeySkill: true, relatedCertId: 'cert-2' },
      { name: 'PostgreSQL & SQL Design', level: 'Advanced', levelPercentage: 88, years: '3 Tahun', isKeySkill: true },
      { name: 'RESTful API Architecture', level: 'Expert', levelPercentage: 92, years: '3 Tahun', isKeySkill: true },
      { name: 'Python (FastAPI / Basic Data Analysis)', level: 'Advanced', levelPercentage: 80, years: '2 Tahun' },
      { name: 'Prisma ORM & Sequelize', level: 'Advanced', levelPercentage: 85, years: '2 Tahun' },
      { name: 'Redis Caching & Message Queues', level: 'Intermediate', levelPercentage: 75, years: '1.5 Tahun' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Tools',
    description: 'Implementasi deployment aplikasi pada infrastruktur awan, kontainerisasi, dan otomatisasi alur kerja CI/CD.',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 'Advanced', levelPercentage: 85, years: '2 Tahun', isKeySkill: true, relatedCertId: 'cert-1' },
      { name: 'Docker & Containerization', level: 'Advanced', levelPercentage: 82, years: '2 Tahun', isKeySkill: true },
      { name: 'Git & GitHub Workflow', level: 'Expert', levelPercentage: 94, years: '4 Tahun', isKeySkill: true },
      { name: 'CI/CD Pipelines (GitHub Actions/GitLab)', level: 'Intermediate', levelPercentage: 78, years: '1.5 Tahun' },
      { name: 'Linux Server Administration', level: 'Advanced', levelPercentage: 80, years: '2.5 Tahun' }
    ]
  },
  {
    id: 'methods',
    title: 'Metodologi Rekayasa & Praktik Kerja',
    description: 'Standar rekayasa perangkat lunak profesional untuk mendukung kerja sama tim dan keberhasilan rilis produk.',
    skills: [
      { name: 'Agile & Scrum Framework', level: 'Advanced', levelPercentage: 90, years: '2.5 Tahun', isKeySkill: true },
      { name: 'Clean Code & SOLID Principles', level: 'Expert', levelPercentage: 88, years: '3 Tahun' },
      { name: 'Unit Testing & TDD (Jest/Vitest)', level: 'Advanced', levelPercentage: 82, years: '2 Tahun' },
      { name: 'Code Review & Technical Documentation', level: 'Expert', levelPercentage: 90, years: '3 Tahun' }
    ]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    issuerLogoText: 'GCP',
    issueDate: 'Januari 2024',
    expiryDate: 'Januari 2027',
    credentialId: 'GCP-ACE-2024-RH98124',
    verificationUrl: 'https://www.credential.net/google-cloud-associate-cloud-engineer',
    skills: ['Google Cloud Platform', 'Compute Engine', 'Cloud Run', 'IAM Security', 'Kubernetes Engine', 'VPC Networking'],
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    description: 'Validasi kemampuan resmi dari Google untuk men-deploy aplikasi, memonitor operasi infrastruktur cloud, dan mengonfigurasi akses keamanan berbasis IAM.',
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Sertifikasi Internasional Resmi Google'
  },
  {
    id: 'cert-2',
    title: 'Menjadi Front-End Web Developer Expert (React & Testing)',
    issuer: 'Dicoding Indonesia & Kemendikbud',
    issuerLogoText: 'DICODING',
    issueDate: 'Desember 2023',
    credentialId: 'DCD-FE-EXP-2023-8821',
    verificationUrl: 'https://www.dicoding.com/certificates/DCD-FE-EXP-2023-8821',
    skills: ['React.js', 'Clean Architecture', 'Progressive Web Apps (PWA)', 'Web Performance', 'End-to-End Testing (Cypress)'],
    category: 'web',
    categoryLabel: 'Web Engineering',
    description: 'Kurikulum standar industri mencakup arsitektur komponen React tingkat lanjut, optimasi performa Core Web Vitals, testing otomatis, dan otomasi CI/CD.',
    previewImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Nilai Submission Bintang 5 / Sempurna'
  },
  {
    id: 'cert-3',
    title: 'Graduate with Distinction – Bangkit Academy 2023',
    issuer: 'Google, GoTo, Traveloka & Kemendikbudristek',
    issuerLogoText: 'BANGKIT',
    issueDate: 'Januari 2024',
    credentialId: 'BKT-2023-DIST-09214',
    verificationUrl: 'https://grow.google/intl/id_id/bangkit/',
    skills: ['Cloud Computing', 'System Design', 'Tech Leadership', 'Professional English', 'Team Capstone'],
    category: 'cloud',
    categoryLabel: 'Program Prestasi Nasional',
    description: 'Penghargaan lulusan terbaik Top 10% dari 5,000+ mahasiswa peserta program Bangkit Academy se-Indonesia yang diselenggarakan konsorsium Google & Unicorn nasional.',
    previewImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Top 10% Distinction Graduate'
  },
  {
    id: 'cert-4',
    title: 'Sertifikat Selesai Magang Industri – PT Telkom Indonesia',
    issuer: 'PT Telkom Indonesia (Persero) Tbk',
    issuerLogoText: 'TELKOM',
    issueDate: 'Januari 2024',
    credentialId: 'TELKOM-MSIB-DSD-2024-041',
    verificationUrl: 'https://kampusmerdeka.kemdikbud.go.id/',
    skills: ['React 18', 'Enterprise Software', 'Agile/Scrum', 'Redux', 'System Integration'],
    category: 'web',
    categoryLabel: 'Magang Industri',
    description: 'Surat bukti penyelesaian magang 6 bulan penuh waktu dengan predikat kinerja "Sangat Baik (A)" di divisi layanan digital enterprise Telkom.',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Predikat Kinerja: Sangat Baik (A)'
  },
  {
    id: 'cert-5',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issuerLogoText: 'AWS',
    issueDate: 'Oktober 2023',
    expiryDate: 'Oktober 2026',
    credentialId: 'AWS-CCP-2023-77419',
    verificationUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS Services', 'EC2', 'S3 Storage', 'Cloud Security', 'Billing & Architecture'],
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    description: 'Pemahaman menyeluruh tentang arsitektur awan AWS, tata kelola keamanan cloud, keandalan operasional, dan kepatuhan data.',
    previewImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Skor Ujian: 890 / 1000'
  },
  {
    id: 'cert-6',
    title: 'Juara 2 Hackathon Inovasi Solusi Digital Kampus Nasional',
    issuer: 'Fakultas MIPA & IEEE Student Branch',
    issuerLogoText: 'HACKATHON',
    issueDate: 'November 2023',
    credentialId: 'HACK-CAMPUS-2023-002',
    verificationUrl: 'https://ieee.org',
    skills: ['Rapid Prototyping', 'Full-Stack Development', 'Product Pitching', 'API Integration'],
    category: 'competition',
    categoryLabel: 'Kejuaraan & Prestasi',
    description: 'Membangun purwarupa aplikasi penunjang kemandirian finansial dan pereduksi limbah makanan kampus dalam waktu hackathon 36 jam nonstop.',
    previewImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    scoreOrHonor: 'Podium 2 dari 64 Tim Mahasiswa'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Dr. Ir. Hendra Kusuma, M.T.',
    role: 'Dosen Pembimbing Skripsi & Ketua Lab Sistem Cerdas',
    organization: 'Departemen Ilmu Komputer & Elektronika UGM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    relationship: 'Dosen Pembimbing',
    content: 'Respati adalah salah satu mahasiswa bimbingan terbaik yang pernah saya dampingi. Ia memiliki pemahaman teoritis komputasi yang sangat kuat dibarengi dengan eksekusi kode yang rapi dan terukur. Proyek skripsinya tentang arsitektur sistem informasi akademik berhasil diimplementasikan dengan sangat memuaskan dan layak diacungi jempol.',
    date: 'Juli 2024',
    verified: true,
    linkedInUrl: 'https://linkedin.com',
    rating: 5
  },
  {
    id: 'testi-2',
    name: 'Budi Prasetyo, S.T., M.Kom',
    role: 'Lead Software Architect',
    organization: 'PT Telkom Indonesia (Persero) Tbk',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    relationship: 'Mentor Magang',
    content: 'Selama 6 bulan magang di tim kami, Respati menunjukkan etos kerja setara dengan engineer tingkat junior penuh waktu. Ia cepat beradaptasi dengan basis kode enterprise yang kompleks, proaktif mengajukan solusi saat ada kendala query database, dan selalu tepat waktu menyelesaikan tiket Jira. Sangat direkomendasikan untuk posisi Software Engineer.',
    date: 'Februari 2024',
    verified: true,
    linkedInUrl: 'https://linkedin.com',
    rating: 5
  },
  {
    id: 'testi-3',
    name: 'Sarah Wijayanti',
    role: 'Product Manager',
    organization: 'Digital Talent Tech Partner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    relationship: 'Tech Lead',
    content: 'Bekerja bersama Respati sangat menyenangkan bagi tim produk. Ia tidak hanya menerjemahkan desain Figma ke kode piksel-presisi, tetapi juga memberikan masukan berharga mengenai kepraktisan interaksi pengguna dan penanganan edge case yang luput dari pertimbangan awal kami.',
    date: 'Desember 2023',
    verified: true,
    linkedInUrl: 'https://linkedin.com',
    rating: 5
  },
  {
    id: 'testi-4',
    name: 'Dimas Pratama',
    role: 'Backend Colleague & Hackathon Teammate',
    organization: 'Alumni Ilmu Komputer UGM',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    relationship: 'Rekan Proyek',
    content: 'Respati adalah partner coding impian. Saat kami berjuang di hackathon 36 jam, ia menjaga ketenangan tim, merapikan struktur API contract dengan jelas, dan memastikan pengujian aplikasi berjalan tanpa bug saat sesi live demo di depan dewan juri.',
    date: 'November 2023',
    verified: true,
    linkedInUrl: 'https://linkedin.com',
    rating: 5
  }
];
