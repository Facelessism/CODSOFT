import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";  

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        setError("Job not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p style={{ padding: "40px" }}>Loading...</p>;
  if (error) return <p style={{ padding: "40px", color: "red" }}>{error}</p>;
 
  return (
    <div style={{ padding: "40px", background: "#e0f7ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#003366" }}>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Deadline:</strong> {job.deadline}</p>

      <button
        onClick={() => alert(`Application sent for ${job.title} at ${job.company}`)}
        style={{
          padding: "12px 24px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          marginTop: "30px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default JobDetails;
