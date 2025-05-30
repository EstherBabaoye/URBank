import { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/Smart Card.jpg"; // Ensure the file exists and the path is correct

export default function Personal() {
  useEffect(() => {
    document.title = "URBank Personal Banking";
  }, []);

  const features = [
    {
      title: "Savings Account",
      image: "/savings-account.png",
      description:
        "Start building your future with a secure, interest-earning savings account. Enjoy easy access, mobile deposits, and peace of mind.",
      link: "/accounts/savings",
    },
    {
      title: "Current Account",
      image: "/current-account.png",
      description:
        "Simplify your everyday banking with a current account. Ideal for frequent transactions, utility payments, and flexible spending.",
      link: "/accounts/current",
    },
    {
      title: "Student Account",
      image: "/student.jpg",
      description:
        "Empowering students with smart financial tools. No maintenance fees, budgeting features, and campus perks just for you.",
      link: "/accounts/student",
    },
    {
      title: "Personal Loans",
      image: "/personal-loan.png",
      description:
        "Get funds when you need them most — whether for emergencies, education, or a dream vacation. Quick approval, flexible repayment.",
      link: "/cards-loans/personal-loans",
    },
  ];

  return (
    <div className="mt-24 mb-24">
      {/* Hero Banner */}
      <div
        className="w-full h-[300px] md:h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Personal Banking with URBank
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Secure. Convenient. Designed just for you.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#051d40] mb-4">
            Explore Our Personal Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From saving for tomorrow to managing your expenses today — URBank
            offers the tools and flexibility you need for every life stage.
          </p>
        </div>

        {features.map((features, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-16 gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={features.image}
                alt={features.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#051d40] mb-4">
                {features.title}
              </h3>
              <p className="text-gray-700 mb-6">{features.description}</p>
              <Link
                to={features.link}
                className="inline-block bg-[#72cded] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#fbbf24] hover:text-[#051d40] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
