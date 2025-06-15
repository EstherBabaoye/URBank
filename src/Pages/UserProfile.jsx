import { useEffect, useState } from "react";

export default function UserProfile() {
  useEffect(() => {
    document.title = "User Profile | URBank";
  }, []);

  const [photo, setPhoto] = useState("/default-avatar.jpg");

  const profile = {
    accountName: "Olabimpe Babaoye",
    accountNumber: "3120720869",
    bvn: "22345678901",
    nin: "13456789124",
    address: "12 Unity Street, Lekki Phase 1, Lagos",
    email: "olabimpe.babaoye@email.com",
    phone: "+234 812 345 6789",
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // convert to base64 for preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen mt-24 bg-[#e8f9fd] px-6 py-10">
      <div className="max-w-2xl mx-auto bg-[#f4fcff] shadow-md rounded-lg p-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#72cded]"
          />
          <label
            htmlFor="upload-photo"
            className="mt-2 text-sm text-[#051d40] hover:text-[#fbbf24] hover:underline cursor-pointer"
          >
            Change Photo
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>

        <h1 className="text-2xl font-bold text-[#051d40] mb-6">User Profile</h1>

        <div className="space-y-5 text-sm">
          <ProfileItem label="Account Name" value={profile.accountName} />
          <ProfileItem label="Account Number" value={profile.accountNumber} />
          <ProfileItem label="BVN" value={profile.bvn} />
          <ProfileItem label="NIN" value={profile.nin} />
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
      <p className="text-gray-700 mt-1">{value}</p>
    </div>
  );
}
