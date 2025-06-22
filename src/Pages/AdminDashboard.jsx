import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);

  const handleNavigate = (path) => () => navigate(path);

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#051d40] mb-10">
        Welcome, Admin
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          { label: "🔍 Pending Accounts", path: "/admin" },
          { label: "💳 Pending Cards", path: "/admin/pending-cards" },
          { label: "👤 User Details", path: "/admin/users" },
          { label: "🧾 Account Management", path: "/admin/manage-accounts" },
          { label: "💼 Card Management", path: "/admin/manage-cards" },
        ].map(({ label, path }) => (
          <button
            key={path}
            onClick={handleNavigate(path)}
            className="w-full bg-[#051d40] text-white py-4 px-6 rounded-lg font-semibold 
              hover:bg-[#03306b] transition focus:outline-none focus:ring-4 focus:ring-[#051d40]/50
              min-h-[56px] text-base sm:text-lg"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
