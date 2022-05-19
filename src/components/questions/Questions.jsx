import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  let answersArray = [];

  // useEffect(() => {
  //   checkAnswers();
  // }, [context]);
  // var demoArray = [1, 3, 5];
  // shuffleArray(demoArray);
  // console.log(demoArray);

  // console.log("qes", questions);

  const getAnswers = () => {
    let arrayIncorrectAnswers = [];
    let finalArr = [];

    if (context.questions.length > 0) {
      questions.forEach((question) => {
        arrayIncorrectAnswers = question.incorrect_answers;
        arrayIncorrectAnswers.push(question.correct_answer);
        console.log("incorr arr", arrayIncorrectAnswers);
        arrayIncorrectAnswers.sort(() => Math.random() - 0.5);
        console.log("incorr arr output", arrayIncorrectAnswers);
        finalArr.push(arrayIncorrectAnswers);
      });
    }
    return finalArr;
  };

  useEffect(() => {
    if (context.questions.length > 0) {
      let res = getAnswers();
      console.log("res", res);
    }
  }, [context]);

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
