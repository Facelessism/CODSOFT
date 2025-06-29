import React from "react";
import { Link } from "react-router-dom";


function JobCard({ job }) {
  const {
    id,
    title = "Untitled Role",
    company = "Unknown Company",
    location = "Unspecified Location",
    type = "N/A",
    description = "No description available",
    deadline = "Unknown date"
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
          transition: "box-shadow 0.2s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        <h3 style={{ marginBottom: "8px", color: "#333" }}>{title}</h3>
        <p style={{ margin: "4px 0" }}>
          <strong>Company:</strong> {company}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Location:</strong> {location}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Type:</strong> {type}
        </p>
        <p style={{ margin: "4px 0" }}>
         <strong>deadline:</strong> {deadline}
        </p>
        <p style={{ marginTop: "10px", color: "#555" }}>{description}</p>
        <button
          onClick={(e) => {
          e.preventDefault();
          alert(`Application sent for ${title} at ${company}`);
                          }}
         style={{
         padding: "8px 16px",
         backgroundColor: "#007bff",
         color: "#fff",
         border: "none",
         borderRadius: "4px",
         marginTop: "10px",
         cursor: "pointer"
                 }}
          >
          Apply Now
        </button>

      </div>
    </Link>
  );
}

export default JobCard;
