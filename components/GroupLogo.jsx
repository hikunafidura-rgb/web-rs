// HIKUNA GROUP — corporate parent brand. Deliberately distinct from the
// HIKUNA Hospital shield: navy pillars + gold swoosh, corporate wordmark.
export default function GroupLogo({ compact = false }) {
  return (
    <span className="group-brand">
      <svg className="group-mark" viewBox="0 0 72 52" aria-hidden="true">
        <defs>
          <linearGradient id="hikunaGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#C9A24B" />
            <stop offset="1" stopColor="#EAD096" />
          </linearGradient>
        </defs>
        <path d="M14 6v40" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M48 6v40" stroke="#FFFFFF" strokeWidth="10" />
        <path
          d="M5 41 C 22 35, 36 25, 64 11"
          stroke="url(#hikunaGold)" strokeWidth="7" strokeLinecap="round" fill="none"
        />
      </svg>
      <span className="group-text">
        HIKUNA GROUP
        {!compact && <small>Healthcare · Innovation · Excellence</small>}
      </span>
    </span>
  );
}
