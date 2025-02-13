import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
      <ul className="space-y-4">
        <li>
          <p className="font-bold">John Doe</p>
          <p className="text-gray-600">Excellent service!</p>
        </li>
        <li>
          <p className="font-bold">Jane Smith</p>
          <p className="text-gray-600">The driver was late.</p>
        </li>
      </ul>
    </div>
  );
};

export default CustomerFeedback;
