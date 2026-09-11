"use client";
import { useState } from "react";

// Photo with automatic graceful fallback:
// if the remote image fails, a branded gradient placeholder shows instead.
export default function Photo({ src, alt = "", className = "", ratio, style }) {
  const [err, setErr] = useState(false);
  return (
    <div className={`photo ${className}`} style={{ ...(ratio ? { aspectRatio: ratio } : null), ...style }}>
      {!err ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} />
      ) : (
        <div className="photo-fallback"><span>H</span><small>HIKUNA</small></div>
      )}
    </div>
  );
}
