import Link from "next/link";
import Photo from "./Photo";
import { Icon } from "./Icons";
import { specialtyName } from "../lib/data";

export default function DoctorCard({ doctor }) {
  return (
    <div className="glass-doc">
      <div className="glass-doc__inner">
        <Photo src={doctor.photo} alt={doctor.name} ratio="4/4.8" className="glass-doc__cover" />
        <div className="glass-doc__body">
          <h3 className="glass-doc__header">
            <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
            <Icon name="i-check" size={24} className="verify" />
          </h3>
          <p className="glass-doc__bio">{doctor.title} — {specialtyName(doctor.specialty)}</p>
          <div className="glass-doc__row">
            <div className="glass-doc__chips">
              <span className="glass-chip">
                <Icon name="i-user" size={18} />
                {doctor.reviews}+
              </span>
              <span className="glass-chip">
                <Icon name="i-cards" size={18} />
                {doctor.experience}y
              </span>
            </div>
            <Link href={`/appointment?doctor=${doctor.id}`} className="glass-btn">
              Book
              <Icon name="i-plus" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
