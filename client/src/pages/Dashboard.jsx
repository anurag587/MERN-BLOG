import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DashProfile from "../components/DashProfile";
import DashSideBar from "../components/DashSideBar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="mid: w-56">
        {/* Sidebar */}
        <DashSideBar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
