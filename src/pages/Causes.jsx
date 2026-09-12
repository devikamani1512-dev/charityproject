import React from "react";
import { Link } from "react-router-dom";
import "./Causes.css";

import healthcareImage from "../assets/healthcare.jpg";
import educationImage from "../assets/education.jpg";
import povertyImage from "../assets/poverty.jpg";
import environmentalImage from "../assets/environmental.jpg";

function Causes() {
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

            <a href="/contact">Contact</a>

            <Link to="/donate" className="donate-now-btn">
              Donate Now
            </Link>

          </div>

        </div>
      </nav>


      {/* ================= CAUSES HEADER ================= */}
      <section className="causes-header">

        <h1>Our Causes</h1>

        <p>
          Explore the various initiatives and projects we are dedicated
          to supporting. Your contribution can make a significant
          difference in the lives of those in need.
        </p>

      </section>


      {/* ================= CAUSES LIST ================= */}
      <section className="causes-list">


        {/* ================= HEALTHCARE ================= */}
        <div className="cause-large-card">

          <div className="cause-large-image">
            <img
              src={healthcareImage}
              alt="Healthcare for Children"
            />
          </div>

          <div className="cause-large-content">

            <h2>Healthcare for Children</h2>

            <p>
              Many children lack access to basic healthcare, leading to
              preventable diseases and suffering. We aim to bridge this
              gap by providing comprehensive medical support.
            </p>

            <p>
              Your donation will help provide essential medical care,
              including surgeries, treatments, and rehabilitation, to
              children suffering from critical illnesses.
            </p>

            <Link
              to="/donate"
              className="cause-donate-btn"
            >
              Donate for this cause
            </Link>

          </div>

        </div>


        {/* ================= EDUCATION ================= */}
        <div className="cause-large-card">

          <div className="cause-large-image">
            <img
              src={educationImage}
              alt="Education for All"
            />
          </div>

          <div className="cause-large-content">

            <h2>Education for All</h2>

            <p>
              Education is a fundamental right, yet many children are
              deprived of it due to poverty. We strive to provide quality
              education and resources to these children.
            </p>

            <p>
              Your support will fund educational programs, school
              supplies, and mentorship opportunities for underprivileged
              children, helping them achieve their full potential.
            </p>

            <Link
              to="/donate"
              className="cause-donate-btn"
            >
              Donate for this cause
            </Link>

          </div>

        </div>


        {/* ================= POVERTY RELIEF ================= */}
        <div className="cause-large-card">

          <div className="cause-large-image">
            <img
              src={povertyImage}
              alt="Poverty Relief"
            />
          </div>

          <div className="cause-large-content">

            <h2>Poverty Relief</h2>

            <p>
              Poverty affects millions, leading to hunger, homelessness,
              and lack of basic necessities. We work to alleviate poverty
              by providing essential resources and support.
            </p>

            <p>
              Your contribution will help us provide nutritious meals,
              clean water, and safe shelter to families struggling with
              poverty, ensuring their basic needs are met.
            </p>

            <Link
              to="/donate"
              className="cause-donate-btn"
            >
              Donate for this cause
            </Link>

          </div>

        </div>


        {/* ================= ENVIRONMENT ================= */}
        <div className="cause-large-card">

          <div className="cause-large-image">
            <img
              src={environmentalImage}
              alt="Environmental Sustainability"
            />
          </div>

          <div className="cause-large-content">

            <h2>Environmental Sustainability</h2>

            <p>
              Protecting our planet is crucial for future generations.
              We focus on environmental conservation and sustainability
              to ensure a healthy world for all.
            </p>

            <p>
              Your donation will support our efforts to protect the
              environment, promote sustainable practices, and raise
              awareness about climate change.
            </p>

            <Link
              to="/donate"
              className="cause-donate-btn"
            >
              Donate for this cause
            </Link>

          </div>

        </div>

      </section>

{/* ================= FOOTER ================= */}
<footer className="causes-footer">

  <div className="causes-footer-links">

    <a href="/about">About Us</a>

   <a href="/contact">Contact</a>

    <a href="#">Privacy Policy</a>

    <a href="#">Terms of Service</a>

  </div>


  {/* ================= SOCIAL ICONS ================= */}
<div className="causes-footer-social">

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
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08.55 1.7 2.14 2.94 4.03 2.97-1.48 1.17-3.35 1.87-5.38 1.87-.35 0-.69-.02-1.03-.06C3.4 20.4 5.6 21.07 8 21.07c7.82 0 12.1-6.5 12.1-12.13 0-.18 0-.37-.01-.55.83-.6 1.55-1.36 2.12-2.39Z" />
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M13.5 21V13.5H15.8L16.1 10.8H13.5V9.1C13.5 8.34 13.71 7.82 14.8 7.82H16.2V5.4C15.96 5.37 15.14 5.3 14.19 5.3C12.2 5.3 10.84 6.51 10.84 8.74V10.8H8.5V13.5H10.84V21H13.5Z"
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M7.5 9.5V17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="7.5"
        cy="6.8"
        r="1"
        fill="currentColor"
      />

      <path
        d="M11 17V12.8C11 11.2 12 10.2 13.5 10.2C15 10.2 16 11.2 16 12.8V17M11 13V10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

</div>


  <p>
    © 2024 HopeHands Foundation. All rights reserved.
  </p>

</footer>

  </main>
  );
}

export default Causes;