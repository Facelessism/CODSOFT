import React from "react";
import ResumeUploads from "../components/ResumeUploads"; 

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
      <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#ffffff" }}>
        Welcome to JobBoard
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
          fontSize: "18px",
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

      <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
       <img
           src="https://storyset.com/illustration/job-hunt/rafiki"
           style={{ width: "400px", maxWidth: "80%", borderRadius: "4px" }}
       />
      </div>

    </div>
  );
}

export default Home;
