import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ backgroundColor: "#001f4d", color: "white", padding: "40px", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
        <div style={boxStyle}>
          <h3>Resumes Uploaded</h3>
          <p>3</p>
          <Link to="/" style={linkStyle}>Upload</Link>
        </div>
        <div style={boxStyle}>
          <h3>Jobs Posted</h3>
          <p>5</p>
          <Link to="/post-job" style={linkStyle}>Post</Link>
        </div>
        <div style={boxStyle}>
          <h3>Alerts</h3>
          <p>2 pending applications</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button style={buttonStyle}>Contact Us</button>
        <button style={buttonStyle}>Report Issues</button>
        <button style={buttonStyle}>About DreamJobs</button>
      </div>
    </div>
  );
}

const boxStyle = {
  backgroundColor: "#003366",
  padding: "20px",
  borderRadius: "6px",
  width: "250px",
};

const linkStyle = {
  color: "#aad4ff",
  textDecoration: "underline",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Dashboard;
