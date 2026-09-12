"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const ITEMS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Specialist Doctors" },
  { value: 250, suffix: "+", label: "Hospital Beds" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

function Counter({ value, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const dur = 1600;
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return (
    <span ref={ref} className="stat-num">
      {n}<em>{suffix}</em>
    </span>
  );
}

export default function Stats() {
  return (
    <Reveal>
      <div className="stats-band">
        <span className="stats-eyebrow">Our Philosophy</span>
        <h2>Care measured in lives, not visits.</h2>
        <div className="stats-grid">
          {ITEMS.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
