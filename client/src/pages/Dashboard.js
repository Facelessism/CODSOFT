import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={{ padding: "40px", minHeight: "100vh", background: "#e6f2ff" }}>
      <h2 style={{ color: "#003366", marginBottom: "20px" }}>Your Dashboard</h2>

      {user ? (
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            maxWidth: "500px",
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {new Date(user.createdAt).toDateString()}</p>
        </div>
      ) : (
        <p>Loading Your Profile...</p>
      )}
      
      <div style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button style={buttonStyle}>Contact Us</button>
        <button style={buttonStyle}>Report Issue</button>
        <button style={buttonStyle}>About DreamJobs</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 24px",
  borderRadius: "6px",
  backgroundColor: "#0059b3",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Dashboard;
