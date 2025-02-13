import React from "react";

const DeliveryOrders = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📦 Delivery Orders</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-3 font-semibold">Order ID</th>
            <th className="border-b p-3 font-semibold">Customer</th>
            <th className="border-b p-3 font-semibold">Status</th>
            <th className="border-b p-3 font-semibold">Driver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">#1234</td>
            <td className="p-3">John Doe</td>
            <td className="p-3 text-green-600 font-semibold">Delivered</td>
            <td className="p-3">Alex Smith</td>
          </tr>
          <tr>
            <td className="p-3">#1235</td>
            <td className="p-3">Jane Smith</td>
            <td className="p-3 text-yellow-600 font-semibold">In Progress</td>
            <td className="p-3">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryOrders;
