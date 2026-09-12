import Link from "next/link";
import Photo from "../../components/Photo";
import { getDoctor, specialtyName } from "../../lib/data";

const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

const QUICK = [
  {
    title: "Book Appointment", desc: "Seven quick steps to see the right doctor.",
    photo: U("photo-1576091160550-2173dba999ef"), href: "/appointment", link: "Start booking →",
  },
  {
    title: "Find a Doctor", desc: "Search specialists by name, schedule or language.",
    photo: U("photo-1559839734-2b71ea197ec2"), href: "/doctors", link: "Browse doctors →",
  },
  {
    title: "Check-Up", desc: "Your annual screening is due next month.",
    photo: U("photo-1516549655169-df83a0774514"), href: "/checkup", link: "Book check-up →",
  },
];

export default function DashboardPage() {
  const doc = getDoctor("aisyah-rahma");
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Patient Dashboard</div>
          <h1>Patient Dashboard</h1>
          <p>Your health, appointments and records in one place.</p>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="dash-hero">
            <h2>Good morning, Hikuna Patient</h2>
            <p>Here&apos;s what&apos;s coming up for you.</p>
            <div className="appt-card">
              <div style={{ width: 72, minWidth: 72 }}>
                <Photo src={doc.photo} alt={doc.name} ratio="1/1" style={{ borderRadius: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <small style={{ color: "var(--muted)", fontWeight: 700 }}>UPCOMING APPOINTMENT</small>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{doc.name} — {specialtyName(doc.specialty)}</div>
                <div style={{ color: "var(--muted)" }}>Wednesday, 16 September · 10:30 AM · HIKUNA Central</div>
              </div>
              <Link href="/appointment" className="btn btn-primary btn-sm">View Appointment</Link>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 28 }}>
            {QUICK.map((c) => (
              <div className="card" key={c.title}>
                <Photo src={c.photo} alt={c.title} className="card-photo" ratio="16/9" />
                <h3>{c.title}</h3><p>{c.desc}</p>
                <Link className="link" href={c.href}>{c.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
