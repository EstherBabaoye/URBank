export const Footer = () => {
  return (
    <div className="relative mt-16 bg-[#051d40]">
      <svg
        className="absolute top-12 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-white"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                URBank
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <div className="flex flex-wrap xl:flex-nowrap items-center space-x-3 mr-6">
                <a
                  href="https://x.com/_labims?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border bg-white p-2 rounded-full hover:shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-twitter text-sm text-[#051d40] hover:text-[#fbbf24]" />
                </a>
                <a
                  href="https://github.com/EstherBabaoye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border bg-white p-2 rounded-full hover:shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-github text-sm text-[#051d40] hover:text-[#fbbf24]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/esther-babaoye-b6636b190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border bg-white p-2 rounded-full hover:shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-linkedin-in text-sm text-[#051d40] hover:text-[#fbbf24]" />
                </a>
                <a
                  href="https://www.instagram.com/_labims/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border bg-white p-2 rounded-full hover:shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-0.5"
                >
                  <i className="fab fa-instagram text-sm text-[#051d40] hover:text-[#fbbf24]" />
                </a>
              </div>
              <p className="mt-2 text-md font-semibold text-white">
                Operational Headquarters - 148/150, Bode Thomas Street,
                Surulere, Lagos State.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-500">
                Accounts
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Savings Account
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Current Account
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Business Account
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Student Account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-500">
                Cards & Loans
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Debit Cards
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Credit Cards
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Personal Loans
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Business Loans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-500">
                Digital Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Mobile Banking
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Internet Banking
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Cardless Withdrawal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    QR Payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-500">
                Support
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-white hover:text-[#fbbf24]"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white text-center my-12">
          <h3 className="text-3xl mb-3 font-semibold">
            Download our Mobile App
          </h3>
          <p>Stay connected. All day, every day.</p>
          <div className="flex justify-center my-10 flex-wrap gap-4">
            <div className="flex items-center border rounded-lg px-4 py-2 w-52 bg-gray-900">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 w-44 bg-gray-900">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-10 border-t border-[#72cded] text-center">
  <p className="text-white mx-auto">© Copyright 2025 URBank.</p>
  <p className="text-white mx-auto">All rights reserved.</p>
</div>

      </div>
    </div>
  );
};
