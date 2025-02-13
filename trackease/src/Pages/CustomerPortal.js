import React, { useState } from "react";
import { motion } from "framer-motion";
import TrackDelivery from "../Components/Customer/TrackDelivery";
import SubmitFeedback from "../Components/Customer/SubmitFeedback";
import RateDriver from "../Components/Customer/RateDriver";
import Notifications from "../Components/Customer/Notifications";
import { FaTruck, FaComment, FaStar, FaBell, FaUser } from "react-icons/fa";

const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState("TrackDelivery");
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleNotificationClick = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  const handleProfileClick = () => {
    setIsProfileEditing(!isProfileEditing);
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setUserInfo({ name, email });
    setIsProfileEditing(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "TrackDelivery":
        return <TrackDelivery />;
      case "SubmitFeedback":
        return <SubmitFeedback />;
      case "RateDriver":
        return <RateDriver />;
      case "Notifications":
        return <Notifications />;
      default:
        return <TrackDelivery />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-200 to-indigo-300 relative overflow-hidden">
      {/* Header */}
      <motion.header
        className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 shadow-xl rounded-b-lg z-10 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center space-x-6">
          {/* Profile Photo with FontAwesome Icon */}
          <FaUser
            size={50}
            className="text-white cursor-pointer"
            onClick={handleProfileClick}
          />
          <div>
            <h1 className="text-2xl font-semibold text-white tracking-wide">
              {isProfileEditing ? "Edit Profile" : `Hey, ${userInfo.name}!`}
            </h1>
            <p className="text-white text-sm">
              {isProfileEditing ? "Update your details below" : userInfo.email}
            </p>
          </div>
        </div>
        <div className="relative">
          <motion.button
            onClick={handleNotificationClick}
            className="text-white p-2 rounded-full hover:bg-white hover:text-gray-800 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBell size={30} />
          </motion.button>
          {isNotificationVisible && (
            <motion.div
              className="absolute right-0 top-12 bg-white p-4 rounded-xl shadow-lg max-w-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold text-gray-800">Notifications</h4>
              <p>You have new updates regarding your deliveries!</p>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Profile Editing Form */}
      {isProfileEditing && (
        <div className="w-full flex justify-center pt-4">
          <form
            onSubmit={handleEditProfile}
            className="max-w-md w-full p-6 bg-white rounded-xl shadow-xl"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                defaultValue={userInfo.name}
                className="w-full p-3 rounded-lg border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                defaultValue={userInfo.email}
                className="w-full p-3 rounded-lg border border-gray-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* Main Content */}
      <div className="flex justify-center pt-12 px-6">
        <div className="max-w-6xl w-full space-y-12">
          {/* Tabs Navigation */}
          <div className="bg-white shadow-md sticky top-0 z-10">
            <div className="flex justify-around p-4">
              {[
                { name: "Track Delivery", key: "TrackDelivery", icon: <FaTruck /> },
                { name: "Submit Feedback", key: "SubmitFeedback", icon: <FaComment /> },
                { name: "Rate Driver", key: "RateDriver", icon: <FaStar /> },
                { name: "Notifications", key: "Notifications", icon: <FaBell /> },
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
      </div>

      {/* Cargo Animation at Bottom */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center items-center"
        animate={{
          x: ["-100%", "100%"],
          transition: { duration: 5, repeat: Infinity, repeatType: "loop" },
        }}
      >
        <motion.div className="flex items-center space-x-4">
          <FaTruck size={40} className="text-gray-700" />
          <span className="text-lg">Delivery in Progress</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomerPortal;
