import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import MobileHeader from "./Components/MobileHeader";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import Personal from "./Pages/Personal";
import Business from "./Pages/Business";
import AboutUs from "./Pages/AboutUs";
import { SearchResults } from "./Pages/SearchResults";

import SavingsAccount from "./Pages/accounts/SavingsAccount";
import CurrentAccount from "./Pages/accounts/CurrentAccount";
import BusinessAccount from "./Pages/accounts/BusinessAccount";
import StudentAccount from "./Pages/accounts/StudentAccount";

import DebitCards from "./Pages/cardsLoans/DebitCards";
import CreditCards from "./aPges/cardsLoans/CreditCards";
import PersonalLoans from "./Pages/cardsLoans/PersonalLoans";
import BusinessLoans from "./Pages/cardsLoans/BusinessLoans";

import MobileBanking from "./Pages/services/MobileBanking";
import InternetBanking from "./Pages/services/InternetBanking";
import CardlessWithdrawal from "./Pages/services/CardlessWithdrawal";
import QRPayments from "./Pages/services/QRPayments";

import HelpCenter from "./Pages/support/HelpCenter";
import ContactUs from "./Pages/support/ContactUs";
import FAQs from "./Pages/support/FAQs";
import LiveChat from "./Pages/support/LiveChat";
import Support from "./Pages/Support";

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
      <main className= "">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/accounts/savings" element={<SavingsAccount />} />
          <Route path="/accounts/current" element={<CurrentAccount />} />
          <Route path="/accounts/business" element={<BusinessAccount />} />
          <Route path="/accounts/student" element={<StudentAccount />} />
          <Route path="/cards-loans/debit" element={<DebitCards />} />
          <Route path="/cards-loans/credit" element={<CreditCards />} />
          <Route
            path="/cards-loans/personal-loans"
            element={<PersonalLoans />}
          />
          <Route
            path="/cards-loans/business-loans"
            element={<BusinessLoans />}
          />
          <Route path="/services/mobile-banking" element={<MobileBanking />} />
          <Route
            path="/services/internet-banking"
            element={<InternetBanking />}
          />
          <Route
            path="/services/cardless-withdrawal"
            element={<CardlessWithdrawal />}
          />
          <Route path="/services/qr-payments" element={<QRPayments />} />
          <Route path="/support/help-center" element={<HelpCenter />} />
          <Route path="/support/contact-us" element={<ContactUs />} />
          <Route path="/support/faqs" element={<FAQs />} />
          <Route path="/support/live-chat" element={<LiveChat />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
