"use client";
import { useMemo, useState } from "react";
import Photo from "../../components/Photo";
import { LOCATIONS } from "../../lib/data";

export default function LocationsPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return LOCATIONS;
    return LOCATIONS.filter((l) => `${l.name} ${l.city} ${l.address}`.toLowerCase().includes(n));
  }, [q]);

  const mapQ = encodeURIComponent(results[0] ? `${results[0].name} ${results[0].city}` : "Jakarta hospital");

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Locations</div>
          <h1>Find HIKUNA near you</h1>
          <p>Enter your city or area to find the closest branch.</p>
          <div className="search-hero" style={{ maxWidth: 560 }}>
            <input placeholder="Search by city or location..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container loc-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {results.map((l) => (
              <div className="card loc-card" key={l.id}>
                <Photo src={l.photo} alt={l.name} className="loc-photo" ratio="16/9" />
                <h3>{l.name}</h3>
                {l.emergency && <p style={{ fontWeight: 700, color: "var(--red)" }}>Emergency Care Available</p>}
                <div className="addr">{l.address}</div>
                <p>{l.hours}<br />{l.phone}</p>
                <div className="loc-tags">{l.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btn-outline btn-sm"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.name + " " + l.address)}`}
                    target="_blank" rel="noreferrer">Get Directions →</a>
                  <a className="btn btn-primary btn-sm" href="/appointment">Book Here</a>
                </div>
              </div>
            ))}
            {results.length === 0 && (
              <div className="card" style={{ textAlign: "center" }}><h3>No branches found</h3><p>Try “Jakarta” or “Bandung”.</p></div>
            )}
          </div>
          <iframe
            title="HIKUNA hospital map"
            className="map-frame"
            loading="lazy"
            src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
