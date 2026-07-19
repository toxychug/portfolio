import { profile } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <h2 className="about__label mono">
          <span className="about__idx">01</span> about
        </h2>
        <div className="about__file mono">
          <span className="about__filename">$ cat about.txt</span>
        </div>
        <p className="about__bio">{profile.bio}</p>
      </div>
    </section>
  );
}
