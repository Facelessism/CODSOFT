import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quiz/${id}`)
      .then(res => setQuiz(res.data))
      .catch(err => console.log("Quiz fetch failed", err));
  }, [id]);

  const handleNext = () => {
    if (selected === quiz.questions[current].answer) {
      setScore(score + 1);
    }
    setSelected("");

    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  if (showResult) {
    return (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2 style={{ color: "#333" }}>Quiz Completed Successfully!!!</h2>

    <p style={{ fontSize: "18px", marginTop: "10px" }}>
      Your Score For This Quiz is <strong>{score}</strong> Out of{" "}
      <strong>{quiz.questions?.length || 0}</strong>
    </p>

    <p
      style={{
        marginTop: "8px",
        color: score >= quiz.questions.length / 2 ? "green" : "crimson",
      }}
    >
      {score >= quiz.questions.length / 2
        ? "Well Done!!!"
        : "Better Luck Next Time"}
    </p>

    <div style={{ marginTop: "25px" }}>
      <a href="/quizzes">
        <button style={{ padding: "10px 16px", marginRight: "12px" }}>
          ← Back to The Quizzes
        </button>
      </a>

      <a href="/create">
        <button style={{ padding: "10px 16px" }}>Create Your Own Quiz</button>
      </a>
    </div>
  </div>
);
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.questions[current].question}</p>
      {quiz.questions[current].options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          /> {opt}
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
