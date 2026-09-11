"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { DOCTORS, SPECIALTIES, specialtyName } from "../../lib/data";

function TeamCard({ doctor }) {
  return (
    <Link className="tcard" href={`/doctors/${doctor.id}`}>
      <img src={doctor.photo} alt={doctor.name} loading="lazy" />
      <h2>{doctor.name}</h2>
      <p>{doctor.title}</p>
      <div className="t-rate">⭐ {doctor.rating} · {specialtyName(doctor.specialty)}</div>
    </Link>
  );
}

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

  const split = results.length > 2;
  const top = split ? results.slice(0, 2) : [];
  const rest = split ? results.slice(2) : results;

  return (
    <div className="team-dark">
      <div className="circle-top"></div>
      <div className="circle-bottom"></div>

      <div className="team-header">
        <div className="team-header-content">
          <span>find a doctor</span>
          <h1>Meet a team of experts and innovators who are pioneers in their field</h1>
          <div className="team-search">
            <input placeholder="Search doctor name or specialty..." value={q} onChange={(e) => setQ(e.target.value)} />
            <button type="button">Search</button>
          </div>
        </div>
      </div>

      <div className="team-grid">
        <div className="team-filters">
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

        <p className="team-count">Showing <b>{results.length}</b> doctor{results.length !== 1 && "s"} — click a card to view profile</p>

        {results.length === 0 ? (
          <div className="team-empty">
            <h2>No doctors match your filters</h2>
            <p>Try a different name, specialty or location.</p>
          </div>
        ) : (
          <>
            {split && (
              <div className="team-row">
                {top.map((d) => <TeamCard key={d.id} doctor={d} />)}
              </div>
            )}
            {rest.map((d) => <TeamCard key={d.id} doctor={d} />)}
          </>
        )}
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={<p style={{ padding: 40 }}>Loading...</p>}>
      <Finder />
    </Suspense>
  );
}
