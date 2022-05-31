import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DisplayScore = ({ goodAnswers, totalQuestions }) => {
  const percentage = Math.round((goodAnswers / totalQuestions) * 100);

  return (
    <React.Fragment>
      <h1 className="title">Quizz terminé !</h1>
      <h3 className="text">Votre taux de bonne réponse est de :</h3>
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
        ></CircularProgressbar>
      </div>
    </React.Fragment>
  );
};

export default DisplayScore;
