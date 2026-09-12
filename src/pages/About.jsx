import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import aboutImage from "../assets/aboutus.jpg";
import compassionIcon from "../assets/compassionicon.jpg";
import sarahJohnson from "../assets/sarah.jpg";
import davidLee from "../assets/davidlee.jpg";
import emilyCarter from "../assets/emilycarter.jpg";

function About() {
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


      {/* ================= ABOUT US ================= */}
      <section className="about-section">

        <h1>About Us</h1>


        {/* ================= OUR STORY ================= */}
        <section className="story-section">

          <h2>Our Story</h2>

          <p>
            HopeHands Foundation was established in 2010 by Sarah Johnson
            and David Lee, two individuals driven by a shared vision of
            creating a world where every person has access to basic
            necessities and opportunities for a better life. Their journey
            began with a small community project, addressing immediate
            needs such as food and shelter for underprivileged families.
            Over the years, their dedication and the support of countless
            volunteers and donors have transformed HopeHands Foundation
            into a leading organization, impacting thousands of lives
            across various communities.
          </p>

        </section>


        {/* ================= ABOUT IMAGE ================= */}
        <section className="about-image-section">

          <img
            src={aboutImage}
            alt="HopeHands Foundation"
          />

        </section>


        {/* ================= VISION & MISSION ================= */}
        <section className="vision-section">

          <h2>Vision &amp; Mission</h2>

          <p>
            Our vision is to build a world where every individual has the
            opportunity to thrive, free from poverty and injustice. We
            strive to empower communities, ensuring access to essential
            resources and fostering sustainable development. Our mission
            is to mobilize resources, engage volunteers, and collaborate
            with partners to deliver impactful programs that address the
            root causes of poverty and inequality. We are committed to
            transparency, accountability, and the ethical use of all
            resources entrusted to us.
          </p>

        </section>


        {/* ================= OUR VALUES ================= */}
        <section className="values-section">

          <h2>Our Values</h2>

          <div className="values-container">


            {/* ================= COMPASSION ================= */}
            <div className="value-card">

              <div className="value-icon">
                <img
                  src={compassionIcon}
                  alt="Compassion"
                />
              </div>

              <h3>Compassion</h3>

              <p>
                We approach our work with empathy and understanding,
                recognizing the inherent dignity of every person.
              </p>

            </div>


            {/* ================= COLLABORATION ================= */}
            <div className="value-card">

              <div className="value-icon">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <circle
                    cx="9"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <circle
                    cx="17"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M3.5 18C3.8 14.8 5.7 13 9 13C12.3 13 14.2 14.8 14.5 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 13.5C13.8 13.2 14.7 13 16 13C19.3 13 21.2 14.8 21.5 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

              <h3>Collaboration</h3>

              <p>
                We believe in the power of partnerships and collective
                action to achieve lasting change.
              </p>

            </div>


            {/* ================= INTEGRITY ================= */}
            <div className="value-card">

              <div className="value-icon">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M12 3L19 5.5V10.5C19 15.1 16.1 18.8 12 21C7.9 18.8 5 15.1 5 10.5V5.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M9 12L11 14L15 9.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>

              </div>

              <h3>Integrity</h3>

              <p>
                We uphold the highest standards of honesty and ethical
                conduct in all our endeavors.
              </p>

            </div>

          </div>

        </section>


        {/* ================= OUR TEAM ================= */}
        <section className="team-section">

          <h2>Our Team</h2>

          <div className="team-container">


            {/* ================= SARAH JOHNSON ================= */}
            <div className="team-member">

              <img
                src={sarahJohnson}
                alt="Sarah Johnson"
              />

              <h3>Sarah Johnson</h3>

              <p>
                Co-Founder &amp; Executive
                <br />
                Director
              </p>

            </div>


            {/* ================= DAVID LEE ================= */}
            <div className="team-member">

              <img
                src={davidLee}
                alt="David Lee"
              />

              <h3>David Lee</h3>

              <p>
                Co-Founder &amp; Program
                <br />
                Director
              </p>

            </div>


            {/* ================= EMILY CARTER ================= */}
            <div className="team-member">

              <img
                src={emilyCarter}
                alt="Emily Carter"
              />

              <h3>Emily Carter</h3>

              <p>
                Volunteer Coordinator
              </p>

            </div>

          </div>

        </section>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="about-footer">

        <div className="about-footer-links">

          <a href="/">Home</a>

          <a href="/#causes">Causes</a>

          <a href="/about">About Us</a>

          <a href="/#contact">Contact</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

        </div>


    {/* ================= SOCIAL ICONS ================= */}
<div className="about-footer-social">

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
          ©2024 HopeHands Foundation. All rights reserved.
        </p>

      </footer>

    </main>
  );
}

export default About;