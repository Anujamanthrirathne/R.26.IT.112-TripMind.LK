import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Flag,
  Presentation,
} from "lucide-react";

import "./Milestones.css";

// Edit the date and status of each milestone here.
// status: "completed" or "upcoming"

const milestones = [
  {
    id: "proposal",
    title: "Project Proposal",
    date: "Date to be added",
    status: "completed",
    marks: 6,
    text: "Initial project proposal covering problem statement, objectives, and proposed methodology.",
    covers: [
      "Problem statement",
      "Objectives",
      "Proposed methodology",
    ],
    link: {
      to: "/documents",
      label: "View documents",
      icon: FileText,
    },
  },

  {
    id: "pp1",
    title: "Progress Presentation I",
    date: "Date to be added",
    status: "completed",
    marks: 15,
    text: "First progress evaluation covering literature review, system design, and initial model development.",
    covers: [
      "Literature review",
      "System design",
      "Initial model development",
    ],
    link: {
      to: "/presentations",
      label: "View presentations",
      icon: Presentation,
    },
  },

  {
    id: "pp2",
    title: "Progress Presentation II",
    date: "Date to be added",
    status: "completed",
    marks: 18,
    text: "Second progress evaluation covering completed modules, integration, and testing results.",
    covers: [
      "Completed modules",
      "Integration",
      "Testing results",
    ],
    link: {
      to: "/presentations",
      label: "View presentations",
      icon: Presentation,
    },
  },

  {
    id: "final",
    title: "Final Assessment",
    date: "Date to be added",
    status: "upcoming",
    marks: 20,
    text: "Final system demonstration, complete documentation, and comprehensive project evaluation.",
    covers: [
      "System demonstration",
      "Complete documentation",
      "Project evaluation",
    ],
    link: {
      to: "/documents",
      label: "View documents",
      icon: FileText,
    },
  },
];

function Milestones() {
  const [selected, setSelected] = useState("all");
  const [openId, setOpenId] = useState(null);

  const done = milestones.filter(
    (m) => m.status === "completed"
  ).length;

  const visible =
    selected === "all"
      ? milestones
      : milestones.filter((m) => m.id === selected);

  const progress = Math.round(
    (done / milestones.length) * 100
  );

  const onSelect = (value) => {
    setSelected(value);
    setOpenId(value === "all" ? null : value);
  };

  return (
    <main className="ms">
      <header className="ms-hero">
        <span className="ms-kicker">
          <Flag size={15} />
          Project Milestones
        </span>

        <h1>Assessment Milestones</h1>

        <p>
          Track every assessment of the TripMind LK research project,
          from the proposal to the final evaluation.
        </p>
      </header>

      <section className="ms-body">
        <div className="ms-toolbar">
          <div className="ms-select">
            <label htmlFor="ms-select">
              Select Assessment
            </label>

            <div className="ms-select-box">
              <select
                id="ms-select"
                value={selected}
                onChange={(e) => onSelect(e.target.value)}
              >
                <option value="all">
                  Choose a milestone to view details
                </option>

                {milestones.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title}
                  </option>
                ))}
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          <div className="ms-progress">
            <div className="ms-progress-top">
              <strong>
                {done} of {milestones.length} completed
              </strong>

              <span>{progress}%</span>
            </div>

            <div className="ms-bar">
              <span
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        <ol className="ms-timeline">
          {visible.map((m) => {
            const isOpen = openId === m.id;
            const LinkIcon = m.link.icon;

            return (
              <li
                key={m.id}
                className={`ms-item ${m.status}`}
              >
                <span
                  className="ms-dot"
                  aria-hidden="true"
                >
                  {m.status === "completed" ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Clock size={22} />
                  )}
                </span>

                <article className="ms-card">
                  <div className="ms-card-top">
                    <span
                      className={`ms-status ${m.status}`}
                    >
                      {m.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                    </span>

                    <span className="ms-date">
                      {m.date}
                    </span>
                  </div>

                  <h3>{m.title}</h3>

                  <p>{m.text}</p>

                  <div className="ms-card-bottom">
                    <div className="ms-marks">
                      <span>Marks</span>
                      <strong>
                        {m.marks}% of total
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="ms-details-btn"
                      onClick={() =>
                        setOpenId(
                          isOpen ? null : m.id
                        )
                      }
                      aria-expanded={isOpen}
                    >
                      {isOpen
                        ? "Hide details"
                        : "View details"}

                      <ArrowRight
                        size={16}
                        className={isOpen ? "turn" : ""}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="ms-details">
                      <h4>What is assessed</h4>

                      <ul>
                        {m.covers.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>

                      <Link
                        to={m.link.to}
                        className="ms-link"
                      >
                        <LinkIcon size={16} />
                        {m.link.label}
                      </Link>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}

export default Milestones;