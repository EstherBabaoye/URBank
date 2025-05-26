import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BanknotesIcon,
  CreditCardIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import bannerImage from "../assets/Smart Card.jpg"; // Add your image in /assets

export default function Personal() {
  useEffect(() => {
    document.title = "URBank Personal Banking";
  }, []);

  const features = [
    {
      title: "Savings Account",
      icon: <BanknotesIcon className="w-10 h-10 text-[#051d40]" />,
      description:
        "Start building your future with a secure, interest-earning savings account. Enjoy easy access, mobile deposits, and peace of mind.",
      link: "/accounts/savings",
    },
    {
      title: "Current Account",
      icon: <CreditCardIcon className="w-10 h-10 text-[#051d40]" />,
      description:
        "Simplify your everyday banking with a current account. Ideal for frequent transactions, utility payments, and flexible spending.",
      link: "/accounts/current",
    },
    {
      title: "Student Account",
      icon: <AcademicCapIcon className="w-10 h-10 text-[#051d40]" />,
      description:
        "Empowering students with smart financial tools. No maintenance fees, budgeting features, and campus perks just for you.",
      link: "/accounts/student",
    },
    {
      title: "Personal Loans",
      icon: <CurrencyDollarIcon className="w-10 h-10 text-[#051d40]" />,
      description:
        "Get funds when you need them most — whether for emergencies, education, or a dream vacation. Quick approval, flexible repayment.",
      link: "/cards-loans/personal-loans",
    },
  ];

  return (
    <div className="mt-24 mb-24">
      {/* Banner Section */}
      <div
        className="w-full h-[300px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Personal Banking with URBank
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Secure. Convenient. Designed just for you.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="px-4 py-20 mx-auto max-w-screen-xl md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#051d40] mb-4">
            Explore Our Personal Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From saving for tomorrow to managing your expenses today — URBank
            offers the tools and flexibility you need for every life stage.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#72cded] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#051d40] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block text-sm font-semibold text-white bg-[#72cded] px-4 py-2 rounded hover:bg-[#fbbf24] hover:text-[#051d40] transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
