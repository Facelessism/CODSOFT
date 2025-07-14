import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/quizzes" style={{ marginRight: "15px" }}>All Available Quizzes</Link>
      {isLoggedIn && <Link to="/create">Create A Quiz</Link>}
    </nav>
  );
}
