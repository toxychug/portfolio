import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "log", label: "log" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000 * 30);
    return () => clearInterval(t);
  }, []);

  function getTime() {
    return new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Bogota",
    });
  }

  function go(id) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <button className="nav__brand mono" onClick={() => go("top")} aria-label="Back to top">
          <span className={`nav__dot nav__dot--${profile.status}`} aria-hidden="true" />
          ~/{profile.handle}
        </button>

        <nav className="nav__links mono" aria-label="Section navigation">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav__meta mono" aria-hidden="true">
          BOG {time}
        </div>

        <button
          className="nav__toggle mono"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav className="nav__mobile mono" aria-label="Section navigation mobile">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
