# 🏥 HIKUNA Hospital — web-rs

Website profil rumah sakit **HIKUNA Hospital** — *"Peduli, Profesional, Untuk Kesehatan Anda."*

Dibangun dengan **Next.js (App Router)** + React. Tampilan Modern Medical: putih + biru medis + cyan, responsif untuk laptop & HP.

🔗 **Repo:** https://github.com/hikunafidura-rgb/web-rs

---

## ✨ Fitur / Halaman

Satu halaman (single page) berisi semua section:

| Section | Isi |
|---|---|
| Navbar | Beranda, Tentang Kami, Layanan, Dokter, Fasilitas, Artikel, Kontak + tombol Buat Janji (+ hamburger di HP) |
| Hero | "Kesehatan Anda, Prioritas Kami." + tombol Buat Janji / Lihat Layanan + statistik |
| Layanan Unggulan | 🩺 Poliklinik, 🚑 IGD 24 Jam, 🧪 Laboratorium, ❤️ Jantung, 👶 Ibu & Anak, 🦷 Gigi |
| Kenapa HIKUNA | 5 keunggulan (tenaga profesional, 24 jam, fasilitas modern, ramah, pendaftaran mudah) |
| Dokter | dr. Ahmad Fikri (Sp.PD), dr. Aisyah Rahma (Sp.A), dr. Rizky Maulana (Sp.JP) |
| Fasilitas | Rawat inap, IGD, ruang operasi, lab, farmasi, ruang tunggu |
| Artikel Kesehatan | 3 artikel edukasi |
| Buat Janji | Form: Nama → Poli → Dokter → Tanggal → Jam → kirim konfirmasi via WhatsApp |
| Footer | Alamat, telepon `021-XXXX-XXXX`, email `info@hikunahospital.id` |

---

## 🛠️ Teknologi

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- CSS murni (`app/globals.css`) + font Plus Jakarta Sans

## 📁 Struktur folder

```
.
├── app/
│   ├── layout.jsx      # layout + metadata
│   ├── page.jsx        # seluruh section halaman
│   └── globals.css     # styling
├── components/
│   ├── Navbar.jsx          # navbar + menu HP (client)
│   └── AppointmentForm.jsx # form janji + validasi + WA (client)
├── package.json
└── next.config.mjs
```

---

## 🚀 Cara menjalankan

Butuh **Node.js 18+** (kamu pakai v24, sudah cocok).

```powershell
cd "C:\Users\hudza\OneDrive\Pictures\projek gw\rumah sakit"

# install dependency (sekali saja)
npm install

# mode development
npm run dev
# buka http://localhost:3000

# build production + jalankan
npm run build
npm run start
```

## ⚙️ Yang perlu diganti

1. **Nomor telepon & WhatsApp:**
   - Teks `021-XXXX-XXXX` / `0812-XXXX-XXXX` di `app/page.jsx`
   - Nomor WA tujuan di `components/AppointmentForm.jsx` (`wa.me/62812XXXXXXX` → nomor asli RS)
2. **Alamat & email** di `app/page.jsx` (footer) dan topbar.

## ☁️ Deploy ke Vercel (gratis)

1. Push repo ini ke GitHub (sudah).
2. Buka [vercel.com](https://vercel.com) → Import Project → pilih `web-rs`.
3. Klik Deploy — selesai, tanpa setting tambahan.

---

© 2026 HIKUNA Hospital — dibuat dengan 💙 untuk kesehatan Indonesia.
