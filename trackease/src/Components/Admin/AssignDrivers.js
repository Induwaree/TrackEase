import React from "react";

const AssignDrivers = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Assign Drivers</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Order ID</label>
          <input
            type="text"
            placeholder="Enter Order ID"
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Driver Name</label>
          <input
            type="text"
            placeholder="Enter Driver Name"
            className="w-full p-3 border rounded"
          />
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          Assign Driver
        </button>
      </form>
    </div>
  );
};

export default AssignDrivers;
