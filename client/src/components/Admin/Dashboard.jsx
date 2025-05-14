import React from "react";
import Slider from "./Slider";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-20 flex h-screen bg-gray-100">
      <Slider />
      <div className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
    </div>
  );
};

export default Dashboard;
