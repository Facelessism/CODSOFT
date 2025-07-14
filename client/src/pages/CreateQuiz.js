import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../auth/userInfo";

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

    if (!title || questions.length === 0) {
      setError("Please add a title and at least one question.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/quiz/create", 
        {
        title,
        questions,
        createdBy: user?.username || "guest-user",
      });
      alert("Quiz created successfully!");
      navigate("/");
    } catch (err) {
      console.error("Quiz creation error", err);
      setError("Something went wrong while creating the quiz.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Create A Quiz</h2>

      {error && <p style={{ color: "crimson" }}>{error}</p>}

      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder={`Question ${i + 1}`}
            value={q.question}
            onChange={(e) => handleChange(i, "question", e.target.value)}
            style={{ display: "block", marginBottom: "8px", padding: "8px" }}
          />
          {q.options.map((opt, j) => (
            <input
              key={j}
              type="text"
              placeholder={`Option ${j + 1}`}
              value={opt}
              onChange={(e) => handleChange(i, j, e.target.value)}
              style={{ marginBottom: "5px", padding: "6px", width: "80%" }}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={q.answer}
            onChange={(e) => handleChange(i, "answer", e.target.value)}
            style={{ display: "block", padding: "8px", marginTop: "6px" }}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addQuestion}
        style={{ padding: "10px 14px", marginRight: "12px" }}
      >
        +Add Question
      </button>

      <button type="submit" style={{ padding: "10px 16px" }}>
        ✅Submit Your Quiz
      </button>

      <div style={{ marginTop: "30px", padding: "15px", borderTop: "1px solid #ccc" }}>
        <h3>Quiz Preview</h3>
        <p><strong>Title:</strong> {title || "(No Title Yet)"}</p>
        {questions.map((q, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <p><strong>Q{i + 1}:</strong> {q.question || "(No Question)"}</p>
            <ul>
              {q.options.map((opt, j) => (
                <li key={j}>{opt || "..."}</li>
              ))}
            </ul>
            <p style={{ color: "green" }}>Answer: {q.answer || "?"}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
