import React, { useState } from "react";
import JobCard from "../components/Jobcard";  
import jobs from "../data/JobsData";          

function Jobs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const keywordMatch = job.title.toLowerCase().includes(keyword.toLowerCase()) ||
                         job.company.toLowerCase().includes(keyword.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
    const categoryMatch = category === "" || job.type.toLowerCase().includes(category.toLowerCase());

    return keywordMatch && locationMatch && categoryMatch;
  });

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
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default Jobs;
