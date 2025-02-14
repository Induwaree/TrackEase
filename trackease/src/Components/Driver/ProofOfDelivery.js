import React, { useState, useRef } from "react";
import { FaCamera, FaSignature } from "react-icons/fa";

const ProofOfDelivery = () => {
  const [file, setFile] = useState(null);
  const [signature, setSignature] = useState("");
  const canvasRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    if (!signature) {
      alert("Please provide a digital signature.");
      return;
    }

    alert(`Proof of delivery uploaded successfully: ${file.name}`);
    setFile(null);
    setSignature(""); // Clear signature after submission
    clearCanvas(); // Clear canvas after submission
  };

  const handleDraw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (e.buttons !== 1) return; // Draw only when the mouse button is pressed
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-purple-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          📦 Proof of Delivery
        </h2>

        {/* Upload Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <FaCamera className="text-green-500" />
            <span>Upload Delivery Photo</span>
          </h3>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
          />
          {file && (
            <p className="text-sm text-gray-600 mt-2">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>

        {/* Digital Signature Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <FaSignature className="text-blue-500" />
            <span>Customer Digital Signature</span>
          </h3>
          <canvas
            ref={canvasRef}
            onMouseMove={handleDraw}
            width={400}
            height={150}
            className="border border-gray-300 rounded-lg bg-gray-50 cursor-crosshair"
          ></canvas>
          <button
            onClick={clearCanvas}
            type="button"
            className="mt-3 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Clear Signature
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
        >
          Submit Proof
        </button>
      </div>
    </div>
  );
};

export default ProofOfDelivery;
