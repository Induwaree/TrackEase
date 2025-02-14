import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const SubmitFeedback = ({ orderId = "#12345", driverName = "John Doe" }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || rating === 0) {
      alert("Please provide a rating and feedback before submitting.");
      return;
    }
    alert(`Feedback submitted successfully! Rating: ${rating} stars.`);
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          📝 Rate Your Delivery
        </h2>
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-4 rounded-xl shadow-lg mb-6">
          <p className="text-lg font-medium text-gray-700">
            Order ID: <span className="font-bold text-gray-900">{orderId}</span>
          </p>
          <p className="text-lg font-medium text-gray-700 mt-2">
            Driver: <span className="font-bold text-gray-900">{driverName}</span>
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            How would you rate your delivery experience?
          </h3>
          <div className="flex space-x-3 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={40}
                className={`cursor-pointer transition-transform duration-200 ${
                  (hoverRating || rating) >= star
                    ? "text-yellow-400 scale-125"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <textarea
            className="w-full p-5 bg-gradient-to-r from-indigo-100 to-purple-100 border border-gray-300 rounded-lg focus:ring-4 focus:ring-pink-400 outline-none shadow-md"
            placeholder="Write your feedback here..."
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default SubmitFeedback;
