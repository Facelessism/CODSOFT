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
      <div>
        <h2>Quiz Completed Successfully!!!</h2>
        <p>Score: {score}/{quiz.questions.length}</p>
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
