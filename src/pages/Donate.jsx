import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Donate.css";

function Donate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("");

  const [message, setMessage] = useState("");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // ================================
  // DONATION SUBMIT
  // ================================
  const handleDonate = () => {
    setMessage("");

    // Payment must be completed first
    if (!paymentCompleted) {
      setMessage("Please complete the payment first.");
      return;
    }

    // Name validation
    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      setMessage("Please enter a valid name.");
      return;
    }

    // Email validation
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Address validation
    if (!address.trim()) {
      setMessage("Please enter your address.");
      return;
    }

    // Amount validation
    if (!amount) {
      setMessage("Please select a donation amount.");
      return;
    }

    // Custom amount validation
    if (
      amount === "custom" &&
      (!customAmount || Number(customAmount) <= 0)
    ) {
      setMessage("Please enter a valid custom amount.");
      return;
    }

    // Cause validation
    if (!cause) {
      setMessage("Please select a cause.");
      return;
    }

    // Open donation confirmation page
    navigate("/donation-confirmation", {
      state: {
        amount: finalAmount,
        cause: cause,
        name: name,
        email: email,
        address: address,
      },
    });
  };

  // Open payment immediately when a fixed amount is selected
  const selectAmount = (value) => {
    setAmount(value);
    setCustomAmount("");
    setMessage("");
    setPaymentOpen(true);
    setPaymentCompleted(false);
    setPaymentMethod("");
    setUpiId("");
    setCardNumber("");
    setCardHolderName("");
    setExpiryDate("");
    setCvv("");
  };

  // ================================
  // PAYMENT
  // ================================
  const handlePayment = () => {
    setMessage("");

    if (!paymentMethod) {
      setMessage("Please select a payment method.");
      return;
    }

    // UPI validation
    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        setMessage("Please enter your UPI ID.");
        return;
      }

      const upiPattern = /^[A-Za-z0-9._-]{2,}@[A-Za-z]{2,}$/;

      if (!upiPattern.test(upiId.trim())) {
        setMessage("Please enter a valid UPI ID.");
        return;
      }
    }

    // Card validation
    if (paymentMethod === "card") {
      const cleanCardNumber = cardNumber.replace(/\s/g, "");

      if (!cleanCardNumber) {
        setMessage("Please enter your card number.");
        return;
      }

      if (!/^\d{16}$/.test(cleanCardNumber)) {
        setMessage("Please enter a valid 16-digit card number.");
        return;
      }

      if (!cardHolderName.trim()) {
        setMessage("Please enter card holder name.");
        return;
      }

      if (!/^[A-Za-z\s]+$/.test(cardHolderName.trim())) {
        setMessage("Please enter a valid card holder name.");
        return;
      }

      if (!expiryDate.trim()) {
        setMessage("Please enter card expiry date.");
        return;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiryDate.trim())) {
        setMessage("Please enter expiry date in MM/YY format.");
        return;
      }

      const [month] = expiryDate.split("/").map(Number);

      if (month < 1 || month > 12) {
        setMessage("Please enter a valid expiry month.");
        return;
      }

      if (!cvv.trim()) {
        setMessage("Please enter CVV.");
        return;
      }

      if (!/^\d{3}$/.test(cvv.trim())) {
        setMessage("Please enter a valid 3-digit CVV.");
        return;
      }
    }

    setPaymentOpen(false);
    setPaymentCompleted(true);
  };

  // ================================
  // GET FINAL AMOUNT
  // ================================
  const finalAmount =
    amount === "custom" ? customAmount : amount;

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


      {/* ================= DONATE SECTION ================= */}
      <section className="donate-section">

        <h1>Make a Difference Today</h1>

        <p className="donate-description">
          Your generous donation will help us continue our mission to
          support communities in need. Choose an amount below or enter
          a custom amount to make a secure donation.
        </p>


        {/* ================= DONOR INFORMATION ================= */}
        <div className="donor-section">

          <h2>Donor Information</h2>

          <input
            type="text"
            placeholder="Name"
            className="donor-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setMessage("");
            }}
          />

          <input
            type="email"
            placeholder="Email"
            className="donor-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
          />

          <input
            type="text"
            placeholder="Address"
            className="donor-input"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setMessage("");
            }}
          />

        </div>


        {/* ================= DONATION AMOUNT ================= */}
        <div className="amount-section">

          <h2>Select Donation Amount</h2>

          <div className="amount-buttons">

            <button
              type="button"
              className={
                amount === "500"
                  ? "amount-btn selected"
                  : "amount-btn"
              }
              onClick={() => selectAmount("500")}
            >
              ₹500
            </button>


            <button
              type="button"
              className={
                amount === "1000"
                  ? "amount-btn selected"
                  : "amount-btn"
              }
              onClick={() => selectAmount("1000")}
            >
              ₹1000
            </button>


            <button
              type="button"
              className={
                amount === "2000"
                  ? "amount-btn selected"
                  : "amount-btn"
              }
              onClick={() => selectAmount("2000")}
            >
              ₹2000
            </button>


            <button
              type="button"
              className={
                amount === "custom"
                  ? "amount-btn selected"
                  : "amount-btn"
              }
              onClick={() => {
                setAmount("custom");
                setCustomAmount("");
                setPaymentOpen(false);
                setPaymentCompleted(false);
                setPaymentMethod("");
                setMessage("");
              }}
            >
              Custom
            </button>

          </div>


          {/* ================= CUSTOM AMOUNT ================= */}
          {amount === "custom" && (
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                const value = e.target.value;
                setCustomAmount(value);
                setMessage("");

                if (Number(value) > 0) {
                  setPaymentOpen(true);
                  setPaymentCompleted(false);
                  setPaymentMethod("");
                } else {
                  setPaymentOpen(false);
                }
              }}
              className="custom-amount-input"
              min="1"
            />
          )}


          {/* ================= SELECT CAUSE ================= */}
          <select
            className="cause-select"
            value={cause}
            onChange={(e) => {
              setCause(e.target.value);
              setMessage("");
            }}
          >

            <option value="" disabled>
              Select a Cause
            </option>

            <option value="healthcare">
              Healthcare for Children
            </option>

            <option value="education">
              Education for All
            </option>

            <option value="poverty">
              Poverty Relief
            </option>

            <option value="environment">
              Environmental Sustainability
            </option>

          </select>

        </div>


        {/* ================= DONATE BUTTON ================= */}
        <div className="secure-donation">

          <button
            type="button"
            className="secure-btn"
            onClick={handleDonate}
            disabled={!paymentCompleted}
          >
            Donate Securely
          </button>

          <p>
            Your donation is safe with us. We use secure payment processing.
          </p>


          {/* ================= ERROR MESSAGE ================= */}
          {message && (
            <div className="donation-message">
              {message}
            </div>
          )}

        </div>


        {/* ================= PAYMENT SECTION ================= */}
        {paymentOpen && !paymentCompleted && (
          <div className="payment-section">

            <h2>Complete Your Payment</h2>

            <p>
              Donation Amount: <strong>₹{finalAmount}</strong>
            </p>

            <p>
              Please select your preferred payment method.
            </p>


            <div className="payment-methods">

              <button
                type="button"
                className={
                  paymentMethod === "upi"
                    ? "payment-method selected-payment"
                    : "payment-method"
                }
                onClick={() => {
                  setPaymentMethod("upi");
                  setMessage("");
                }}
              >
                UPI
              </button>


              <button
                type="button"
                className={
                  paymentMethod === "card"
                    ? "payment-method selected-payment"
                    : "payment-method"
                }
                onClick={() => {
                  setPaymentMethod("card");
                  setMessage("");
                }}
              >
                Card
              </button>

            </div>


            {paymentMethod === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="payment-input"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  setMessage("");
                }}
              />
            )}


            {paymentMethod === "card" && (
              <div className="card-payment">

                <input
                  type="text"
                  placeholder="Card Number"
                  className="payment-input"
                  value={cardNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setCardNumber(value);
                    setMessage("");
                  }}
                  maxLength="16"
                  inputMode="numeric"
                />

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="payment-input"
                  value={cardHolderName}
                  onChange={(e) => {
                    setCardHolderName(e.target.value);
                    setMessage("");
                  }}
                />

                <div className="card-small-inputs">

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="payment-small-input"
                    value={expiryDate}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");

                      if (value.length > 2) {
                        value =
                          value.slice(0, 2) + "/" + value.slice(2, 4);
                      }

                      setExpiryDate(value);
                      setMessage("");
                    }}
                    maxLength="5"
                    inputMode="numeric"
                  />

                  <input
                    type="password"
                    placeholder="CVV"
                    className="payment-small-input"
                    value={cvv}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setCvv(value);
                      setMessage("");
                    }}
                    maxLength="3"
                    inputMode="numeric"
                  />

                </div>

              </div>
            )}


            <button
              type="button"
              className="pay-now-btn"
              onClick={handlePayment}
            >
              Pay ₹{finalAmount}
            </button>

          </div>
        )}


        {/* ================= PAYMENT SUCCESS ================= */}
        {paymentCompleted && (
          <div className="payment-success">

            <div className="success-icon">✓</div>

            <h2>Payment Successful!</h2>

            <p>
              Thank you for your generous donation of ₹{finalAmount}.
            </p>

            <p>
              Your donation has been completed successfully.
            </p>

            <strong>
              HopeHands Foundation appreciates your support.
            </strong>

          </div>
        )}

      </section>

{/* ================= FOOTER ================= */}
<footer className="donate-footer">

  <div className="donate-footer-links">

    <a href="/about">About Us</a>
    <a href="/#contact">Contact</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>

  </div>


{/* SOCIAL ICONS */}
<div className="donate-footer-social">

  {/* TWITTER */}
  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
  >
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 3.01c-.84.37-1.74.62-2.68.73a4.68 4.68 0 0 0 2.05-2.58c-.91.54-1.92.93-3 1.14A4.67 4.67 0 0 0 11.31 5.5c0 .37.04.73.12 1.07A13.26 13.26 0 0 1 1.8 1.67a4.67 4.67 0 0 0 1.45 6.24A4.64 4.64 0 0 1 1.13 7.3v.06a4.67 4.67 0 0 0 3.75 4.58c-.38.1-.78.15-1.2.15-.29 0-.58-.03-.86-.08a4.68 4.68 0 0 0 4.36 3.24A9.38 9.38 0 0 1 1.37 17.3c-.39 0-.77-.02-1.14-.07a13.22 13.22 0 0 0 7.16 2.1c8.59 0 13.29-7.12 13.29-13.29 0-.2 0-.4-.01-.6.91-.66 1.7-1.48 2.33-2.43Z"
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
    <svg viewBox="0 0 24 24" width="16" height="16">
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
    <svg viewBox="0 0 24 24" width="16" height="16">
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
    <svg viewBox="0 0 24 24" width="16" height="16">
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
        d="M11 17v-4c0-1.6 1-2.7 2.5-2.7S16 11.4 16 13v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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

export default Donate;