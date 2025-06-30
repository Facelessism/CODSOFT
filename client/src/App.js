import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails"; 
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
        {/* Simple navbar */}
        <nav
          style={{
            padding: "15px 30px",
            backgroundColor: "#f0f0f0",
            borderBottom: "1px solid #ccc",
            marginBottom: "20px"
          }}
        >
          <a
            href="/"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "#4da6ff",
              fontWeight: "bold"
            }}
          >
            Home
          </a>
          <a
            href="/jobs"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "#4da6ff",
              fontWeight: "bold",
              transition: "color 0.5s ease"
            }}
          >
            Jobs
          </a>
          <a
            href="/dashboard"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "#4da6ff",
              fontWeight: "bold",
              transition: "color 0.5s ease"
            }}
          >
            Dashboard
          </a>
          <a
            href="/login"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              color: "#4da6ff",
              fontWeight: "bold",
              transition: "color 0.5s ease"
            }}
          >
            Login
          </a>
          <a
            href="/register"
            style={{
              textDecoration: "none",
              color: "#4da6ff",
              fontWeight: "bold",
              transition: "color 0.5s ease"
            }}
          >
            Register
          </a>
        </nav>

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
