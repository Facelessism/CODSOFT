import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../auth/UserInfo";
import "../styles/CreateQuiz.css";

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to login first!");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (index, field, value) => {
    const updated = [...questions];
    if (field === "question" || field === "answer") {
      updated[index][field] = value;
    } else {
      updated[index].options[field] = value;
    }
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = getUserInfo();
    if (!user || !user.id) {
      setError("Invalid User");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/quiz/create", {
        title,
        questions,
        createdBy: user?.id,
      });
      alert("Quiz created successfully!");
      navigate("/");
    } catch (err) {
      console.error("Quiz creation error", err);
      setError("Something went wrong while creating the quiz.");
    }
  };

  return (
    <div className="create-container">
      <form className="quiz-form" onSubmit={handleSubmit}>
        <h2>Create a New Quiz</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          required
        />

        {questions.map((q, i) => (
          <div className="question-block" key={i}>
            <input
              type="text"
              placeholder={`Question ${i + 1}`}
              value={q.question}
              onChange={(e) => handleChange(i, "question", e.target.value)}
              className="question-input"
              required
            />

            <div className="options">
              {q.options.map((opt, j) => (
                <input
                  key={j}
                  type="text"
                  placeholder={`Option ${j + 1}`}
                  value={opt}
                  onChange={(e) => handleChange(i, j, e.target.value)}
                  required
                />
              ))}
            </div>

            <input
              type="text"
              placeholder="Correct Answer"
              value={q.answer}
              onChange={(e) => handleChange(i, "answer", e.target.value)}
              className="answer-input"
              required
            />
          </div>
        ))}

        <div className="btn-row">
          <button type="button" onClick={addQuestion} className="add-btn">
            + Add Question
          </button>
          <button type="submit" className="submit-btn">
            ✅ Submit Quiz
          </button>
        </div>
      </form>

      <div className="preview-block">
        <h3>Quiz Preview</h3>
        <p><strong>Title:</strong> {title || "(No Title Yet)"}</p>
        {questions.map((q, i) => (
          <div className="preview-question" key={i}>
            <p><strong>Q{i + 1}:</strong> {q.question || "..."}</p>
            <ul>
              {q.options.map((opt, j) => (
                <li key={j}>{opt || "..."}</li>
              ))}
            </ul>
            <p className="answer">✔ Answer: {q.answer || "?"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}