import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div style={{ marginBottom: 16 }}>
            <Logo light />
          </div>
          <p>Compassionate Care, Advanced Medicine.</p>
          <p>Jl. Sehat Bersama No. 88, Jakarta</p>
          <p>+62 21 555 0188 · 24/7</p>
        </div>
        <div>
          <h4>Patients</h4>
          <Link href="/doctors">Find a Doctor</Link>
          <Link href="/appointment">Book Appointment</Link>
          <Link href="/schedule">Doctor Schedule</Link>
          <Link href="/checkup">Medical Check-Up</Link>
        </div>
        <div>
          <h4>Hospital</h4>
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/dashboard">Patient Dashboard</Link>
          <Link href="/#about">About Us</Link>
        </div>
        <div>
          <h4>Emergency 24/7</h4>
          <p>Need immediate help?</p>
          <p style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>+62 21 555 0911</p>
          <p>care@hikunahospital.id</p>
        </div>
      </div>
      <div className="copyright">© 2026 HIKUNA Hospital. Compassionate Care, Advanced Medicine.</div>
    </footer>
  );
}
