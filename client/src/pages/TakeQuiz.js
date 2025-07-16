import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/TakeQuiz.css";

export default function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/quiz/${id}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.error("Quiz fetch failed:", err));
  }, [id]);

  const handleNext = () => {
    if (selected === quiz.questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setSelected("");
    if (current + 1 < quiz.questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!quiz) return <div className="quiz-loading">Loading...</div>;

  if (showResult) {
    return (
      <div className="result-container">
        <h2>🎉 Quiz Completed Successfully!</h2>
        <p>
          Your Score: <strong>{score}</strong> out of{" "}
          <strong>{quiz.questions?.length || 0}</strong>
        </p>
        <p className={score >= quiz.questions.length / 2 ? "success" : "fail"}>
          {score >= quiz.questions.length / 2
            ? "Well Done!"
            : "Better Luck Next Time"}
        </p>
        <div className="result-buttons">
          <Link to="/quizzes">
            <button>← Back to Quizzes</button>
          </Link>
          <Link to="/create">
            <button>Create Your Own Quiz</button>
          </Link>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[current];

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h3>
          Question {current + 1} / {quiz.questions.length}
        </h3>
        <h2>{currentQ.question}</h2>
        <div className="options">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${selected === opt ? "selected" : ""}`}
              onClick={() => setSelected(opt)}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </button>
          ))}
        </div>
        <div className="nav">
          <button onClick={handleNext} disabled={!selected}>
            {current + 1 === quiz.questions.length ? "Finish" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
