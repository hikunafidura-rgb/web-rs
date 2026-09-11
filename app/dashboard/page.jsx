import Link from "next/link";

export default function DashboardPage() {
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
            <h2>Good morning, Hikuna Patient 👋</h2>
            <p>Here&apos;s what&apos;s coming up for you.</p>
            <div className="appt-card">
              <div style={{ fontSize: 44 }}>🗓️</div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <small style={{ color: "var(--muted)", fontWeight: 700 }}>UPCOMING APPOINTMENT</small>
                <div style={{ fontWeight: 800, fontSize: 18 }}>Dr. Aisyah Rahma — Cardiology</div>
                <div style={{ color: "var(--muted)" }}>Wednesday, 16 September · 10:30 AM · HIKUNA Central</div>
              </div>
              <Link href="/appointment" className="btn btn-primary btn-sm">View Appointment</Link>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: 28 }}>
            <div className="card"><div className="icon">📋</div><h3>Medical Records</h3><p>Lab results, prescriptions and visit history.</p><a className="link" href="/dashboard">Open records →</a></div>
            <div className="card"><div className="icon">💊</div><h3>Prescriptions</h3><p>2 active prescriptions, 1 refill available.</p><a className="link" href="/dashboard">Manage →</a></div>
            <div className="card"><div className="icon">🧪</div><h3>Check-Up</h3><p>Your annual screening is due next month.</p><Link className="link" href="/checkup">Book check-up →</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
