import { projects } from "../data/profile";
import "./Projects.css";

const STATUS_STYLE = {
  RUNNING: "running",
  BUILDING: "building",
  STOPPED: "stopped",
};

export default function Projects() {
  return (
    <section id="projects" className="proj">
      <div className="proj__inner">
        <h2 className="proj__label mono">
          <span className="proj__idx">03</span> projects
        </h2>
        <p className="proj__hint mono">$ ps --projects -f</p>

        <div className="proj__table" role="table" aria-label="Projects">
          <div className="proj__row proj__row--head mono" role="row">
            <span role="columnheader">PID</span>
            <span role="columnheader">NAME</span>
            <span role="columnheader">STACK</span>
            <span role="columnheader">STATUS</span>
            <span role="columnheader" className="proj__col-action">
              ACTION
            </span>
          </div>

          {projects.map((p) => {
            const isLive = Boolean(p.url);
            const RowTag = isLive ? "a" : "div";
            return (
              <RowTag
                key={p.pid}
                role="row"
                className={`proj__row ${isLive ? "proj__row--live" : ""}`}
                href={isLive ? p.url : undefined}
                target={isLive ? "_blank" : undefined}
                rel={isLive ? "noreferrer" : undefined}
              >
                <span className="proj__pid mono" role="cell">
                  {p.pid}
                </span>
                <span className="proj__name" role="cell">
                  <span className="proj__name-text mono">{p.name}</span>
                  <span className="proj__desc">{p.description}</span>
                </span>
                <span className="proj__stack mono" role="cell">
                  {p.stack.join(", ")}
                </span>
                <span
                  className={`proj__status mono proj__status--${STATUS_STYLE[p.status]}`}
                  role="cell"
                >
                  <span className="proj__status-dot" aria-hidden="true" />
                  {p.status}
                </span>
                <span className="proj__col-action mono" role="cell">
                  {isLive ? "open →" : "—"}
                </span>
              </RowTag>
            );
          })}
        </div>

        <p className="proj__footnote mono">
          click a running process to open it — repos linked where available
        </p>
      </div>
    </section>
  );
}
