import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login check
    if (email === "admin@example.com" && password === "password123") {
      // Redirect to AdminDashboard
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9V3.75m1.5 5.25V3.75M15 11.25a6 6 0 11-6-6M9 18.75a3 3 0 003 3 3 3 0 003-3"
            />
          </svg>
        </div>
      </div>

      {/* Title and Subtitle */}
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Welcome, Admin
      </h2>
      <p className="text-sm text-gray-500 text-center mt-2">
        Sign in to access your dashboard
      </p>

      {/* Form Section */}
      <form onSubmit={handleLogin} className="mt-6 space-y-5">
        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Forgot Password */}
      <div className="text-center mt-4">
        <button
          onClick={() => alert("Forgot password functionality coming soon!")}
          className="text-sm text-blue-600 font-medium hover:underline bg-transparent focus:outline-none"
        >
          Forgot your password?
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
