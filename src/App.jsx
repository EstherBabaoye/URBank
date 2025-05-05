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
import Corporate from "./Pages/Corporate";
import AboutUs from "./Pages/AboutUs";

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
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;





