import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  const [answers, setAnswers] = useState([]);

  // Function to randomize array
  // shuffleArray(demoArray);

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
  }, [context.questions]);

  return (
    <div className="container_questions">
      {context.questions.length > 0 ? (
        <div>
          {questions.map((question, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={index}>
                  <h1 className="question_title">{question.question}</h1>
                  {console.log("answers", answers[0])}
                  {answers && answers.length > 0
                    ? answers[index].map((answer, indexAnswer) => {
                        return (
                          <div className="container_buttons">
                            <Button
                              key={indexAnswer}
                              type="submit"
                              className="button_item"
                            >
                              {answer}
                            </Button>
                          </div>
                        );
                      })
                    : "Erreur"}
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
