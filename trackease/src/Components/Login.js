import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // For demo purposes, assume login is always successful
    const role = localStorage.getItem("role"); // Retrieve role from localStorage
    if (role === "driver") {
      alert("Login successful! Redirecting to Driver Dashboard...");
      navigate("/driver-dashboard"); // Redirect to the Driver Dashboard
    } else if (role === "customer") {
      alert("Login successful! Redirecting to Customer Dashboard...");
      navigate("/customer-portal"); // Redirect to the Customer Portal
    } else {
      alert("Invalid role. Please register.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-black text-center">Welcome Back!</h2>
      <p className="text-sm text-gray-700 text-center mt-2">Log in to access your account.</p>
      <form className="mt-6 space-y-4" onSubmit={handleLogin}>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
