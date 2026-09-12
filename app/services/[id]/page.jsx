import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import Photo from "../../../components/Photo";
import DoctorCard from "../../../components/DoctorCard";
import { SPECIALTIES, getSpecialty, DOCTORS } from "../../../lib/data";

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ id: s.id }));
}

export default async function ServiceDetail({ params }) {
  const { id } = await params;
  const s = getSpecialty(id);
  if (!s) notFound();
  const docs = DOCTORS.filter((d) => d.specialty === id);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / <a href="/services">Services</a> / {s.name}</div>
          <h1>{s.name}</h1>
          <p>{s.desc}</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <Reveal>
            <Photo src={s.photo} alt={s.name} ratio="21/9" style={{ borderRadius: 24, marginBottom: 32 }} />
          </Reveal>
          <div className="grid-2">
            <Reveal>
              <div className="card">
                <h3>About this center</h3>
                <p style={{ marginTop: 8 }}>{s.about}</p>
                <h3 style={{ marginTop: 22 }}>Treatments & services</h3>
                <ul className="mcu-features">
                  {s.treatments.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                  <Link href={`/appointment?specialty=${s.id}`} className="btn btn-primary btn-sm">Book Appointment</Link>
                  <Link href={`/doctors?specialty=${s.id}`} className="btn btn-outline btn-sm">See doctors</Link>
                </div>
              </div>
            </Reveal>
            <div>
              <h3 style={{ marginBottom: 16 }}>{s.name} specialists</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {docs.length === 0 && (
                  <div className="card"><p>Doctors for this specialty will be listed here soon.</p></div>
                )}
                {docs.map((d, i) => (
                  <Reveal key={d.id} delay={i * 100}><DoctorCard doctor={d} /></Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
