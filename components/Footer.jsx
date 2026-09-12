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
          <p>HIKUNA Hospital & Medical Center</p>
          <p>Compassionate Care, Advanced Medicine.</p>
        </div>
        <div>
          <h4>Patient Care</h4>
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
          <p style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>+62 21 555 0911</p>
          <h4 style={{ marginTop: 18 }}>Email</h4>
          <p>care@hikunahospital.id</p>
        </div>
      </div>
      <div className="container">
        <p className="group-statement">HIKUNA Hospital & Medical Center is part of HIKUNA GROUP.</p>
      </div>
      <div className="copyright">© 2026 HIKUNA Hospital. Compassionate Care, Advanced Medicine.</div>
    </footer>
  );
}
