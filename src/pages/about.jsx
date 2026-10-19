import { ArrowUpRight, Building2, GraduationCap, Mail, Users } from "lucide-react";
import "./about.css";

// Edit names, titles and emails here.
const supervisors = [
  {
    heading: "Project Supervisor",
    role: "Supervisor",
    name: "Dr. Kaushlya Dissanayake",
    title: "Lecturer, Department of Information Technology, SLIIT",
    email: "", // example: "name@sliit.lk"
  },
  {
    heading: "Project Co-Supervisor",
    role: "Co-Supervisor",
    name: "Suriya Kumari",
    title: "Department of Information Technology, SLIIT",
    email: "",
  },
];

const members = [
  {
    name: "Senevirathna T.M.N.D.L",
    id: "IT22082442",
    focus: "AI conversational travel analyser",
    text: "Builds the multi-intent analyser for text and voice requests, generates personalised packages with an NSGA-II optimiser, and develops the adaptive engine and proactive voice agent.",
  },
  {
    name: "Kaweeshwara M.D.O",
    id: "IT22216014",
    focus: "Adaptive emotion recognition",
    text: "Develops the on-device MobileNetV2 emotion recognition module, the context fusion pipeline, the LSTM emotional trajectory tracker and the manager heatmap dashboard.",
  },
  {
    name: "Rupasinghe M.L.K.S",
    id: "IT22176974",
    focus: "Smart driver and vehicle safety",
    text: "Develops driver-state monitoring, driving behaviour , and the route-risk model that produces proactive safety alerts.",
  },
  {
    name: "Manthrirathna M.A.A.C",
    id: "IT22607614",
    focus: "Tourism flow optimisation",
    text: "Builds the crowd forecasting model for attractions and the optimisation engine that recommends alternative sites, times and routes to visitors and operators.",
  },
];

function About() {
  return (
    <main className="about">
      <header className="about-hero">
        <span className="about-kicker">
          <Users size={15} /> The Team
        </span>
        <h1>About Us</h1>
        <p>
          Meet the researchers and engineers who built TripMind LK, a final year
          research project at SLIIT.
        </p>
      </header>

      <section className="about-body">
        <h2 className="about-title">Supervisors</h2>
        <div className="about-sup-grid">
          {supervisors.map((s, i) => (
            <article className={`sup-card accent-${i}`} key={s.name}>
              <span className="sup-heading">{s.heading}</span>
              <span className="sup-role">{s.role}</span>
              <h3>{s.name}</h3>
              <p>{s.title}</p>
              {s.email && (
                <a href={`mailto:${s.email}`} className="sup-mail">
                  <Mail size={15} /> {s.email}
                </a>
              )}
            </article>
          ))}
        </div>

        <h2 className="about-title">Group Members</h2>
        <div className="about-member-grid">
          {members.map((m, i) => (
            <article className={`member-card accent-${i}`} key={m.id}>
              <h3>{m.name}</h3>
              <span className="member-id">{m.id}</span>
              <strong className="member-focus">{m.focus}</strong>
              <p>{m.text}</p>
            </article>
          ))}
        </div>

        <article className="inst-card">
          <span className="inst-icon">
            <Building2 size={30} />
          </span>
          <div className="inst-text">
            <span>Institution</span>
            <h3>Sri Lanka Institute of Information Technology (SLIIT)</h3>
            <p>
              <GraduationCap size={15} /> Faculty of Computing · Department of
              Information Technology · 2026
            </p>
          </div>
          <a
            className="inst-btn"
            href="https://www.sliit.lk"
            target="_blank"
            rel="noreferrer"
          >
            Visit SLIIT <ArrowUpRight size={17} />
          </a>
        </article>
      </section>
    </main>
  );
}

export default About;