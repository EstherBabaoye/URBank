import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DownloadCloud, UserCheck, CreditCard, Target, CheckCircle2 } from "lucide-react";

export default function GettingStarted() {
  useEffect(() => {
    document.title = "Getting Started";
  }, []);

  const steps = [
    {
      icon: <DownloadCloud className="text-blue-600 w-6 h-6" />,
      text: "Download the URBank app from the Play Store or App Store",
    },
    {
      icon: <UserCheck className="text-blue-600 w-6 h-6" />,
      text: "Register with your Bank Verification Number (BVN)",
    },
    {
      icon: <CreditCard className="text-blue-600 w-6 h-6" />,
      text: "Verify your identity using a valid national ID",
    },
    {
      icon: <Target className="text-blue-600 w-6 h-6" />,
      text: "Set your financial goals on your dashboard",
    },
    {
      icon: <CheckCircle2 className="text-blue-600 w-6 h-6" />,
      text: "You're good to go—start banking your way",
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
        className="text-4xl font-extrabold text-[#051d40] mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Getting Started
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-10 text-center max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        URBank makes onboarding seamless. Here’s how to get started:
      </motion.p>

      <motion.ul
        className="space-y-5 bg-blue-50 p-6 rounded-2xl shadow-sm"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {steps.map((step, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-4 text-gray-700 text-base md:text-lg"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {step.icon}
            <span>{step.text}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://www.urbankapp.com/download" // Replace with actual download link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Download the URBank App
        </a>
      </motion.div>
    </motion.div>
  );
}
