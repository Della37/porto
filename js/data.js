/**
 * data.js - Data Terpusat Portofolio Web Della Arthamevia
 * 
 * Berisi informasi profil resmi, rekam jejak pengalaman kerja,
 * pelatihan bersertifikat, keahlian, dan riwayat pendidikan sesuai CV resmi.
 */

const portfolioData = {
  profile: {
    fullName: "Della Arthamevia",
    preferredName: "Della",
    title: "S1 Teknik Kimia | Dokumen Lingkungan & Kreator Konten Digital",
    tagline: "Penyusunan Dokumen Lingkungan (UKL-UPL & Pertek BMAL), Pengolahan Data Industri, dan Digital Creative.",
    bio: "Lulusan S1 Teknik Kimia UPN 'Veteran' Jawa Timur dengan IPK 3,80. Memiliki pengalaman dalam penyusunan dokumen lingkungan melalui program PKKM dan proyek freelance, pengalaman praktik kerja lapangan di bagian produksi pabrik gula, serta pembuatan konten digital. Terbiasa menggunakan Microsoft Office, Google Docs, Canva dan Capcut dengan baik. Memiliki kemampuan berpikir analitis, sistematis, dan kemauan belajar yang tinggi serta mampu beradaptasi dan bekerjasama dalam tim.",
    avatar: "assets/FOTO%20AKU%20.jpeg",
    statusBadge: "✨ Terbuka untuk Peluang Kerja & Proyek Kolaborasi",
    location: "Gresik, Jawa Timur, Indonesia",
    email: "dellaarth37@gmail.com",
    whatsapp: "+62 857-3642-5509",
    whatsappUrl: "https://wa.me/6285736425509?text=Halo%20Della,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    linkedin: "https://www.linkedin.com/in/della-arthamevia",
    github: "https://github.com/Della37",
    cvUrl: "assets/cv-della-page-1.png"
  },

  stats: [
    { label: "IPK Kelulusan", value: "3.80", icon: "🎓" },
    { label: "Pengalaman & Proyek", value: "4+", icon: "💼" },
    { label: "Sertifikasi Resmi", value: "3", icon: "📜" },
    { label: "Akun Bisnis Dikelola", value: "9", icon: "📱" }
  ],

  // Galeri Karya & Bukti Kontribusi Proyek
  projects: [
    {
      id: "proj-1",
      title: "Penyusunan Dokumen UKL-UPL Fasilitas Olahraga & Rekreasi",
      category: "Dokumen Lingkungan & Regulasi",
      description: "Penyusunan dan revisi draft dokumen UKL-UPL proyek fasilitas olahraga dan rekreasi di Surabaya, mencakup koordinasi langsung dengan DLH Surabaya serta survey lapangan komprehensif.",
      image: "assets/Survey%20lokasi.jpeg",
      tags: ["UKL-UPL", "DLH Surabaya", "Survey Lapangan", "Dokumen Lingkungan"],
      demoUrl: "assets/cover-dokumen-ukl-upl.png",
      githubUrl: "https://github.com/Della37/porto"
    },
    {
      id: "proj-2",
      title: "Publikasi Artikel Ilmiah Jurnal Serambi Engineering (SINTA 4)",
      category: "Publikasi Ilmiah & Riset",
      description: "Penulisan dan publikasi artikel ilmiah hasil riset Teknik Kimia yang terindeks SINTA 4 pada jurnal nasional bereputasi Serambi Engineering.",
      image: "assets/jurnal%20ss.jpeg",
      tags: ["Teknik Kimia", "SINTA 4", "Riset Ilmiah", "Serambi Engineering"],
      demoUrl: "assets/jurnal%20ss.jpeg",
      githubUrl: "https://github.com/Della37/porto"
    },
    {
      id: "proj-3",
      title: "Manajemen & Produksi Konten Promosi 9 Akun Bisnis",
      category: "Creative Media & Digital Content",
      description: "Perencanaan kalender konten, pembuatan, dan penyuntingan video promosi menggunakan Canva dan CapCut untuk 9 akun bisnis dengan pencapaian hingga 25.000 tayangan bulanan.",
      image: "assets/dts%20.jpeg",
      tags: ["Canva", "CapCut", "Kalender Konten", "Instagram & TikTok", "Video Promosi"],
      demoUrl: "assets/dts%202.mp4",
      githubUrl: "https://github.com/Della37/porto"
    },
    {
      id: "proj-4",
      title: "Evaluasi Kinerja Rotary Vacuum Filter (RVF) Pabrik Gula",
      category: "Praktik Industri & Evaluasi Proses",
      description: "Pengumpulan dan pengolahan data operasional 15 hari pengamatan untuk evaluasi kinerja alat RVF, analisis jumlah nira kotor & pol blotong, serta pengarsipan data kualitas udara ambien.",
      image: "assets/PKL.jpeg",
      tags: ["Rotary Vacuum Filter", "Nira Kotor", "Pol Blotong", "Kualitas Udara", "PG Gempolkrep"],
      demoUrl: "assets/PKL%202.jpeg",
      githubUrl: "https://github.com/Della37/porto"
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Freelance Projek Dokumen Lingkungan",
      company: "Proyek Fasilitas Olahraga & Rekreasi (DLH Surabaya)",
      type: "Kontrak",
      period: "Maret 2026 — Juli 2026",
      location: "Surabaya, Jawa Timur",
      summary: "Bertindak sebagai narahubung utama dalam proses perubahan dokumen UKL-UPL dan pelaksanaan survey teknis lapangan.",
      achievements: [
        "Menjadi narahubung dalam koordinasi 1 proyek proses perubahan dokumen UKL-UPL dengan Dinas Lingkungan Hidup (DLH) Surabaya, termasuk penyampaian kelengkapan dokumen.",
        "Melakukan survey lokasi kegiatan untuk mengumpulkan data-data yang diperlukan dalam penyusunan dokumen UKL-UPL proyek fasilitas olahraga dan rekreasi.",
        "Membantu penyusunan draft UKL-UPL untuk proyek fasilitas olahraga dan rekreasi berdasarkan arahan mentor melalui pertemuan daring 1 kali dalam seminggu serta melakukan revisi draft UKL-UPL sesuai masukan mentor."
      ]
    },
    {
      id: "exp-2",
      role: "Konten Kreator",
      company: "CV. Dari Teman Sejati",
      type: "Penuh Waktu (Full Time)",
      period: "Juni 2025 — September 2025",
      location: "Gresik / Jawa Timur",
      summary: "Mengelola strategi dan produksi konten digital harian untuk 9 akun bisnis lintas sektor industri.",
      achievements: [
        "Merencanakan ide dan kalender konten bulanan untuk 9 akun bisnis, meliputi 3 kafe, 4 produk herbal, 1 konten pertanian, dan 1 destinasi wisata melalui Instagram dan TikTok.",
        "Membuat, mengambil, dan mengedit konten promosi menggunakan Canva dan CapCut dengan target publikasi 5 dari 9 akun bisnis setiap hari.",
        "Mengatur alur kerja konten bulanan, mencakup perencanaan ide, evaluasi konten, pengambilan konten langsung di lokasi, serta penyuntingan dan publikasi dengan pencapaian jangkauan hingga 25 ribu penayangan.",
        "Melakukan peninjauan dan revisi konten serta menargetkan pertumbuhan followers tiap akun sekitar 100–150 per bulan."
      ]
    },
    {
      id: "exp-3",
      role: "Praktik Kerja Lapangan (PKL)",
      company: "PT Sinergi Gula Nusantara Pabrik Gula Gempolkrep",
      type: "Magang (Internship)",
      period: "Juni 2024 — Juli 2024",
      location: "Mojokerto, Jawa Timur",
      summary: "Memahami alur proses produksi gula, mengevaluasi kinerja filtrasi RVF, dan membantu dokumentasi lingkungan.",
      achievements: [
        "Melakukan observasi lapangan secara langsung untuk memahami alur proses produksi dan sistem kerja alat di tiap stasiun produksi.",
        "Mengumpulkan dan mengolah data operasional selama 15 hari pengamatan (16–30 Juni 2024) untuk mengevaluasi kinerja Rotary Vacuum Filter (RVF).",
        "Menganalisis data produksi berupa jumlah nira kotor dan pol blotong pada alat RVF.",
        "Membantu dokumentasi lingkungan melalui pengunggahan dan pengarsipan data kualitas udara ambien pada sistem berbasis web."
      ]
    },
    {
      id: "exp-4",
      role: "PKKM Studi Independen",
      company: "PT Mitra Hijau Indonesia",
      type: "Program Kompetisi Kampus Merdeka",
      period: "September 2023 — Desember 2023",
      location: "Indonesia",
      summary: "Kajian teknis dan penyusunan dokumen baku mutu air limbah industri.",
      achievements: [
        "Berkontribusi dalam penyusunan dokumen Persetujuan Teknis Pemenuhan Baku Mutu Air Limbah (Pertek BMAL) untuk 5 perusahaan.",
        "Mengumpulkan dan menyusun data teknis sebagai bahan pendukung penyusunan dokumen lingkungan.",
        "Melakukan studi literatur dan kajian teknis efisiensi penyisihan (removal efficiency) untuk lebih dari 10 parameter pencemar pada berbagai unit pengolahan air limbah.",
        "Melakukan lebih dari 4 kali evaluasi guna memastikan akurasi data serta kepatuhan regulasi sebelum pengumpulan dokumen final."
      ]
    }
  ],

  trainings: [
    {
      id: "cert-1",
      title: "Ahli K3 Madya",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2024",
      credentialId: "BNSP-K3-MADYA",
      credentialUrl: "assets/sertif%20ahli%20k3%201.jpeg",
      badge: "Sertifikasi Nasional BNSP",
      summary: "Sertifikasi kompetensi nasional untuk pengelolaan keselamatan dan kesehatan kerja (K3), identifikasi bahaya, penilaian risiko, serta kepatuhan standar K3 di lingkungan kerja industri.",
      skillsAcquired: ["Keselamatan & Kesehatan Kerja (K3)", "Hazard Identification", "Risk Assessment", "Regulasi K3 Nasional"]
    },
    {
      id: "cert-2",
      title: "Kelas Canva AI — Empowering Muslimah",
      issuer: "Empowering Muslimah",
      year: "2024",
      credentialId: "EM-CANVA-AI",
      credentialUrl: "#",
      badge: "Pelatihan Kreatif Digital",
      summary: "Pelatihan intensif pemanfaatan fitur kecerdasan buatan (AI) pada Canva untuk perancangan visual, otomatisasi desain promosi, dan kreasi konten media sosial.",
      skillsAcquired: ["Canva AI Tools", "Visual Content Design", "Social Media Branding", "Prompting Desain Visual"]
    },
    {
      id: "cert-3",
      title: "Software Training Series",
      issuer: "Universitas Indonesia",
      year: "2023",
      credentialId: "UI-STS-2023",
      credentialUrl: "assets/Sertifikat_Kegiatan_Pelatihan_Pengolahan_Data_page-0001.jpg",
      badge: "Pelatihan Perguruan Tinggi",
      summary: "Program pelatihan terpadu pengoperasian perangkat lunak analisis dan pengolahan data teknis guna menunjang riset keteknikan dan simulasi proses.",
      skillsAcquired: ["Pengolahan Data Teknis", "Software Engineering Tools", "Analisis Data Kuantitatif", "Dokumentasi Teknis"]
    }
  ],

  skills: [
    // Kemampuan Teknis & Lingkungan
    { id: "sk-1", name: "Penyusunan Dokumen Lingkungan (UKL-UPL & Pertek BMAL)", category: "technical", level: 92, levelLabel: "Tingkat Ahli", icon: "🌱" },
    { id: "sk-2", name: "Evaluasi Rotary Vacuum Filter (RVF) & Proses Kimia", category: "technical", level: 90, levelLabel: "Tingkat Ahli", icon: "⚙️" },
    { id: "sk-3", name: "Analisis Data Produksi (Nira Kotor & Pol Blotong)", category: "technical", level: 88, levelLabel: "Mahir", icon: "📊" },
    { id: "sk-4", name: "K3 (Keselamatan & Kesehatan Kerja - Ahli Madya)", category: "technical", level: 90, levelLabel: "Bersertifikat BNSP", icon: "🦺" },
    { id: "sk-5", name: "Pengolahan Data Kualitas Udara Ambien & Air Limbah", category: "technical", level: 86, levelLabel: "Mahir", icon: "💧" },

    // Perangkat Lunak & Tools
    { id: "sk-6", name: "Microsoft Office (Excel, Word, PowerPoint)", category: "tools", level: 95, levelLabel: "Tingkat Ahli", icon: "📄" },
    { id: "sk-7", name: "Google Docs & Workspace Kolaborasi", category: "tools", level: 94, levelLabel: "Tingkat Ahli", icon: "📂" },
    { id: "sk-8", name: "Canva & Canva AI (Desain Konten & Promosi)", category: "tools", level: 92, levelLabel: "Tingkat Ahli", icon: "🎨" },
    { id: "sk-9", name: "CapCut (Video Editing & Social Media Marketing)", category: "tools", level: 90, levelLabel: "Mahir", icon: "🎬" },

    // Personal & Soft Skills
    { id: "sk-10", name: "Berpikir Analitis & Sistematis", category: "softskills", level: 94, levelLabel: "Sangat Baik", icon: "💡" },
    { id: "sk-11", name: "Manajemen Waktu & Ketepatan Deadline", category: "softskills", level: 95, levelLabel: "Teladan", icon: "⏱️" },
    { id: "sk-12", name: "Kemampuan Adaptasi & Pembelajaran Cepat", category: "softskills", level: 95, levelLabel: "Teladan", icon: "🌱" },
    { id: "sk-13", name: "Kerjasama Tim & Komunikasi Efektif", category: "softskills", level: 92, levelLabel: "Sangat Baik", icon: "🤝" },
    { id: "sk-14", name: "Disiplin & Tanggung Jawab Tinggi", category: "softskills", level: 95, levelLabel: "Teladan", icon: "⭐" }
  ],

  skillCategories: [
    { key: "all", label: "✨ Semua Keahlian" },
    { key: "technical", label: "🌱 Teknis Lingkungan & Kimia" },
    { key: "tools", label: "💻 Perangkat Lunak (Software)" },
    { key: "softskills", label: "🤝 Soft Skills & Karakter" }
  ],

  education: [
    {
      degree: "S1 - Teknik Kimia (IPK 3,80 / 4.00)",
      institution: "UPN “Veteran” Jawa Timur",
      period: "Agustus 2021 — September 2026",
      gpa: "Predikat Sangat Memuaskan (IPK 3,80)",
      highlights: "Mengikuti Program Kompetisi Kampus Merdeka (PKKM) melalui Studi Independen di PT Mitra Hijau Indonesia (2023) dan publikasi artikel ilmiah pada jurnal Serambi Engineering terindeks SINTA 4 (2026)."
    }
  ],

  organizations: [
    {
      role: "Sekretaris",
      name: "Kuliah Kerja Nyata (KKN) Desa Klurak, Sidoarjo",
      period: "Juli 2024 — Agustus 2024",
      desc: "Bertanggung jawab atas administrasi kegiatan KKN, korespondensi dengan perangkat desa, serta pelaporan program kerja pengabdian masyarakat."
    },
    {
      role: "Departemen Kominfo",
      name: "Mahasiswa Al-Muhandis",
      period: "Maret 2023 — Oktober 2024",
      desc: "Mengelola saluran publikasi dan komunikasi visual organisasi, pembuatan konten informasi, dan dokumentasi kegiatan."
    },
    {
      role: "Anggota",
      name: "UKM Badminton",
      period: "September 2021 — Oktober 2023",
      desc: "Berpartisipasi aktif dalam sesi latihan rutin, pengembangan minat olahraga, dan kepanitiaan kegiatan UKM."
    }
  ],

  languages: [
    { name: "Bahasa Indonesia", level: "Penutur Asli (Native)" },
    { name: "Bahasa Inggris", level: "Menengah (Intermediate)" }
  ]
};

// Export secara global ke window untuk digunakan oleh app.js
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
