import classes from "./FinishResetButton.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

function FinishResetButton() {
  const { resetQuiz } = useContext(QuizContext);

  return (
    <button onClick={resetQuiz} className={classes.finish__btn__reset}>
      Reset Quiz
    </button>
  );
}

export default FinishResetButton;
