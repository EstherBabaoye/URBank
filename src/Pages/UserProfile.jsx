import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [photo, setPhoto] = useState("/default-avatar.jpg");

  const user = JSON.parse(localStorage.getItem("urbank_user"));
  const token = user?.token;

  useEffect(() => {
    document.title = "User Profile | URBank";

    if (!user?.email || !token) return;

    axios
      .get(`http://urbank-backend.test/internetbanking/profile/${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data);

        if (res.data.passportPhoto) {
          setPhoto(`https://urbankbe.nhsurulere.site/uploads/${res.data.passportPhoto}`);
        } else {
          setPhoto("/default-avatar.jpg");
        }
      })
      .catch((err) => {
        console.error("Failed to load profile:", err);
      });
  }, []);

  // ✅ Safe early return
  if (!profile) {
    return (
      <section className="min-h-screen mt-24 bg-[#e8f9fd] px-6 py-10">
        <div className="text-center text-gray-600">Loading profile...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen mt-24 bg-[#e8f9fd] px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#f4fcff] shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#72cded]"
          />
        </div>

        <h1 className="text-2xl font-bold text-[#051d40] mb-6">User Profile</h1>

        <div className="space-y-5 text-sm">
          <ProfileItem label="Account Name" value={profile.accountName} />
          <ProfileItem label="Account Number" value={profile.accountNumber} />
          <ProfileItem label="BVN" value={profile.bvn} />
          <ProfileItem label="Home Address" value={profile.address} />
          <ProfileItem label="Email" value={profile.email} />
          <ProfileItem label="Phone Number" value={profile.phone} />
        </div>
      </div>
    </section>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div>
      <p className="text-[#051d40] font-medium">{label}</p>
      <p className="text-gray-700 mt-1">{value || "N/A"}</p>
    </div>
  );
}
