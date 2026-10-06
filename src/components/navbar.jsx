import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowRight, Map, Menu, X } from "lucide-react";
import "./navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Domain", to: "/domain" },
  { label: "Milestones", to: "/milestones" },
  { label: "Documents", to: "/documents" },
  { label: "Presentations", to: "/presentations" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu and jump to the top on every page change
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner" aria-label="Main navigation">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">
            <Map size={20} />
          </span>
          <span>
            TripMind <b>LK</b>
          </span>
        </Link>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;