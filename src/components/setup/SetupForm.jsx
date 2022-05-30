import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "antd";
import { message, Button, Space } from "antd";
import "./setup_form.css";
import SetupPicker from "../picker/SetupPicker";
import ErrorMessage from "../messages/ErrorMessage";
import { getQuestions } from "../../data/getQuestions";
import { AppContext } from "../../context/context";

const optionsCat = [
  { id: 15, value: "video-games", label: "Video-games" },
  { id: 21, value: "sports", label: "Sports" },
  { id: 23, value: "history", label: "History" },
  { id: 24, value: "politics", label: "Politics" },
  { id: 27, value: "animals", label: "Animals" },
];

const optionsDiff = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const styles = {
  select: {
    marginTop: "1rem",
  },
};

const SetupForm = ({ setStarted }) => {
  const context = useContext(AppContext);
  const [quizzParameters, setQuizzParameters] = useState({
    nbOfQuestions: 10,
    category: "video-games",
    difficulty: "easy",
  });

  let catId = 0;

  const checkCategoryId = (selectedCat) => {
    let result = 0;
    optionsCat.map((opt) => {
      if (selectedCat === opt.value) {
        result = opt.id;
      }
    });
    return result;
  };

  useEffect(() => {
    catId = checkCategoryId(quizzParameters.category);
  }, [quizzParameters.category]);

  const onHandleStart = () => {
    let questions;
    getQuestions(
      quizzParameters.nbOfQuestions,
      catId,
      quizzParameters.difficulty
    ).then((res) => {
      context.setQuestions(res.data.results);
    });

    setStarted(true);
  };

  return (
    <Form className="container_form">
      <h1 className="form_title">Paramétrage</h1>
      <label>Number of questions</label>
      <Form.Item rules={[{ type: "number", min: 0, max: 52 }]}>
        <Input
          className="input_number"
          value={
            quizzParameters.nbOfQuestions !== 0
              ? quizzParameters.nbOfQuestions
              : ""
          }
          onChange={(e) =>
            setQuizzParameters({
              ...quizzParameters,
              nbOfQuestions: Number(e.target.value),
            })
          }
        ></Input>
      </Form.Item>

      <SetupPicker
        defaultValue={optionsCat[0]}
        value={quizzParameters}
        setValue={setQuizzParameters}
        fieldName="category"
        options={optionsCat}
        style={styles.select}
        labelName="Category"
      ></SetupPicker>

      <SetupPicker
        defaultValue={optionsDiff[0]}
        value={quizzParameters}
        setValue={setQuizzParameters}
        fieldName="difficulty"
        options={optionsDiff}
        style={styles.select}
        labelName="Difficulty"
      ></SetupPicker>

      {/* <ErrorMessage></ErrorMessage> */}
      <Form.Item className="btn_container">
        <Button onClick={onHandleStart} className="btn_start">
          Lancer le quizz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SetupForm;
