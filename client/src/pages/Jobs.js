import React from "react";
import JobCards from "../components/Jobcards"; 

const dummyJobs = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    location: "Remote",
    type: "Full-time",
    description: "React developer needed for exciting project"
  },
  
];

function Jobs() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Job Listings</h2>
      {dummyJobs.map((job, index) => (
        <JobCards key={index} job={job} />
      ))}
    </div>
  );
}

//all for commits
export default Jobs;
