import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-section">
        <div className="navbar-container">

          <div className="navbar-logo">
            <span>◼</span>
            HopeHands Foundation
          </div>

          <div className="navbar-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/causes">Causes</a>
            <a href="/donate">Donate</a>
            <a href="/contact" className="active-link">Contact</a>

            <a href="/donate" className="donate-now-btn">
              Donate Now
            </a>
          </div>

        </div>
      </nav>


      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">

        <h1>Get in Touch With Us</h1>

        <div className="contact-info-container">

          <div className="contact-info-card">
            <i className="bi bi-envelope"></i>
            <span>support@hopehands.org</span>
          </div>

          <div className="contact-info-card">
            <i className="bi bi-telephone"></i>
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-info-card">
            <i className="bi bi-geo-alt"></i>
            <span>Chennai, India</span>
          </div>

        </div>


        {/* ================= MAP ================= */}
        <div className="contact-map">

          <iframe
  title="HopeHands Foundation Location"
  src="https://www.google.com/maps?q=Chennai,India&z=12&output=embed"
  loading="lazy"
></iframe>

        </div>


        {/* ================= SUPPORT & TRUST ================= */}
        <section className="support-section">

          <h2>Support &amp; Trust</h2>

          <p>
            We believe in transparency, trust, and people-powered change.
            Every volunteer helps us move closer to a better future.
          </p>

          <div className="support-buttons">

            <div className="support-card trusted">
              <i className="bi bi-shield-check"></i>
              <span>Trusted by Volunteers</span>
            </div>

            <div className="support-card community">
              <i className="bi bi-people"></i>
              <span>Community Support</span>
            </div>

            <div className="support-card difference">
              <i className="bi bi-heart"></i>
              <span>Making a Difference</span>
            </div>

          </div>

        </section>

      </section>


      {/* ================= FOOTER ================= */}
<footer className="contact-footer">

  {/* FOOTER LINKS */}
  <div className="contact-footer-links">

    <a href="/about">About Us</a>

    <a href="/causes">Our Programs</a>

    <a href="#">Volunteer</a>

    <a href="/donate">Donate</a>

    <a href="/contact">Contact</a>

  </div>


  {/* SOCIAL ICONS */}
<div className="contact-footer-social">

  {/* TWITTER */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.655 4.655 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.953 1.128 4.646 4.646 0 0 0-7.926 4.236A13.18 13.18 0 0 1 2.56 3.16a4.643 4.643 0 0 0 1.438 6.2 4.616 4.616 0 0 1-2.104-.582v.058a4.647 4.647 0 0 0 3.725 4.556 4.66 4.66 0 0 1-2.097.08 4.65 4.65 0 0 0 4.338 3.225A9.32 9.32 0 0 1 1.17 18.66a13.15 13.15 0 0 0 7.12 2.087c8.543 0 13.22-7.077 13.22-13.214 0-.201-.004-.402-.013-.602a9.46 9.46 0 0 0 2.146-2.188Z" />
    </svg>
  </a>


  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <svg viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M13.5 20v-7h2.2l.3-2.7h-2.5V8.6c0-.8.2-1.3 1.3-1.3h1.4V4.9c-.2 0-1-.1-1.9-.1-2 0-3.4 1.2-3.4 3.5v2H8.7V13h2.2v7h2.6Z"
        fill="currentColor"
      />
    </svg>
  </a>


  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg viewBox="0 0 24 24">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  </a>


  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="7.5"
        cy="7.5"
        r="1"
        fill="currentColor"
      />

      <path
        d="M7.5 10.5V17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M11 17v-4c0-1.6 1-2.7 2.5-2.7S16 11.4 16 13v4M11 13v-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  </a>

</div>


  {/* COPYRIGHT */}
  <p>
    © 2024 HopeHands Foundation. All rights reserved.
  </p>

</footer>
 </main>
  );
}

export default Contact;