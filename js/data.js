/**
 * data.js - Data Terpusat Portofolio Web
 * 
 * Anda dapat dengan mudah mengubah atau menambahkan data diri, proyek portofolio,
 * pengalaman, pelatihan, dan keahlian di file ini kapan saja.
 */

const portfolioData = {
  profile: {
    fullName: "Alya Safira Putri",
    preferredName: "Alya",
    title: "Digital Creative & Web Frontend Specialist",
    tagline: "Menciptakan antarmuka web modern, interaktif, dan berpusat pada pengalaman pengguna.",
    bio: "Profesional kreatif dengan pengalaman lebih dari 3 tahun dalam merancang dan mengembangkan antarmuka web modern yang estetis, responsif, dan mudah diakses. Terbiasa memadukan kepekaan estetika desain visual dengan kode web yang bersih serta terstruktur untuk menciptakan produk digital bernilai tinggi.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    statusBadge: "✨ Terbuka untuk Peluang Kerja & Proyek Kolaborasi",
    location: "Jakarta & Bandung, Indonesia",
    email: "alya.safira@example.com",
    whatsapp: "+62 812-3456-7890",
    whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Alya,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    linkedin: "https://linkedin.com/in/alya-safira-demo",
    github: "https://github.com/alya-safira-demo",
    dribbble: "https://dribbble.com/alya-safira-demo",
    cvUrl: "cv.pdf" // Ganti dengan path atau link Google Drive CV Anda
  },

  stats: [
    { label: "Tahun Pengalaman", value: "3+", icon: "💼" },
    { label: "Proyek Selesai", value: "24+", icon: "🚀" },
    { label: "Sertifikasi Resmi", value: "8+", icon: "📜" },
    { label: "Kepuasan Klien", value: "98%", icon: "⭐" }
  ],

  // Galeri Karya & Proyek Unggulan (Portfolio Showcase)
  projects: [
    {
      id: "proj-1",
      title: "Lumina Beauty & Wellness E-Commerce",
      category: "Web Development & UI Design",
      description: "Platform e-commerce produk kecantikan modern dengan katalog interaktif, keranjang belanja dinamis, dan antarmuka bernuansa soft pastel yang memikat.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
      tags: ["HTML5", "Modern CSS", "JavaScript", "Figma"],
      demoUrl: "https://example.com/demo-lumina",
      githubUrl: "https://github.com/alya-safira-demo/lumina-beauty"
    },
    {
      id: "proj-2",
      title: "Bloom Studio Creative Agency Portfolio",
      category: "Creative Branding & Website",
      description: "Website agensi kreatif berkonsep glassmorphism kontemporer dengan animasi scroll yang halus, tipografi ekspresif, dan performa tinggi (PageSpeed 98).",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      tags: ["Glassmorphism", "CSS Grid", "Micro-interactions", "SEO"],
      demoUrl: "https://example.com/demo-bloom",
      githubUrl: "https://github.com/alya-safira-demo/bloom-agency"
    },
    {
      id: "proj-3",
      title: "Serenata Cafe & Artisan Bakery Web Experience",
      category: "UI/UX & Interactive Web",
      description: "Desain dan implementasi website interaktif kafe artisan dengan menu digital interaktif, sistem reservasi meja cepat, dan integrasi WhatsApp instan.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80",
      tags: ["Mobile First", "Vanilla JS", "Flexbox", "UI/UX"],
      demoUrl: "https://example.com/demo-serenata",
      githubUrl: "https://github.com/alya-safira-demo/serenata-cafe"
    },
    {
      id: "proj-4",
      title: "TaskFlow Productivity Dashboard UI",
      category: "Dashboard & Design System",
      description: "Antarmuka dashboard manajemen tugas kolaboratif dengan visualisasi metrik performa mingguan, tema warna cerah, dan komponen modular ramah pengguna.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
      tags: ["Design System", "CSS Variables", "Data Visualization", "Figma"],
      demoUrl: "https://example.com/demo-taskflow",
      githubUrl: "https://github.com/alya-safira-demo/taskflow-ui"
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Lead Frontend Web Specialist",
      company: "Studio Kreatif Nusantara (PT Kreasi Digital)",
      type: "Penuh Waktu (Full-time)",
      period: "Januari 2024 — Sekarang",
      location: "Jakarta Selatan (Hybrid)",
      summary: "Memimpin pengembangan antarmuka pengguna untuk web application dan landing page klien multinasional dengan standar performa dan aksesibilitas tinggi.",
      achievements: [
        "Membangun arsitektur komponen antarmuka yang mempercepat proses prototyping tim hingga 35%.",
        "Mengoptimalkan Core Web Vitals pada 10+ situs klien hingga meraih skor performa Google PageSpeed 95+.",
        "Berkolaborasi erat bersama tim UI/UX Designer dan Product Manager dalam merealisasikan desain interaktif berdaya guna tinggi."
      ]
    },
    {
      id: "exp-2",
      role: "Junior Web Developer & UI Designer",
      company: "Inovasi Media Mandiri",
      type: "Penuh Waktu (Full-time)",
      period: "Agustus 2022 — Desember 2023",
      location: "Bandung, Jawa Barat",
      summary: "Bertanggung jawab atas perancangan antarmuka pengguna (UI) serta slicing ke dalam kode HTML, CSS modern, dan JavaScript interaktif.",
      achievements: [
        "Merancang dan meluncurkan 12 template website responsif yang diadopsi oleh lebih dari 50 UMKM.",
        "Mengurangi tingkat keluhan bug tata letak tampilan perangkat seluler (mobile responsiveness) hingga 40%.",
        "Mendokumentasikan design system dan panduan gaya kode CSS untuk standarisasi proyek internal."
      ]
    },
    {
      id: "exp-3",
      role: "Creative Media & Web Intern",
      company: "Digital Youth Hub Indonesia",
      type: "Magang (Internship)",
      period: "Februari 2022 — Juli 2022",
      location: "Bandung, Jawa Barat",
      summary: "Mendukung tim kampanye digital dalam pembuatan aset visual interaktif dan halaman portal kegiatan pemuda berskala nasional.",
      achievements: [
        "Membuat micro-site pendaftaran event yang dikunjungi oleh lebih dari 15.000 peserta dalam 2 minggu.",
        "Mengelola pembaruan konten dan grafis promosi secara konsisten tepat waktu."
      ]
    }
  ],

  trainings: [
    {
      id: "cert-1",
      title: "Front-End Web Development Professional Certificate",
      issuer: "Dicoding Indonesia & Kemkominfo",
      year: "2024",
      credentialId: "DCD-FE-2024-99812",
      credentialUrl: "https://www.dicoding.com/certificates/sample",
      badge: "Terakreditasi",
      summary: "Pelatihan komprehensif mencakup standar HTML5 semantik, CSS Grid/Flexbox tingkat lanjut, modularitas JavaScript ES6, Progressive Web Apps, dan Web Performance Optimization.",
      skillsAcquired: ["HTML5 Semantic", "Modern CSS & Responsive Design", "ES6+ Architecture", "Accessibility (a11y)"]
    },
    {
      id: "cert-2",
      title: "Google UX Design Professional Certificate",
      issuer: "Google Career Certificates (Coursera)",
      year: "2023",
      credentialId: "COURSERA-GGL-UX-77401",
      credentialUrl: "https://coursera.org/verify/sample",
      badge: "Sertifikasi Global",
      summary: "Program 7-kursus berstandar industri mencakup fondasi riset pengguna, perancangan wireframe & mockup di Figma, usability testing, serta desain inklusif.",
      skillsAcquired: ["User Research", "Figma Prototyping", "Information Architecture", "Design Systems"]
    },
    {
      id: "cert-3",
      title: "Responsive Web Design & Web Accessibility Specialist",
      issuer: "freeCodeCamp International",
      year: "2023",
      credentialId: "FCC-RWD-55102",
      credentialUrl: "https://freecodecamp.org/certification/sample",
      badge: "Internasional",
      summary: "Mendalami perancangan tata letak fleksibel tanpa framework, Glassmorphism, CSS Custom Properties, animasi transisi CSS3, dan aturan aksesibilitas WCAG.",
      skillsAcquired: ["CSS Variables", "CSS Animation", "Cross-browser Compatibility", "WCAG Standards"]
    },
    {
      id: "cert-4",
      title: "Certified Digital Marketing & Creative Content Strategy",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2022",
      credentialId: "BNSP-DM-2022-3104",
      credentialUrl: "https://bnsp.go.id/sample",
      badge: "Sertifikasi Nasional",
      summary: "Pelatihan standarisasi nasional untuk perencanaan konten visual terpadu, copywriting persuasif, dan analisis metrik engagement media digital.",
      skillsAcquired: ["Content Strategy", "Digital Analytics", "Copywriting", "Creative Direction"]
    }
  ],

  skills: [
    // Technical Skills
    { id: "sk-1", name: "HTML5 Semantik & SEO", category: "technical", level: 95, levelLabel: "Tingkat Ahli", icon: "🌐" },
    { id: "sk-2", name: "Modern CSS3 (Flexbox, Grid, Glassmorphism)", category: "technical", level: 92, levelLabel: "Tingkat Ahli", icon: "🎨" },
    { id: "sk-3", name: "JavaScript Modern (ES6+, DOM, Fetch API)", category: "technical", level: 88, levelLabel: "Mahir", icon: "⚡" },
    { id: "sk-4", name: "Responsive & Mobile-First Design", category: "technical", level: 94, levelLabel: "Tingkat Ahli", icon: "📱" },
    { id: "sk-5", name: "Optimasi Kecepatan & Web Accessibility", category: "technical", level: 85, levelLabel: "Mahir", icon: "🚀" },
    
    // Tools & Design
    { id: "sk-6", name: "Figma (UI/UX Prototyping & Design Systems)", category: "tools", level: 90, levelLabel: "Tingkat Ahli", icon: "📐" },
    { id: "sk-7", name: "Git & GitHub Version Control", category: "tools", level: 84, levelLabel: "Mahir", icon: "🐙" },
    { id: "sk-8", name: "VS Code & Browser DevTools Profiling", category: "tools", level: 92, levelLabel: "Tingkat Ahli", icon: "🛠️" },
    { id: "sk-9", name: "Canva Pro & Adobe Creative Suite Basics", category: "tools", level: 86, levelLabel: "Mahir", icon: "✨" },

    // Soft Skills
    { id: "sk-10", name: "Komunikasi Kolaboratif & Presentasi", category: "softskills", level: 92, levelLabel: "Sangat Baik", icon: "💬" },
    { id: "sk-11", name: "Problem Solving & Critical Thinking", category: "softskills", level: 90, levelLabel: "Sangat Baik", icon: "💡" },
    { id: "sk-12", name: "Manajemen Waktu & Ketepatan Deadline", category: "softskills", level: 95, levelLabel: "Teladan", icon: "⏱️" },
    { id: "sk-13", name: "Kemampuan Adaptasi & Pembelajaran Cepat", category: "softskills", level: 94, levelLabel: "Sangat Baik", icon: "🌱" }
  ],

  skillCategories: [
    { key: "all", label: "✨ Semua Keahlian" },
    { key: "technical", label: "💻 Teknis Web & Kode" },
    { key: "tools", label: "🛠️ Alat & Desain (Tools)" },
    { key: "softskills", label: "🤝 Soft Skills & Kerja Tim" }
  ],

  education: [
    {
      degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
      institution: "Universitas Padjadjaran",
      period: "2018 — 2022",
      gpa: "IPK 3.82 / 4.00 (Cum Laude)",
      highlights: "Ketua Divisi Media & Informasi Himpunan Mahasiswa Informatika (2020-2021)."
    }
  ],

  languages: [
    { name: "Bahasa Indonesia", level: "Penutur Asli (Native)" },
    { name: "Bahasa Inggris", level: "Profesional & Fasih Kerja (Working Proficiency)" }
  ]
};

// Export secara global ke window untuk digunakan oleh app.js
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
