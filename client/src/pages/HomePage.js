import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">JazzQuizMaker</h1>
        <p className="homepage-subtitle">Create your own quizzes & test others now!</p>

        <div className="homepage-buttons">
          <Link to="/quizzes">
            <button className="homepage-btn">Browse Quizzes</button>
          </Link>

          {isLoggedIn ? (
            <Link to="/create">
              <button className="homepage-btn">Create a Quiz</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="homepage-btn alt">Login</button>
              </Link>
              <Link to="/register">
                <button className="homepage-btn alt">Register</button>
              </Link>
            </>
          )}
        </div>

        <p className="homepage-note">
          NOTE — This platform is still in its early phase of development.
        </p>
      </div>
    </div>
  );
}
