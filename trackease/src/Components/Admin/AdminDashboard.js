import React, { useState } from "react";
import DeliveryOrders from "./DeliveryOrders";
import AssignDrivers from "./AssignDrivers";
import DeliveryProgress from "./DeliveryProgress";
import CustomerFeedback from "./CustomerFeedback";
import PerformanceReports from "./PerformanceReports";
import PushNotifications from "./PushNotifications";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("DeliveryOrders");

  const renderTabContent = () => {
    switch (activeTab) {
      case "DeliveryOrders":
        return <DeliveryOrders />;
      case "AssignDrivers":
        return <AssignDrivers />;
      case "DeliveryProgress":
        return <DeliveryProgress />;
      case "CustomerFeedback":
        return <CustomerFeedback />;
      case "PerformanceReports":
        return <PerformanceReports />;
      case "PushNotifications":
        return <PushNotifications />;
      default:
        return <DeliveryOrders />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">Admin Dashboard</h1>
        <p className="text-center mt-2 text-lg">
          Manage everything in one place
        </p>
      </header>

      {/* Tabs Section */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="flex justify-around p-4">
          {[
            { name: "Delivery Orders", key: "DeliveryOrders", icon: "📦" },
            { name: "Assign Drivers", key: "AssignDrivers", icon: "🚚" },
            { name: "Delivery Progress", key: "DeliveryProgress", icon: "📍" },
            { name: "Customer Feedback", key: "CustomerFeedback", icon: "💬" },
            {
              name: "Performance Reports",
              key: "PerformanceReports",
              icon: "📊",
            },
            {
              name: "Push Notifications",
              key: "PushNotifications",
              icon: "🔔",
            },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
      </div>

      {/* Tab Content */}
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
