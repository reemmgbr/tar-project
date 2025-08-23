import React from "react";
import Navbar from "./src/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ModernFooter from "./src/components/ModernFooter";

export default function Layout() {
  return (
    <div >
      <Navbar />
      <Outlet />
      <ModernFooter />
    </div>
  );
}
