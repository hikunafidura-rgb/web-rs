"use client";
import { useState } from "react";

export default function EmergencyFloat() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="emg-float" onClick={() => setOpen(true)}>Emergency Care · 24/7</button>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="emg-badge">+</div>
            <h2 style={{ margin: "10px 0 6px" }}>24/7 Emergency Care</h2>
            <p style={{ color: "var(--muted)" }}>Immediate medical assistance is available.</p>
            <a href="tel:+62215550911" className="btn btn-primary btn-block" style={{ marginTop: 20 }}>
              Call Emergency
            </a>
            <p style={{ marginTop: 12, fontWeight: 800 }}>+62 21 555 0911</p>
            <button className="btn btn-outline btn-sm" style={{ marginTop: 10 }} onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
