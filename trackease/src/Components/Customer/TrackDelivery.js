import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrackDelivery = () => {
  const [orderIdInput, setOrderIdInput] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!orderDetails) return;

    const fetchTrackingData = () => {
      setOrderDetails((prevDetails) => {
        if (!prevDetails) return prevDetails;

        let updatedProgress = prevDetails.progress;
        if (updatedProgress < 2) updatedProgress++;

        return {
          ...prevDetails,
          progress: updatedProgress,
          status:
            updatedProgress === 1
              ? "Out for Delivery"
              : updatedProgress === 2
              ? "Delivered"
              : "Dispatcher Assigned",
          estimatedArrival:
            updatedProgress === 1
              ? "10 minutes"
              : updatedProgress === 2
              ? "Delivery Completed"
              : "45 minutes",
        };
      });
    };

    const interval = setInterval(fetchTrackingData, 15000); // Update every 15 seconds
    return () => clearInterval(interval);
  }, [orderDetails]);

  const handleTrackOrder = () => {
    if (!orderIdInput.trim()) {
      setError("Please enter a valid Order ID.");
      return;
    }

    // Simulating fetching order details (Replace with actual API call)
    if (orderIdInput === "12345") {
      setOrderDetails({
        orderId: orderIdInput,
        status: "Dispatcher Assigned",
        estimatedArrival: "45 minutes",
        driverLocation: { latitude: 37.7749, longitude: -122.4194 },
        progress: 0, // Initial progress
      });
      setError("");
    } else {
      setError("Order not found. Please check the Order ID.");
      setOrderDetails(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          📦 Track Your Delivery
        </h2>

        {/* Order ID Input */}
        {!orderDetails && (
          <div className="flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Enter Order ID"
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500 w-full"
              value={orderIdInput}
              onChange={(e) => setOrderIdInput(e.target.value)}
            />
            <motion.button
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
              onClick={handleTrackOrder}
              whileTap={{ scale: 0.95 }}
            >
              Track Order
            </motion.button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}

        {/* Tracking Information (Visible only after entering a valid Order ID) */}
        {orderDetails && (
          <>
            <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-300 p-5 rounded-xl mb-6 shadow-md">
              <p className="text-xl font-semibold text-gray-700">
                Order ID: <span className="font-extrabold text-gray-900">{orderDetails.orderId}</span>
              </p>
              <p className="text-lg mt-2 text-gray-600">
                Current Status: <span className="font-bold text-gray-800">{orderDetails.status}</span>
              </p>
              <p className="text-lg mt-2 text-gray-600">
                Estimated Arrival: <span className="font-bold text-gray-800">{orderDetails.estimatedArrival}</span>
              </p>
            </div>

            {/* Progress Tracker */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Delivery Progress</h3>
              <div className="flex items-center justify-between relative">
                <div
                  className={`w-12 h-12 rounded-full ${
                    orderDetails.progress >= 0 ? "bg-blue-500" : "bg-gray-300"
                  } flex items-center justify-center text-white text-lg font-bold shadow-lg transition-all duration-300`}
                >
                  1
                </div>
                <div
                  className={`absolute top-6 left-14 right-14 h-2 ${
                    orderDetails.progress >= 1 ? "bg-blue-500" : "bg-gray-300"
                  } rounded-full transition-all duration-300`}
                ></div>
                <div
                  className={`w-12 h-12 rounded-full ${
                    orderDetails.progress >= 1 ? "bg-blue-500" : "bg-gray-300"
                  } flex items-center justify-center text-white text-lg font-bold shadow-lg transition-all duration-300`}
                >
                  2
                </div>
                <div
                  className={`absolute top-6 left-1/2 right-2 h-2 ${
                    orderDetails.progress >= 2 ? "bg-blue-500" : "bg-gray-300"
                  } rounded-full transition-all duration-300`}
                ></div>
                <div
                  className={`w-12 h-12 rounded-full ${
                    orderDetails.progress >= 2 ? "bg-blue-500" : "bg-gray-300"
                  } flex items-center justify-center text-white text-lg font-bold shadow-lg transition-all duration-300`}
                >
                  3
                </div>
              </div>
              <div className="flex justify-between text-sm mt-4 text-gray-600">
                <span>Dispatcher Assigned</span>
                <span>Out for Delivery</span>
                <span>Delivered</span>
              </div>
            </div>

            {/* Driver Location */}
            <div className="bg-gray-100 p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Driver Location</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-md text-gray-600">
                    Latitude: <span className="font-medium">{orderDetails.driverLocation.latitude}</span>
                  </p>
                  <p className="text-md text-gray-600">
                    Longitude: <span className="font-medium">{orderDetails.driverLocation.longitude}</span>
                  </p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  🚗
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrackDelivery;
