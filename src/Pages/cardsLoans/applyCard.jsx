import { useEffect, useState } from "react";

export default function CardApplication() {
  useEffect(() => {
    document.title = "Card Application";
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardType: "",
    subCardType: "",
    address: "",
    reason: "",
    otherReason: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Automatically hide success message after 15 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName) newErrors.fullName = "Full name is required";
    if (!form.email || !emailRegex.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone || form.phone.length < 10)
      newErrors.phone = "Phone number must be at least 10 digits";
    if (!form.cardType) newErrors.cardType = "Card type is required";
    if (
      (form.cardType === "credit" || form.cardType === "debit") &&
      !form.subCardType
    )
      newErrors.subCardType = "Please select a card option";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.reason)
      newErrors.reason = "Please select a reason for your application";
    if (form.reason === "Other" && !form.otherReason) {
      newErrors.otherReason =
        "Please provide your reason for selecting 'Other'";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Submitted:", form);
      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        cardType: "",
        subCardType: "",
        address: "",
        reason: "",
        otherReason: "",
      });
    }, 2000);
  };

  const debitOptions = [
    "Naira Mastercard",
    "Naira Visa Card",
    "Verve",
    "Dollar Mastercard",
    "Dollar Visa Card",
  ];

  const creditOptions = ["Basic", "Rewards", "Savings"];

  return (
    <div className="mt-32 pt-16 sm:mt-16 mb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[#051d40] mb-4 text-center">
        Apply for a Smart Card
      </h1>
      <p className="text-center text-sm text-red-600 mb-8">
        ⚠️ Please ensure your account is funded. A charge of ₦1,250 (or its
        equivalent) will be deducted as the card application fee.
      </p>

      {success && (
        <div className="transition-opacity duration-1000 opacity-100 bg-green-50 text-green-700 border border-green-200 p-4 rounded-xl mb-8 text-center">
          ✅ Your application was submitted! We’ll contact you via email within
          24–48 hours.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-xl rounded-xl p-8"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Card Type</label>
          <select
            name="cardType"
            value={form.cardType}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
          >
            <option value="">Select a card type</option>
            <option value="debit">Debit Card</option>
            <option value="credit">Credit Card</option>
          </select>
          {errors.cardType && (
            <p className="text-red-500 text-sm mt-1">{errors.cardType}</p>
          )}
        </div>

        {(form.cardType === "debit" || form.cardType === "credit") && (
          <div>
            <label className="block text-sm font-medium mb-1">
              {form.cardType === "debit"
                ? "Debit Card Options"
                : "Credit Card Options"}
            </label>
            <select
              name="subCardType"
              value={form.subCardType}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
            >
              <option value="">Select an option</option>
              {(form.cardType === "debit" ? debitOptions : creditOptions).map(
                (opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                )
              )}
            </select>
            {errors.subCardType && (
              <p className="text-red-500 text-sm mt-1">{errors.subCardType}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            Reason for Application
          </label>
          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
          >
            <option value="">Select a reason</option>
            <option value="New Application">New Application</option>
            <option value="Misplaced Card">Misplaced Card</option>
            <option value="Expired Card">Expired Card</option>
            <option value="Damaged Card">Damaged Card</option>
            <option value="Change Card Type">Change Card Type</option>
            <option value="Other">Other</option>
          </select>
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </div>

        {form.reason === "Other" && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Please write out your reason
            </label>
            <input
              name="otherReason"
              value={form.otherReason}
              onChange={handleChange}
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
            />
            {errors.otherReason && (
              <p className="text-red-500 text-sm mt-1">{errors.otherReason}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#051d40]"
            rows={3}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#051d40] text-white py-3 rounded-lg font-semibold hover:bg-[#03306b] transition"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
