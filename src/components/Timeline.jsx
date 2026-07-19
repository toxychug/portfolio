import { timeline } from "../data/profile";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section id="log" className="log">
      <div className="log__inner">
        <h2 className="log__label mono">
          <span className="log__idx">04</span> log
        </h2>
        <p className="log__hint mono">$ git log --oneline --decorate</p>

        <ol className="log__list">
          {timeline.map((entry) => (
            <li className="log__entry" key={entry.hash}>
              <div className="log__rail" aria-hidden="true">
                <span className="log__dot" />
                <span className="log__line" />
              </div>
              <div className="log__content">
                <p className="log__meta mono">
                  <span className="log__hash">{entry.hash}</span>
                  <span className="log__date">{entry.date}</span>
                </p>
                <h3 className="log__title">{entry.title}</h3>
                <p className="log__org mono">{entry.org}</p>
                <p className="log__detail">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
