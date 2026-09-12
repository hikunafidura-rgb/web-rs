"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Photo from "../../components/Photo";
import { Icon } from "../../components/Icons";
import {
  DOCTORS, SPECIALTIES, specialtyName, nextAvailable,
  dateKey, slotStatus, TIMES,
} from "../../lib/data";

function availableToday(id) {
  const key = dateKey(new Date());
  return TIMES.some((t) => slotStatus(id, key, t) === "available");
}

function DirCard({ doctor }) {
  const next = nextAvailable(doctor.id);
  const today = availableToday(doctor.id);
  return (
    <div className="card dir-card">
      <Photo src={doctor.photo} alt={doctor.name} ratio="16/10" className="dir-photo" />
      <h3>
        <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
        <Icon name="i-check" size={20} className="verify" />
      </h3>
      <div className="dir-title">{doctor.title} · {specialtyName(doctor.specialty)}</div>
      <div className="doc-meta">
        <span><b className="rating">★ {doctor.rating}</b> · {doctor.reviews} reviews</span>
        <span><b>{doctor.experience} years</b> experience</span>
      </div>
      <div style={{ marginBottom: 4 }}>
        <span className="avail" style={today ? undefined : { background: "#F1F5F9", color: "#94A3B8" }}>
          {today ? "● Available Today" : "○ Fully booked today"}
        </span>
      </div>
      <div className="next-box">
        <small>Next available</small>
        {next ? <strong>{next.label} · {next.time}</strong> : <span>No slots this week</span>}
      </div>
      <div className="dir-actions">
        <Link href={`/doctors/${doctor.id}`} className="btn btn-outline btn-sm">View Profile</Link>
        <Link href={`/appointment?doctor=${doctor.id}`} className="btn btn-primary btn-sm">Book Appointment</Link>
      </div>
    </div>
  );
}

function Finder() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [specialty, setSpecialty] = useState(params.get("specialty") ?? "");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [avail, setAvail] = useState("");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return DOCTORS.filter((d) => {
      if (needle && !(d.name.toLowerCase().includes(needle) || specialtyName(d.specialty).toLowerCase().includes(needle))) return false;
      if (specialty && d.specialty !== specialty) return false;
      if (branch && !d.branches.includes(branch)) return false;
      if (gender && d.gender !== gender) return false;
      if (language && !d.languages.includes(language)) return false;
      if (avail === "today" && !availableToday(d.id)) return false;
      return true;
    });
  }, [q, specialty, branch, gender, language, avail]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Find a Doctor</div>
          <h1>Find the right doctor for your care</h1>
          <p>Search doctor, specialty or condition — then book in under a minute.</p>
          <div className="search-hero" style={{ maxWidth: 640 }}>
            <input placeholder="Search doctor, specialty or condition..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="filter-bar">
            <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="">Specialty: All</option>
              {SPECIALTIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="">Location: All</option>
              <option>Central</option><option>South</option><option>Bandung</option>
            </select>
            <select value={avail} onChange={(e) => setAvail(e.target.value)}>
              <option value="">Availability: All</option>
              <option value="today">Available Today</option>
            </select>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Gender: All</option>
              <option>Female</option><option>Male</option>
            </select>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="">Language: All</option>
              <option>Indonesian</option><option>English</option><option>Arabic</option>
            </select>
          </div>

          <div className="dir-head">
            <p className="dir-count">Showing <b>{results.length}</b> doctor{results.length !== 1 && "s"}</p>
            <Link href="/schedule" className="btn btn-outline btn-sm">View full schedule</Link>
          </div>

          {results.length === 0 ? (
            <div className="card" style={{ textAlign: "center" }}>
              <h3>No doctors match your filters</h3>
              <p>Try a different name, specialty or location.</p>
            </div>
          ) : (
            <div className="grid-3">
              {results.map((d) => <DirCard key={d.id} doctor={d} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function DoctorsPage() {
  return (
    <div style={{ background: "#F4F8FB" }}>
      <Suspense fallback={<p style={{ padding: 40 }}>Loading...</p>}>
        <Finder />
      </Suspense>
    </div>
  );
}
