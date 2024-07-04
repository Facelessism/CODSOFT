import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        console.error("❌ Failed To Fetch User Profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Dashboard</h2>

      {loading ? (
        <p>Loading Your Profile...</p>
      ) : user ? (
        <>
          <div style={styles.profileCard}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Joined On:</strong> {new Date(user.createdAt).toDateString()}</p>
          </div>

          <button onClick={handleLogout} style={styles.logoutButton}>
            LOGOUT
          </button>
        </>
      ) : (
        <p style={{ color: "red" }}>User Not Found Or Not Logged In</p>
      )}

      <div style={styles.buttons}>
        <button style={styles.button}>Contact Us</button>
        <button style={styles.button}>Report Issue</button>
        <button style={styles.button}>About DreamJobs</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    minHeight: "100vh",
    backgroundColor: "#e6f2ff",
    textAlign: "center",
  },
  heading: {
    fontSize: "30px",
    color: "#003366",
    marginBottom: "30px",
  },
  profileCard: {
    margin: "0 auto",
    background: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    textAlign: "left",
  },
  logoutButton: {
    marginTop: "20px",
    backgroundColor: "#d9534f",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  buttons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "6px",
    backgroundColor: "#0059b3",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Dashboard;
