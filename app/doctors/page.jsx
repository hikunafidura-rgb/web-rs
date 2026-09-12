"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import DoctorCard from "../../components/DoctorCard";
import {
  DOCTORS, SPECIALTIES, specialtyName, availabilityRank,
  dateKey, slotState, TIMES,
} from "../../lib/data";

function availableToday(id) {
  const key = dateKey(new Date());
  return TIMES.some((t) => slotState(id, key, t) === "available");
}

function Finder() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [specialty, setSpecialty] = useState(params.get("specialty") ?? "");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [avail, setAvail] = useState("");
  const [ctype, setCtype] = useState("");
  const [sort, setSort] = useState("recommended");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = DOCTORS.filter((d) => {
      if (needle && !(d.name.toLowerCase().includes(needle) || specialtyName(d.specialty).toLowerCase().includes(needle))) return false;
      if (specialty && d.specialty !== specialty) return false;
      if (branch && !d.branches.includes(branch)) return false;
      if (gender && d.gender !== gender) return false;
      if (language && !d.languages.includes(language)) return false;
      if (avail === "today" && !availableToday(d.id)) return false;
      if (ctype === "video" && !d.tele) return false;
      return true;
    });
    if (sort === "rated") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "experienced") list.sort((a, b) => b.experience - a.experience);
    else if (sort === "soonest") list.sort((a, b) => availabilityRank(a.id) - availabilityRank(b.id));
    return list;
  }, [q, specialty, branch, gender, language, avail, ctype, sort]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Find a Doctor</div>
          <h1>Find the right doctor for your care</h1>
          <p>Search doctor, specialty or condition — then book in under a minute.</p>
          <div className="search-hero" style={{ maxWidth: 640 }}>
            <input aria-label="Search doctors" placeholder="Search doctor, specialty or condition..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="filter-bar">
            <select aria-label="Filter by specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="">Specialty: All</option>
              {SPECIALTIES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <select aria-label="Filter by location" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="">Location: All</option>
              <option>Central</option><option>South</option><option>Bandung</option>
            </select>
            <select aria-label="Filter by availability" value={avail} onChange={(e) => setAvail(e.target.value)}>
              <option value="">Availability: All</option>
              <option value="today">Available Today</option>
            </select>
            <select aria-label="Filter by consultation type" value={ctype} onChange={(e) => setCtype(e.target.value)}>
              <option value="">Consultation: All</option>
              <option value="inperson">In-Person</option>
              <option value="video">Video Consult</option>
            </select>
            <select aria-label="Filter by gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Gender: All</option>
              <option>Female</option><option>Male</option>
            </select>
            <select aria-label="Filter by language" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="">Language: All</option>
              <option>Indonesian</option><option>English</option><option>Arabic</option>
            </select>
            <select aria-label="Sort doctors" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Sort: Recommended</option>
              <option value="rated">Highest Rated</option>
              <option value="experienced">Most Experienced</option>
              <option value="soonest">Available Soonest</option>
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
              {results.map((d) => <DoctorCard key={d.id} doctor={d} />)}
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
