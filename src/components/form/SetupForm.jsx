import React, { useState } from "react";
import { Form, Input } from "antd";
import { message, Button, Space } from "antd";
import "../form/setup_form.css";
import SetupPicker from "../picker/SetupPicker";
import ErrorMessage from "../messages/ErrorMessage";

const optionsCat = [
  { value: "sports", label: "Sports" },
  { value: "cinema", label: "Cinema" },
  { value: "politique", label: "Politique" },
];

const optionsDiff = [
  { value: "facile", label: "Facile" },
  { value: "intermédiaire", label: "Intermédiaire" },
  { value: "difficile", label: "Difficile" },
];

const styles = {
  select: {
    marginTop: "1rem",
  },
};

const SetupForm = ({ started }) => {
  const [step, setStep] = useState(1);
  const [quizzParameters, setQuizzParameters] = useState({
    nbOfQuestions: 0,
    categorie: "sports",
    difficulty: "easy",
  });

  const error = () => {
    message.error(
      "Impossible de générer les questions, essayez de changer les options"
    );
  };

  return (
    <Form className="container_form">
      <h1 className="form_title">Paramétrage</h1>
      <label>Nombre de questions</label>
      <Form.Item rules={[{ type: "number", min: 0, max: 52 }]}>
        <Input
          className="input_number"
          value={quizzParameters.nbOfQuestions}
        ></Input>
      </Form.Item>

      <SetupPicker
        defaultValue={optionsCat[0]}
        options={optionsCat}
        style={styles.select}
        labelName="Catégorie"
      ></SetupPicker>

      <SetupPicker
        defaultValue={optionsDiff[0]}
        options={optionsDiff}
        style={styles.select}
        labelName="Difficulté"
      ></SetupPicker>

      {/* <ErrorMessage></ErrorMessage> */}
      <Form.Item className="btn_container">
        <Button className="btn_start">Lancer le quizz</Button>
      </Form.Item>
    </Form>
  );
};

export default SetupForm;
