import {
  BarChart3,
  ClipboardList,
  Cpu,
  Download,
  Presentation,
  Trophy,
} from "lucide-react";

import startPdf from "../Documents/start.pdf";
import pp1Pdf from "../Documents/pp1.pdf";
import pp2Pdf from "../Documents/PP2 Presentation.pdf";
import "./Presentations.css";

// Google Drive link for the final presentation
const finalPresentationUrl =
  "https://drive.google.com/file/d/1f81QA8G-uXUBaXr83omz2wNBFOiDCr3m/view?usp=sharing";

// status is "completed" or "upcoming".

const presentations = [
  {
    icon: ClipboardList,
    title: "Project Proposal Presentation",
    text: "Initial presentation covering the research problem, objectives, proposed methodology, and project timeline for TripMind LK.",
    status: "completed",
    file: startPdf,
    filename: "start.pdf",
  },
  {
    icon: BarChart3,
    title: "Progress Presentation (PP1)",
    text: "First progress presentation covering literature survey findings, system design decisions, data collection results, and initial model outputs.",
    status: "completed",
    file: pp1Pdf,
    filename: "pp1.pdf",
  },
  {
    icon: Cpu,
    title: "Progress Presentation (PP2)",
    text: "Second progress presentation demonstrating the completed AI components, the integrated system demo, evaluation results, and user feedback.",
    status: "completed",
    file: pp2Pdf,
    filename: "pp2.pdf",
  },
  {
    icon: Trophy,
    title: "Final Presentation",
    text: "Final comprehensive presentation covering the complete TripMind LK system, research contributions, evaluation, and future directions.",
    status: "completed",
    file: finalPresentationUrl,
    external: true,
  },
];

function Presentations() {
  return (
    <main className="pres">
      <header className="pres-hero">
        <span className="pres-kicker">
          <Presentation size={15} /> Project Presentations
        </span>

        <h1>Presentations</h1>

        <p>
          Slides from every assessment of the TripMind LK research project.
          Download a deck once it is available.
        </p>
      </header>

      <section className="pres-body">
        <div className="pres-grid">
          {presentations.map((p, i) => {
            const Icon = p.icon;
            const ready = Boolean(p.file);

            return (
              <article
                className={`pres-card accent-${i % 4}`}
                key={p.title}
              >
                <div className="pres-top">
                  <span className="pres-icon">
                    <Icon size={26} />
                  </span>

                  <span className={`pres-status ${p.status}`}>
                    {p.status === "completed" ? "Completed" : "Upcoming"}
                  </span>
                </div>

                <h3>{p.title}</h3>
                <p>{p.text}</p>

                {ready ? (
                  <a
                    className="pres-btn"
                    href={p.file}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    download={p.external ? undefined : p.filename}
                  >
                    <Download size={17} />
                    {p.external ? "View Final Presentation" : "Download Slides"}
                  </a>
                ) : (
                  <span className="pres-btn disabled" aria-disabled="true">
                    Not Available
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Presentations;