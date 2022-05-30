import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { decode } from "html-entities";
import { getAnswers } from "../../utils/questions_utils";
import { IoArrowForward } from "react-icons/io5";
import "../questions/questions.css";

const Questions = () => {
  const context = useContext(AppContext);

  const { questions } = context;

  const [answers, setAnswers] = useState([]);
  const [goodAnswersCounter, setGoodAnswers] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();

  // Function to randomize array
  // shuffleArray(demoArray);

  const handleClickAnswer = (e) => {
    setSelectedAnswer(e.target.textContent);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questions[answerCounter].correct_answer) {
      setGoodAnswers(goodAnswersCounter + 1);
    }
    setAnswerCounter(answerCounter + 1);
  };

  const handleSubmitAnswer = async () => {
    try {
      checkAnswer();
      setSelectedAnswer("");
    } catch (e) {
      console.log("submit error");
    }
  };

  useEffect(() => {
    if (context.questions.length > 0) {
      setAnswers(getAnswers(context.questions));
    }
  }, [context.questions]);

  return (
    <div className="container_questions">
      {questions.length > 0 ? (
        <div>
          {questions.map((question, index) => {
            if (index === answerCounter) {
              return (
                <React.Fragment key={index}>
                  <h4 className="good_answers_title">{`Réponses correctes : ${goodAnswersCounter}/${index}`}</h4>
                  <h1 className="question_title">
                    {decode(
                      question.question,
                      "&lt; &gt; &quot; &apos; &amp; &#169; &#8710; &#039;"
                    )}
                  </h1>
                  {answers && answers.length > 0
                    ? answers[index].map((answer, indexAnswer) => {
                        return (
                          <div className="container_buttons">
                            <Button
                              key={indexAnswer}
                              className={
                                selectedAnswer === answer
                                  ? "button_item_active"
                                  : "button_item"
                              }
                              onClick={(e) => handleClickAnswer(e)}
                            >
                              {decode(
                                answer,
                                "&lt; &gt; &quot; &apos; &amp; &#169; &#8710; &#039;"
                              )}
                            </Button>
                          </div>
                        );
                      })
                    : "Erreur"}
                  <div className="btn_next_container">
                    <Button
                      onClick={() => handleSubmitAnswer()}
                      className="btn_next_question"
                    >
                      Question suivante
                      <IoArrowForward className="arrow_icon"></IoArrowForward>
                    </Button>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      ) : (
        "Chargement"
      )}
    </div>
  );
};

export default Questions;
