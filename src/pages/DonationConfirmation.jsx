import React from "react";
import { Link, useLocation } from "react-router-dom";

import thankyouImage from "../assets/thankyou.jpg";
import impact1 from "../assets/impact1.jpg";
import impact2 from "../assets/impact2.jpg";
import impact3 from "../assets/impact3.jpg";

import "./DonationConfirmation.css";

function DonationConfirmation() {
  const location = useLocation();

  const donationAmount = location.state?.amount || "500";

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

            <Link to="/">Home</Link>

            <Link to="/about">About Us</Link>

            <Link to="/causes">Causes</Link>

            <Link to="/donate">Donate</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/donate" className="donate-now-btn">
              Donate Now
            </Link>

          </div>

        </div>
      </nav>


      {/* ================= THANK YOU SECTION ================= */}

      <section className="confirmation-section">

        {/* Main Image */}

        <div className="thankyou-image-container">
          <img
            src={thankyouImage}
            alt="Thank you"
            className="thankyou-image"
          />
        </div>


        {/* Thank You Heading */}

        <div className="thankyou-content">

          <h1>
            Thank You for Making a Difference ❤️
          </h1>

          <p className="thankyou-subtitle">
            Your kindness has brought hope, care, and support to those who need it the most.
          </p>


          {/* ================= YOUR IMPACT ================= */}

          <div className="impact-section">

            <h2>Your Impact</h2>

            <p className="impact-description">
              Your generous donation will directly support our mission to provide
              essential resources and opportunities to underserved communities.
              It will help us deliver critical services, empower individuals,
              and foster sustainable change.
            </p>


            <div className="impact-cards">

              {/* Impact 1 */}

              <div className="impact-card">

                <img
                  src={impact1}
                  alt="Educated a child"
                />

                <h3>
                  Educated a child for a month
                </h3>

                <p>
                  Your contribution ensures a child receives quality education
                  for an entire month.
                </p>

              </div>


              {/* Impact 2 */}

              <div className="impact-card">

                <img
                  src={impact2}
                  alt="Provided meals"
                />

                <h3>
                  Provided meals for families
                </h3>

                <p>
                  Your donation helps provide nutritious meals to families in need.
                </p>

              </div>


              {/* Impact 3 */}

              <div className="impact-card">

                <img
                  src={impact3}
                  alt="Basic healthcare"
                />

                <h3>
                  Supported basic healthcare
                </h3>

                <p>
                  Your support aids in delivering essential healthcare services
                  to those without access.
                </p>

              </div>

            </div>

          </div>


          {/* ================= SUPPORT SECTION ================= */}

          <div className="support-further-section">

            <h2>
              Your Support Can Go Even Further
            </h2>

            <div className="support-action-buttons">

              <Link to="/donate" className="donate-again-btn">
                Donate Again
              </Link>

              <button
                type="button"
                className="share-cause-btn"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "HopeHands Foundation",
                      text: "Support HopeHands Foundation and help make a difference.",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Cause link copied!");
                  }
                }}
              >
                Share This Cause
              </button>

            </div>

            <p className="support-description">
              Consider making a recurring donation to ensure continuous support
              for our programs. Share our cause with your friends and family
              to help us reach more people.
            </p>

          </div>


          {/* ================= STAY CONNECTED ================= */}

          <div className="stay-connected">

            <h2>Stay Connected</h2>

            <label className="email-update-box">

              <span>
                Receive email updates
              </span>

              <input
                type="checkbox"
              />

            </label>

          </div>


          {/* ================= VOLUNTEER ================= */}

        <Link
  to="/volunteer"
  className="become-volunteer-btn"
>
  Become a Volunteer
</Link>


          <p className="final-thankyou">
            From all of us at HopeHands Foundation — thank you for believing in humanity.
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="confirmation-footer">

        <div className="confirmation-footer-links">

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms of Service
          </a>

        </div>


       <div className="confirmation-footer-social">

  {/* TWITTER */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <span className="twitter-icon">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08.55 1.7 2.14 2.94 4.03 2.97-1.48 1.17-3.35 1.87-5.38 1.87-.35 0-.69-.02-1.03-.06C3.4 20.4 5.6 21.07 8 21.07c7.82 0 12.1-6.5 12.1-12.13 0-.18 0-.37-.01-.55.83-.6 1.55-1.36 2.12-2.39Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </a>

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <span>
      <i className="bi bi-facebook"></i>
    </span>
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <span>
      <i className="bi bi-instagram"></i>
    </span>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <span>
      <i className="bi bi-linkedin"></i>
    </span>
  </a>

</div>

<p>
  © 2024 HopeHands Foundation. All rights reserved.
</p>

</footer>

</main>
  );
}

export default DonationConfirmation;