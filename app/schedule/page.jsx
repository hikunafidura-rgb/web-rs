"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  DOCTORS, SPECIALTIES, specialtyName, daysFrom, dateKey, fmtDay, slotStatus, TIMES,
} from "../../lib/data";

function Board() {
  const params = useSearchParams();
  const [specialty, setSpecialty] = useState(params.get("specialty") ?? "");
  const [onlyDoctor, setOnlyDoctor] = useState(params.get("doctor") ?? "");
  const [week, setWeek] = useState(0);
  const days = useMemo(() => daysFrom(week * 7, 7), [week]);
  const [dayKey, setDayKey] = useState(dateKey(new Date()));

  const doctors = useMemo(() => DOCTORS.filter((d) => {
    if (specialty && d.specialty !== specialty) return false;
    if (onlyDoctor && d.id !== onlyDoctor) return false;
    return true;
  }), [specialty, onlyDoctor]);

  function pickWeek(w) {
    setWeek(w);
    const first = daysFrom(w * 7, 7)[0];
    setDayKey(dateKey(first));
  }

  return (
    <>
      <div className="filter-bar">
        <select value={onlyDoctor} onChange={(e) => setOnlyDoctor(e.target.value)}>
          <option value="">All Doctors</option>
          {DOCTORS.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
          <option value="">All Specialties</option>
          {SPECIALTIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select value={dayKey} onChange={(e) => setDayKey(e.target.value)}>
          {days.map((d) => {
            const k = dateKey(d);
            const f = fmtDay(d);
            return <option key={k} value={k}>{f.dow}, {f.num} {f.mon}</option>;
          })}
        </select>
        <div className="week-nav">
          <button className={`wk-btn ${week === 0 ? "active" : ""}`} onClick={() => pickWeek(0)}>This Week</button>
          <button className={`wk-btn ${week === 1 ? "active" : ""}`} onClick={() => pickWeek(1)}>Next Week</button>
        </div>
      </div>

      {doctors.length === 0 ? (
        <div className="card" style={{ textAlign: "center" }}><h3>No doctors found</h3><p>Adjust the filters above.</p></div>
      ) : (
        <div className="table-wrap">
          <table className="schedule">
            <thead>
              <tr><th>Time</th>{doctors.map((d) => <th key={d.id}>{d.name}<br /><small style={{ fontWeight: 400 }}>{specialtyName(d.specialty)}</small></th>)}</tr>
            </thead>
            <tbody>
              {TIMES.map((t) => (
                <tr key={t}>
                  <td>{t}</td>
                  {doctors.map((d) =>
                    slotStatus(d.id, dayKey, t) === "available" ? (
                      <td key={d.id}>
                        <a
                          title={`Book this time with ${d.name}`}
                          href={`/appointment?doctor=${d.id}&date=${dayKey}&time=${encodeURIComponent(t)}`}
                        >
                          <button className="pill ok">Available</button>
                        </a>
                      </td>
                    ) : (
                      <td key={d.id}><span className="pill busy">Booked</span></td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p style={{ color: "var(--muted)", marginTop: 16, fontSize: 14 }}>
        Select an <b>Available</b> slot to book this time — you will jump straight into the booking wizard.
      </p>
    </>
  );
}

export default function SchedulePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Doctor Schedule</div>
          <h1>Doctor Schedule</h1>
          <p>Live availability across specialties — select a free slot to book instantly.</p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Suspense fallback={<p>Loading schedule...</p>}><Board /></Suspense>
        </div>
      </section>
    </>
  );
}
