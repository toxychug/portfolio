import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import "./Hero.css";

const LINES = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat role.txt", out: profile.role },
  { cmd: "echo $LOCATION", out: profile.location },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setDone(true);
      setVisibleLines(LINES.length);
      return;
    }

    let cancelled = false;

    async function run() {
      for (let i = 0; i < LINES.length; i++) {
        const { cmd } = LINES[i];
        setTyped("");
        setShowOut(false);
        for (let c = 1; c <= cmd.length; c++) {
          if (cancelled) return;
          setTyped(cmd.slice(0, c));
          await sleep(28);
        }
        await sleep(200);
        if (cancelled) return;
        setShowOut(true);
        await sleep(320);
        if (cancelled) return;
        setVisibleLines((v) => v + 1);
      }
      setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  const activeLine = visibleLines < LINES.length ? LINES[visibleLines] : null;

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__terminal mono" role="group" aria-label="Terminal introduction">
          <div className="hero__bar">
            <span className="hero__bar-dot" style={{ background: "#f4685a" }} />
            <span className="hero__bar-dot" style={{ background: "#f5a623" }} />
            <span className="hero__bar-dot" style={{ background: "#6ee7a3" }} />
            <span className="hero__bar-title">bash — {profile.handle}@portfolio</span>
          </div>

          <div className="hero__body">
            {LINES.slice(0, visibleLines).map((l, i) => (
              <div className="hero__block" key={i}>
                <p className="hero__prompt">
                  <span className="hero__user">{profile.handle}@bogota</span>
                  <span className="hero__sep">:~$</span> {l.cmd}
                </p>
                <p className="hero__out">{l.out}</p>
              </div>
            ))}

            {activeLine && (
              <div className="hero__block">
                <p className="hero__prompt">
                  <span className="hero__user">{profile.handle}@bogota</span>
                  <span className="hero__sep">:~$</span> {typed}
                  <span className="hero__cursor" aria-hidden="true" />
                </p>
                {showOut && <p className="hero__out">{activeLine.out}</p>}
              </div>
            )}

            {done && (
              <p className="hero__prompt hero__prompt--idle">
                <span className="hero__user">{profile.handle}@bogota</span>
                <span className="hero__sep">:~$</span>
                <span className="hero__cursor" aria-hidden="true" />
              </p>
            )}
          </div>
        </div>

        <p className="hero__tagline">
          Building software from Bogotá — one process at a time.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View projects
          </a>
          <a href="#contact" className="hero__btn">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
