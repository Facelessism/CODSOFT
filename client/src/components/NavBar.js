import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">
        HomePage
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/quizzes">Quizzes</Link>
        {isLoggedIn ? (
          <>
            <Link to="/create">Create</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
