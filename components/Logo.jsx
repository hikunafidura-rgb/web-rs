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
        <path d="M14.5 10v28M33.5 10v28" stroke="#fff" strokeWidth="7.5" strokeLinecap="round" fill="none" />
        <rect x="13" y="20.5" width="22" height="7" rx="2.5" fill="#fff" />
        <rect x="20.5" y="13" width="7" height="22" rx="2.5" fill="#25B7A6" />
      </svg>
      <span className={`brand-text${light ? " light" : ""}`}>
        HIKUNA<small>Hospital & Medical Center</small>
      </span>
    </span>
  );
}
