import React, { useState } from "react";

const SubmitFeedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        placeholder="Write your feedback here..."
        rows="5"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default SubmitFeedback;
