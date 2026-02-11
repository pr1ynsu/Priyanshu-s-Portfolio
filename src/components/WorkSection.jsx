import { Link } from "react-router-dom";


export default function WorkSection() {
  return (
    <section className="hero-work">

      <h2 className="work-title">My Work</h2>
      <p className="work-sub">
        Full-Stack Development • Graphic Design • UI/UX
      </p>

      <div className="work-preview-grid">
        <div className="work-preview-card">Web Apps</div>
        <div className="work-preview-card">Design Projects</div>
        <div className="work-preview-card">Creative Builds</div>
      </div>

      <Link to="/work" className="work-preview-btn">
        View All Projects →
      </Link>

    </section>
  );
}
