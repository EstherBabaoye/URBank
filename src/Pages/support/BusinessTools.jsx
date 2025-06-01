import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, DollarSign, ClipboardList, BarChart2 } from "lucide-react";

export default function BusinessTools() {
  useEffect(() => {
    document.title = "Business Tools";
  }, []);

  const tools = [
    {
      icon: <Briefcase className="text-blue-600 w-6 h-6" />,
      text: "Apply for microloans directly from your dashboard",
    },
    {
      icon: <ClipboardList className="text-blue-600 w-6 h-6" />,
      text: "Automate payroll for up to 50 employees",
    },
    {
      icon: <DollarSign className="text-blue-600 w-6 h-6" />,
      text: "Set up business savings targets and withdrawal restrictions",
    },
    {
      icon: <BarChart2 className="text-blue-600 w-6 h-6" />,
      text: "Track income and expenses with smart insights",
    },
  ];

  return (
    <motion.div
      className="pt-16 mt-24 mb-24 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-[#051d40] mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Business Tools
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-10 text-center max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        URBank empowers entrepreneurs and SMEs with dedicated tools:
      </motion.p>

      <motion.ul
        className="space-y-6 bg-blue-50 p-6 rounded-2xl shadow-md"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {tools.map((tool, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-4 text-gray-700 text-lg md:text-xl"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {tool.icon}
            <span>{tool.text}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => alert("Feature coming soon!")}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Business Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
