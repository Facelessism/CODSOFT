import React from "react";
import JobForm from "../components/JobForm";

function Dashboard() {
  function handleJobPost(data) {
    console.log("Submitted Job:", data);
    // gonna be into backend laterrr
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Dashboard - Post a Job</h2>
      <JobForm onSubmit={handleJobPost} />
    </div>
  );
}

export default Dashboard;
