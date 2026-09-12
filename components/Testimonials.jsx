import Reveal from "./Reveal";
import Photo from "./Photo";

const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&q=80`;

const REVIEWS = [
  {
    name: "Ratna Wijaya", detail: "Cardiac patient · Central",
    photo: U("photo-1544005313-94ddf0286df2"),
    text: "After my heart screening at HIKUNA, I finally understood my condition. Dr. Aisyah explained everything with such care and patience.",
  },
  {
    name: "Budi Santoso", detail: "Executive Check-Up · South",
    photo: U("photo-1507003211169-0a1dd7228f2d"),
    text: "The executive check-up took half a day and everything was seamless — from lab to imaging to specialist consultation.",
  },
  {
    name: "Siti Aminah", detail: "Mother of pediatric patient",
    photo: U("photo-1438761681033-6461ffad8d80"),
    text: "My son's pediatrician is thorough and wonderful with children. Booking took a minute and we never wait long.",
  },
];

export default function Testimonials() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <span className="tag">Patient Stories</span>
            <h2>Trusted by thousands of families</h2>
            <p>Real experiences from patients treated at HIKUNA Hospital.</p>
          </div>
        </Reveal>
        <div className="grid-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="card testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">“{r.text}”</p>
                <div className="testi-person">
                  <Photo src={r.photo} alt={r.name} ratio="1/1" className="testi-ava" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.detail}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
