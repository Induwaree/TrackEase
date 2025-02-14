import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const Notifications = () => {
  const [notifications] = useState([
    "Your delivery is on its way!",
    "Driver is 10 minutes away.",
    "Your package has been delivered successfully.",
  ]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-purple-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-full bg-purple-600 text-white">
          <FaBell size={24} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
          Notifications
        </h2>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-200 text-purple-600 mr-4">
                <FaBell size={20} />
              </div>
              <p className="text-gray-800 font-medium text-lg">{notification}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center text-lg">
            No new notifications
          </p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
