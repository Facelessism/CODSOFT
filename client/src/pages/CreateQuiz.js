import React, { useState } from "react";
import axios from "axios";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const handleChange = (i, field, value) => {
    const copy = [...questions];
    if (field === "question" || field === "answer") {
      copy[i][field] = value;
    } else {
      copy[i].options[field] = value;
    }
    setQuestions(copy);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], answer: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/quiz/create", {
        title,
        questions,
        createdBy: "test-user",
      });
      alert("Quiz created!!!");
    } catch (err) {
      console.log("Quiz creation error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create A Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((q, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder={`Question ${i + 1}`}
            onChange={(e) => handleChange(i, "question", e.target.value)}
          />
          {q.options.map((opt, j) => (
            <input
              key={j}
              type="text"
              placeholder={`Option ${j + 1}`}
              onChange={(e) => handleChange(i, j, e.target.value)}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            onChange={(e) => handleChange(i, "answer", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addQuestion}>Add Another Question➕</button>
      <button type="submit">Submit Your Quiz</button>
    </form>
  );
}
