// HIKUNA brand mark — shield outline (teal/navy) with a fused H + medical
// cross monogram inside. Inspired by the official HIKUNA Hospital logo.
export default function Logo({ light = false }) {
  return (
    <span className="brand">
      <svg className="brand-mark" viewBox="0 0 48 52" aria-hidden="true">
        {/* shield outline — teal left half, navy right half */}
        <path
          d="M24 3 L10.5 8.5 V25 C10.5 34 16 41 24 46"
          stroke="#25B7A6" strokeWidth="3.6" strokeLinecap="round" fill="none"
        />
        <path
          d="M24 3 L37.5 8.5 V25 C37.5 34 32 41 24 46"
          stroke="#0B1F33" strokeWidth="3.6" strokeLinecap="round" fill="none"
        />
        {/* H stems */}
        <path d="M17.5 16v17M30.5 16v17" stroke="#0B1F33" strokeWidth="4.6" strokeLinecap="round" fill="none" />
        {/* fused crossbar + cross */}
        <rect x="15" y="22.4" width="18" height="4.4" rx="2.2" fill="#25B7A6" />
        <rect x="21.8" y="15.5" width="4.4" height="18" rx="2.2" fill="#0B1F33" />
      </svg>
      <span className={`brand-text${light ? " light" : ""}`}>
        HIKUNA<small>Hospital & Medical Center</small>
      </span>
    </span>
  );
}
