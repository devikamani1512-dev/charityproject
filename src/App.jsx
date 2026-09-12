import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import DonationConfirmation from "./pages/DonationConfirmation";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/causes"
          element={<Causes />}
        />

        <Route
          path="/donate"
          element={<Donate />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/volunteer"
          element={<Volunteer />}
        />

        <Route
          path="/donation-confirmation"
          element={<DonationConfirmation />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;