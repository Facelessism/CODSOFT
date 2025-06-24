import React from "react";
import JobForm from "../components/JobForm";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "#0d1b2a", // light blue background
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          color: "#2e7d32", // green
          borderBottom: "2px solid #2e7d32",
          paddingBottom: "10px"
        }}
      >
        Dashboard - Post a Job
      </h2>

      <div style={{ width: "100%", maxWidth: "600px", background: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <JobForm />
      </div>
    </div>
  );
}

export default Dashboard;
