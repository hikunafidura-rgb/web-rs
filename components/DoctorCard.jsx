import Link from "next/link";
import { specialtyName, rupiah } from "../lib/data";

export default function DoctorCard({ doctor, showFee = false }) {
  return (
    <div className="card doctor-card">
      <div className="doc-top">
        <div className={`avatar ${doctor.gradient}`}>{doctor.initials}</div>
        <div>
          <h3>{doctor.name}</h3>
          <div className="title">{doctor.title}</div>
        </div>
      </div>
      <div><span className="spec-pill">{specialtyName(doctor.specialty)}</span></div>
      <div className="doc-meta">
        <span>⭐ <b>{doctor.rating}</b> · {doctor.reviews}+ reviews</span>
        <span>🎓 <b>{doctor.experience}y</b> exp.</span>
        {showFee && <span>💳 <b>{rupiah(doctor.fee)}</b></span>}
      </div>
      <div style={{ marginBottom: 18 }}><span className="avail">● Available Today</span></div>
      <div className="doc-actions">
        <Link href={`/doctors/${doctor.id}`} className="btn btn-outline btn-sm">View Profile →</Link>
        <Link href={`/appointment?doctor=${doctor.id}`} className="btn btn-primary btn-sm">Book</Link>
      </div>
    </div>
  );
}
