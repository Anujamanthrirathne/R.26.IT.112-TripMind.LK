import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    organisation: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove messages when user starts editing
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // Basic validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject ||
      !formData.message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setSending(true);

    try {
      const templateParams = {
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        organisation: formData.organisation || "Not provided",
        message: formData.message,
      };

      await emailjs.send(
        "service_boelt5z",
        "template_ra4de0q",
        templateParams,
        "UMPj13j9Fm1XxU2sg"
      );

      setSuccess(
        "Your message has been sent successfully. Thank you for contacting TripMind LK!"
      );

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        organisation: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Sorry, your message could not be sent. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-kicker">GET IN TOUCH</span>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have a question, collaboration idea, or feedback about TripMind
            LK? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================== */}
      <section className="contact-info-section">

        <div className="contact-section-heading">
          <span>CONTACT INFORMATION</span>

          <h2>We'd Love to Hear From You</h2>

          <p>
            Get in touch with the TripMind LK research team for questions,
            feedback, technical enquiries, or research collaboration.
          </p>
        </div>

        <div className="contact-info-grid">

          {/* EMAIL */}
          <div className="info-card">
            <div className="info-icon">✉</div>

            <div className="info-content">
              <span className="info-label">PROJECT EMAIL</span>

              <a href="mailto:anujamanthriratne@gmail.com">
                anujamanthriratne@gmail.com
              </a>

              <p>
                Contact us for project enquiries and collaboration
                opportunities.
              </p>
            </div>
          </div>

          {/* INSTITUTION */}
          <div className="info-card">
            <div className="info-icon">⌂</div>

            <div className="info-content">
              <span className="info-label">INSTITUTION</span>

              <h3>SLIIT</h3>

              <p>Malabe, Sri Lanka</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="info-card">
            <div className="info-icon">☎</div>

            <div className="info-content">
              <span className="info-label">PHONE</span>

              <a href="tel:+940772029251">
                +94 077 202 9251
              </a>

              <p>
                Available for project-related enquiries.
              </p>
            </div>
          </div>

          {/* GITHUB */}
          <div className="info-card">
            <div className="info-icon">⌘</div>

            <div className="info-content">
              <span className="info-label">GITHUB REPOSITORY</span>

              <a
                href="https://github.com/Anujamanthrirathne/R26-IT-112"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project on GitHub
              </a>

              <p>
                Explore the TripMind LK project and source code.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          RESPONSE TIME
      ========================== */}
      <section className="response-card">

        <div className="response-icon">⚡</div>

        <div className="response-content">
          <span className="info-label">RESPONSE TIME</span>

          <h3>We'll Get Back to You</h3>

          <p>
            We aim to respond to project enquiries, feedback, and
            collaboration requests as soon as possible.
          </p>
        </div>

      </section>

      {/* =========================
          CONTACT FORM
      ========================== */}
      <section className="contact-form-section">

        <div className="contact-section-heading">
          <span>SEND A MESSAGE</span>

          <h2>Let's Start a Conversation</h2>

          <p>
            Complete the form below and your message will be sent directly
            to the TripMind LK project email.
          </p>
        </div>

        <div className="contact-form-card">

          <form onSubmit={handleSubmit}>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="form-message success-message">
                ✓ {success}
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="form-message error-message">
                ⚠ {error}
              </div>
            )}

            {/* NAME + EMAIL */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

            </div>

            {/* SUBJECT + ORGANISATION */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a subject
                  </option>

                  <option value="General Enquiry">
                    General Enquiry
                  </option>

                  <option value="Research Collaboration">
                    Research Collaboration
                  </option>

                  <option value="Technical Support">
                    Technical Support
                  </option>

                  <option value="Media / Press">
                    Media / Press
                  </option>

                  <option value="Feedback">
                    Feedback
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="organisation">
                  Organisation
                  <span className="optional">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Enter your organisation"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message <span>*</span>
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="8"
                required
              />

            </div>

            {/* SEND BUTTON */}
            <button
              type="submit"
              className="send-button"
              disabled={sending}
            >
              <span>
                {sending ? "Sending..." : "Send Message"}
              </span>

              <span className="send-arrow">
                {sending ? "..." : "→"}
              </span>
            </button>

          </form>

        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="contact-footer">

        <div className="footer-main">

          <div className="footer-brand">
            <h3>
              TripMind <span>LK</span>
            </h3>

            <p>
              AI-powered intelligent travel support for Sri Lanka.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Research</h4>

            <a href="/team">Team</a>

            <a
              href="https://github.com/Anujamanthrirathne/R26-IT-112"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.sliit.lk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SLIIT
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} TripMind LK. All rights reserved.
        </div>

      </footer>

    </main>
  );
};

export default ContactUs;