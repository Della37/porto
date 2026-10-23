# Desain Panduan & Sistem Visual (Design System)
## Web Portofolio — Editorial Magazine Minimalist (Della Arthamevia, S.T.)

Dokumen ini mendefinisikan seluruh panduan arsitektur visual, token warna, tipografi, komponen interaktif, dan aturan tata letak untuk website Portofolio Digital bergaya **Editorial Magazine Minimalist**.

---

## 1. Filosofi & Visi Desain

Website ini dirancang dengan gaya **Editorial Magazine Minimalist** seperti majalah klasik modern berkelas tinggi (*high-fashion & academic editorial*):
- **Klasik, Bersih, & Elegan**: Memadukan latar belakang krem hangat (*warm off-white*) dengan teks hitam arang (*charcoal black*) serta tipografi serif *Cormorant Garamond* yang anggun.
- **Dua Dunia (Light Canvas vs Dark Focus)**: Kanvas utama bernuansa terang elegan (#F6F5F0), sedangkan bagian Keahlian dan Footer Kontak menggunakan latar belakang hitam arang berwibawa (#141413) untuk menciptakan kontras dramatis.
- **Sampul Majalah (Magazine Cover Hero)**: Menggunakan tipografi raksasa memenuhi layar "DELLA" dengan teks miring "Arthamevia" serta foto profil yang menumpuk secara berdimensi (*overlapping z-index*).
- **Interaksi Mikro Berkelas**: Dilengkapi preloader elegan 1,8 detik dengan garis muat tipis, custom cursor *difference blend mode*, floating hover preview untuk daftar proyek, serta modal pop-up dan lightbox gambar.

---

## 2. Palet Warna (Color Palette)

| Nama Warna | Kode HEX | Penggunaan |
| :--- | :--- | :--- |
| **Krem Hangat (Off-White)** | `#F6F5F0` | Latar belakang kanvas utama (Hero, Profil, Proyek, Sertifikasi & Organisasi) |
| **Hitam Arang (Charcoal Black)** | `#141413` | Teks utama, pita marquee, latar bagian Keahlian, dan Footer Kontak |
| **Garis Pembatas Editorial** | `#E2DFD2` | Garis tipis pembatas artikel, tabel grid biodata, dan garis pemisah kolom |
| **Latar Gelap Sekunder** | `#1A1A18` | Latar kartu keahlian dan kontak pada dark section |
| **Border Dark Section** | `#282826` | Garis border kartu keahlian dan footer |
| **Teks Muted Dark** | `#9E9E97` | Teks sekunder dan caption pada dark section |

---

## 3. Sistem Tipografi (Typography System)

- **Judul & Teks Display (Serif)**: `'Cormorant Garamond', Georgia, serif`
  - Digunakan untuk: Logo teks "Della A.", judul besar sampul "DELLA", aksen miring *italic*, judul bagian, dan nama proyek.
  - Karakteristik: Anggun, klasik, proporsional majalah cetak, kontras garis tajam.
- **Teks Isi & Navigasi (Sans-Serif)**: `'Plus Jakarta Sans', system-ui, sans-serif`
  - Digunakan untuk: Teks artikel biografi, nomor navigasi ("01 PROFIL"), label metadata, tombol CTA, dan isi daftar keahlian.
  - Karakteristik: Sangat mudah dibaca (*high readability*), modern, dan terstruktur rapi.

---

## 4. Fitur Interaktif Utama

1. **Preloader Layar Penuh (1,8 Detik)**:
   - Tampilan pembuka hitam elegan dengan tipografi "DELLA ARTHAMEVIA — PORTFOLIO" dan animasi garis loading tipis yang berjalan sebelum memudar lembut.
2. **Custom Cursor (Difference Mode)**:
   - Kursor lingkaran dinamis yang membesar dan membalikkan warna secara kontras (*mix-blend-mode: difference*) saat melintasi link, tombol, atau daftar proyek.
3. **Sticky Minimalist Navbar**:
   - Menempel di bagian atas layar dengan logo teks "Della A." dan menu bernomor kecil (01–05).
4. **Pita Teks Berjalan (Infinite Marquee Banner)**:
   - Banner miring (-1.5 derajat) berlatar hitam arang dengan teks berjalan tak terhingga.
5. **Interactive Project Rows & Floating Preview**:
   - Daftar proyek horizontal dengan efek gambar thumbnail melayang saat kursor digerakkan di atas baris proyek.
   - Klik pada baris membuka modal pop-up detail lengkap studi kasus.
6. **Fullscreen Image Lightbox**:
   - Membesarkan foto sertifikat dan dokumentasi kegiatan organisasi saat diklik.
