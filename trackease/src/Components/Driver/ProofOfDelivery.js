import React, { useState } from "react";

const ProofOfDelivery = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Proof of delivery uploaded successfully: ${file.name}`);
      setFile(null); // Reset the file state after upload
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📷 Proof of Delivery</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-3 border rounded"
        />
        {file && (
          <p className="text-sm text-gray-600">
            Selected file: <span className="font-medium">{file.name}</span>
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProofOfDelivery;
