import { useEffect, useState } from "react";
import {
  FaExchangeAlt,
  FaPhoneAlt,
  FaQrcode,
  FaUniversity,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaCompass,
  FaWallet,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/AuthContext";

export default function InternetBanking() {
  const [mpin, setMpin] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    document.title = "Internet Banking";
    const handleEnterKey = (e) => {
      if (e.key === "Enter") handleSubmit();
    };
    window.addEventListener("keydown", handleEnterKey);
    return () => window.removeEventListener("keydown", handleEnterKey);
  }, [mpin]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setMpin(value);
  };

  const handleSubmit = () => {
    if (mpin.length === 6) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      setShowErrorModal(true);
    }
  };

  const features = [
    { label: "Quick Transfers", icon: <FaExchangeAlt /> },
    { label: "Quick Airtime", icon: <FaPhoneAlt /> },
    { label: "Quick QR", icon: <FaQrcode /> },
    { label: "Balance Enquiry", icon: <FaWallet /> },
    { label: "Help / Contact", icon: <FaInfoCircle /> },
    { label: "Mobile Banking", icon: <FaUniversity /> },
    { label: "ATM / Branch Loc.", icon: <FaCompass /> },
    { label: "Agent Locator", icon: <FaMapMarkerAlt /> },
    { label: "Refer & Earn", icon: <FaExchangeAlt /> },
  ];

  return (
    <section className="min-h-screen mt-24 bg-gradient-to-b from-sky-900 to-slate-900 text-white px-4 py-10">
      <div className="text-center mb-10">
        <img
          src="/URB LOGO.png"
          alt="URBank Logo"
          className="mx-auto h-12 mb-2"
        />
        <h1 className="text-3xl font-bold">URBank</h1>
        <p className="text-sm mt-4 text-gray-300">
          YOUR BANK, YOUR MONEY, YOUR FUTURE
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center max-w-xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition duration-200 flex flex-col items-center justify-center text-yellow-400"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-white">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto mt-12 text-center px-4">
        <p className="mb-4 text-gray-300">Enter your PIN to login</p>
        <input
          type="password"
          inputMode="numeric"
          maxLength="6"
          className="opacity-0 absolute"
          value={mpin}
          onChange={handleInputChange}
          autoFocus
        />
        <div
          className="flex justify-center gap-2 mb-4"
          onClick={() =>
            document.querySelector("input[type='password']").focus()
          }
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 border-b-2 border-white text-white text-center text-lg font-bold"
            >
              {mpin[i] ? "•" : ""}
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-slate-900 px-6 py-2 rounded-md font-semibold shadow-md hover:bg-yellow-300 mb-4"
        >
          Login with PIN
        </button>

        <div className="flex flex-col mb-4 justify-between text-sm text-yellow-300 hover:underline">
          <button onClick={() => navigate("/internet-banking/forgot-pin")}>
            Forgot PIN?
          </button>
        </div>
        <div className="flex flex-col  justify-between text-sm text-yellow-300 hover:underline">
          <button onClick={() => navigate("/internet-banking/register")}>
            Register
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-10">Version 1.0.0</p>

      {/* ❌ Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-2">Invalid PIN</h2>
            <p className="text-gray-700 text-sm mb-4">
              Please enter your complete 6-digit mPIN to proceed.
            </p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-yellow-400 text-[#051d40] px-4 py-2 rounded font-semibold hover:bg-yellow-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
