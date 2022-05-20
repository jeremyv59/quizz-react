import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { decode } from "html-entities";
import { checkBooleanAnswer, getAnswers } from "../../utils/questions_utils";
import { IoArrowForward } from "react-icons/io5";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  const [answers, setAnswers] = useState([]);
  const [goodAnswersCounter, setGoodAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();

  // Function to randomize array
  // shuffleArray(demoArray);

  const handleClickAnswer = (e) => {
    setSelectedAnswer(e.target.textContent);
  };

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
                  <h4 className="good_answers_title">{`Réponses correctes : ${goodAnswersCounter}/${index}`}</h4>
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
                              className="button_item"
                              onClick={(e) => handleClickAnswer(e)}
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
          <div className="btn_next_container">
            <Button className="btn_next_question">
              Question suivante
              <IoArrowForward className="arrow_icon"></IoArrowForward>
            </Button>
          </div>
        </div>
      ) : (
        "Chargement..."
      )}
    </div>
  );
};

export default Questions;
