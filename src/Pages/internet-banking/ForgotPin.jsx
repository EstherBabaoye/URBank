import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPin() {
  const [form, setForm] = useState({
    accountNumber: "",
    email: "",
    securityQuestion: "",
    securityAnswer: "",
  });

  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const securityQuestions = [
    "What is your mother's maiden name?",
    "What was the name of your first pet?",
    "What is your favorite teacher's name?",
    "What was your childhood nickname?",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    const { accountNumber, email, securityQuestion, securityAnswer } = form;

    if (!accountNumber || !email || !securityQuestion || !securityAnswer) {
      setShowError(true);
      return;
    }

    // Logic to verify details would go here

    navigate("/internet-banking/reset-pin");
  };

  return (
    <section className="min-h-screen mt-16 pt-24 px-6 pb-32 bg-[#f9fafb]">
      <h1 className="text-xl font-bold text-[#051d40] mb-6 text-center">
        Forgot PIN
      </h1>

      <div className="space-y-6 max-w-md mx-auto text-sm text-[#051d40]">
        <input
          type="text"
          name="accountNumber"
          value={form.accountNumber}
          onChange={handleChange}
          placeholder="Enter your Account Number"
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your Registered Email"
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        />

        <select
          name="securityQuestion"
          value={form.securityQuestion}
          onChange={handleChange}
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        >
          <option value="">Select a Security Question</option>
          {securityQuestions.map((q, i) => (
            <option key={i} value={q}>
              {q}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="securityAnswer"
          value={form.securityAnswer}
          onChange={handleChange}
          placeholder="Answer to Security Question"
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        />

        <button
          onClick={handleContinue}
          className="w-full bg-[#fbbf24] text-[#051d40] py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition"
        >
          CONTINUE
        </button>
      </div>

      {/* ❌ Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold text-red-600 mb-2">Incomplete or Invalid Fields</h2>
            <p className="text-gray-700 text-sm mb-4">
              Please complete all fields with valid entries.
            </p>
            <button
              onClick={() => setShowError(false)}
              className="bg-yellow-400 text-[#051d40] px-4 py-2 rounded font-semibold hover:bg-yellow-300"
            >
              Got it
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
