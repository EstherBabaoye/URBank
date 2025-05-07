import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import MobileHeader from "./Components/MobileHeader";
import {Footer} from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import Personal from "./Pages/Personal";
import Business from "./Pages/Business";
import AboutUs from "./Pages/AboutUs";
import LoanandCredit from "./Pages/LoanandCredit";

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Desktop Headers */}
      <div className="hidden md:block">
        <Header />
        <Header2 />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* Page Routes */}
      <main className>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/loan-and-credit" element={<LoanandCredit />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;





