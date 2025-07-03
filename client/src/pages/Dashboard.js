import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }

    if (userId) fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading user info...</p>;
  }

  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f8ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#003366" }}>WELCOME TO DREAMJOBS!!! {user.name}</h2>
      <p><strong> Your Email:</strong> {user.email}</p>
      <p><strong>User ID:</strong> {user.id}</p>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        style={{ marginTop: "20px", padding: "10px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "4px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
