import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import Header2 from "./Components/Header2";
import MobileHeader from "./Components/MobileHeader";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import PageWrapper from "./Components/PageWrapper";

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
import CreditCards from "./Pages/cardsLoans/CreditCards";
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
import OpenAccount from "./Pages/accounts/OpenAccount";
import Troubleshooting from "./Pages/support/Troubleshooting";
import Security from "./Pages/support/Security";
import BusinessTools from "./Pages/support/BusinessTools";
import GettingStarted from "./Pages/support/GettingStarted";

function App() {
  const location = useLocation();

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
      <main className="">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/personal" element={<PageWrapper><Personal /></PageWrapper>} />
            <Route path="/business" element={<PageWrapper><Business /></PageWrapper>} />
            <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
            <Route path="/accounts/savings" element={<PageWrapper><SavingsAccount /></PageWrapper>} />
            <Route path="/accounts/current" element={<PageWrapper><CurrentAccount /></PageWrapper>} />
            <Route path="/accounts/business" element={<PageWrapper><BusinessAccount /></PageWrapper>} />
            <Route path="/accounts/student" element={<PageWrapper><StudentAccount /></PageWrapper>} />
            <Route path="/cards-loans/debit" element={<PageWrapper><DebitCards /></PageWrapper>} />
            <Route path="/cards-loans/credit" element={<PageWrapper><CreditCards /></PageWrapper>} />
            <Route path="/cards-loans/personal-loans" element={<PageWrapper><PersonalLoans /></PageWrapper>} />
            <Route path="/cards-loans/business-loans" element={<PageWrapper><BusinessLoans /></PageWrapper>} />
            <Route path="/services/mobile-banking" element={<PageWrapper><MobileBanking /></PageWrapper>} />
            <Route path="/services/internet-banking" element={<PageWrapper><InternetBanking /></PageWrapper>} />
            <Route path="/services/cardless-withdrawal" element={<PageWrapper><CardlessWithdrawal /></PageWrapper>} />
            <Route path="/services/qr-payments" element={<PageWrapper><QRPayments /></PageWrapper>} />
            <Route path="/support/help-center" element={<PageWrapper><HelpCenter /></PageWrapper>} />
            <Route path="/support/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
            <Route path="/support/faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
            <Route path="/support/live-chat" element={<PageWrapper><LiveChat /></PageWrapper>} />
            <Route path="/accounts/open-acc" element={<PageWrapper><OpenAccount /></PageWrapper>} />
            <Route path="/support/help-center/getting-started" element={<PageWrapper><GettingStarted /></PageWrapper>} />
            <Route path="/support/help-center/business-tools" element={<PageWrapper><BusinessTools /></PageWrapper>} />
            <Route path="/support/help-center/security" element={<PageWrapper><Security /></PageWrapper>} />
            <Route path="/support/help-center/troubleshooting" element={<PageWrapper><Troubleshooting /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;
