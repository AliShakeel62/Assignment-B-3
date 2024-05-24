import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Quizscreen() {
  const questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [currentIndex, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (x : any) => {
    if (x === questions[currentIndex].correctAns) {
      setScore(score + 1);
    }
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Quiz Completed</h1>
        <p className="mt-3 flex-wrap">Your score is {score} out of {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mt-5 text-center flex-wrap">
        Welcome To QuizApp
      </h1>
      <div className="d-flex justify-content-center">
        <p className="text-center fw-bold fs-4 mt-4 pb-5">
          {questions[currentIndex].question}
        </p>
        <p className="ms-5 mt-4 fw-bold fs-4 flex-wrap">
          Question {currentIndex + 1}/{questions.length}
        </p>
      </div>

      <div className="d-flex justify-content-center  flex-wrap">
        {questions[currentIndex].options.map((x, i) => (
          <button
            className="btn btn-primary rounded-4 ms-3 mt-2 flex-wrap"
            key={i}
            onClick={() => handleAnswerClick(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quizscreen;
