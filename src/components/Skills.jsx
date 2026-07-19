import { skillGroups } from "../data/profile";
import "./Skills.css";

function loadColor(load) {
  if (load >= 80) return "var(--accent-green)";
  if (load >= 60) return "var(--accent)";
  return "var(--accent-amber)";
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="skills__label mono">
          <span className="skills__idx">02</span> skills
        </h2>
        <p className="skills__hint mono">$ top --skills</p>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.label}>
              <h3 className="skills__group-title mono">{group.label}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <div className="skills__item-row">
                      <span className="skills__item-name">{item.name}</span>
                      <span className="skills__item-value mono">{item.load}%</span>
                    </div>
                    <div
                      className="skills__meter"
                      role="progressbar"
                      aria-label={item.name}
                      aria-valuenow={item.load}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="skills__meter-fill"
                        style={{ width: `${item.load}%`, background: loadColor(item.load) }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
