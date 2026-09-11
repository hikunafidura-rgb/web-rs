"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Photo from "../../components/Photo";
import { MCU_PACKAGES, rupiah, nextDays, dateKey, fmtDay } from "../../lib/data";

function Booking() {
  const params = useSearchParams();
  const [pkg, setPkg] = useState(params.get("package") ?? "advanced");
  const [name, setName] = useState("");
  const [dayKey, setDayKey] = useState("");
  const [ok, setOk] = useState(false);
  const days = nextDays(14);
  const selected = MCU_PACKAGES.find((p) => p.id === pkg);

  if (ok) {
    return (
      <div className="card success">
        <div className="check-circle">✓</div>
        <h2>Check-Up Reserved!</h2>
        <p style={{ color: "var(--muted)" }}>
          {name}, your <b>{selected.name}</b> package is reserved. Our team will call you to confirm the schedule.
        </p>
        <a href="/" className="btn btn-primary" style={{ marginTop: 18 }}>Back to Home</a>
      </div>
    );
  }

  return (
    <div className="grid-2">
      <div>
        <div className="opt-grid" style={{ gridTemplateColumns: "1fr" }}>
          {MCU_PACKAGES.map((p) => (
            <div key={p.id} className={`opt ${pkg === p.id ? "selected" : ""}`} onClick={() => setPkg(p.id)}
              style={{ textAlign: "left", display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 110, minWidth: 110 }}>
                <Photo src={p.photo} alt={p.name} ratio="1/1" className="opt-thumb" />
              </div>
              <div>
                <strong style={{ fontSize: 18 }}>{p.name} — {rupiah(p.price)}</strong>
                <div style={{ color: "var(--muted)", fontSize: 14 }}>{p.features.join(" · ")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <h3>Reserve your slot</h3>
        <p style={{ color: "var(--muted)", marginBottom: 18 }}>Fasting 10–12 hours required before blood tests.</p>
        <div className="field">
          <label>Full name</label>
          <input placeholder="e.g. Budi Santoso" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Preferred date</label>
          <select value={dayKey} onChange={(e) => setDayKey(e.target.value)}>
            <option value="">-- Choose a date --</option>
            {days.map((d) => <option key={dateKey(d)} value={dateKey(d)}>{fmtDay(d).full}</option>)}
          </select>
        </div>
        <div className="summary">
          <div className="summary-row"><span>Package</span><b>{selected.name}</b></div>
          <div className="summary-row"><span>Price</span><b>{rupiah(selected.price)}</b></div>
        </div>
        <button className="btn btn-teal btn-block" disabled={!name.trim() || !dayKey} onClick={() => setOk(true)}>
          Book Medical Check-Up →
        </button>
      </div>
    </div>
  );
}

export default function CheckupPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Medical Check-Up</div>
          <h1>HIKUNA Medical Check-Up</h1>
          <p>Take care of your health before problems begin.</p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}><Booking /></Suspense>
        </div>
      </section>
    </>
  );
}
