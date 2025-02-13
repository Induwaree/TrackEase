import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Admin from "../src/Pages/Admin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import DriverDashboard from "./Pages/DriverDashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CustomerPortal from "./Pages/CustomerPortal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/customer-portal" element={<CustomerPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
