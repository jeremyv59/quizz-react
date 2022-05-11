import React, { useState } from "react";
import "../form/setup_form.css";

const SetupForm = ({ started }) => {
  const [step, setStep] = useState(1);
  const [quizzParameters, setQuizzParameters] = useState({
    nbOfQuestions: 10,
    categorie: "sports",
    difficulty: "easy",
  });

  return (
    <div className="container_form">
      <h1>SetupForm</h1>
    </div>
  );
};

export default SetupForm;
