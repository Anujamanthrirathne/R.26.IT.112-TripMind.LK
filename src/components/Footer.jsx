import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, Map } from "lucide-react";
import "./Footer.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Domain", to: "/domain" },
  { label: "Milestones", to: "/milestones" },
  { label: "Documents", to: "/documents" },
  { label: "Presentations", to: "/presentations" },
];

const team = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-flag" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Map size={17} />
            </span>
            <span>
              TripMind <b>LK</b>
            </span>
          </Link>
          <p>
            An integrated AI framework for intelligent travel support in Sri
            Lanka. Final year research project at SLIIT, code R26-IT-112.
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            {navigation.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Team and links">
          <h4>Team</h4>
          <ul>
            {team.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub Repo <ArrowUpRight size={13} />
              </a>
            </li>
            <li>
              <a href="https://www.sliit.lk" target="_blank" rel="noreferrer">
                SLIIT <ArrowUpRight size={13} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TripMind LK Research Project · SLIIT · All Rights Reserved</p>
        <button
          className="footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={15} /> Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;