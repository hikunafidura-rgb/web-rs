"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Photo from "../../components/Photo";
import {
  SPECIALTIES, DOCTORS, getDoctor, specialtyName, rupiah,
  nextDays, dateKey, fmtDay, slotStatus, TIMES,
} from "../../lib/data";

const STEPS = ["Specialty", "Doctor", "Date & Time", "Confirm"];

function Wizard() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [specialty, setSpecialty] = useState(() => {
    const doc = params.get("doctor") ? getDoctor(params.get("doctor")) : null;
    return params.get("specialty") ?? doc?.specialty ?? "";
  });
  const [doctorId, setDoctorId] = useState(params.get("doctor") ?? "");
  const [dayKey, setDayKey] = useState(params.get("date") ?? "");
  const [time, setTime] = useState(params.get("time") ?? "");
  const [name, setName] = useState("");
  const [done, setDone] = useState(null);

  const days = useMemo(() => nextDays(14), []);
  const doctors = useMemo(
    () => (specialty ? DOCTORS.filter((d) => d.specialty === specialty) : DOCTORS),
    [specialty]
  );
  const doctor = doctorId ? getDoctor(doctorId) : null;
  const slots = useMemo(
    () => (doctor && dayKey ? TIMES.map((t) => ({ t, st: slotStatus(doctor.id, dayKey, t) })) : []),
    [doctor, dayKey]
  );
  const dayLabel = dayKey
    ? fmtDay(days.find((d) => dateKey(d) === dayKey) ?? new Date(dayKey)).full
    : "";

  const canNext =
    (step === 0 && !!specialty) ||
    (step === 1 && !!doctor) ||
    (step === 2 && !!dayKey && !!time);

  function confirm() {
    if (!name.trim()) return;
    const code = "HKN-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    setDone({ code });
  }

  if (done) {
    return (
      <div className="card success">
        <div className="check-circle">✓</div>
        <h2>Booking Confirmed!</h2>
        <p style={{ color: "var(--muted)" }}>We&apos;ve sent the details to your WhatsApp. Please arrive 15 minutes early.</p>
        <div className="booking-code">{done.code}</div>
        <div className="summary" style={{ textAlign: "left" }}>
          <div className="summary-row"><span>Patient</span><b>{name}</b></div>
          <div className="summary-row"><span>Doctor</span><b>{doctor.name}</b></div>
          <div className="summary-row"><span>Specialty</span><b>{specialtyName(specialty)}</b></div>
          <div className="summary-row"><span>Date</span><b>{dayLabel}</b></div>
          <div className="summary-row"><span>Time</span><b>{time}</b></div>
          <div className="summary-row"><span>Fee</span><b>{rupiah(doctor.fee)}</b></div>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/dashboard" className="btn btn-primary">View Dashboard →</a>
          <a href="/" className="btn btn-outline">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="wizard">
      <div className="steps">
        {STEPS.map((s, i) => (
          <div key={s} className={`step ${i === step ? "active" : ""} ${i < step ? "done" : ""}`}>
            STEP 0{i + 1}<br />{s}
          </div>
        ))}
      </div>

      <div className="card">
        {step === 0 && (
          <>
            <h2 style={{ fontSize: 24, marginBottom: 6 }}>Choose Specialty</h2>
            <p style={{ color: "var(--muted)", marginBottom: 20 }}>What kind of care do you need?</p>
            <div className="opt-grid">
              {SPECIALTIES.map((s) => (
                <div key={s.id} className={`opt ${specialty === s.id ? "selected" : ""}`}
                  onClick={() => { setSpecialty(s.id); setDoctorId(""); }}>
                  <Photo src={s.photo} alt={s.name} className="opt-thumb" ratio="16/9" />
                  <strong>{s.name}</strong><small>{s.desc}</small>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 style={{ fontSize: 24, marginBottom: 6 }}>Choose Doctor</h2>
            <p style={{ color: "var(--muted)", marginBottom: 20 }}>{specialtyName(specialty)} specialists</p>
            <div className="opt-grid">
              {doctors.map((d) => (
                <div key={d.id} className={`opt ${doctorId === d.id ? "selected" : ""}`}
                  onClick={() => { setDoctorId(d.id); setTime(""); }}>
                  <Photo src={d.photo} alt={d.name} className="opt-thumb" ratio="16/10" />
                  <strong>{d.name}</strong>
                  <small>⭐ {d.rating} · {d.experience}y exp. · {rupiah(d.fee)}</small>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={{ fontSize: 24, marginBottom: 6 }}>Choose Date & Time</h2>
            <p style={{ color: "var(--muted)", marginBottom: 20 }}>With {doctor?.name}</p>
            <div className="day-strip">
              {days.map((d) => {
                const k = dateKey(d);
                const f = fmtDay(d);
                return (
                  <div key={k} className={`day ${dayKey === k ? "selected" : ""}`}
                    onClick={() => { setDayKey(k); setTime(""); }}>
                    <small>{k === dateKey(new Date()) ? "Today" : f.dow}</small>
                    <strong>{f.num}</strong><span>{f.mon}</span>
                  </div>
                );
              })}
            </div>
            {dayKey ? (
              <>
                <p style={{ fontWeight: 700, marginBottom: 12 }}>Available slots:</p>
                <div className="slot-grid">
                  {slots.map(({ t, st }) => (
                    <button key={t} className={`slot ${time === t ? "selected" : ""}`}
                      disabled={st === "booked"} onClick={() => setTime(t)}>{t}</button>
                  ))}
                </div>
              </>
            ) : <p style={{ color: "var(--muted)" }}>← Pick a date first to see available slots.</p>}
          </>
        )}

        {step === 3 && (
          <>
            <h2 style={{ fontSize: 24, marginBottom: 6 }}>Confirm Appointment</h2>
            <p style={{ color: "var(--muted)", marginBottom: 20 }}>Double-check everything before confirming.</p>
            <div className="summary">
              <div className="summary-row"><span>Doctor</span><b>{doctor.name}</b></div>
              <div className="summary-row"><span>Specialty</span><b>{specialtyName(specialty)}</b></div>
              <div className="summary-row"><span>Date</span><b>{dayLabel}</b></div>
              <div className="summary-row"><span>Time</span><b>{time}</b></div>
              <div className="summary-row"><span>Location</span><b>HIKUNA Central, Jakarta</b></div>
              <div className="summary-row"><span>Fee</span><b>{rupiah(doctor.fee)}</b></div>
            </div>
            <div className="field">
              <label>Patient full name</label>
              <input placeholder="e.g. Budi Santoso" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </>
        )}

        <div className="wizard-nav">
          <button className="btn btn-outline" disabled={step === 0} onClick={() => setStep(step - 1)}>← Back</button>
          {step < 3 ? (
            <button className="btn btn-primary" disabled={!canNext} onClick={() => setStep(step + 1)}>Continue →</button>
          ) : (
            <button className="btn btn-teal" disabled={!name.trim()} onClick={confirm}>✓ Confirm Booking</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Book Appointment</div>
          <h1>Book Appointment</h1>
          <p>Four quick steps — specialty, doctor, schedule, confirm.</p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <Suspense fallback={<div className="card">Loading booking wizard...</div>}>
            <Wizard />
          </Suspense>
        </div>
      </section>
    </>
  );
}
