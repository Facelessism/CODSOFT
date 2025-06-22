import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const {
    id,
    title = "UNTITLED ROLE",
    company = "UNKNOWN COMPANY",
    location = "UNSPECIFIED LOCATION",
    type = "N/A",
    description = "NO DESCRIPTION AVAILABLE"
  } = job || {};

  return (
    <Link
      to={`/jobs/${id}`}
      style={{ textDecoration: "none", color: "#222" }}
    >
      <div
        className="job-card"
        style={{
          border: "1px solid #ccc",
          padding: "12px 18px",
          marginBottom: "18px",
          borderRadius: "6px",
          backgroundColor: "#f9f9f9",
          transition: "box-shadow 0.2s ease-in-out"
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        <h3 style={{ marginBottom: "8px" }}>{title}</h3>
        <p style={{ margin: "4px 0" }}>
          <strong>TITLE:</strong> {title}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>COMPANY:</strong> {company}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>LOCATION:</strong> {location}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>TYPE:</strong> {type}
        </p>
        <p style={{ marginTop: "10px", color: "#555" }}>{description}</p>
      </div>
    </Link>
  );
}

function JobCards() {
  const job1 = {
    ID: 1,
    Title: "Software Engineer",
    Company: "TechCorp",
    Location: "Bangalore",
    Type: "Full-time",
    Description: "Build modern web apps using React."
  };

  const job2 = {
    ID: 2,
    Title: "Frontend Developer",
    Company: "Designify",
    Location: "Remote",
    Type: "Part-time",
    Description: "Focus on UI/UX improvements in existing systems."
  };

  return (
    <div>
      <JobCard job={job1} />
      <JobCard job={job2} />
    </div>
  );
}
//all for commit

export default JobCards;
