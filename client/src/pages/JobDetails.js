import React from "react";
import { useParams } from "react-router-dom";

// Dummy job data
const dummyJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain user interfaces using React.",
    requirements: ["React", "CSS", "REST APIs"],
    salary: "₹6 - ₹8 LPA",
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "CodeFactory",
    location: "Bangalore",
    type: "Part-time",
    description: "Work with Node.js and Express to build APIs.",
    requirements: ["Node.js", "MongoDB", "JWT"],
    salary: "₹4 - ₹6 LPA",
  },
];

function JobDetails() {
  const { id } = useParams();
  const job = dummyJobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div style={{ padding: "40px", color: "red" }}>
        <h2>Job not found.</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#001f3f",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        {job.title.toUpperCase()}
      </h2>
      <p><strong>COMPANY:</strong> {job.company}</p>
      <p><strong>LOCATION:</strong> {job.location}</p>
      <p><strong>TYPE:</strong> {job.type}</p>
      <p><strong>SALARY:</strong> {job.salary}</p>
      <p><strong>DESCRIPTION:</strong> {job.description}</p>
      <p><strong>REQUIREMENTS:</strong></p>
      <ul>
        {job.requirements.map((req, idx) => (
          <li key={idx}>{req}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobDetails;
