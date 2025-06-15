import { useEffect } from "react";
import {
  FaUniversity,
  FaBuilding,
  FaBolt,
  FaMobileAlt
} from "react-icons/fa";

export default function Frequent() {
  useEffect(() => {
    document.title = "Frequent Actions | URBank";
  }, []);

  const actions = [
    {
      label: "Frequent Transfers (URBank)",
      icon: <FaUniversity />,
      onClick: () => alert("Navigating to frequent URBank transfers..."),
    },
    {
      label: "Frequent Transfers (Other Banks)",
      icon: <FaBuilding />,
      onClick: () => alert("Navigating to frequent transfers to other banks..."),
    },
    {
      label: "Frequent Bills",
      icon: <FaBolt />,
      onClick: () => alert("Navigating to frequent bill payments..."),
    },
    {
      label: "Frequent Airtime/Data",
      icon: <FaMobileAlt />,
      onClick: () => alert("Navigating to frequent airtime/data purchases..."),
    },
  ];

  return (
    <section className="min-h-screen mt-24 bg-[#f9fafb] px-6 py-10">
      <h1 className="text-2xl font-bold text-center text-[#051d40] mb-8">FREQUENT ACTIONS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 max-w-xl mx-auto">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-4 px-8 py-6 bg-[#72cded] text-[#051d40] hover:text-[#fbbf24] rounded-lg shadow-md transition duration-200"
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
