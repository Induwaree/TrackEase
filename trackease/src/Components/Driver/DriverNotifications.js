import React from "react";

const DriverNotifications = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🔔 Notifications</h2>
      <ul className="space-y-4">
        <li className="p-3 bg-gray-100 rounded shadow">New delivery task assigned: #1234</li>
        <li className="p-3 bg-gray-100 rounded shadow">Delivery status updated for #1235</li>
      </ul>
    </div>
  );
};

export default DriverNotifications;
