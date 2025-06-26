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
        <h3 style={{ marginBottom: "8px", color: "#333" }}>
          {title}
        </h3>
        <p style={{ margin: "4px 0" }}>
          <strong>Company:</strong> {company}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Location:</strong> {location}
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Type:</strong> {type}
        </p>
        <p style={{ marginTop: "10px", color: "#555" }}>{description}</p>
      </div>
    </Link>
  );
}

function JobCards() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Techmech",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain React UI components.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "BigMinds",
      location: "Bangalore",
      type: "Part-time",
      description: "Work on APIs with Node.js and Express.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "UI pvt.ltd",
      location: "Mumbai",
      type: "Remote Internship",
      description: "Design intuitive user experiences.",
    },
    {
      id: 4,
      title: "AI-ML Engineer",
      company: "TechTitans",
      location: "Hyderabad",
      type: "Part-time",
      description: "Build and train machine learning models.",
    },
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#eef6ff" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
        Featured Job Cards
      </h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobCards;
