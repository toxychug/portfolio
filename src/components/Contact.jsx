import { profile } from "../data/profile";
import "./Contact.css";

const PORTS = [
  { port: "25", label: "email", href: `mailto:${profile.email}`, value: profile.email },
  { port: "443", label: "github", href: profile.github, value: "github" },
  { port: "8443", label: "linkedin", href: profile.linkedin, value: "linkedin" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__label mono">
          <span className="contact__idx">05</span> contact
        </h2>
        <p className="contact__hint mono">$ netstat --open-ports</p>

        <div className="contact__grid">
          {PORTS.map((p) => (
            <a
              key={p.port}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact__card"
            >
              <span className="contact__port mono">:{p.port}</span>
              <span className="contact__info">
                <span className="contact__label-text mono">{p.label}</span>
                <span className="contact__value">{p.value}</span>
              </span>
              <span className="contact__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>

        <footer className="contact__footer mono">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="contact__footer-status">
            <span className="contact__footer-dot" aria-hidden="true" /> system operational
          </span>
        </footer>
      </div>
    </section>
  );
}
