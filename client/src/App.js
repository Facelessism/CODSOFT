import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateQuiz from "./pages/CreateQuiz";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";
import HomePage from "./pages/HomePage";
import NavBar from "//components/NavBar";

function App() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("linux")) {
      document.body.style.zoom = "120%";
      console.log("Linux detected - zoom applied");
    } else if (ua.includes("mac")) {
      document.body.style.filter = "grayscale(1)";
      console.log("macOS detected - filter applied");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>JazzQuizMaker</h1>
        <NavBar />

        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quiz/:id" element={<TakeQuiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
