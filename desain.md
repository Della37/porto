# Desain Panduan & Sistem Visual (Design System)
## Web Portofolio — Soft Pastel Rose & Glassmorphism

Dokumen ini mendefinisikan seluruh panduan arsitektur visual, token warna, tipografi, komponen interaktif, dan aturan tata letak untuk website Portofolio Digital.

---

## 1. Filosofi & Visi Desain

Website ini dirancang khusus sebagai **Web Portofolio Visual Berkelas Tinggi** dengan gaya **Soft Pastel Rose & Modern Glassmorphism**:
- **Feminin, Hangat, & Profesional**: Menggunakan rona merah muda (*rose / pastel pink*) yang dipadukan dengan rona *peach*, krim, dan putih susu (*warm milky white*) agar memukau, berkelas, dan dapat diterima di dunia kerja profesional.
- **Kedalaman & Transparansi (Glassmorphism)**: Efek kaca buram (*frosted glass blur*) dengan pantulan cahaya halus (*ambient highlight border*) memberikan kesan modern, bersih (*clean*), dan berdimensi tinggi.
- **Fokus Karya & Kapabilitas**: Menonjolkan galeri proyek kreatif pilihan, rekam jejak pengalaman kerja, kredensial sertifikasi pelatihan, serta matriks keahlian teruji dalam satu alur cerita visual yang kohesif.
- **Akses CV Fleksibel**: Tombol "Unduh CV" terintegrasi langsung untuk mengunduh dokumen CV asli milik Anda.

---

## 2. Palet Warna (Color Palette & Tokens)

Sistem warna didefinisikan secara modular melalui CSS Custom Properties (`:root`):

### A. Rona Utama (Rose & Pink Spectrum)
| Token CSS | Kode HEX | Nilai RGB | Penggunaan |
| :--- | :--- | :--- | :--- |
| `--pink-primary` | `#FF6584` | `255, 101, 132` | Aksen tombol utama, judul penting, status aktif |
| `--pink-deep` | `#E04D6E` | `224, 77, 110` | Hover state tombol utama, teks bertekanan tinggi |
| `--pink-medium` | `#FF8DA1` | `255, 141, 161` | Border aksen, badge kategori, indikator progres |
| `--pink-soft` | `#FFB8C6` | `255, 184, 198` | Gradasi latar kartu, pill tags |
| `--pink-blush` | `#FFE4EB` | `255, 228, 235` | Background badge, hover latar item |
| `--pink-lightest`| `#FFF2F5` | `255, 242, 245` | Lapisan latar belakang sekunder |

### B. Rona Pelengkap (Peach & Warm Glow)
| Token CSS | Kode HEX | Penggunaan |
| :--- | :--- | :--- |
| `--peach-accent` | `#FFA07A` | Gradasi aksen pada tombol dan ornamen lingkaran cahaya |
| `--cream-bg` | `#FFFDFE` | Latar kanvas dasar paling bawah |
| `--gradient-rose` | `linear-gradient(135deg, #FF6584 0%, #FF8DA1 50%, #FFA07A 100%)` | Header gradient, tombol primer, timeline line |

### C. Tipografi & Kontras Teks
| Token CSS | Kode HEX | Penggunaan |
| :--- | :--- | :--- |
| `--text-main` | `#2D2226` | Teks judul dan konten utama (kontras tinggi, tidak hitam mati) |
| `--text-muted` | `#6E5A62` | Teks sekunder, deskripsi, tanggal, metadata institusi |
| `--text-light` | `#96828B` | Caption kecil |
| `--text-on-pink` | `#FFFFFF` | Teks di atas tombol pink utama |

### D. Token Glassmorphism & Shadow
```css
--glass-bg: rgba(255, 255, 255, 0.74);
--glass-bg-subtle: rgba(255, 255, 255, 0.48);
--glass-border: rgba(255, 255, 255, 0.88);
--glass-blur: blur(16px);
--glass-shadow: 0 16px 40px -12px rgba(255, 101, 132, 0.14);
--glass-shadow-hover: 0 20px 48px -10px rgba(255, 101, 132, 0.25);
```

---

## 3. Sistem Tipografi (Typography Hierarchy)

- **Primary Font Family**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Tingkatan Skala**:
  - `Hero Display (h1)`: `clamp(2.3rem, 5vw, 3.3rem)` — Tebal 800, Letter spacing: `-0.03em`
  - `Section Title (h2)`: `clamp(1.8rem, 3.5vw, 2.4rem)` — Tebal 800, dihiasi pil badge pink di atasnya
  - `Item Heading (h3)`: `1.25rem` — Tebal 700
  - `Subheading / Role`: `1.25rem` — Tebal 600, warna `--pink-deep`
  - `Body Text (p)`: `1.0rem` (16px) — Line height 1.65, warna `--text-main`
  - `Meta / Badge`: `0.78rem` - `0.85rem` — Tebal 700

---

## 4. Ornamen & Efek Visual Glassmorphism

1. **Ambient Floating Glow Orbs**:
   - Di latar belakang kanvas terdapat 3 bulatan gradien abstrak (`.bg-glow-orb`) dengan filter `blur(90px)` dan animasi gerak melayang perlahan (*floating pulse*).
   - Menghasilkan pendaran warna pink dan peach yang lembut di balik kartu kaca saat pengguna menggulir halaman.
2. **Frosted Glass Cards (`.glass-panel`)**:
   - Menggunakan `backdrop-filter: blur(16px)` dan `background: rgba(255, 255, 255, 0.74)`.
   - Border halus tipis `1px solid rgba(255, 255, 255, 0.88)`.
   - Efek hover: Terangkat halus (`translateY(-4px)`), bayangan pink makin menyala lembut.

---

## 5. Komponen Utama Portofolio

### A. Navigation & Top Bar
- Sticky bar berkonsep glassmorphism dengan logo monogram inisial nama.
- Navigasi link ke bagian: *Tentang, Proyek, Pengalaman, Pelatihan, Keahlian, Pendidikan, Kontak*.
- Tombol aksi: **"Unduh CV (PDF)"** dan **"Hubungi Saya"**.

### B. Hero Section (Data Diri & Pengenalan)
- Menampilkan foto profil dengan frame melayang dan status badge *"Open to Opportunities"*.
- Nama lengkap, titel profesional (*Digital Creative & Web Frontend Specialist*), dan ringkasan bio persuasif.
- Tombol Quick Actions: WhatsApp Langsung, Salin Email, Unduh CV, dan Lihat Galeri Proyek.
- Kartu Quick Stats ringkas (Tahun Pengalaman, Proyek Selesai, Sertifikasi Resmi, Kepuasan Klien).

### C. Galeri Karya & Proyek Unggulan (Projects Showcase)
- Kartu proyek dengan thumbnail visual beresolusi tinggi, lencana kategori, deskripsi solusi proyek, tag teknologi, serta tombol aksi cepat untuk membuka pratinjau live demo dan repositori kode.

### D. Rekam Jejak Pengalaman Kerja (Timeline)
- Alur vertikal bernuansa rose gradient dengan glowing milestone dot.
- Menyertakan peran, nama perusahaan, tanggal, lokasi, serta poin pencapaian terukur.

### E. Pelatihan & Sertifikasi Profesional
- Kartu sertifikat berlisensi dengan modal dialog pop-up interaktif untuk melihat rincian kompetensi dan nomor kredensial resmi.

### F. Matriks Keahlian (Skills)
- Tab filter kategori: *Semua Keahlian*, *Teknis Web & Kode*, *Alat & Desain*, dan *Soft Skills & Kerja Tim*.
- Dilengkapi indikator progress bar dan level kemahiran (*Tingkat Ahli, Mahir, Sangat Baik*).

### G. Pendidikan & Kemampuan Bahasa
- Menyajikan latar belakang akademis dan tingkat kefasihan bahasa kerja.

### H. Footer & Call to Action Kontak
- Ajakan kolaborasi hangat dengan tombol WhatsApp, salin email instan dengan notifikasi toast ramah, dan tautan sosial (LinkedIn, GitHub, Dribbble).
