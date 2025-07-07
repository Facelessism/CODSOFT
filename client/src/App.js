import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("linux")) {
      document.body.style.zoom = "120%";
      console.log("Linux detected – zoom applied");
    } else if (ua.includes("mac")) {
      document.body.style.filter = "grayscale(1)";
      console.log("macOS detected – filter applied");
    }
  }, []);

  return (
    <div className="App">
      <h1>Quiz App – Day 1</h1>
      <p>Welcome! Let's build something.</p>
    </div>
  );
}

export default App;
