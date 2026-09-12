import Link from "next/link";
import Reveal from "../../components/Reveal";
import Photo from "../../components/Photo";
import GroupLogo from "../../components/GroupLogo";
import { GROUP_HQ } from "../../lib/data";

const DIVISIONS = [
  {
    name: "HIKUNA Hospital & Medical Center",
    desc: "Flagship tertiary hospital — specialist care, emergency and surgery.",
    href: "/",
  },
  {
    name: "HIKUNA Diagnostics & Imaging",
    desc: "Laboratory, radiology and advanced medical imaging network.",
    href: "/services",
  },
  {
    name: "HIKUNA Health Screening",
    desc: "Preventive Medical Check-Up programs for individuals and companies.",
    href: "/checkup",
  },
  {
    name: "HIKUNA Digital Care",
    desc: "Online booking, patient dashboard and telemedicine services.",
    href: "/dashboard",
  },
];

const VALUES = [
  ["Innovation", "Modern technology and continuous improvement in every service."],
  ["Excellence", "National-standard quality, measured and accountable."],
  ["Compassion", "Healthcare that treats people as people, not numbers."],
];

export default function GroupPage() {
  return (
    <>
      <section
        className="group-hero"
        style={{
          backgroundImage: `linear-gradient(100deg,rgba(11,31,51,.96) 20%,rgba(11,31,51,.72) 55%,rgba(11,31,51,.35) 100%),url("${GROUP_HQ}")`,
        }}
      >
        <div className="container">
          <div className="breadcrumb" style={{ color: "#A9BCCD" }}>
            <Link href="/" style={{ color: "#7fd4c7" }}>Home</Link> / HIKUNA GROUP
          </div>
          <GroupLogo />
          <h1>Healthcare, backed by<br />a broader vision.</h1>
          <p>
            HIKUNA Hospital is part of HIKUNA GROUP, a growing organization
            committed to innovation, excellence, and better healthcare experiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="tag">Our Companies</span>
              <h2>One group, complete care</h2>
              <p>Four integrated divisions covering every step of the patient journey.</p>
            </div>
          </Reveal>
          <div className="grid-2">
            {DIVISIONS.map((d, i) => (
              <Reveal key={d.name} delay={(i % 2) * 100}>
                <div className="card">
                  <span className="mcu-flag" style={{ position: "static", transform: "none" }}>
                    0{i + 1}
                  </span>
                  <h3 style={{ marginTop: 12 }}>{d.name}</h3>
                  <p>{d.desc}</p>
                  <Link href={d.href} className="link">Explore →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="tag">What Guides Us</span>
              <h2>Corporate values</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {VALUES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="card">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>Partner with HIKUNA GROUP</h2>
              <p>Corporate health programs, partnerships and media inquiries.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:care@hikunahospital.id" className="btn btn-white">care@hikunahospital.id</a>
                <a href="tel:+62215550911" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,.5)", color: "#fff" }}>
                  +62 21 555 0911
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
