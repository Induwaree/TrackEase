import { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to TrackEase</h1>
        <p className="text-lg text-gray-600 mt-2">Your reliable delivery and logistics solution.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
          onClick={() => setShowRegister(!showRegister)}
        >
          {showRegister ? "Go to Login" : "Get Started"}
        </motion.button>
      </div>

      {/* Authentication Form */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        {showRegister ? (
          <RegisterForm />
        ) : (
          <LoginForm />
        )}
      </motion.div>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>
      <form className="mt-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

function RegisterForm() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
      <form className="mt-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-3" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
        <select className="w-full p-2 border rounded mb-3">
          <option value="customer">Customer</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
