import React, { useState } from "react";
import { motion } from "framer-motion";
import TrackDelivery from "../Components/Customer/TrackDelivery";
import SubmitFeedback from "../Components/Customer/SubmitFeedback";
import Notifications from "../Components/Customer/Notifications";
import { FaTruck, FaComment, FaBell, FaHome } from "react-icons/fa";

const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState("TrackDelivery");

  const renderTabContent = () => {
    switch (activeTab) {
      case "TrackDelivery":
        return <TrackDelivery />;
      case "SubmitFeedback":
        return <SubmitFeedback />;
      case "Notifications":
        return <Notifications />;
      default:
        return <TrackDelivery />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-200 relative">
      {/* Sidebar */}
      <motion.aside
        className="bg-white w-64 shadow-lg p-6 flex flex-col items-center space-y-8 rounded-r-3xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <FaHome size={28} className="text-indigo-500" />
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <nav className="flex flex-col space-y-4 w-full">
          {[
            { name: "Track Delivery", key: "TrackDelivery", icon: <FaTruck /> },
            { name: "Submit Feedback", key: "SubmitFeedback", icon: <FaComment /> },
            { name: "Notifications", key: "Notifications", icon: <FaBell /> },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              className={`flex items-center space-x-4 px-4 py-3 w-full rounded-lg font-medium text-lg transition ${
                activeTab === tab.key
                  ? "bg-indigo-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.key)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header
          className="flex justify-center items-center p-6 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-white">
            Welcome to Your Dashboard
          </h2>
        </motion.header>



        {/* Tab Content */}
        <motion.div
          className="flex-1 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            {renderTabContent()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerPortal;
