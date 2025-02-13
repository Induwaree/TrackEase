import React, { useState } from "react";

const UpdateDeliveryStatus = () => {
  const [status, setStatus] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Delivery status updated to: ${status}`);
    setStatus("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">✅ Update Delivery Status</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Order ID</label>
          <input
            type="text"
            placeholder="Enter Order ID"
            className="w-full p-3 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded"
          >
            <option value="">Select Status</option>
            <option value="En Route">En Route</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Update Status
        </button>
      </form>
    </div>
  );
};

export default UpdateDeliveryStatus;
