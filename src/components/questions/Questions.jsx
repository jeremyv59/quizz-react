import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  let answersArray = [];

  // const checkAnswers = () => {
  //   questions.map((question) => {
  //     console.log("check", question);
  //   });
  // };
  // function questionsArray(inputArray) {
  //   inputArray.sort(() => Math.random() - 0.5);
  // }

  // useEffect(() => {
  //   checkAnswers();
  // }, [context]);
  // var demoArray = [1, 3, 5];
  // shuffleArray(demoArray);
  // console.log(demoArray);

  // console.log("qes", questions);

  const getAnswers = () => {
    questions.map((question) => {
      answersArray = question.incorrect_answers;
      answersArray.push(...answersArray, question.correct_answer);
      console.log("que", question);
    });
  };

  // console.log("quest", questions);
  // useEffect(() => {
  //   getAnswers();
  // }, []);
  getAnswers();

  console.log("answ arr", answersArray);

  return (
    <div className="container_questions">
      {context.questions.length > 0 ? (
        <div>
          <h1 className="question_title">{questions[0].question}</h1>
          <div className="container_buttons">
            {}
            <Button className="button_item">Bonjour</Button>
            <Button className="button_item">Bonjour</Button>
            <Button className="button_item">Bonjour</Button>
            <Button className="button_item">Bonjour</Button>
          </div>
        </div>
      ) : (
        "Chargement..."
      )}
    </div>
  );
};

export default Questions;
