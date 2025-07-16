import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">
        HomePage
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/quizzes">All Available Quizzes</Link>
        {isLoggedIn && <Link to="/create">Create A Quiz</Link>}
      </div>
    </nav>
  );
}
