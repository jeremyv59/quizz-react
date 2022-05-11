import React, { useState } from "react";
import { Input } from "antd";
import "../form/setup_form.css";
import SetupPicker from "../picker/SetupPicker";

const SetupForm = ({ started }) => {
  const [step, setStep] = useState(1);
  const [quizzParameters, setQuizzParameters] = useState({
    nbOfQuestions: 10,
    categorie: "sports",
    difficulty: "easy",
  });

  return (
    <div className="container_form">
      <h1 className="form_title">SetupForm</h1>
      <label>Nombre de questions</label>
      <Input
        className="input_number"
        value={quizzParameters.nbOfQuestions}
      ></Input>

      <SetupPicker></SetupPicker>
    </div>
  );
};

export default SetupForm;
