import React from "react";
import ResumeUploads from "../components/ResumeUploads"; 
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        fontSize: "24px",
        lineHeight: "1.6",
        backgroundColor: "#001f4d", // Deep Blue
        color: "#f2f2f2",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "70px", marginBottom: "20px", color: "#ffffff" }}>
        Welcome to DreamJobs
      </h2>

      <p style={{ color: "#d9eaff", fontSize: "20px" }}>
        Find your dream job or post a vacancy today!!!
      </p>

      <h3
        style={{
          fontSize: "24px",
          marginTop: "40px",
          color: "#aad4ff",
          fontWeight: "500",
        }}
      >
        🔥 4500+ JOB OPPORTUNITIES AVAILABLE 🔥
      </h3>

      <h1
        style={{
          fontSize: "44px",
          margin: "20px 0",
          color: "#ffffff",
          fontWeight: "bold",
        }}
      >
        Discover The Perfect Job For You
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cce0ff",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Browse through full-time, part-time, remote, and internship listings
        tailored to your skills and passion.
      </p>

      {/* 🔽 Resume Upload Section */}
      <ResumeUploads /> {/* ✅ Proper component rendering */}
      <Link to="/post-job">
         <button
             style={{
             padding: "18px 32px",
             fontSize: "16px",
             backgroundColor: "#007bff",
             color: "white",
             border: "none",
             borderRadius: "5px",
             cursor: "pointer",
             marginTop: "20px",
                   }}
           >
                Post a Job
           </button>
      </Link>

    <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
       
      </div>

    </div>
  );
}

export default Home;
