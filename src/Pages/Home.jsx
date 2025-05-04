import React, { useState } from "react";
import HeroCarousel from "../Components/HeroCarousel";

const featureCards = [
  {
    image: "/savings-account.png",
    title: "Savings Account",
    text: "Secure your future with high-interest savings plans tailored to your goals.",
  },
  {
    image: "/current-account.png",
    title: "Current Account",
    text: "Enjoy seamless day-to-day transactions with unlimited access to your funds.",
  },
  {
    image: "/open-online.png",
    title: "Open an Account Online",
    text: "Join URBank in minutes—anytime, anywhere. All you need is your phone.",
  },
  {
    image: "/debit-card.png",
    title: "Smart Debit Cards",
    text: "Pay on the go with stylish, secure cards accepted worldwide.",
  },
  {
    image: "/personal-loan.png",
    title: "Personal Loans",
    text: "Get the funds you need with flexible repayments and quick approval.",
  },
  {
    image: "/business-banking.png",
    title: "Business Banking",
    text: "Empower your business with tools and support built for growth.",
  },
  {
    image: "/mobile-banking.png",
    title: "Mobile Banking",
    text: "Manage your money from anywhere with our user-friendly mobile app.",
  },
];

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + 3 < featureCards.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="mt-20 sm-mt-16 mb-24">
      <HeroCarousel />

      <div className="max-w-6xl mx-auto mt-12 px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 flex-1">
          {[
            {
              title: "Private Banking",
              desc: "Product offerings designed to take the hassle away from managing your money.",
            },
            {
              title: "Affluent Banking",
              desc: "Download our mobile app and experience simpler, more reliable and convenient banking.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base">{card.desc}</p>
              </div>
              <button className="mt-6 bg-[#72cded] hover:text-[#fbbf24] text-[#051d40] text-sm sm:text-base md:text-lg font-semibold  py-3 rounded-md transition">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>

        {/* Right Yellow Stack */}
        <div className="flex flex-col gap-4 w-full lg:w-[300px]">
          {[
            { icon: "💳", title: "CARDS" },
            { icon: "📍", title: "BRANCH LOCATOR" },
            { icon: "📊", title: "FINANCIAL REPORTS" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#72cded] text-[#051d40] font-bold text-lg rounded-lg flex items-center gap-4 p-4 shadow-md"
            >
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl shadow-sm">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <video
          className="w-full rounded-xl shadow-lg"
          src="/bankvideo1.mp4"
          controls
          autoPlay
          muted
          loop
        />
      </div>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        {/* Header + Progress */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 px-2 lg:px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#051d40] leading-tight mb-4 lg:mb-0">
            Explore our world of
            <br className="hidden md:block" />
            absolute financial freedom
          </h2>

          {/* Progress bar + arrows */}
          <div className="flex items-center gap-4 w-full lg:w-1/2">
            {/* Progress bar background */}
            <div className="relative flex-1 h-[2px] bg-gray-300 rounded">
              <div
                className="absolute left-0 top-0 h-[2px] bg-[#72cded] rounded"
                style={{
                  width: `${((startIndex + 3) / featureCards.length) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Left Arrow - Circle with border */}
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#72cded] border-2 border-[#051d40] flex items-center justify-center"
              >
                <span className="text-[#051d40] text-xl font-bold">◄</span>
              </button>

              {/* Right Arrow - Solid yellow circle */}
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#72cded] border-2 border-[#051d40] flex items-center justify-center"
              >
                <span className="text-[#051d40] text-xl font-bold">►</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * 368}px)`, 
            }}
          >
            {featureCards.map((card, i) => (
              <div key={i} className="w-[320px] mx-6 shrink-0">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/////URBank is a user-first digital banking interface designed to help individuals and businesses explore financial freedom with ease. From personalized account options to secure mobile banking, every feature is built for convenience, clarity, and confidence. Whether you're managing your money or opening your first account, URBank makes the experience intuitive and empowering.
