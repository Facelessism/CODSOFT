import React from "react";

function Home() {
  return (
    <div
      style={{
        padding: "60px",
        textAlign: "center",
        fontSize: "24px",
        lineHeight: "1.6",
        backgroundColor: "#001f4d", // Deep Blue
        color: "#f2f2f2", // Light text for contrast
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "40px", marginBottom: "20px", color: "#ffffff" }}>
        Welcome to JobBoard
      </h2>

      <p style={{ color: "#d9eaff", fontSize: "20px" }}>
        Find your dream job or post a vacancy today!
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
        Browse through full-time, part-time, remote, and internship listings tailored to your skills and passion.
      </p>

      <button
        style={{
          padding: "14px 32px",
          fontSize: "18px",
          backgroundColor: "#28a745", // Green accent
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Upload Your Resume
      </button>

      <div style={{ marginTop: "40px" }}>
        <img
          src="https://via.placeholder.com/420x220?text=Find+Your+Next+Job"
          alt="Job illustration"
          style={{
            maxWidth: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
