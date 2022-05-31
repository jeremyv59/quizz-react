import React from "react";
import "./display_score.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DisplayScore = ({ goodAnswers, totalQuestions }) => {
  const percentage = Math.round((goodAnswers / totalQuestions) * 100);

  const getColorValue = () => {
    if (percentage <= 33) return "red";
    if (percentage >= 33 && percentage <= 66) return "orange";
    if (percentage >= 66) return "#7ddf64";
  };

  return (
    <React.Fragment>
      <h1 className="title">Quizz terminé !</h1>
      <h3 className="text">Votre taux de bonne réponse est de :</h3>
      <div className="container_progressbar">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // rotation: 0.25,
            // strokeLinecap: 'butt',

            // Text size
            textSize: "1.3rem",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Colors
            pathColor: getColorValue(),
            trailColor: "#d6d6d6",
            textColor: "#284b63",
          })}
        ></CircularProgressbar>
      </div>
    </React.Fragment>
  );
};

export default DisplayScore;
