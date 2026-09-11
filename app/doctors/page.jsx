"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DoctorCard from "../../components/DoctorCard";
import { DOCTORS, SPECIALTIES, specialtyName } from "../../lib/data";

function Finder() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [specialty, setSpecialty] = useState(params.get("specialty") ?? "");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [branch, setBranch] = useState("");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return DOCTORS.filter((d) => {
      if (needle && !(d.name.toLowerCase().includes(needle) || specialtyName(d.specialty).toLowerCase().includes(needle))) return false;
      if (specialty && d.specialty !== specialty) return false;
      if (gender && d.gender !== gender) return false;
      if (language && !d.languages.includes(language)) return false;
      if (branch && !d.branches.includes(branch)) return false;
      return true;
    });
  }, [q, specialty, gender, language, branch]);

  return (
    <>
      <div className="filter-bar">
        <input placeholder="🔎 Search doctor name..." value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
          <option value="">Specialty: All</option>
          {SPECIALTIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Location: All</option>
          <option>Central</option><option>South</option><option>Bandung</option>
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

      <p style={{ color: "var(--muted)", marginBottom: 20 }}>
        Showing <b>{results.length}</b> doctor{results.length !== 1 && "s"}
      </p>

      {results.length === 0 ? (
        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48 }}>🔍</div>
          <h3>No doctors match your filters</h3>
          <p>Try a different name, specialty or location.</p>
        </div>
      ) : (
        <div className="grid-3">
          {results.map((d) => <DoctorCard key={d.id} doctor={d} showFee />)}
        </div>
      )}
    </>
  );
}

export default function DoctorsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Find a Doctor</div>
          <h1>Find the right doctor for you</h1>
          <p>Search by name, filter by specialty, location, availability, gender or language.</p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}><Finder /></Suspense>
        </div>
      </section>
    </>
  );
}
