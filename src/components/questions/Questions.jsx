import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { decode } from "html-entities";
import { checkBooleanAnswer, getAnswers } from "../../utils/questions_utils";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  const [answers, setAnswers] = useState([]);
  const [goodAnswers, setGoodAnswers] = useState(0);

  // Function to randomize array
  // shuffleArray(demoArray);

  useEffect(() => {
    if (context.questions.length > 0) {
      setAnswers(getAnswers(context.questions));
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
                  <h4 className="good_answers_title">{`Réponses correctes : ${goodAnswers}/${index}`}</h4>
                  <h1 className="question_title">
                    {decode(
                      question.question,
                      "&lt; &gt; &quot; &apos; &amp; &#169; &#8710; &#039;"
                    )}
                  </h1>
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
                              {checkBooleanAnswer(answer)}
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
