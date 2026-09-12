import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Volunteer.css";

import volunteer1 from "../assets/volunteer1.jpg";
import volunteer2 from "../assets/volunteer2.jpg";

function Volunteer() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document
      .getElementById("volunteer-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="volunteer-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar-section">

        <div className="navbar-container">

          {/* LOGO */}
          <div className="navbar-logo">
            <span>■</span> HopeHands Foundation
          </div>

          {/* NAV LINKS */}
          <div className="navbar-links">

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About Us
            </NavLink>

            <NavLink to="/causes">
              Causes
            </NavLink>

            <NavLink to="/donate">
              Donate
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

            <NavLink
              to="/donate"
              className="donate-now-btn"
            >
              Donate Now
            </NavLink>

          </div>

        </div>

      </nav>


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="volunteer-hero">

        <img
          src={volunteer1}
          alt="Volunteers making a difference"
          className="volunteer-hero-image"
        />

        <div className="volunteer-hero-overlay">

          <h1>
            Be the Change. Become a Volunteer
          </h1>

          <p>
            Your time, skills, and compassion can help create lasting impact.
          </p>

          <button
            type="button"
            className="join-volunteer-btn"
            onClick={scrollToForm}
          >
            Join as a Volunteer
          </button>

        </div>

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="volunteer-intro">

        <h2>
          Volunteer Program Introduction
        </h2>

        <p>
          At HopeHands Foundation, volunteers are the heart of everything
          we do. Whether you have time, skills, or simply a kind heart,
          your contribution can help us reach more lives and create
          lasting impact.
        </p>

      </section>


      {/* =================================================
          SECOND IMAGE
      ================================================= */}

      <section className="volunteer-image-section">

        <img
          src={volunteer2}
          alt="Volunteers working together"
          className="volunteer-second-image"
        />

      </section>


      {/* =================================================
          WAYS YOU CAN HELP
      ================================================= */}

      <section className="ways-help">

        <h2>
          Ways You Can Help
        </h2>

        <div className="help-cards">

          <div className="help-card education-card">
            <h3>
              Education Support
            </h3>
          </div>

          <div className="help-card medical-card">
            <h3>
              Medical Assistance
            </h3>
          </div>

          <div className="help-card food-card">
            <h3>
              Food Distribution
            </h3>
          </div>

          <div className="help-card event-card">
            <h3>
              Event Coordination
            </h3>
          </div>

          <div className="help-card online-card">
            <h3>
              Online / Remote Volunteering
            </h3>
          </div>

        </div>

      </section>


      {/* =================================================
          VOLUNTEER FORM
      ================================================= */}

      <section
        className="volunteer-form-section"
        id="volunteer-form"
      >

        <h2>
          Join Our Volunteer Community
        </h2>

        <form
          className="volunteer-form"
          onSubmit={handleSubmit}
        >

          {/* FULL NAME */}
          <input
            type="text"
            placeholder="Full Name"
            required
          />


          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email Address"
            required
          />


          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
          />


          {/* AREA OF INTEREST */}
          <select
            defaultValue=""
            required
          >

            <option
              value=""
              disabled
            >
              Area of Interest
            </option>

            <option value="education">
              Education Support
            </option>

            <option value="medical">
              Medical Assistance
            </option>

            <option value="food">
              Food Distribution
            </option>

            <option value="event">
              Event Coordination
            </option>

            <option value="online">
              Online / Remote Volunteering
            </option>

          </select>


          {/* AVAILABILITY */}
          <select
            defaultValue=""
            required
          >

            <option
              value=""
              disabled
            >
              Availability
            </option>

            <option value="weekdays">
              Weekdays
            </option>

            <option value="weekends">
              Weekends
            </option>

            <option value="both">
              Weekdays & Weekends
            </option>

          </select>


          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="become-volunteer-btn"
          >
            {submitted
              ? "You Added Our Team"
              : "Become a Volunteer"}
          </button>


          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="thank-you-message">
              Thank you for joining our team!
              Your kindness and support can make a meaningful
              difference in the lives of others. ❤️
            </p>
          )}

        </form>


        {/* PRIVACY MESSAGE */}
        <p className="privacy-text">
          We respect your time and privacy.
          Our team will contact you soon.
        </p>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer-section">

        {/* FOOTER LINKS */}
        <div className="footer-container">

          <NavLink to="/about">
            About Us
          </NavLink>

          <NavLink to="/causes">
            Our Programs
          </NavLink>

          <NavLink to="/volunteer">
            Volunteer
          </NavLink>

          <NavLink to="/donate">
            Donate
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </div>

{/* ================= SOCIAL ICONS ================= */}
<div className="footer-social">

  {/* TWITTER */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 4.9c-.8.4-1.7.6-2.6.7.9-.5 1.6-1.4 1.9-2.4-.9.5-1.9.9-3 1.1A4.7 4.7 0 0 0 11.2 7c0 .4 0 .7.1 1C7.8 7.8 4.7 6.1 2.6 3.5c-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.5 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.2 3.1 4.2 3.1a9.5 9.5 0 0 1-5.8 2c-.4 0-.8 0-1.1-.1a13.4 13.4 0 0 0 7.2 2.1c8.6 0 13.3-7.1 13.3-13.3v-.6c.9-.6 1.6-1.4 2.2-2.3Z"
        fill="currentColor"
      />
    </svg>
  </a>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
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
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
    >
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
        <p className="footer-copyright">
          © 2024 HopeHands Foundation. All rights reserved.
        </p>

      </footer>

    </main>
  );
}

export default Volunteer;