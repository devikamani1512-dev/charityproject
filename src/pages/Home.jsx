import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Home.css";

import heroImage from "../assets/heroimage.jpg";
import causes1 from "../assets/causes1.jpg";
import causes2 from "../assets/causes2.jpg";
import causes3 from "../assets/causes3.jpg";
import causes4 from "../assets/causes4.jpg";

import sophiaCarter from "../assets/sophiacarter.png";
import ethanBennett from "../assets/ethanbennett.png";
import oliviaHayes from "../assets/oliviahayas.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar-section">
  <div className="navbar-container">

    <div className="navbar-logo">
      <img src={logo} alt="HopeHands Foundation Logo" />
      <span>HopeHands Foundation</span>
    </div>

    {/* மற்ற navbar code */}

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

  <Link to="/donate" className="donate-now-btn">
  Donate Now
</Link>
</div>

        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero-section" id="home">

        <img
          src={heroImage}
          alt="HopeHands Foundation"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>Together, We Can Change Lives</h1>

          <p>
            Your kindness today can bring hope, health,
            and happiness to someone in need.
          </p>

          <div className="hero-buttons">

  <Link to="/donate" className="primary-btn">
    Donate Now
  </Link>

  <Link to="/volunteer" className="secondary-btn">
    Become a Volunteer
  </Link>

</div>

</div>

</section>


      {/* ================= MISSION ================= */}
      <section className="mission-section" id="about">

        <h2>Our Mission</h2>

        <p>
          At HopeHands Foundation, our mission is to empower communities
          and transform lives through compassionate action and sustainable
          solutions. We are dedicated to providing essential resources,
          fostering education, and promoting well-being for those facing
          adversity. Together, we strive to build a brighter future,
          one hand at a time.
        </p>

      </section>


      {/* ================= CAUSES ================= */}
      <section className="causes-section" id="causes">

        <h2>Our Causes</h2>

        <div className="causes-container">

          {/* Cause 1 */}
          <div className="cause-card">

            <img
              src={causes1}
              alt="Education for Children"
              className="cause-image"
            />

            <h3>Education for Children</h3>

            <p>
              Providing quality education and resources to
              underprivileged children, ensuring they have the
              opportunity to succeed.
            </p>

          </div>


          {/* Cause 2 */}
          <div className="cause-card">

            <img
              src={causes2}
              alt="Medical Support"
              className="cause-image"
            />

            <h3>Medical Support</h3>

            <p>
              Offering medical assistance and healthcare
              support to those in need, ensuring access to
              essential medical services.
            </p>

          </div>


          {/* Cause 3 */}
          <div className="cause-card">

            <img
              src={causes3}
              alt="Food and Shelter"
              className="cause-image"
            />

            <h3>Food &amp; Shelter</h3>

            <p>
              Providing food, shelter, and basic necessities
              to individuals and families facing hardship and
              homelessness.
            </p>

          </div>


          {/* Cause 4 */}
          <div className="cause-card">

            <img
              src={causes4}
              alt="Disaster Relief"
              className="cause-image"
            />

            <h3>Disaster Relief</h3>

            <p>
              Responding swiftly to natural disasters and
              providing immediate relief and long-term support
              to affected communities.
            </p>

          </div>

        </div>


        <div className="causes-buttons">

          <button className="primary-btn">
            Donate
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </section>

{/* ================= IMPACT SECTION ================= */}
<section className="impact-section">

  <h2>Impact Section</h2>

  <div className="impact-cards">

    <div className="impact-card">
      <h3>Lives Helped</h3>
      <p>10,000+</p>
    </div>

    <div className="impact-card">
      <h3>Volunteers</h3>
      <p>500+</p>
    </div>

    <div className="impact-card">
      <h3>Projects Completed</h3>
      <p>120+</p>
    </div>

  </div>

</section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonial-section">

        <h2>Stories / Testimonials</h2>

        <div className="testimonial-container">

          {/* ================= SOPHIA CARTER ================= */}
          <div className="testimonial-card">

            <div className="testimonial-top">

              <img
                src={sophiaCarter}
                alt="Sophia Carter"
                className="testimonial-avatar"
              />

              <div>
                <h3>Sophia Carter</h3>
                <span>2023-08-15</span>
              </div>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "HopeHands Foundation has truly made a difference
              in my life. Their support helped me get back on my
              feet during a difficult time."
            </p>

            <div className="testimonial-actions">

              {/* LIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10V21H4C3.45 21 3 20.55 3 20V11C3 10.45 3.45 10 4 10H7Z"
                    fill="currentColor"
                  />

                  <path
                    d="M7 10L11 3C11.5 2.1 12.65 1.75 13.55 2.25C14.4 2.72 14.75 3.75 14.4 4.65L13 8H20C21.1 8 22 8.9 22 10V11.5C22 11.65 21.98 11.8 21.95 11.95L20.45 19.45C20.27 20.35 19.48 21 18.55 21H7V10Z"
                    fill="currentColor"
                  />
                </svg>

                <span>12</span>
              </div>


              {/* DISLIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 14V3H20C20.55 3 21 3.45 21 4V13C21 13.55 20.55 14 20 14H17Z"
                    fill="currentColor"
                  />

                  <path
                    d="M17 14L13 21C12.5 21.9 11.35 22.25 10.45 21.75C9.6 21.28 9.25 20.25 9.6 19.35L11 16H4C2.9 16 2 15.1 2 14V12.5C2 12.35 2.02 12.2 2.05 12.05L3.55 4.55C3.73 3.65 4.52 3 5.45 3H17V14Z"
                    fill="currentColor"
                  />
                </svg>

                <span>2</span>
              </div>

            </div>

          </div>


          {/* ================= ETHAN BENNETT ================= */}
          <div className="testimonial-card">

            <div className="testimonial-top">

              <img
                src={ethanBennett}
                alt="Ethan Bennett"
                className="testimonial-avatar"
              />

              <div>
                <h3>Ethan Bennett</h3>
                <span>2023-07-02</span>
              </div>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Volunteering with HopeHands has been an incredibly
              rewarding experience. Seeing the impact we make is
              truly inspiring."
            </p>

            <div className="testimonial-actions">

              {/* LIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10V21H4C3.45 21 3 20.55 3 20V11C3 10.45 3.45 10 4 10H7Z"
                    fill="currentColor"
                  />

                  <path
                    d="M7 10L11 3C11.5 2.1 12.65 1.75 13.55 2.25C14.4 2.72 14.75 3.75 14.4 4.65L13 8H20C21.1 8 22 8.9 22 10V11.5C22 11.65 21.98 11.8 21.95 11.95L20.45 19.45C20.27 20.35 19.48 21 18.55 21H7V10Z"
                    fill="currentColor"
                  />
                </svg>

                <span>15</span>
              </div>


              {/* DISLIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 14V3H20C20.55 3 21 3.45 21 4V13C21 13.55 20.55 14 20 14H17Z"
                    fill="currentColor"
                  />

                  <path
                    d="M17 14L13 21C12.5 21.9 11.35 22.25 10.45 21.75C9.6 21.28 9.25 20.25 9.6 19.35L11 16H4C2.9 16 2 15.1 2 14V12.5C2 12.35 2.02 12.2 2.05 12.05L3.55 4.55C3.73 3.65 4.52 3 5.45 3H17V14Z"
                    fill="currentColor"
                  />
                </svg>

                <span>1</span>
              </div>

            </div>

          </div>


          {/* ================= OLIVIA HAYES ================= */}
          <div className="testimonial-card">

            <div className="testimonial-top">

              <img
                src={oliviaHayes}
                alt="Olivia Hayes"
                className="testimonial-avatar"
              />

              <div>
                <h3>Olivia Hayes</h3>
                <span>2023-06-10</span>
              </div>

            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The dedication and compassion of HopeHands
              Foundation are unmatched. They are a beacon of
              hope for so many."
            </p>

            <div className="testimonial-actions">

              {/* LIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10V21H4C3.45 21 3 20.55 3 20V11C3 10.45 3.45 10 4 10H7Z"
                    fill="currentColor"
                  />

                  <path
                    d="M7 10L11 3C11.5 2.1 12.65 1.75 13.55 2.25C14.4 2.72 14.75 3.75 14.4 4.65L13 8H20C21.1 8 22 8.9 22 10V11.5C22 11.65 21.98 11.8 21.95 11.95L20.45 19.45C20.27 20.35 19.48 21 18.55 21H7V10Z"
                    fill="currentColor"
                  />
                </svg>

                <span>10</span>
              </div>


              {/* DISLIKE */}
              <div className="action-item">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 14V3H20C20.55 3 21 3.45 21 4V13C21 13.55 20.55 14 20 14H17Z"
                    fill="currentColor"
                  />

                  <path
                    d="M17 14L13 21C12.5 21.9 11.35 22.25 10.45 21.75C9.6 21.28 9.25 20.25 9.6 19.35L11 16H4C2.9 16 2 15.1 2 14V12.5C2 12.35 2.02 12.2 2.05 12.05L3.55 4.55C3.73 3.65 4.52 3 5.45 3H17V14Z"
                    fill="currentColor"
                  />
                </svg>

                <span>3</span>
              </div>

            </div>

          </div>

        </div>

      </section>

            {/* ================= FOOTER ================= */}
<footer className="footer-section" id="contact">

  {/* FOOTER LINKS */}
  <div className="footer-links">

    <a href="/about">About Us</a>

    <a href="/causes">
  Our Programs
</a>

    <a href="/volunteer">Volunteer</a>

    <a href="/donate">Donate</a>

    <a href="/contact">Contact</a>

  </div>


  {/* SOCIAL ICONS */}
<div className="footer-social">

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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


  {/* TWITTER / X */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.23 4.71 16.03 5.47 16.61C6.23 17.19 7.15 17.51 8.1 17.53C6.6 18.71 4.75 19.35 2.84 19.34C2.5 19.34 2.16 19.32 1.82 19.28C3.7 20.5 5.9 21.17 8.16 21.17C16 21.17 20.33 14.5 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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


  {/* COPYRIGHT */}
          <p>
          © 2024 HopeHands Foundation. All rights reserved.
        </p>

      </footer>

    </main>
  );
}

export default Home;