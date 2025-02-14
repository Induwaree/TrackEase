import React from "react";
import { FaTruck, FaSmile, FaChartLine } from "react-icons/fa";

const PerformanceReports = () => {
  const metrics = [
    {
      title: "Delivery Efficiency",
      value: "95%",
      icon: <FaTruck className="text-indigo-600" />,
      description: "On-time deliveries in the past month.",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      icon: <FaSmile className="text-yellow-500" />,
      description: "Average customer rating based on feedback.",
    },
    {
      title: "Driver Performance",
      value: "4.7/5",
      icon: <FaChartLine className="text-green-500" />,
      description: "Average driver performance score.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 min-h-screen p-8">
      <div className="bg-white p-6 rounded-3xl shadow-lg max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          📊 Performance Reports
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Analyze delivery efficiency, customer satisfaction, and driver performance in real-time.
        </p>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                {metric.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{metric.title}</h3>
              <p className="text-4xl font-bold text-indigo-600 mt-2">{metric.value}</p>
              <p className="text-sm text-gray-500 mt-2 text-center">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Insights Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Generate Insights</h3>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <p className="text-lg text-gray-600 mb-6">
              Click below to generate detailed performance insights and reports.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all font-semibold">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReports;
