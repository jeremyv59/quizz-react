import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DisplayScore = ({ goodAnswers, totalQuestions }) => {
  const percentage = Math.round((goodAnswers / totalQuestions) * 100);

  return (
    <React.Fragment>
      <h1>Quizz terminé !</h1>
      <h3>
        Votre taux de bonne réponse est de : ${goodAnswers} ${totalQuestions}
      </h3>
      <div>
        <CircularProgressbar></CircularProgressbar>
      </div>
    </React.Fragment>
  );
};

export default DisplayScore;
