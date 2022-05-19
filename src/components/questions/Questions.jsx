import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  const [answers, setAnswers] = useState();
  const [responseSubmitted, setResponseSubmitted] = useState();

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
        arrayIncorrectAnswers.sort(() => Math.random() - 0.5);
        finalArr.push(arrayIncorrectAnswers);
      });
    }
    return finalArr;
  };

  useEffect(() => {
    if (context.questions.length > 0) {
      setAnswers(getAnswers());
    }
  }, [context]);

  return (
    <div className="container_questions">
      {context.questions.length > 0 ? (
        <div>
          {questions.map((question, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={index}>
                  <h1 className="question_title">{question.question}</h1>
                  <div className="container_buttons">
                    {}
                    <Button type="submit" className="button_item">
                      Bonjour
                    </Button>
                    <Button type="submit" className="button_item">
                      Bonjour
                    </Button>
                    <Button type="submit" className="button_item">
                      Bonjour
                    </Button>
                    <Button type="submit" className="button_item">
                      Bonjour
                    </Button>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      ) : (
        "Chargement..."
      )}
    </div>
  );
};

export default Questions;
