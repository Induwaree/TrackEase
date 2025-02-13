import React, { useState } from "react";

export default function Register({ onRegisterSuccess }) {
  const [role, setRole] = useState("customer");

  const handleRegister = (e) => {
    e.preventDefault();

    // Save role to localStorage for demo purposes
    localStorage.setItem("role", role);
    alert(`Registration successful as ${role}! Redirecting to login...`);

    // Trigger the callback to switch to the Login component
    onRegisterSuccess();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-black text-center">Create an Account</h2>
      <p className="text-sm text-gray-700 text-center mt-2">
        Join us to enjoy seamless delivery and logistics services!
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
          required
        />
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}
