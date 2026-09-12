import Link from "next/link";
import Photo from "./Photo";
import {
  specialtyName, nextAvailable, BRANCH_NAMES,
  dateKey, slotState, TIMES,
} from "../lib/data";

function availableToday(id) {
  const key = dateKey(new Date());
  return TIMES.some((t) => slotState(id, key, t) === "available");
}

function VerifiedBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-label="Verified doctor">
      <path d="M6 3h12v18l-6-4.6L6 21V3z" stroke="#0D9488" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.3 12l2 2 3.4-4" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DoctorCard({ doctor }) {
  const next = nextAvailable(doctor.id);
  const today = availableToday(doctor.id);
  return (
    <div className="doc-card">
      <Link href={`/doctors/${doctor.id}`} aria-label={`View profile of ${doctor.name}`}>
        <Photo src={doctor.photo} alt={`Portrait of ${doctor.name}`} ratio="16/10" className="doc-photo" />
      </Link>
      <div className="doc-body">
        <h3 className="doc-name">
          <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
          <VerifiedBadge />
        </h3>
        <div className="doc-sub">{doctor.title} · {specialtyName(doctor.specialty)}</div>
        <div className="doc-hosp">{BRANCH_NAMES[doctor.branches[0]]}</div>
        <div className="doc-rate">
          <span className="star">★ {doctor.rating}</span>
          <span className="muted">· {doctor.reviews} reviews</span>
          <span className="exp">{doctor.experience} years experience</span>
        </div>
        <div className="doc-pills">
          <span className="pill-grey">{today ? "● Available Today" : "○ Fully booked today"}</span>
          {doctor.tele && <span className="pill-mint">● Video consult</span>}
        </div>
        <div className="next-box">
          <small>Next available</small>
          {next ? <strong>{next.label} · {next.time}</strong> : <strong>See full schedule</strong>}
        </div>
        <div className="doc-actions">
          <Link href={`/doctors/${doctor.id}`} className="btn btn-secondary btn-block">View Profile</Link>
          <Link href={`/appointment?doctor=${doctor.id}`} className="btn btn-primary btn-block">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}
