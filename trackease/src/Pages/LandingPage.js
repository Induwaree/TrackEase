import { useState } from "react";
import { motion } from "framer-motion";
import Login from "../Components/Login";
import Register from "../Components/Register";

export default function LandingPage() {
  const [showRegister, setShowRegister] = useState(false);

  // This function is triggered when registration is successful
  const handleRegistrationSuccess = () => {
    setShowRegister(false); // Toggle to show the login form
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-gray-100 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative w-full h-full">
          {/* Floating Circles */}
          <motion.div
            className="absolute w-60 h-60 bg-yellow-300 rounded-full opacity-20 blur-xl"
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ x: ["-50%", "50%", "-50%"], y: ["-50%", "50%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ top: "20%", left: "15%" }}
          ></motion.div>
          <motion.div
            className="absolute w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-2xl"
            initial={{ x: "50%", y: "-50%" }}
            animate={{ x: ["50%", "-50%", "50%"], y: ["-50%", "50%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            style={{ top: "40%", left: "60%" }}
          ></motion.div>
          <motion.div
            className="absolute w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl"
            initial={{ x: "-50%", y: "50%" }}
            animate={{ x: ["-50%", "50%", "-50%"], y: ["50%", "-50%", "50%"] }}
            transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
            style={{ bottom: "20%", right: "20%" }}
          ></motion.div>

          {/* Moving Lines */}
          <motion.div
            className="absolute w-0.5 h-32 bg-white opacity-10"
            initial={{ y: "-10%" }}
            animate={{ y: ["-20%", "100%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ top: "10%", left: "30%" }}
          ></motion.div>
          <motion.div
            className="absolute w-0.5 h-40 bg-white opacity-20"
            initial={{ y: "-10%" }}
            animate={{ y: ["-20%", "100%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{ top: "30%", right: "20%" }}
          ></motion.div>

          {/* Star-Like Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0.8, opacity: 0.6 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 2,
                ease: "easeInOut",
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 text-center p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold tracking-tight"
        >
          Welcome to <span className="text-yellow-300">TrackEase</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg mt-4"
        >
          Your reliable delivery and logistics solution.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-yellow-300 text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-400"
          onClick={() => setShowRegister(!showRegister)} // Toggle between login and register forms
        >
          {showRegister ? "Go to Login" : "Get Started"}
        </motion.button>
      </div>

      {/* Authentication Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        {showRegister ? (
          <Register onRegisterSuccess={handleRegistrationSuccess} /> // Passing the function as prop to Register
        ) : (
          <Login />
        )}
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 mt-10 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} TrackEase. All rights reserved.
      </footer>
    </div>
  );
}
