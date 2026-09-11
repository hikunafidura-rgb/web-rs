import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import Photo from "../../../components/Photo";
import { DOCTORS, getDoctor, specialtyName, rupiah, nextDays, fmtDay, dateKey, slotStatus, TIMES } from "../../../lib/data";

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ id: d.id }));
}

export default async function DoctorProfile({ params }) {
  const { id } = await params;
  const d = getDoctor(id);
  if (!d) notFound();
  const days = nextDays(5);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / <a href="/doctors">Find a Doctor</a> / {d.name}</div>
          <h1>{d.name}</h1>
          <p>{d.title} · {specialtyName(d.specialty)}</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container profile-grid">
          <Reveal>
            <div>
              <Photo src={d.photo} alt={d.name} className="profile-photo" />
              <div className="card profile-card" style={{ marginTop: 20 }}>
                <h2 style={{ fontSize: 22 }}>{d.name}</h2>
                <p style={{ color: "var(--muted)" }}>{d.title}</p>
                <div style={{ margin: "12px 0" }}><span className="spec-pill">{specialtyName(d.specialty)}</span></div>
                <p className="rating">⭐ {d.rating} · {d.reviews}+ Reviews</p>
                <p style={{ color: "var(--muted)", fontSize: 14 }}>{d.experience}+ Years Experience</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="card" style={{ marginBottom: 24 }}>
                <h3>About</h3>
                <p style={{ marginTop: 8 }}>{d.about}</p>
                <div className="info-table">
                  <div className="info-cell"><small>Specialty</small><strong>{specialtyName(d.specialty)}</strong></div>
                  <div className="info-cell"><small>Consultation Fee</small><strong>{rupiah(d.fee)}</strong></div>
                  <div className="info-cell"><small>Languages</small><strong>{d.languages.join(", ")}</strong></div>
                  <div className="info-cell"><small>Hospital Branch</small><strong>{d.branches.join(", ")}</strong></div>
                  <div className="info-cell"><small>Gender</small><strong>{d.gender}</strong></div>
                  <div className="info-cell"><small>Location</small><strong>{d.location}</strong></div>
                </div>
                <h3 style={{ marginTop: 22 }}>Education</h3>
                <ul className="edu-list">{d.education.map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card" style={{ marginBottom: 24 }}>
                <h3>Availability this week</h3>
                <p style={{ margin: "6px 0 16px" }}>Pick a day, then book your slot.</p>
                {days.map((day) => {
                  const key = dateKey(day);
                  const free = TIMES.filter((t) => slotStatus(d.id, key, t) === "available");
                  const f = fmtDay(day);
                  return (
                    <div key={key} className="summary-row">
                      <span>{f.dow}, {f.num} {f.mon}</span>
                      <b style={{ color: free.length ? "var(--teal)" : "#94A3B8" }}>
                        {free.length ? `${free.length} slots free` : "Fully booked"}
                      </b>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal className="book-box">
            <div className="card">
              <div className="price">{rupiah(d.fee)} <small>/ session</small></div>
              <p style={{ margin: "10px 0 20px" }}>⭐ {d.rating} · {d.reviews}+ patient reviews</p>
              <Link href={`/appointment?doctor=${d.id}`} className="btn btn-primary btn-block">
                Book Appointment →
              </Link>
              <Link href={`/schedule?doctor=${d.id}`} className="btn btn-outline btn-block" style={{ marginTop: 10 }}>
                View Full Schedule
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
