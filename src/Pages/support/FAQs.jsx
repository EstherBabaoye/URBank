import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
  useEffect(() => {
    document.title = "FAQs";
  }, []);

  const faqSections = {
    "Getting Started": [
      {
        question: "How do I open a URBank account?",
        answer:
          "Download the URBank app or visit our website to open an account in minutes. All you need is your BVN and a valid ID.",
      },
      {
        question: "What documents do I need?",
        answer:
          "A valid means of identification (National ID, Voter’s Card, Driver’s License, or International Passport) and your Bank Verification Number (BVN).",
      },
    ],
    "Taking Control": [
      {
        question: "Can I set my own savings and spending limits?",
        answer:
          "Absolutely! With URBank, you define your financial goals. Set daily, weekly, or monthly limits directly in your dashboard.",
      },
      {
        question: "How do I track my financial progress?",
        answer:
          "URBank gives you real-time insights, customizable charts, and smart notifications to help you stay on track.",
      },
    ],
    "Transfers & Payments": [
      {
        question: "How do I send money?",
        answer:
          "You can transfer funds to any Nigerian bank through your URBank app. Transfers are secure and lightning-fast.",
      },
      {
        question: "Can I pay bills and buy airtime?",
        answer:
          "Yes! Pay electricity bills, TV subscriptions, and buy airtime or data directly from your dashboard—at no extra cost.",
      },
    ],
    Security: [
      {
        question: "How secure is URBank?",
        answer:
          "We use bank-grade encryption and 2FA to keep your account and data safe. You're always in control.",
      },
      {
        question: "What do I do if I suspect fraud?",
        answer:
          "Freeze your account instantly from the app and contact our support team via chat or phone 24/7.",
      },
    ],
    "Support & Help": [
      {
        question: "How can I speak to a customer support rep?",
        answer:
          "Use the in-app live chat or call our 24/7 support line. You’re never alone with URBank.",
      },
      {
        question: "Where can I find financial advice?",
        answer:
          "Check out our blog and in-app tips for curated financial guidance to help you build the future you want.",
      },
    ],
  };

  const sectionKeys = Object.keys(faqSections);
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const filteredFAQs = faqSections[activeSection].filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-40 sm:mt-24 mb-24 px-4 sm:px-6 lg:px-8">
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-12">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Have any Questions?
          </h1>
          <p className="mt-2 text-center text-blue-600 dark:text-blue-400 font-medium">
            YOUR BANK, YOUR MONEY, YOUR FUTURE
          </p>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <aside className="lg:mx-12 mb-8 lg:mb-0">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Table of Content
              </h2>
              <nav className="mt-4 space-y-4 lg:mt-8" aria-label="FAQ Categories">
                {sectionKeys.map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setOpenQuestion(null);
                      setSearchQuery("");
                    }}
                    className={`block w-full text-left hover:underline transition-colors ${
                      activeSection === section
                        ? "text-blue-500 dark:text-blue-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                    aria-current={activeSection === section ? "true" : "false"}
                  >
                    {section}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="flex-1 lg:mx-12">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <AnimatePresence>
                {filteredFAQs.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No results found.</p>
                ) : (
                  filteredFAQs.map((faq, index) => {
                    const answerId = `faq-answer-${index}`;
                    return (
                      <div key={index} className="mb-6">
                        <button
                          onClick={() => handleToggle(index)}
                          className="flex items-center w-full text-left focus:outline-none"
                          aria-expanded={openQuestion === index}
                          aria-controls={answerId}
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d={
                                openQuestion === index
                                  ? "M20 12H4"
                                  : "M12 4v16m8-8H4"
                              }
                            />
                          </svg>
                          <h3 className="mx-4 text-lg text-gray-700 dark:text-white">
                            {faq.question}
                          </h3>
                        </button>
                        <AnimatePresence>
                          {openQuestion === index && (
                            <motion.div
                              id={answerId}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 md:mx-10 border-l-4 border-blue-500 pl-4 overflow-hidden"
                            >
                              <p className="text-gray-600 dark:text-gray-300">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <hr className="mt-6 border-gray-200 dark:border-gray-700" />
                      </div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
