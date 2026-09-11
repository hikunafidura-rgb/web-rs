import Link from "next/link";
import Reveal from "../components/Reveal";
import DoctorCard from "../components/DoctorCard";
import { DOCTORS, SPECIALTIES, LOCATIONS, MCU_PACKAGES, rupiah } from "../lib/data";

const WHY = [
  ["01", "Expert Doctors", "Experienced specialists dedicated to your care."],
  ["02", "Advanced Technology", "Modern medical technology and facilities."],
  ["03", "Patient First", "Healthcare designed around your needs."],
  ["04", "24/7 Support", "We're here whenever you need us."],
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">✨ Trusted Hospital & Medical Center</span>
            <h1>Better Care.<br /><span className="teal">Better Life.</span></h1>
            <p className="sub">Discover trusted doctors, advanced medical services, and personalized healthcare — all in one place.</p>
            <div className="hero-btns">
              <Link href="/doctors" className="btn btn-primary">Find a Doctor →</Link>
              <Link href="/appointment" className="btn btn-outline">Book Appointment</Link>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <span className="g1">AR</span><span className="g3">FH</span><span className="g4">NP</span><span className="g6">SL</span>
              </div>
              <small><strong>⭐ 4.9/5</strong><br />from 2,400+ patient reviews</small>
            </div>

            <form className="search-hero" action="/doctors" method="get">
              <input name="q" placeholder="🔎 Search doctor name or specialty..." />
              <button className="btn btn-teal btn-sm" type="submit">Search</button>
            </form>
          </div>

          <div className="hero-visual">
            <div className="doc-photo">
              <div className="face">👨‍⚕️</div>
              <strong>150+ Specialist Doctors</strong>
              <span>Across 7 centers of excellence</span>
            </div>
            <div className="float-card float-1">
              <span className="fi">🚑</span>
              <div><strong>24/7 Emergency Care</strong><span>We&apos;re here when you need us.</span></div>
            </div>
            <div className="float-card float-2">
              <span className="fi">🏆</span>
              <div><strong>Nationally Accredited</strong><span>Paripurna-level standard</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND A DOCTOR preview ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="tag">Find a Doctor</span>
              <h2>Find the right doctor for you</h2>
              <p>Top-rated specialists, ready to see you this week.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {DOCTORS.slice(0, 3).map((d, i) => (
              <Reveal key={d.id} delay={i * 100}><DoctorCard doctor={d} /></Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/doctors" className="btn btn-outline">View All Doctors →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section-alt" id="services">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="tag">Our Services</span>
              <h2>Find the right care for you</h2>
              <p>Centers of excellence with advanced diagnostics and treatment.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {SPECIALTIES.slice(0, 6).map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <div className="card">
                  <div className="icon">{s.icon}</div>
                  <h3>{s.name}</h3><p>{s.desc}</p>
                  <Link href={`/doctors?specialty=${s.id}`} className="link">See doctors →</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/services" className="btn btn-primary">View All Specialties →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="section" id="about">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="tag">Why HIKUNA?</span>
              <h2>Healthcare that puts you first</h2>
              <p>Compassionate Care, Advanced Medicine — in everything we do.</p>
            </div>
          </Reveal>
          <div className="grid-4">
            {WHY.map(([no, title, desc], i) => (
              <Reveal key={no} delay={i * 100}>
                <div className="card">
                  <div style={{ fontWeight: 800, color: "var(--teal)", fontSize: 15 }}>{no}</div>
                  <h3 style={{ marginTop: 8 }}>{title}</h3><p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MCU preview ── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="tag">Medical Check-Up</span>
              <h2>Take care of your health before problems begin</h2>
              <p>HIKUNA Medical Check-Up packages for every stage of life.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {MCU_PACKAGES.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <div className={`card mcu-card ${p.highlight ? "highlight" : ""}`}>
                  {p.highlight && <span className="mcu-flag">⭐ MOST POPULAR</span>}
                  <div className="icon">{p.icon}</div>
                  <h3>{p.name}</h3><p>{p.desc}</p>
                  <div className="mcu-price">{rupiah(p.price)} <small>/ package</small></div>
                  <ul className="mcu-features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <Link href={`/checkup?package=${p.id}`} className={`btn ${p.highlight ? "btn-teal" : "btn-outline"} btn-block`}>
                    Book {p.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATIONS preview ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="tag">Our Locations</span>
              <h2>Find HIKUNA near you</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.id} delay={i * 100}>
                <div className="card loc-card">
                  <h3>📍 {l.name}</h3>
                  <div className="addr">{l.address}</div>
                  <p>🕐 {l.hours}<br />📞 {l.phone}</p>
                  <Link href="/locations" className="link">Get Directions →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Ready to feel better?</h2>
              <p>Book in under a minute with our guided appointment wizard.</p>
              <Link href="/appointment" className="btn btn-white">📅 Start Booking →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
