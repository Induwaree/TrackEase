import React from "react";

const ViewAssignedDeliveries = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📋 Assigned Deliveries</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-3 font-semibold">Order ID</th>
            <th className="border-b p-3 font-semibold">Customer</th>
            <th className="border-b p-3 font-semibold">Delivery Address</th>
            <th className="border-b p-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">#1234</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">123 Main St, City</td>
            <td className="p-3 text-yellow-500">En Route</td>
          </tr>
          <tr>
            <td className="p-3">#1235</td>
            <td className="p-3">Jane Smith</td>
            <td className="p-3">456 Elm St, City</td>
            <td className="p-3 text-green-500">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewAssignedDeliveries;
