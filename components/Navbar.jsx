"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  ["/", "Home"],
  ["/doctors", "Find a Doctor"],
  ["/services", "Services"],
  ["/checkup", "Medical Check-Up"],
  ["/#about", "About Us"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href) =>
    href === "/" ? path === "/" : href !== "/#about" && path.startsWith(href);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" aria-label="HIKUNA Hospital home">
          <Logo />
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className={isActive(href) ? "active" : ""} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="/appointment" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Book Appointment
          </a>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
