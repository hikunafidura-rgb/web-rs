// HIKUNA brand mark — H fused with a medical cross (white/blue/teal, no red).
export default function Logo({ light = false }) {
  return (
    <span className="brand">
      <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="hikunaBrand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B1F33" />
            <stop offset="1" stopColor="#1677FF" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill="url(#hikunaBrand)" />
        <path d="M15 11v26M33 11v26M15 24h18" stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none" />
        <rect x="30.5" y="4.5" width="7" height="18" rx="2.5" fill="#24B7A5" />
        <rect x="24" y="11" width="18" height="7" rx="2.5" fill="#24B7A5" />
      </svg>
      <span className={`brand-text${light ? " light" : ""}`}>
        HIKUNA<small>Hospital & Medical Center</small>
      </span>
    </span>
  );
}
