import React from "react";
import jobs from "../data/JobsData"; // ✅ Import job data
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f9ff", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px", textAlign: "center" }}>
        Available Jobs
      </h2>

      {jobs.map((job) => (
        <Link
          key={job.id}
          to={`/jobs/${job.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#1a1a1a" }}>
              {job.title}
            </h3>
            <p>
              <strong>Company:</strong> {job.company}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Type:</strong> {job.type}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Jobs;
