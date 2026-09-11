"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  ["#beranda", "Beranda"],
  ["#tentang", "Tentang Kami"],
  ["#layanan", "Layanan"],
  ["#dokter", "Dokter"],
  ["#fasilitas", "Fasilitas"],
  ["#artikel", "Artikel Kesehatan"],
  ["#kontak", "Kontak"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="#beranda" className="logo">
          <span className="logo-icon">🏥</span>
          <span className="logo-text">HIKUNA <small>Hospital</small></span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#janji" className="btn btn-primary btn-nav" onClick={() => setOpen(false)}>🔵 Buat Janji</a>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
