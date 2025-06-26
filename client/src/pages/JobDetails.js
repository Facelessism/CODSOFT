// JobDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/JobsData"; // adjust path as needed

function JobDetails() {
  const { id } = useParams();

  // URL param is a string, job.id is number — so convert it
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div style={{ padding: "40px", background: "#e0f7ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#003366" }}>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Description:</strong> {job.description}</p>
    </div>
  );
}

export default JobDetails;
