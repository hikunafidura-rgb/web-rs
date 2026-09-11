"use client";
import { useState } from "react";

const DOKTERS = [
  "dr. Ahmad Fikri, Sp.PD",
  "dr. Aisyah Rahma, Sp.A",
  "dr. Rizky Maulana, Sp.JP",
  "Dokter Umum (Sesuai Jadwal)",
];

export default function AppointmentForm({ dokterAwal = "" }) {
  const [form, setForm] = useState({ nama: "", poli: "", dokter: dokterAwal, tanggal: "", jam: "" });
  const [note, setNote] = useState({ text: "", error: false });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    if (!form.nama || !form.poli || !form.dokter || !form.tanggal || !form.jam) {
      setNote({ text: "⚠️ Mohon lengkapi semua kolom terlebih dahulu.", error: true });
      return;
    }
    setNote({
      text: `✅ Terima kasih, ${form.nama}! Janji dengan ${form.dokter} (${form.poli}) pada ${form.tanggal}, jam ${form.jam} berhasil dibuat.`,
      error: false,
    });
    const pesan = encodeURIComponent(
      `Halo HIKUNA Hospital, saya ${form.nama}. Ingin buat janji: Poli ${form.poli}, Dokter ${form.dokter}, Tanggal ${form.tanggal}, Jam ${form.jam}.`
    );
    setTimeout(() => window.open(`https://wa.me/62812XXXXXXX?text=${pesan}`, "_blank"), 1200);
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <h3>Formulir Janji Temu</h3>
      <label>Nama Lengkap
        <input placeholder="cth: Budi Santoso" value={form.nama} onChange={set("nama")} required />
      </label>
      <div className="form-row">
        <label>Pilih Poli
          <select value={form.poli} onChange={set("poli")} required>
            <option value="">-- Pilih --</option>
            {["Poli Umum", "Penyakit Dalam", "Anak", "Jantung & Pembuluh Darah", "Gigi", "Kandungan (Ibu & Anak)"].map(p => <option key={p}>{p}</option>)}
          </select>
        </label>
        <label>Pilih Dokter
          <select value={form.dokter} onChange={set("dokter")} required>
            <option value="">-- Pilih --</option>
            {DOKTERS.map(d => <option key={d}>{d}</option>)}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>Tanggal<input type="date" value={form.tanggal} min={new Date().toISOString().split("T")[0]} onChange={set("tanggal")} required /></label>
        <label>Jam
          <select value={form.jam} onChange={set("jam")} required>
            <option value="">-- Pilih --</option>
            {["08.00 – 10.00", "10.00 – 12.00", "13.00 – 15.00", "15.00 – 17.00"].map(j => <option key={j}>{j}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-full">Buat Janji Sekarang</button>
      {note.text && <p className="form-note" style={{ color: note.error ? "red" : "green" }}>{note.text}</p>}
    </form>
  );
}
