import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() 
{
  return (
    <div>
      <h2>Welcome to JazzQuizMaker</h2>
      <p>Create your Own Quizzes & Test Others NOW!!!</p>
      
      <div>
        <Link to="/create">
          <button>Create A Quiz</button>
        </Link>
        <Link to="/quizzes">
          <button>Take A Quiz</button>
        </Link>
      </div>
    </div>
  );
}