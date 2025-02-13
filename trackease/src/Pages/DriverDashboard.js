import React, { useState } from "react";
import ViewAssignedDeliveries from "../Components/Driver/ViewAssignedDeliveries";
import UpdateDeliveryStatus from "../Components/Driver/UpdateDeliveryStatus";
import ProofOfDelivery from "../Components/Driver/ProofOfDelivery";
import DriverNotifications from "../Components/Driver/DriverNotifications";
import { motion } from "framer-motion";
import { FaClipboardList, FaCheckCircle, FaCamera, FaBell } from "react-icons/fa";

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState("ViewAssignedDeliveries");
  const [notifications, setNotifications] = useState([
    "New delivery assigned: #1234",
    "Delivery #5678 status updated to 'En Route'",
    "Proof of delivery required for #8910",
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "ViewAssignedDeliveries":
        return <ViewAssignedDeliveries />;
      case "UpdateDeliveryStatus":
        return <UpdateDeliveryStatus />;
      case "ProofOfDelivery":
        return <ProofOfDelivery />;
      case "DriverNotifications":
        return <DriverNotifications />;
      default:
        return <ViewAssignedDeliveries />;
    }
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fafc] via-[#e0e7ff] to-[#f1f5f9] flex text-gray-900">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-gradient-to-b from-[#4f46e5] via-[#4338ca] to-[#1e40af] text-white p-6 shadow-lg flex flex-col"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-center">Driver Dashboard</h1>
          <p className="text-sm text-center mt-2">Manage your deliveries and tasks with ease.</p>
        </div>
        <div className="space-y-4">
          {[
            { name: "Assigned Deliveries", key: "ViewAssignedDeliveries", icon: <FaClipboardList /> },
            { name: "Update Status", key: "UpdateDeliveryStatus", icon: <FaCheckCircle /> },
            { name: "Proof of Delivery", key: "ProofOfDelivery", icon: <FaCamera /> },
            { name: "Notifications", key: "DriverNotifications", icon: <FaBell /> },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.key
                  ? "bg-indigo-600 text-white shadow-md scale-105"
                  : "bg-indigo-500 hover:bg-indigo-400 text-gray-100"
              }`}
              onClick={() => setActiveTab(tab.key)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#8b5cf6] via-[#6d28d9] to-[#4c1d95] text-white p-6 flex items-center justify-between shadow-md">
          <h2 className="text-2xl font-extrabold">Welcome, Driver!</h2>
          {/* Notification Icon */}
          <div className="relative">
            <button
              className="relative p-2 bg-[#8b5cf6] rounded-full hover:bg-[#6d28d9] focus:outline-none"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FaBell className="text-white text-xl" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                  {notifications.length}
                </span>
              )}
            </button>
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
                  <button
                    onClick={handleClearNotifications}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Clear All
                  </button>
                </div>
                <ul className="space-y-2">
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="flex items-center bg-gray-100 p-2 rounded shadow-sm hover:bg-gray-200 transition"
                      >
                        <FaBell className="text-yellow-500 mr-2" />
                        <span className="text-sm text-gray-700">{notification}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-500 text-center">No new notifications</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Tab Content */}
        <motion.div
          className="max-w-6xl mx-auto p-8 mt-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default DriverDashboard;
