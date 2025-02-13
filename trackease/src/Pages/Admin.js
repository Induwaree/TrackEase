import React from "react";
import AdminLogin from "../Components/Admin/AdminLogin";

const Admin = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Circle 1 */}
        <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        {/* Animated Circle 2 */}
        <div className="absolute w-80 h-80 bg-green-500 opacity-20 blur-2xl rounded-full bottom-20 right-20 animate-ping"></div>
        {/* Animated Circle 3 */}
        <div className="absolute w-72 h-72 bg-indigo-500 opacity-25 blur-3xl rounded-full top-1/3 right-1/4 animate-pulse"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10">
        <AdminLogin />
      </div>
    </div>
  );
};

export default Admin;
