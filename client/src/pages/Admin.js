import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  const jobs = [
    { title: "XYZ Post", company: "ABC Corp", type: "Full-time" },
    { title: "WXY Post", company: "XYZ Inc", type: "Part-time" }
  ];

  return (
    <div style={{ padding: "40px", background: "#e6f2ff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#003366" }}>Admin Dashboard</h2>

      <table style={{ width: "100%", marginTop: "20px", background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
        <thead style={{ background: "#cce5ff" }}>
          <tr>
            <th style={th}>Title</th>
            <th style={th}>Company</th>
            <th style={th}>Type</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={idx}>
              <td style={td}>{job.title}</td>
              <td style={td}>{job.company}</td>
              <td style={td}>{job.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "30px" }}>
        <Link to="/dashboard" style={link}>← Dashboard</Link>
        <Link to="/login" style={{ ...link, marginLeft: "15px" }}>Logout</Link>
      </div>
    </div>
  );
}

const th = { padding: "12px", textAlign: "left", color: "#003366" };
const td = { padding: "12px", borderTop: "1px solid #eee" };
const link = {
  display: "inline-block",
  padding: "10px 18px",
  background: "#003366",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px"
};

export default Admin;
