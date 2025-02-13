import React from "react";

const PushNotifications = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Push Notifications</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Driver Name</label>
          <input
            type="text"
            placeholder="Enter Driver Name"
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            placeholder="Enter your message"
            className="w-full p-3 border rounded"
          ></textarea>
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded">
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default PushNotifications;
