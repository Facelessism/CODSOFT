import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/QuizList.css";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/quiz/all");
        setQuizzes(res.data || []);
      } catch (err) {
        console.error("Quiz fetch failed", err);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="quizlist-container">
      <h2>Available Quizzes</h2>

      {quizzes.length === 0 ? (
        <p className="no-quizzes">No quizzes uploaded yet!!!</p>
      ) : (
        <div className="quiz-grid">
          {quizzes.map((quiz) => (
            <div className="quiz-card" key={quiz._id}>
              <h3>{quiz.title}</h3>
              <p className="quiz-author">
                Created by: <strong>{quiz.createdBy || "Anonymous"}</strong>
              </p>
              <Link to={`/quiz/${quiz._id}`}>
                <button className="take-btn">Take Quiz</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
