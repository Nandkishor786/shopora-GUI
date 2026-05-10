import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex gap-6">

      {/* 🔹 Left Sidebar */}
      <div className="w-64 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold mb-4">Settings</h2>

        <div className="space-y-2">
          <p
            onClick={() => setActiveTab("profile")}
            className={`cursor-pointer p-2 rounded ${
              activeTab === "profile" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            Profile Info
          </p>

          <p
            onClick={() => setActiveTab("address")}
            className={`cursor-pointer p-2 rounded ${
              activeTab === "address" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            Address
          </p>

          <p
            onClick={() => setActiveTab("security")}
            className={`cursor-pointer p-2 rounded ${
              activeTab === "security" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            Security
          </p>
        </div>
      </div>

      {/* 🔹 Right Content */}
      <div className="flex-1 bg-white rounded-xl shadow p-6">

        {/* PROFILE */}
        {activeTab === "profile" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="First Name" />
              <input className="border p-2 rounded" placeholder="Last Name" />
              <input className="border p-2 rounded" placeholder="Email" />
              <input className="border p-2 rounded" placeholder="Phone" />
            </div>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              Save
            </button>
          </>
        )}

        {/* ADDRESS */}
        {activeTab === "address" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

            <div className="border p-4 rounded mb-4">
              <p className="font-semibold">Home</p>
              <p className="text-sm text-gray-500">
                Indore, Madhya Pradesh, India
              </p>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded">
              + Add New Address
            </button>
          </>
        )}

        {/* SECURITY */}
        {activeTab === "security" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Security</h2>

            <input
              type="password"
              placeholder="Current Password"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-2 rounded w-full mb-3"
            />

            <button className="bg-black text-white px-4 py-2 rounded">
              Change Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;