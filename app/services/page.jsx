"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Photo from "../../components/Photo";
import { SPECIALTIES, DOCTORS } from "../../lib/data";

export default function ServicesPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return SPECIALTIES;
    return SPECIALTIES.filter((s) => (s.name + " " + s.desc + " " + (s.keywords || []).join(" ")).toLowerCase().includes(n));
  }, [q]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Services</div>
          <h1>Find the right care for you</h1>
          <p>Explore our medical specialties and find the right specialist for your needs.</p>
          <div className="search-hero" style={{ maxWidth: 560 }}>
            <input placeholder="Search specialty or condition..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="grid-3">
            {results.map((s) => {
              const count = DOCTORS.filter((d) => d.specialty === s.id).length;
              return (
                <div className="card" key={s.id}>
                  <Photo src={s.photo} alt={s.name} className="card-photo" ratio="16/10" />
                  <h3>{s.name}</h3><p>{s.desc}</p>
                  <p style={{ fontSize: 13, marginTop: 8 }}>{count} specialist{count !== 1 && "s"} available</p>
                  <Link href={`/doctors?specialty=${s.id}`} className="link">See doctors →</Link>
                </div>
              );
            })}
          </div>
          {results.length === 0 && (
            <div className="card" style={{ textAlign: "center", marginTop: 24 }}>
              <h3>No specialties found for “{q}”</h3>
              <p>Try “heart”, “eye” or “child”.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
