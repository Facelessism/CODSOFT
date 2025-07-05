import React, { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (err) {
        setError("Failed to fetch jobs from the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const keywordMatch =
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase());

      const locationMatch = job.location
        .toLowerCase()
        .includes(location.toLowerCase());

      const categoryMatch =
        category === "" ||
        job.type.toLowerCase().includes(category.toLowerCase());

      return keywordMatch && locationMatch && categoryMatch;
    });

    setFilteredJobs(filtered);
  }, [keyword, location, category, jobs]);

  if (loading) return <p style={{ padding: "40px" }}>Loading jobs...</p>;
  if (error) return <p style={{ padding: "40px", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "40px", backgroundColor: "#eef6ff" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Search Jobs</h2>

      <div style={{ marginBottom: "30px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: "10px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "10px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
          <option value="remote">Remote</option>
        </select>
      </div>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <p>No Jobs Found.</p>
      )}
    </div>
  );
}

export default Jobs;
