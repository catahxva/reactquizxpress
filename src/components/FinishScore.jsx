import classes from "./FinishScore.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

import FinishResetButton from "./FinishResetButton";

function FinishScore() {
  const { score } = useContext(QuizContext);

  const lowScore = score <= 50;
  const mediumScore = score > 50 && score <= 70;
  const highScore = score > 70;

  const greeting = lowScore
    ? "You can always improve!"
    : mediumScore
    ? "Pretty good, but could be better!"
    : highScore
    ? "Good job!!!"
    : "";

  const colorClass = lowScore
    ? classes.finish__score__color__low
    : mediumScore
    ? classes.finish__score__color__medium
    : highScore
    ? classes.finish__score__color__high
    : "";

  return (
    <div className={classes.finish__container__score}>
      <span className={`${classes.finish__score} ${colorClass}`}>
        {score}/100
      </span>
      <span className={`${classes.finish__score__greeting} ${colorClass}`}>
        {greeting}
      </span>
      <FinishResetButton />
    </div>
  );
}

export default FinishScore;
