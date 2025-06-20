import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPin() {
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (newPin.length !== 6 || confirmPin.length !== 6) {
      setError("PIN must be 6 digits.");
      return;
    }

    if (newPin !== confirmPin) {
      setError("PINs do not match.");
      return;
    }

    // You can add logic to send the new PIN to the server here

    navigate("/services/internet-banking"); // redirect to login page
  };

  return (
    <section className="min-h-screen mt-16 pt-24 px-6 pb-32 bg-[#f9fafb]">
      <h1 className="text-xl font-bold text-[#051d40] mb-6 text-center">
        Reset Login PIN
      </h1>

      <div className="space-y-6 max-w-md mx-auto text-sm text-[#051d40]">
        <input
          type="password"
          inputMode="numeric"
          maxLength="6"
          value={newPin}
          onChange={(e) => setNewPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="Enter New 6-digit PIN"
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        />

        <input
          type="password"
          inputMode="numeric"
          maxLength="6"
          value={confirmPin}
          onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="Confirm New PIN"
          className="w-full border-b border-gray-400 py-2 bg-transparent outline-none"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={handleReset}
          className="w-full bg-[#fbbf24] text-[#051d40] py-3 rounded-full font-bold text-sm hover:bg-yellow-400 transition"
        >
          RESET & LOGIN
        </button>
      </div>
    </section>
  );
}
