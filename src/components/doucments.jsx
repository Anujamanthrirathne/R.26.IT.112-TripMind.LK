import {
  ClipboardCheck,
  Download,
  Eye,
  FileText,
  FolderOpen,
  GraduationCap,
  Scroll,
  Users,
} from "lucide-react";
import tafPdf from "../Documents/taf.pdf";
import individualPdf from "../Documents/individual.pdf";
import "./documents.css";

// A document with a file is "Completed". A document with file: null is "Pending".
// To add another PDF later: put it in src/Documents, import it above,
// then use the imported name as the file value.

const groups = [
  {
    title: "Project Charter",
    icon: Scroll,
    items: [
      {
        name: "Project Charter Document",
        meta: "Submitted: Month Year · PDF",
        type: "PDF",
        file: tafPdf,
        filename: "taf.pdf",
      },
    ],
  },
  {
    title: "Proposal Document",
    icon: FileText,
    items: [
      {
        name: "Research Proposal Document",
        meta: "Submitted: Month Year · PDF",
        type: "PDF",
        file: individualPdf,
        filename: "individual.pdf",
      },
    ],
  },
  {
    title: "Checklist Documents",
    icon: ClipboardCheck,
    items: [
      { name: "Progress Presentation I Checklist", meta: "Month Year · XLSX", type: "XLSX", file: null },
      { name: "Progress Presentation II Checklist", meta: "Month Year · XLSX", type: "XLSX", file: null },
    ],
  },
  {
    title: "Final Document",
    icon: GraduationCap,
    subgroups: [
      {
        title: "Individual Component Reports",
        icon: Users,
        items: [
          { name: "Individual Report — [Name] (IT22082442) · C1", meta: "Month Year · PDF", type: "PDF", file: null },
          { name: "Individual Report — Kaweeshwara M.D.O (IT22216014) · C2", meta: "Month Year · PDF", type: "PDF", file: null },
          { name: "Individual Report — [Name] (IT22176974) · C3", meta: "Month Year · PDF", type: "PDF", file: null },
          { name: "Individual Report — [Name] (IT22607614) · C4", meta: "Month Year · PDF", type: "PDF", file: null },
        ],
      },
      {
        title: "Group Thesis",
        icon: FolderOpen,
        items: [
          { name: "Final Group Research Thesis (Main Document)", meta: "Month Year · PDF · All members", type: "PDF", file: null },
        ],
      },
    ],
  },
];

function DocRow({ doc }) {
  const ready = Boolean(doc.file);

  return (
    <div className="doc-row">
      <span className={`doc-type ${doc.type.toLowerCase()}`}>{doc.type}</span>

      <div className="doc-info">
        <h4>{doc.name}</h4>
        <p>{doc.meta}</p>
      </div>

      <span className={`doc-status ${ready ? "completed" : "pending"}`}>
        {ready ? "Completed" : "Pending"}
      </span>

      <div className="doc-actions">
        {ready && doc.type === "PDF" ? (
          <a className="doc-btn" href={doc.file} target="_blank" rel="noreferrer">
            <Eye size={16} /> View
          </a>
        ) : (
          <span className="doc-btn disabled" aria-disabled="true">
            <Eye size={16} /> View
          </span>
        )}

        {ready ? (
          <a className="doc-btn primary" href={doc.file} download={doc.filename}>
            <Download size={16} /> Download
          </a>
        ) : (
          <span className="doc-btn disabled" aria-disabled="true">
            <Download size={16} /> Download
          </span>
        )}
      </div>
    </div>
  );
}

function Documents() {
  return (
    <main className="docs">
      <header className="docs-hero">
        <span className="docs-kicker">
          <FolderOpen size={15} /> Project Documents
        </span>
        <h1>Documents</h1>
        <p>
          All submitted and upcoming documents of the TripMind LK research
          project. View a file online or download it.
        </p>
      </header>

      <section className="docs-body">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div className="docs-group" key={g.title}>
              <h2>
                <span className="docs-group-icon">
                  <Icon size={22} />
                </span>
                {g.title}
              </h2>

              {g.items && (
                <div className="docs-list">
                  {g.items.map((d) => (
                    <DocRow doc={d} key={d.name} />
                  ))}
                </div>
              )}

              {g.subgroups &&
                g.subgroups.map((s) => {
                  const SubIcon = s.icon;
                  return (
                    <div className="docs-sub" key={s.title}>
                      <h3>
                        <SubIcon size={17} /> {s.title}
                      </h3>
                      <div className="docs-list">
                        {s.items.map((d) => (
                          <DocRow doc={d} key={d.name} />
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Documents;