import React, { useState } from "react";

const Notifications = () => {
  const [notifications] = useState([
    "Your delivery is on its way!",
    "Driver is 10 minutes away.",
    "Your package has been delivered successfully.",
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li key={index} className="mb-2">
              {notification}
            </li>
          ))
        ) : (
          <p>No new notifications</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
