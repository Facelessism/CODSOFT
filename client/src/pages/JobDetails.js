import React from "react";
import { useParams } from "react-router-dom";

const dummyJobs = [
  {
    ID: "1",
    Title: "Frontend Developer",
    Company: "Tech Solutions",
    Location: "Remote",
    Type: "Full-time",
    Description: "Build and maintain user interfaces using React.",
    Requirements: ["React", "CSS", "REST APIs"],
    Salary: "₹6 - ₹8 LPA",
  },
  {
    ID: "2",
    Title: "Backend Developer",
    Company: "CodeFactory",
    Location: "Bangalore",
    Type: "Part-time",
    Description: "Work with Node.js and Express to build APIs.",
    Requirements: ["Node.js", "MongoDB", "JWT"],
    Salary: "₹4 - ₹6 LPA",
  },
];

function JobDetails() {
  const { id } = useParams();
  const job = dummyJobs.find((job) => job.id === id);

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        {job.requirements.map((req, idx) => (
          <li key={idx}>{req}</li>
        ))}
      </ul>
    </div>
  );
}

// git add 

export default JobDetails;
