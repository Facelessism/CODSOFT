import React, { useEffect, useState } from "react";

const sampleQuizzes = [
  { title: "General Knowledge", _id: "1" },
  { title: "Introduction to Computers", _id: "2" },
  { title: "Basic Science Test", _id: "3" },
];

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes(sampleQuizzes);
  }, []);

  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
}
