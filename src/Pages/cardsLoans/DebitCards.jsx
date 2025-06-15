import { useEffect } from "react";
import { CreditCardIcon, ShieldCheckIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function DebitCards() {
  useEffect(() => {
    document.title = "URBank Debit Cards";
  }, []);

  const features = [
    {
      icon: <CreditCardIcon className="h-8 w-8 text-[#051d40]" />,
      title: "Seamless Payments",
      description: "Shop online or in-store worldwide with ease and full security.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-[#051d40]" />,
      title: "24/7 Fraud Protection",
      description: "Advanced security to protect your transactions and identity.",
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-[#051d40]" />,
      title: "Cashback & Rewards",
      description: "Earn rewards every time you swipe your debit card.",
    },
  ];

  return (
    <div className="mt-28 mb-24 px-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#051d40] mb-4">URBank Debit Cards</h1>
        <p className="text-gray-600 text-lg">
          Simple, secure, and smart. Your key to fast, safe, and rewarding transactions.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 text-[#051d40]">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/accounts/open"
          className="bg-[#051d40] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#123269] transition"
        >
          Get Your Debit Card
        </a>
      </div>
    </div>
  );
}
