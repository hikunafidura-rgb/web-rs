import Navbar from "../components/Navbar";
import AppointmentForm from "../components/AppointmentForm";

const layanan = [
  ["🩺", "Poliklinik", "Konsultasi dokter umum & spesialis setiap hari dengan sistem antrean digital."],
  ["🚑", "IGD 24 Jam", "Unit Gawat Darurat siaga 24 jam dengan tim medis cepat tanggap."],
  ["🧪", "Laboratorium", "Pemeriksaan lab akurat dengan peralatan modern dan hasil cepat."],
  ["❤️", "Jantung & Pembuluh Darah", "Deteksi dini, kateterisasi, dan rehabilitasi jantung terpadu."],
  ["👶", "Ibu & Anak", "Persalinan aman, imunisasi, tumbuh kembang, dan klinik laktasi."],
  ["🦷", "Klinik Gigi", "Perawatan gigi, behel, implan, dan bedah mulut berpengalaman."],
];

const dokters = [
  { inisial: "AF", cls: "a1", nama: "dr. Ahmad Fikri, Sp.PD", spec: "Spesialis Penyakit Dalam", jadwal: "Senin – Jumat • 08.00 – 14.00" },
  { inisial: "AR", cls: "a2", nama: "dr. Aisyah Rahma, Sp.A", spec: "Spesialis Anak", jadwal: "Senin – Sabtu • 09.00 – 15.00" },
  { inisial: "RM", cls: "a3", nama: "dr. Rizky Maulana, Sp.JP", spec: "Spesialis Jantung", jadwal: "Selasa – Minggu • 10.00 – 16.00" },
];

const fasilitas = [
  ["🛏️", "Ruang Rawat Inap", "VIP, Kelas 1-3, bersih dan nyaman untuk pemulihan."],
  ["🚨", "IGD", "Penanganan gawat darurat cepat 24 jam nonstop."],
  ["🔬", "Ruang Operasi", "Operation theatre steril dengan alat bedah modern."],
  ["🧫", "Laboratorium", "Hasil akurat & cepat, terintegrasi rekam medis."],
  ["💊", "Farmasi", "Apotek 24 jam dengan obat lengkap & asli."],
  ["🛋️", "Ruang Tunggu", "Nyaman, ber-AC, wifi gratis & kids corner."],
];

const artikels = [
  ["❤️", "10 Sep 2026 • Jantung", "5 Cara Menjaga Kesehatan Jantung Sejak Dini", "Pola makan, olahraga, dan cek rutin yang wajib Anda tahu..."],
  ["👶", "5 Sep 2026 • Anak", "Jadwal Imunisasi Anak yang Wajib Lengkap", "Panduan imunisasi dasar & lanjutan menurut IDAI..."],
  ["🦷", "1 Sep 2026 • Gigi", "Kapan Harus Periksa ke Dokter Gigi?", "Jangan tunggu sakit! Ini tanda Anda harus scaling..."],
];

const keunggulan = [
  ["👨‍⚕️", "Dokter dan tenaga medis profesional", "Tim dokter spesialis berpengalaman dan bersertifikasi."],
  ["🕐", "Pelayanan 24 jam", "IGD, rawat inap, farmasi & laboratorium selalu siaga."],
  ["🏢", "Fasilitas modern", "Ruang operasi, ICU, dan alat diagnostik terkini."],
  ["💙", "Pelayanan ramah dan nyaman", "Lingkungan bersih, tenang, dan berorientasi pasien."],
  ["📱", "Sistem pendaftaran yang mudah", "Daftar online dalam 1 menit, tanpa antre lama."],
];

export default function Page() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📍 Jl. Sehat Bersama No. 88, Jakarta &nbsp; • &nbsp; ☎️ 021-XXXX-XXXX</span>
          <span className="topbar-right">🚑 IGD 24 Jam: 021-XXXX-XXXX &nbsp; • &nbsp; ✉️ info@hikunahospital.id</span>
        </div>
      </div>

      <Navbar />

      <section className="hero" id="beranda">
        <div className="container hero-grid">
          <div>
            <span className="badge">✨ Rumah Sakit Terpercaya & Modern</span>
            <h1>Kesehatan Anda,<br /><span className="highlight">Prioritas Kami.</span></h1>
            <p className="subtitle">“Peduli, Profesional, Untuk Kesehatan Anda.”</p>
            <p className="desc">HIKUNA Hospital hadir memberikan pelayanan kesehatan yang profesional, terpercaya, dan berorientasi pada kebutuhan setiap pasien.</p>
            <div className="hero-btns">
              <a href="#janji" className="btn btn-primary">Buat Janji →</a>
              <a href="#layanan" className="btn btn-outline">Lihat Layanan</a>
            </div>
            <div className="hero-stats">
              <div><strong>15+</strong><span>Tahun Pengalaman</span></div>
              <div><strong>50+</strong><span>Dokter Spesialis</span></div>
              <div><strong>24/7</strong><span>Layanan IGD</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-emoji">👨‍⚕️</div>
              <div className="hero-card-info"><strong>Pelayanan 24 Jam</strong><span>IGD • Rawat Inap • Farmasi</span></div>
            </div>
            <div className="float-card float-1">❤️ <div><strong>Jantung</strong><span>Layanan Unggulan</span></div></div>
            <div className="float-card float-2">✅ <div><strong>Terakreditasi</strong><span>Standar Nasional</span></div></div>
          </div>
        </div>
      </section>

      <section className="section" id="layanan">
        <div className="container">
          <span className="section-tag">Layanan Kami</span>
          <h2>Layanan Unggulan</h2>
          <p className="section-desc">Pelayanan lengkap untuk seluruh kebutuhan kesehatan keluarga Anda.</p>
          <div className="grid-3">
            {layanan.map(([icon, judul, desc]) => (
              <div className="card service" key={judul}>
                <div className="icon">{icon}</div><h3>{judul}</h3><p>{desc}</p><a href="#janji">Buat Janji →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="tentang">
        <div className="container split">
          <div className="about-box">
            <div className="about-emoji">🏥</div>
            <h3>HIKUNA Hospital</h3>
            <p>Modern • Bersih • Ramah</p>
            <div className="about-mini"><div>⭐ 4.9/5 Kepuasan Pasien</div><div>🏆 Akreditasi Paripurna</div></div>
          </div>
          <div>
            <span className="section-tag">Kenapa Kami?</span>
            <h2>Pelayanan Kesehatan yang Mengutamakan Anda</h2>
            <ul className="check-list">
              {keunggulan.map(([icon, judul, desc]) => (
                <li key={judul}><span>{icon}</span><div><strong>{judul}</strong><p>{desc}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="dokter">
        <div className="container">
          <span className="section-tag">Tim Medis</span>
          <h2>Dokter Spesialis Kami</h2>
          <p className="section-desc">Ditangani langsung oleh dokter terbaik di bidangnya.</p>
          <div className="grid-3">
            {dokters.map(d => (
              <div className="card doctor" key={d.nama}>
                <div className={`avatar ${d.cls}`}>{d.inisial}</div>
                <h3>{d.nama}</h3><span className="spec">{d.spec}</span><p>{d.jadwal}</p>
                <a href="#janji" className="btn btn-outline btn-small">Buat Janji</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="fasilitas">
        <div className="container">
          <span className="section-tag">Fasilitas</span>
          <h2>Fasilitas Modern & Nyaman</h2>
          <div className="grid-3">
            {fasilitas.map(([icon, judul, desc]) => (
              <div className="card facility" key={judul}><div className="fac-icon">{icon}</div><h3>{judul}</h3><p>{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="artikel">
        <div className="container">
          <span className="section-tag">Edukasi</span>
          <h2>Artikel Kesehatan</h2>
          <div className="grid-3">
            {artikels.map(([icon, date, judul, desc]) => (
              <div className="card article" key={judul}>
                <div className="art-thumb">{icon}</div><span className="art-date">{date}</span><h3>{judul}</h3><p>{desc}</p><a href="#artikel">Baca Selengkapnya →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section appointment" id="janji">
        <div className="container split">
          <div>
            <span className="section-tag light">Reservasi Online</span>
            <h2 className="white">Buat Janji dengan Dokter</h2>
            <p className="white-desc">Isi form, tim kami akan menghubungi Anda untuk konfirmasi via WhatsApp dalam 15 menit.</p>
            <div className="contact-mini">
              <div>📞 <strong>021-XXXX-XXXX</strong><span>Call Center 24 Jam</span></div>
              <div>💬 <strong>0812-XXXX-XXXX</strong><span>WhatsApp Reservasi</span></div>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <footer className="footer" id="kontak">
        <div className="container footer-grid">
          <div>
            <div className="logo"><span className="logo-icon">🏥</span><span className="logo-text">HIKUNA <small>Hospital</small></span></div>
            <p>Melayani dengan hati, menjaga kesehatan dengan profesional.</p>
            <p className="motto">“Peduli, Profesional, Untuk Kesehatan Anda.”</p>
          </div>
          <div><h4>Menu Cepat</h4><a href="#beranda">Beranda</a><a href="#tentang">Tentang Kami</a><a href="#layanan">Layanan</a><a href="#dokter">Dokter</a></div>
          <div><h4>Layanan</h4><a href="#layanan">Poliklinik</a><a href="#layanan">IGD 24 Jam</a><a href="#layanan">Laboratorium</a><a href="#layanan">Klinik Gigi</a></div>
          <div><h4>Kontak</h4><p>📍 Jl. Sehat Bersama No. 88, Jakarta</p><p>☎️ 021-XXXX-XXXX</p><p>✉️ info@hikunahospital.id</p><p>🕐 Senin – Minggu • 24 Jam</p></div>
        </div>
        <div className="copyright">© 2026 HIKUNA Hospital. Dibuat dengan 💙 untuk kesehatan Indonesia.</div>
      </footer>

      <a href="#janji" className="wa-float" title="Buat Janji">💬</a>
    </>
  );
}
